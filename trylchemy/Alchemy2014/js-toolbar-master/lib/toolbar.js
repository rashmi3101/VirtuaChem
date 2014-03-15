/**
 * Implements a toolbar with optional menus.
 * https://github.com/mpecherstorfer/js-toolbar
 * 
 * @version 0.0.1
 * @date 2012-11-01
 * 
 * @license
 * https://github.com/mpecherstorfer/js-toolbar/blob/master/LICENSE
 * 
 * @author Michael Pecherstorfer
 */

/*jslint white:false, nomen:false*/

(function(root) {
	
	'use strict';
	
	var $, //jQuery
		NAMESPACE = 'toolbar',
		HIDE_MENU_DELAY = 50, //ms
		Z_INDEX_FX_SHOW = 1000, //z-index for shown menus
		
		/* Default option values */
		DEFAULT_IS_ROUNDED_TOOLBAR = false,
		DEFAULT_IS_TOOLBAR_ABOVE_MENUS = true,
		DEFAULT_IS_TOOLBAR_SKIPPABLE = true,
		DEFAULT_SHOW_MENU_FX = 'slide', //'none' or a jQuery UI effect
		DEFAULT_HIDE_MENU_FX = 'slide', //'none' or a jQuery UI effect
		DEFAULT_SHOW_MENU_FX_EASING = 'swing',
		DEFAULT_HIDE_MENU_FX_EASING = 'swing',
		DEFAULT_SHOW_MENU_FX_DURATION = 500, //ms
		DEFAULT_HIDE_MENU_FX_DURATION = 500, //ms
		
		/* CSS classes */
		TOOLBAR_CLASS = 'toolbar',
		MENU_CLASS = 'tb-menu',
		ITEM_CLASS = 'tb-item',
		ROUNDED_TOOLBAR_CLASS = 'rounded',
		DOCK_MENU_RIGHT_CLASS = 'dock-right',
		DISABLED_ITEM_CLASS = 'disabled',
		HIDDEN_ITEM_CLASS = 'hidden',
		JQ_UI_FX_WRAPPER_CLASS = 'ui-effects-wrapper',
		EXPLODE_FX_COMPOUND_CLASS = 'ui-effects-explode',
		
		/* ASCII code points */
		keyCodes = {
			escape: 27,
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};
	
	/**
	 * Returns true if the given argument is a hash, false otherwise.
	 * @private
	 * @param {Any} arg
	 * @returns {Boolean}
	 */
	function isObject(arg) {
		return Object.prototype.toString.call(arg) === '[object Object]';
	}
	
	/**
	 * Substitutes all occurrences of '{n}' in the given string by the n-th
	 * argument.
	 * @private
	 * @param {String} str String to be substituted.
	 * @param {Any} [arguments]
	 * @returns {String}
	 */
	function subst(str) {
		$.each(Array.prototype.slice.call(arguments, 1), function(i, v) {
			str = str.replace(new RegExp('\\{' + i + '\\}', 'g'), v);
		});
		return str;
	}
	
	/**
	 * Globally blocks arrow key down events.
	 * @private
	 * @param {String} namespace
	 * @returns undefined
	 */
	function blockArrowKeys() {
		$(root.document).on('keydown.' + NAMESPACE, function(ev) {
			return ev.keyCode !== keyCodes.up &&
				ev.keyCode !== keyCodes.down &&
				ev.keyCode !== keyCodes.left &&
				ev.keyCode !== keyCodes.right;
		});
	}
	
	/**
	 * Ctor.
	 * @private
	 * @class
	 * @name Toolbar
	 * @param {jqObject} $root List element, root of the toolbar.
	 * @param {Object} [options] Toolbar options.
	 * @returns {Toolbar}
	 */
	function Toolbar($root, options) {
		this.$root = $root;
		this.opt = {};
		this.menus = [];
		this.create()
			.options(options || {})
			.observeWindow();
	}
	
	/**
	 * Returns the toolbar's default options.
	 * @private
	 * @returns {Object}
	 */
	Toolbar.defaultOptions = function() {
		return {
			isRounded: DEFAULT_IS_ROUNDED_TOOLBAR,
			isAboveMenus: DEFAULT_IS_TOOLBAR_ABOVE_MENUS,
			isSkippable: DEFAULT_IS_TOOLBAR_SKIPPABLE,
			showMenuFx: {
				effect: DEFAULT_SHOW_MENU_FX,
				easing: DEFAULT_SHOW_MENU_FX_EASING,
				duration: DEFAULT_SHOW_MENU_FX_DURATION
			},
			hideMenuFx: {
				effect: DEFAULT_HIDE_MENU_FX,
				easing: DEFAULT_HIDE_MENU_FX_EASING,
				duration: DEFAULT_HIDE_MENU_FX_DURATION				
			}
		};
	};
	
	/**
	 * Returns the next item in the given ring, relative to the given item.
	 * Returns an empty jQuery object if the given item is not within the ring.
	 * @private
	 * @param {jqObject} $item
	 * @param {jqObject} $itemRing
	 * @returns {jqObject}
	 */
	Toolbar.$nextItem = function($item, $itemRing) {
		var i;
		if ($itemRing) {
			i = $itemRing.index($item) + 1;
			if (i > 0) {
				return $($itemRing[i % $itemRing.length]);
			}			
		}
		return $();
	};
	
	/**
	 * Returns the previous item in the given ring, relative to the given item.
	 * Returns an empty jQuery object if the given item is not within the ring.
	 * @private
	 * @param {jqObject} $item
	 * @param {jqObject} $itemRing
	 * @returns {jqObject}
	 */
	Toolbar.$prevItem = function($item, $itemRing) {
		var i;
		if ($itemRing) {
			i = $itemRing.index($item);
			if (i >= 0) {
				i = i - 1 + $itemRing.length;
				return $($itemRing[i % $itemRing.length]);
			}			
		}
		return $();
	};
	
	/**
	 * Returns a jQuery object with all items of the specified menu.
	 * @private
	 * @param {jqObject} $item Lead or body item of the menu to be considered.
	 * @returns {jqObject}
	 */
	Toolbar.$menuItems = function($item) {
		if (Toolbar.isMenuLeadItem($item)) {
			return $('a.' + ITEM_CLASS, $item.parent());
		} else if (Toolbar.isMenuBodyItem($item)) {
			return $('a.' + ITEM_CLASS, $item.parent().parent().parent());
		}
	};
	
	/**
	 * Returns true if the specified jQueryUI effect is available, false
	 * otherwise. If the given argument is falsy, this function returns true
	 * if the core jQueryUI effect module is available, false otherwise.
	 * @private
	 * @param {String} [fx] Effect name
	 * @returns {Boolean}
	 */
	Toolbar.isFxAvailable = function(fx) {
		if (!fx) {
			return $.effects !== undefined && $.effects.effect !== undefined;
		}
		return $.effects.effect[fx] !== undefined;
	};
	
	/**
	 * Returns true if this toolbar's menu effects may be stopped before
	 * applying the inverse menu effect without resetting the menu to it's
	 * initial state. Returns false otherwise.
	 * @private
	 * @param {String} fx0 Effect name
	 * @param {String} fx1 Effect name
	 * @returns {Boolean}
	 */
	Toolbar.isFxComboInversableAfterStop = function(fx0, fx1) {
		return fx0 === 'slide' && fx1 === 'slide' ||
			fx0 === 'slide' && fx1 === 'fade' ||
			fx0 === 'fade' && fx1 === 'slide' ||
			fx0 === 'fade' && fx1 === 'fade';
	};
	
	/**
	 * Returns true if the specified jQueryUI effect has a 'direction' option,
	 * with values in { 'up', 'down', 'left', 'right', ... }, false otherwise.
	 * @private
	 * @param {String} fx Effect name
	 * @returns {Boolean}
	 */
	Toolbar.isVectoredFx = function(fx) {
		switch (fx) {
		case 'blind': case 'bounce': case 'drop': case 'shake': case 'slide':
			return true;
		}
		return false;
	};
	
	/**
	 * Returns true if the specified jQueryUI effect has a 'direction' option,
	 * with values in { 'horizontal', 'vertical' }, false otherwise.
	 * @private
	 * @param {String} fx Effect name
	 * @returns {Boolean}
	 */
	Toolbar.isOrientedFx = function(fx) {
		return fx === 'clip' || fx === 'scale';
	};
	
	/**
	 * Returns true if the specified menu effect is able to steal the focus
	 * from the current element.
	 * @private
	 * @param {String} fx Effect name
	 * @returns {Boolean}
	 */
	Toolbar.isFocusHijackingFx = function(fx) {
		switch (fx) {
		case 'bounce': case 'drop': case 'explode': case 'puff': case 'shake':
			return true;
		}
		return false;
	};
	
	/**
	 * Returns true if the specified DOM element represents an item, false
	 * otherwise.
	 * @private
	 * @param {jqObject} $element
	 * @returns {Boolean}
	 */
	Toolbar.isItem = function($element) {
		return $element.hasClass(ITEM_CLASS);
	};
	
	/**
	 * Returns true if the specified DOM element represents a menu lead item,
	 * false otherwise. A menu lead item is responsible to show/hide the
	 * corresponding menu when being activated.
	 * @private
	 * @param {jqObject} $element
	 * @returns {Boolean}
	 */
	Toolbar.isMenuLeadItem = function($element) {
		return Toolbar.isItem($element) &&
			$element.next().hasClass(MENU_CLASS);
	};
	
	/**
	 * Returns true if the specified DOM element represents a menu body item,
	 * false otherwise.
	 * @private
	 * @param {jqObject} $element
	 * @returns {Boolean}
	 */
	Toolbar.isMenuBodyItem = function($element) {
		return Toolbar.isItem($element) &&
			$element.parent().parent().hasClass(MENU_CLASS);
	};
	
	/**
	 * Returns true if the specified DOM element represents a menu item
	 * (menu lead or menu body item), false otherwise.
	 * @private
	 * @param {jqObject} $element
	 * @returns {Boolean}
	 */
	Toolbar.isMenuItem = function($element) {
		return Toolbar.isMenuLeadItem($element) ||
			Toolbar.isMenuBodyItem($element);
	};
	
	/**
	 * Returns true if the specified DOM element represents a toolbar item,
	 * false otherwise.
	 * @private
	 * @param {jqObject} $element
	 * @returns {Boolean}
	 */
	Toolbar.isToolbarItem = function($element) {
		return Toolbar.isItem($element) && !Toolbar.isMenuBodyItem($element);
	};
	
	/**
	 * Returns true if the given element is a disabled item, false otherwise.
	 * @private
	 * @param {jqObject} $element
	 * @returns {Boolean}
	 */
	Toolbar.isDisabledItem = function($element) {
		return Toolbar.isItem($element) && $element.hasClass(DISABLED_ITEM_CLASS);
	};
	
	/**
	 * Shifts focus.
	 * @private
	 * @param {jqObject} $from
	 * @param {jqObject} $to
	 * @returns {Boolean}
	 */
	Toolbar.focusItem = function($from, $to) {
		if ($to.length > 0) {
			$from.blur();
			$to.focus();
		}
	};
	
	/**
	 * Stops the current menu effect.
	 * @private
	 * @param {Object} menu
	 * @param {Object} [opt]
	 * @param {Boolean} [opt.clearQueue=false]
	 *        Whether to clear queued animations for the menu or not.
	 * @param {Boolean} [opt.jumpToEnd=false]
	 *        Whether to complete the current animation immediately or not.
	 * @returns {Function} Chainable.
	 */
	Toolbar.stopMenuFx = function(menu, opt) {
		if (menu.isShowFxInProgress || menu.isHideFxInProgress) {
			opt = opt || {};
			opt.clearQueue = Boolean(opt.clearQueue);
			opt.jumpToEnd = Boolean(opt.jumpToEnd);
			menu.$body.stop(opt.clearQueue, opt.jumpToEnd);
			if (menu.curFx === 'blind' || menu.curFx === 'fold') {
				Toolbar.stopFxWrapper(menu, opt.clearQueue, opt.jumpToEnd);
			} else if (menu.curFx === 'explode') {
				Toolbar.clearExplodeFxCompound();
			}
			menu.isShowFxInProgress = false;
			menu.isHideFxInProgress = false;
			menu.curFx = undefined;
		}
		return Toolbar;
	};
	
	/**
	 * Stops the current menu effect by delegating the stop command to the
	 * menu's effect wrapper, which is a div with class '.ui-effects-wrapper'
	 * applied by jQueryUI effects to animated elements.
	 * This is necessary because some effects are not stoppable when calling
	 * stop on the wrapped element itself.
	 * @private
	 * @param {Object} menu
	 * @param {Boolean} clearQueue
	 *        Whether to clear queued animations for the menu or not.
	 * @param {Boolean} jumpToEnd
	 *        Whether to complete the current animation immediately or not.
	 * @returns {Function} Chainable.
	 */
	Toolbar.stopFxWrapper = function(menu, clearQueue, jumpToEnd) {
		menu.$body.parent().stop(clearQueue, jumpToEnd);
		return Toolbar;
	};
	
	/**
	 * Removes the effect wrapper from the given menu.
	 * @private
	 * @param {Object} menu
	 * @returns {Function} Chainable.
	 */
	Toolbar.removeFxWrapper = function(menu) {
		menu.$body.parent().parent().append(
			$('> ul.' + MENU_CLASS, menu.$body.parent()));
		menu.$body.prev().remove();
		return Toolbar;
	};
	
	/**
	 * Stops and removes compound elements created by jQueryUI's explode effect.
	 * @private
	 * @returns {Function} Chainable.
	 */
	Toolbar.clearExplodeFxCompound = function() {
		$('.' + EXPLODE_FX_COMPOUND_CLASS).stop(true, false).remove();
		return Toolbar;
	};
	
	/**
	 * Logs that a certain effect is not available.
	 * @private
	 * @param {Object} fx Effect name
	 * @returns {Function} Chainable.
	 */
	Toolbar.fxNotAvailable = function(fx) {
		if (root.console) {
			root.console.log('jQueryUI effect "' + fx + '" is not available. ' +
				'Has the corresponding module been imported? Applying fallback.');
		}
		return Toolbar;
	};
	
	/**
	 * Gets or sets this toolbar's options. Call with an empty object to restore
	 * default options. Expects an object with toolbar options, general effect
	 * options and options specific to an effect. Visit the jQueryUI API doc
	 * for further info.
	 * 
	 * @see <a href="http://api.jqueryui.com/category/effects/">jq UI FX API</a>
	 * 
	 * @private
	 * @function
	 * 
	 * @param {Object} [options]
	 * 
	 * @param {Boolean} [options.isRounded]
	 *        Whether this toolbar has rounded ends.
	 *        
	 * @param {Boolean} [options.isAboveMenus]
	 *        If true, menus are docked below the toolbar, otherwise menus are
	 *        docked above the toolbar.
	 *        
	 * @param {Boolean} [options.isSkippable]
	 *        Provides keyboard and screen-reader users an extra link allowing
	 *        them to skip toolbar navigation. Set 'skipNavigationTarget' to
	 *        make this feature even more useful.
	 *        
	 * @param {jqObject} [options.skipNavigationTarget]
	 *        Id or name of the element focused when keyboard or screen-reader
	 *        users skip the toolbar links. Per default an empty span succeeding
	 *        the toolbar's underlying list element. 
	 * 
	 * @param {Object} [options.showMenuFx]
	 *        jQueryUI effect specific options for showing menus.
	 * 
	 * @param {String} [options.showMenuFx.effect]
	 *        Name of the jQueryUI effect used to show menus.
	 * 
	 * @param {Number} [options.showMenuFx.duration]
	 *        Duration of the jQueryUI effect used to show a menu.
	 * 
	 * @param {String} [options.showMenuFx.easing]
	 *        jQueryUI effect easing used to show a menu.
	 * 
	 * @param {Object} [options.hideMenuFx]
	 *        jQueryUI effect specific options for hiding menus.
	 * 
	 * @param {String} [options.hideMenuFx.effect]
	 *        Name of the jQueryUI effect used to hide menus.
	 * 
	 * @param {Number} [options.hideMenuFx.duration]
	 *        Duration of the jQueryUI effect used to hide a menu.
	 * 
	 * @param {String} [options.hideMenuFx.easing]
	 *        jQueryUI effect easing used to hide a menu.
	 * 
	 * @returns {Toolbar|Object} This toolbar or it's options.
	 */
	Toolbar.prototype.options = (function() {
		function applyDirectionDefaults(fxOptions, isToolbarAboveMenus) {
			if (Toolbar.isOrientedFx(fxOptions.effect)) {
				fxOptions.direction = fxOptions.direction || 'horizontal';
			} else if (Toolbar.isVectoredFx(fxOptions.effect)) {
				fxOptions.direction = fxOptions.direction ||
					(isToolbarAboveMenus ? 'up' : 'down');
			}
		}
		return function(options) {
			if (!options) { return this.opt; }
			this.opt = Toolbar.defaultOptions();
			$.extend(true, this.opt, options);
			applyDirectionDefaults(this.opt.showMenuFx, this.opt.isAboveMenus);
			applyDirectionDefaults(this.opt.hideMenuFx, this.opt.isAboveMenus);
			return this.applyOptions();
		};
	}());
	
	/**
	 * Returns all items.
	 * @private
	 * @returns {jqObject}
	 */
	Toolbar.prototype.$items = function() {
		return $('a', this.$root);
	};
	
	/**
	 * Returns the toolbar items.
	 * @private
	 * @param {Object} options
	 * @param {Boolean} [options.excludeHidden=false]
	 * @param {Boolean} [options.excludeDisabled=false]
	 * @param {Boolean} [options.excludeMenuLeadItems=false]
	 * @returns {jqObject}
	 */
	Toolbar.prototype.$toolbarItems = function(options) {
		options = options || {};
		var sel = '> li > a';
		if (options.excludeHidden) {
			sel += ':not(.' + HIDDEN_ITEM_CLASS + ')';
		}
		if (options.excludeDisabled) {
			sel += ':not(.' + DISABLED_ITEM_CLASS + ')';
		}
		if (options.excludeMenuLeadItems) {
			sel += ':only-child';
		}
		return $(sel, this.$root);
	};
	
	/**
	 * Returns the menus.
	 * @private
	 * @param {Boolean} exclHidden Exclude hidden elements?
	 * @param {Boolean} exclDisabled Exclude disabled elements? 
	 * @returns {jqObject}
	 */
	Toolbar.prototype.$menus = function() {
		return $('> li > a + ul', this.$root);
	};
	
	/**
	 * Transforms the root element into a toolbar.
	 * @private
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.create = function() {
		this.$root.addClass(TOOLBAR_CLASS);
		this.createItems();
		this.createMenus();
		return this;
	};
	
	/**
	 * Transforms the given elements into items (toolbar or menu items).
	 * @private
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.createItems = function() {
		var $items = this.$items();
		$items.addClass(ITEM_CLASS);
		$items.each($.proxy(function(i, el) {
			this.observeItem($(el));
		}, this));
		this.$toolbarItems({ excludeMenuLeadItems: true })
			.each($.proxy(function(i, el) {
				this.observeToolbarItem($(el));
			}, this));
		return this;
	};
	
	/**
	 * Transforms the given elements into menus.
	 * @private
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.createMenus = function() {
		var $menus = this.$menus();
		$menus.addClass(MENU_CLASS);
		$menus.each($.proxy(function(i, el) {
			el = $(el);
			this.menus.push({
				$body: el,
				$lead: el.prev(),
				dockRight: el.hasClass(DOCK_MENU_RIGHT_CLASS)				
			});
			this.observeMenu(this.menus[this.menus.length - 1]);
		}, this));
		return this;
	};
	
	/**
	 * Returns true if the given menu belongs to the outer left toolbar item,
	 * false otherwise.
	 * @private
	 * @param {Object} menu
	 * @returns {jqObject}
	 */
	Toolbar.prototype.isLeftEndMenu = function(menu) {
		return menu.$body.parent().is(':first-child');
	};
	
	/**
	 * Returns true if the given menu belongs to the outer left toolbar item,
	 * false otherwise.
	 * @private
	 * @param {Object} menu
	 * @returns {jqObject}
	 */
	Toolbar.prototype.isRightEndMenu = function(menu) {
		return menu.$body.parent().is(':last-child');
	};
	
	/**
	 * Docks the given menu body to the corresponding lead item.
	 * @private
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.placeMenu = function(menu) {
		var left = menu.dockRight ?
			menu.$lead.outerWidth() - menu.$body.outerWidth() :
			0;
		if (this.opt.isRounded) {
			if (this.isLeftEndMenu(menu)) {
				left += menu.$lead.outerHeight() / 2;
			} else if (this.isRightEndMenu(menu)) {
				left -= menu.$lead.outerHeight() / 2;
			}			
		}
		menu.$body.css('left', left + 'px');
		menu.$body.css('top', this.opt.isAboveMenus ?
			menu.$lead.outerHeight() + 'px' :
			-menu.$body.outerHeight() + 'px');
		return this;
	};
	
	/**
	 * Resets the given menu to it's initial state (before any effects had
	 * been applied to the menu).
	 * @private
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.resetMenu = function(menu) {
		menu.$body.removeAttr('style');
		if (menu.$body.parent().hasClass(JQ_UI_FX_WRAPPER_CLASS)) {
			Toolbar.removeFxWrapper(menu);
		}
		this.placeMenu(menu);
		return this;
	};
	
	/**
	 * Shows the given menu using the specified effect. Resolves when the effect
	 * has been completely rendered.
	 * @private
	 * @param {Object} menu Menu to be shown.
	 * @param {Object} fxOptions Effect options.
	 * @returns {jqPromise} Deferrable.
	 */
	Toolbar.prototype.showMenu = function(menu, fxOptions) {
		var $d = $.Deferred(),
			/** @ignore */
			fxDone = function() {
				menu.isShowFxInProgress = false;
				menu.curFx = undefined;
				fxOptions.complete = undefined;
				$d.resolve();
			};
		menu.curFx = fxOptions.effect;
		menu.isShowFxInProgress = true;
		$.each(this.menus, function(i, m) {
			m.$body.css('z-index', Z_INDEX_FX_SHOW - 1);
		});
		menu.$body.css('z-index', Z_INDEX_FX_SHOW);
		if (Toolbar.isFxAvailable()) {
			if (Toolbar.isFxAvailable(menu.curFx)) {
				fxOptions.complete = fxDone;
				menu.$body.show(fxOptions);
			} else { //effect not available -> CSS fallback
				menu.$body.css('display', 'block');
				if (menu.curFx !== 'none') {
					Toolbar.fxNotAvailable(menu.curFx);
				}
				fxDone();
			}
		} else { //jQueryUI effects not available -> use jQuery's basic animations
			if (menu.curFx === 'slide' && this.opt.isAboveMenus) {
				menu.$body.slideDown(fxOptions.duration, fxDone);
			} else if (menu.curFx === 'fade') {
				menu.$body.fadeIn(fxOptions.duration, fxDone);
			} else {
				menu.$body.show(fxOptions.duration, fxDone);
			}
		}
		return $d.promise();
	};
	
	/**
	 * Hides the given menu using the specified effect. Resolves when the effect
	 * is completely rendered.
	 * @private
	 * @param {Object} menu Menu to be hidden.
	 * @param {Object} fxOptions Effect options.
	 * @returns {jqPromise} Deferrable.
	 */
	Toolbar.prototype.hideMenu = function(menu, fxOptions) {
		var $d = $.Deferred(),
			/** @ignore */
			fxDone = function() {
				menu.isHideFxInProgress = false;
				menu.curFx = undefined;
				fxOptions.complete = undefined;
				$d.resolve();
			};
		menu.curFx = fxOptions.effect;
		menu.isHideFxInProgress = true;
		if (Toolbar.isFxAvailable()) {
			if (Toolbar.isFxAvailable(menu.curFx)) {
				fxOptions.complete = fxDone;
				menu.$body.hide(fxOptions);
			} else { //effect not available -> CSS fallback
				menu.$body.css('display', 'none');
				if (menu.curFx !== 'none') {
					Toolbar.fxNotAvailable(menu.curFx);
				}
				fxDone();
			}
		} else { //jQueryUI effects not available -> use jQuery's basic animations
			if (menu.curFx === 'slide' && this.opt.isAboveMenus) {
				menu.$body.slideUp(fxOptions.duration, fxDone);
			} else if (menu.curFx === 'fade') {
				menu.$body.fadeOut(fxOptions.duration, fxDone);
			} else {
				menu.$body.hide(fxOptions.duration, fxDone);
			}
		}
		return $d.promise();
	};
	
	/**
	 * Displays or hides the given menu depending whether it is hidden or not.
	 * Resolves when the effect is completely rendered.
	 * @private
	 * @param {Object} menu Menu to be toggled.
	 * @param {Object} toolbarOptions Toolbar options.
	 * @returns {jqPromise} Deferrable.
	 */
	Toolbar.prototype.toggleMenu = function(menu, toolbarOptions) {
		if (menu.$body.is(':hidden')) {
			return this.showMenu(menu, toolbarOptions.showMenuFx);
		} else {
			return this.hideMenu(menu, toolbarOptions.hideMenuFx);
		}
	};
	
	/**
	 * Places this toolbar's menus.
	 * @private
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.placeMenus = function() {
		var $tbItems,
			left;
		$.each(this.menus, $.proxy(function(i, menu) {
			this.placeMenu(menu);
		}, this));
		return this;
	};
	
	/**
	 * Hides this toolbar's menus except the given one.
	 * @private
	 * @param {Object} [menu] A menu that must not be hidden.
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.hideMenus = function(menu) {
		$.each(this.menus, $.proxy(function(i, m) {
			if (menu !== m && !m.isHideFxInProgress && m.$body.is(':visible')) {
				if (m.isShowFxInProgress) {
					Toolbar.stopMenuFx(m, { clearQueue: true });
					this.resetMenu(m);
				} else {
					this.hideMenu(m, this.opt.hideMenuFx);
				}
			}
		}, this));
		return this;
	};
	
	/**
	 * Adds global window event observers.
	 * @private
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.observeWindow = function() {
		//close open menus on escape key stroke
		$(root).on('keydown', $.proxy(function(ev) {
			if (ev.keyCode === keyCodes.escape) { this.hideMenus(); }
		}, this));
		//replace menus each time the browser window resizes
		$(root).on('resize', $.proxy(function(ev) {
			this.placeMenus();
		}, this));
		return this;
	};
	
	/**
	 * Adds event observers to the given item.
	 * @private
	 * @param {Object} $item
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.observeItem = function($item) {
		$item.on('keyup', $.proxy(function(ev) {
			switch (ev.keyCode) {
			case keyCodes.up:
				Toolbar.focusItem($item,
					Toolbar.$prevItem($item, Toolbar.$menuItems($item)));
				break;
			case keyCodes.down:
				Toolbar.focusItem($item,
					Toolbar.$nextItem($item, Toolbar.$menuItems($item)));
				break;
			case keyCodes.left:
				Toolbar.focusItem($item,
					Toolbar.$prevItem($item, this.$toolbarItems({
						excludeHidden: true,
						excludeDisabled: true
					})));
				break;
			case keyCodes.right:
				Toolbar.focusItem($item,
					Toolbar.$nextItem($item, this.$toolbarItems({
						excludeHidden: true,
						excludeDisabled: true
					})));
				break;
			case keyCodes.escape:
				$item.blur();
				break;
			}
		}, this));
		return this;
	};
	
	/**
	 * Adds event observers to the given toolbar item (any item not belonging
	 * to the body of a menu).
	 * @private
	 * @param {jqObject} $item
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.observeToolbarItem = function($item) {
		$item.on('mouseenter', $.proxy(function(ev) {
			if (Toolbar.isFocusHijackingFx(this.opt.showMenuFx.effect)) {
				this.hideMenus();				
			}
		}, this));
		return this;
	};
	
	/**
	 * Adds event observers to the given menu.
	 * @private
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.observeMenu = function(menu) {
		this.observeMenuKeyboardEvents(menu);
		this.observeMenuMouseEvents(menu);
		//Temporarily turn off keydown events to avoid page scrolling when
		//scanning menus with arrow keys
		menu.$lead.on('focusin', function() {
			blockArrowKeys();
		});
		menu.$body.on('focusin', function() {
			blockArrowKeys();
		});
		menu.$lead.on('focusout', function() {
			$(root.document).off('keydown.toolbar');
		});
		menu.$body.on('focusout', function() {
			$(root.document).off('keydown.toolbar');
		});
		return this;
	};
	
	/**
	 * Adds keyboard event observers to the given menu.
	 * @private
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.observeMenuKeyboardEvents = function(menu) {
		var hideMenuTimer,
			self = this;
		//menu lead item
		menu.$lead.on('focusin', function(ev) {
			//cancel hiding the menu when tabbing from the menu to the lead item
			root.clearTimeout(hideMenuTimer);
			self.menuLeadItemFocusedIn(menu);
		});
		menu.$lead.on('focusout', function(ev) {
			hideMenuTimer = root.setTimeout(function() { //defer hiding the menu
				self.menuLeadItemFocusedOut(menu);
			}, HIDE_MENU_DELAY);
		});
		//menu body
		menu.$body.on('focusin', function(ev) {
			//cancel hiding the menu when tabbing from the lead item to the menu
			root.clearTimeout(hideMenuTimer);
		});
		menu.$body.on('focusout', function(ev) {
			hideMenuTimer = root.setTimeout(function() { //defer hiding the menu
				self.menuFocusedOut(menu);
			}, HIDE_MENU_DELAY);
		});
		return this;
	};
	
	/**
	 * Adds mouse event observers to the given menu.
	 * @private
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.observeMenuMouseEvents = function(menu) {
		//Some of the jQueryUi effects are a bit tricky to apply to the menu
		//because they animate the menu body in a way where the lead item
		//looses focus even if the mouse does not move outside that item,
		//e.g. when the menu body is moved in parts from outside in, layered
		//above the lead item (explode-effect).
		//This can cause infinite animation loops. To protect the user from
		//that undesired behavior, events are going to be ignored as long as
		//the effect is being rendered.
		//This on the other hand causes open menus not being closed when the
		//user moves the mouse pointer from one lead item to another one
		//before the first lead item's menu effect has finished. So when a
		//lead item is hovered, all menus not belonging to the hovered item
		//are explicitly closed if they are visible. In additon, all menus are
		//closed when hovering a normal toolbar item or hitting the escape key
		//(either locally, when an item is hovered, or globally).
		menu.$lead.on('mouseenter', $.proxy(function(ev) {
			//do not hide the menu when mouse moves from menu body to lead
			if (menu.hideMenuTimer) {
				root.clearTimeout(menu.hideMenuTimer);
				menu.hideMenuTimer = undefined;
			} else if (!(menu.isShowFxInProgress &&
					Toolbar.isFocusHijackingFx(this.opt.showMenuFx.effect))) {
				this.menuLeadItemFocusedIn(menu);
			}
		}, this));
		menu.$lead.on('mouseleave', $.proxy(function(ev) {
			if (!(menu.isShowFxInProgress &&
					Toolbar.isFocusHijackingFx(this.opt.showMenuFx.effect))) {
				menu.hideMenuTimer = root.setTimeout(
					$.proxy(function() {
						menu.hideMenuTimer = undefined;
						this.menuLeadItemFocusedOut(menu);
					}, this),
					HIDE_MENU_DELAY);
			}
		}, this));
		menu.$body.on('mouseenter', function(ev) {
			//do not hide the menu when mouse moves from lead to menu body
			root.clearTimeout(menu.hideMenuTimer);
		});
		menu.$body.on('mouseleave', $.proxy(function(ev) {
			menu.hideMenuTimer = root.setTimeout(
				$.proxy(function() {
					menu.hideMenuTimer = undefined;
					this.menuFocusedOut(menu);
				}, this),
				HIDE_MENU_DELAY);
		}, this));
		return this;
	};
	
	/**
	 * When the lead item of the given menu has been focused.
	 * @private
	 * @event
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.menuLeadItemFocusedIn = function(menu) {
		if (Toolbar.isFocusHijackingFx(this.opt.showMenuFx.effect)) {
			this.hideMenus(menu);
		}
		if (!Toolbar.isDisabledItem(menu.$lead)) {
			if (menu.isHideFxInProgress) {
				Toolbar.stopMenuFx(menu, { clearQueue: true });
				this.resetMenu(menu);
				if (this.opt.hideMenuFx.effect === 'fade') {
					menu.$body.css('opacity', '0');
				}
			}
			this.showMenu(menu, this.opt.showMenuFx);
		}
		return this;
	};
	
	/**
	 * When the focus has switched from the lead item of the given menu to
	 * any element excluding the body of the given menu.
	 * @private
	 * @event
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.menuLeadItemFocusedOut = function(menu) {
		if (menu.isShowFxInProgress) {
			Toolbar.stopMenuFx(menu, { clearQueue: true });
			if (Toolbar.isFxComboInversableAfterStop(
					this.opt.showMenuFx.effect,
					this.opt.hideMenuFx.effect)) {
				this.hideMenu(menu, this.opt.hideMenuFx).done(
					$.proxy(function() {
						this.resetMenu(menu);
					}, this));
			} else {
				this.resetMenu(menu);
			}
		} else {
			this.hideMenu(menu, this.opt.hideMenuFx);			
		}
		return this;
	};
	
	/**
	 * When the given menu has lost focus.
	 * @private
	 * @event
	 * @param {Object} menu
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.menuFocusedOut = function(menu) {
		this.hideMenu(menu, this.opt.hideMenuFx);
		return this;
	};
	
	/**
	 * Applies this toolbar's options.
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.applyOptions = function() {
		this.setRounded(this.opt.isRounded);
		this.setSkippable(this.opt.isSkippable);
		this.placeMenus();
		return this;
	};
	
	/**
	 * Sets this toolbar rounded or edged depending on the given argument.
	 * @param {Boolean} isRounded
	 * @returns {Toolbar} Chainable.
	 */
	Toolbar.prototype.setRounded = function(isRounded) {
		if (isRounded) {
			this.$root.addClass(ROUNDED_TOOLBAR_CLASS);
		} else {
			this.$root.removeClass(ROUNDED_TOOLBAR_CLASS);
		}
		return this;
	};
	
	/**
	 * Adds or removes the 'skip navigation' accessibility feature.
	 * @param {Boolean} isSkippable
	 * @returns {Toolbar} Chainable. 
	 */
	Toolbar.prototype.setSkippable = function(isSkippable) {
		var target;
		if (this.$root.prev().is('div.tb-skip')) {
			this.$root.prev().remove();
		}
		if (this.$root.next().is('span#toolbarEnd')) {
			this.$root.next().remove();
		}
		if (isSkippable) {
			target = this.opt.skipNavigationTarget;
			if (typeof target !== 'string') {
				target = '#toolbarEnd';
				this.$root.after('<span id="toolbarEnd"></span>');
			}
			if (target.charAt(0) !== '#') {
				target = '#' + target;
			}
			this.$root.before('<div class="tb-skip"><a href="' + target +
				'">Skip toolbar links</a></div>');
		}
		return this;
	};
	
	/**
	 * @class
	 * @name jQuery
	 */
	function exportModule(jQuery) {
		$ = jQuery;
		/**
		 * Toolbar plugin.
		 * 
		 * Creates the toolbar defined by the given descriptor and adds it to
		 * the selected elements.
		 * 
		 * @function
		 * @name jQuery.prototype.toolbar
		 *        
		 * @param {Object} [options] Toolbar options
		 *        
		 * @returns {jqObject} Chainable
		 */
		$.fn.toolbar = function(options) {
			this.each(function() {
				$(this).data('toolbarModel', new Toolbar($(this), options));
			});
			return this;
		};
		
		/**
		 * Toolbar plugin.
		 * 
		 * Returns the toolbar models corresponding to the set of selected
		 * elements or the single model corresponding to the selected element
		 * at the given index.
		 * 
		 * @function
		 * @name jQuery.prototype.toolbarModel
		 * 
		 * @param {Number} [index]
		 * 
		 * @returns {Object} The model consisting of an options accessor 
		 */
		$.fn.toolbarModel = (function() {
			function createModel($toolbar) {
				var tb = $toolbar.data('toolbarModel');
				return tb ? {
					//avoid exposing the toolbar model, so wrap the options method
					options: function(options) {
						if (!options) { return tb.options(); }
						tb.options(options);
					}
				} : undefined;
			}
			return function(index) {
				var r;
				if (index !== undefined) {
					return createModel($($(this)[index]));
				}
				r = [];
				this.each(function() {
					r.push(createModel($(this)));
				});
				return r;
			};
		}());
	}
	
	//Enable to load the plugin traditionally or as an AMD module
	(function() {
		if (typeof root.define !== 'undefined' && root.define.amd) {
			root.define(['jquery'], function($) { exportModule($); });
		} else if (root.jQuery) {
			exportModule(root.jQuery);
		}
	}());
	
}(this));