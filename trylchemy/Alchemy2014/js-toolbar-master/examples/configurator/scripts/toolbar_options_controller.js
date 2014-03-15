/*global define*/
/*jslint white: false*/

define(['jquery', 'jquery_contrib'], function($) {
	
	'use strict';
	
	var SLIDE_FX_SPECIFICS_DURATION = 350, //ms
		SHOW_FX_SPECIFIC_OPTIONS_TXT = 'More options',
		HIDE_FX_SPECIFIC_OPTIONS_TXT = 'Less options';
	
	function Mod(toolbarModel) {
		this._model = toolbarModel;
		this._observers = {
			'optionsChange': []
		};
	}
	
	Mod.create = function(toolbarModel, $view) {
		return new Mod(toolbarModel)
			._selectElements($view)
			._createView()
			._handleEvents();
	};
	
	Mod.prototype.addObserver = function(eventType, observer) {
		if (Object.prototype.toString.call(
				this._observers[eventType]) === '[object Array]') {
			this._observers[eventType].push(observer);
		}
	};
	
	Mod.prototype._notifyObservers = function(eventType, eventObject) {
		$.each(this._observers[eventType], function(i, observer) {
			observer(eventObject);
		});
	};
	
	Mod.prototype._selectElements = function($view) {
		this._$el = {};
		this._$el.root = function() {
			return $view;
		};
		
		//Toolbar settings
		
		this._$el.tbOpt = (function() {
			var $el = $('> div > div.toolbarOptions', $view);
			return function() { return $el; };
		}());
		
		this._$el.tbOpt.isRounded = (function($parent) {
			var $el = $(' input#isRounded', $parent);
			return function() { return $el; };
		}(this._$el.tbOpt()));
		
		this._$el.tbOpt.isSkippable = (function($parent) {
			var $el = $(' input#isSkippable', $parent);
			return function() { return $el; };
		}(this._$el.tbOpt()));
		
		this._$el.tbOpt.isAboveMenus = (function($parent) {
			var $el = $(' select#isAboveMenus', $parent);
			return function() { return $el; };
		}(this._$el.tbOpt()));
		
		//General effect settings used to show menus
		
		this._$el.showFxOpt = (function() {
			var $el = $('> div > div.showMenuFxOptions', $view);
			return function() { return $el; };
		}());
		
		this._$el.showFxOpt.duration = (function($parent) {
			var $el = $('> input.duration', $parent);
			return function() { return $el; };
		}(this._$el.showFxOpt()));
		
		this._$el.showFxOpt.type = (function($parent) {
			var $el = $('> select.effects', $parent);
			return function() { return $el; };
		}(this._$el.showFxOpt()));
		
		this._$el.showFxOpt.easing = (function($parent) {
			var $el = $('> select.easing', $parent);
			return function() { return $el; };
		}(this._$el.showFxOpt()));
		
		//Effect specific settings used to show menus
		
		this._$el.showFxOpt.specifics = (function($parent) {
			var $el = $('> div.specifics', $parent);
			return function(fx) {
				if (!fx) { return $el; }
				return $('> div.specifics > div.' + 'fx-' + fx, $parent);
			};
		}(this._$el.showFxOpt()));
		
		this._$el.showFxOpt.specific = $.proxy(function(fx, opt) {
			return $(
				'> div.specifics > div.fx-' + fx + ' *[name="' + opt + '"]',
				this._$el.showFxOpt());
		}, this);
		
		//General effect settings used to hide menus
		
		this._$el.hideFxOpt = (function() {
			var $el = $('> div > div.hideMenuFxOptions', $view);
			return function() { return $el; };
		}());
		
		this._$el.hideFxOpt.duration = (function($parent) {
			var $el = $('> input.duration', $parent);
			return function() { return $el; };
		}(this._$el.hideFxOpt()));
		
		this._$el.hideFxOpt.type = (function($parent) {
			var $el = $('> select.effects', $parent);
			return function() { return $el; };
		}(this._$el.hideFxOpt()));
		
		this._$el.hideFxOpt.easing = (function($parent) {
			var $el = $('> select.easing', $parent);
			return function() { return $el; };
		}(this._$el.hideFxOpt()));
		
		//Effect specific settings used to hide menus
		
		this._$el.hideFxOpt.specifics = (function($parent) {
			var $el = $('> div.specifics', $parent);
			return function(fx) {
				if (!fx) { return $el; }
				return $('> div.specifics > div.fx-' + fx, $parent);
			};
		}(this._$el.hideFxOpt()));
		
		this._$el.hideFxOpt.specific = $.proxy(function(fx, opt) {
			return $(
				'> div.specifics > div.fx-' + fx + ' *[name="' + opt + '"]',
				this._$el.hideFxOpt());
		}, this);
		
		//Buttons
		
		this._$el.detailsBtn = (function() {
			var $el = $('> div > a.fxSpecificOptions', $view);
			return function() { return $el; };
		}());
		
		this._$el.applyOptBtn = (function() {
			var $el = $('> div > button.button', $view);
			return function() { return $el; };
		}());
		
		return this;
	};
	
	Mod.prototype._createView = function() {
		this._updateDetailsBtn();
		//clone fx type select
		this._$el.hideFxOpt.type().append(
			this._$el.showFxOpt.type().children().clone());
		//clone fx easing select
		this._$el.hideFxOpt.easing().append(
			this._$el.showFxOpt.easing().children().clone());
		//clone fx specific options
		this._$el.hideFxOpt.specifics().append(
			this._$el.showFxOpt.specifics().children().clone());
		//sync gui <-> toolbar options
		this._updateGui();
		return this;
	};
	
	Mod.prototype._updateGui = function() {
		var opt = this._model.options();
		this._$el.tbOpt.isRounded().check(opt.isRounded);
		this._$el.tbOpt.isSkippable().check(opt.isSkippable);
		this._$el.tbOpt.isAboveMenus().select(String(opt.isAboveMenus));
		this._updateDirections(opt.isAboveMenus);
		this._$el.showFxOpt.duration().val(opt.showMenuFx.duration);
		this._$el.hideFxOpt.duration().val(opt.hideMenuFx.duration);
		this._$el.showFxOpt.type().val(opt.showMenuFx.effect);
		this._$el.hideFxOpt.type().val(opt.hideMenuFx.effect);
		this._$el.showFxOpt.easing().val(opt.showMenuFx.easing);
		this._$el.hideFxOpt.easing().val(opt.hideMenuFx.easing);
		this._updateFxSpecificOptions();
		this._displayFxSpecificOptions(opt.showMenuFx.effect, this._$el.showFxOpt);
		this._displayFxSpecificOptions(opt.hideMenuFx.effect, this._$el.hideFxOpt);
		return this;
	};
	
	Mod.prototype._updateDetailsBtn = function() {
		this._$el.detailsBtn().text(
			this._$el.hideFxOpt.specifics().is(':hidden') ?
				SHOW_FX_SPECIFIC_OPTIONS_TXT :
				HIDE_FX_SPECIFIC_OPTIONS_TXT);
	};
	
	Mod.prototype._updateDirections = function(isToolbarAboveMenus) {
		var dir = isToolbarAboveMenus ? 'up' : 'down';
		$.each(['blind', 'bounce', 'drop', 'shake', 'slide'],
			$.proxy(function(i, v) {
				this._$el.showFxOpt.specific(v, 'direction').select(dir);
				this._$el.hideFxOpt.specific(v, 'direction').select(dir);
			}, this));
	};
	
	Mod.prototype._updateFxSpecificOptions = function() {
		this._$el.hideFxOpt.specific('scale', 'percent').val(0);
		this._$el.hideFxOpt.specific('fold', 'horizFirst').next()
			.text('Horizontal before vertical scale');
	};
	
	Mod.prototype._displayFxSpecificOptions = function(fx, $fxOpt) {
		$fxOpt.specifics().children().hide(SLIDE_FX_SPECIFICS_DURATION);
		$fxOpt.specifics(fx).show(SLIDE_FX_SPECIFICS_DURATION);
	};
	
	Mod.prototype._handleEvents = function() {
		this._handleFxTypeChanges(this._$el.showFxOpt);
		this._handleFxTypeChanges(this._$el.hideFxOpt);
		this._handleToggleFxSpecificOptions();
		this._handleApplyOptions();
		return this;
	};
	
	Mod.prototype._handleFxTypeChanges = function($fxOpt) {
		$fxOpt.type().change($.proxy(function(ev) {
			var selectedFx = $fxOpt.type().val(),
				isDisabled = selectedFx === 'none';
			$fxOpt.duration().disable(isDisabled);
			$fxOpt.easing().disable(isDisabled);
			this._displayFxSpecificOptions(selectedFx, $fxOpt);
		}, this));
		return this;
	};
	
	Mod.prototype._handleToggleFxSpecificOptions = function() {
		this._$el.detailsBtn().click($.proxy(function(ev) {
			ev.preventDefault(); //don't follow the link
			this._$el.showFxOpt.specifics().toggle(
				SLIDE_FX_SPECIFICS_DURATION);
			this._$el.hideFxOpt.specifics().toggle(
				SLIDE_FX_SPECIFICS_DURATION, $.proxy(function() {
					this._updateDetailsBtn();
				}, this));
		}, this));
	};
	
	Mod.prototype._handleApplyOptions = function() {
		this._$el.applyOptBtn().click($.proxy(function(ev) {
			var opt,
				$el = this._$el;
			opt = {
				isRounded: $el.tbOpt.isRounded().is(':checked'),
				isSkippable: $el.tbOpt.isSkippable().is(':checked'),
				isAboveMenus: $el.tbOpt.isAboveMenus().val() !== 'false',
				showMenuFx: {
					effect: $el.showFxOpt.type().val(),
					easing: $el.showFxOpt.easing().val(),
					duration: Number($el.showFxOpt.duration().val())
				},
				hideMenuFx: {
					effect: $el.hideFxOpt.type().val(),
					easing: $el.hideFxOpt.easing().val(),
					duration: Number($el.hideFxOpt.duration().val())
				}
			};
			this._applyFxSpecificOptions(opt.showMenuFx, this._$el.showFxOpt);
			this._applyFxSpecificOptions(opt.hideMenuFx, this._$el.hideFxOpt);
			this._model.options(opt);
			this._notifyObservers('optionsChange', opt);
		}, this));
		return this;
	};
	
	Mod.prototype._applyFxSpecificOptions = function(opt, $fxOpt) {
		switch (opt.effect) {
		case 'blind':
			opt.direction = $fxOpt.specific('blind', 'direction').val();
			break;
		case 'bounce':
			opt.direction = $fxOpt.specific('bounce', 'direction').val();
			opt.distance = Number($fxOpt.specific('bounce', 'distance').val());
			opt.times = Number($fxOpt.specific('bounce', 'times').val());
			break;
		case 'clip':
			opt.direction = $fxOpt.specific('clip', 'direction').val();
			break;
		case 'drop':
			opt.direction = $fxOpt.specific('drop', 'direction').val();
			break;
		case 'explode':
			opt.pieces = Number($fxOpt.specific('explode', 'pieces').val());
			break;
		case 'fold':
			opt.size = Number($fxOpt.specific('fold', 'size').val());
			opt.horizFirst = $fxOpt.specific('fold', 'horizFirst').is(':checked');
			break;
		case 'puff':
			opt.percent = Number($fxOpt.specific('puff', 'percent').val());
			break;
		case 'pulsate':
			opt.times = Number($fxOpt.specific('pulsate', 'times').val());
			break;
		case 'scale':
			opt.direction = $fxOpt.specific('scale', 'direction').val();
			opt.origin = [
				$fxOpt.specific('scale', 'origin-y').val(),
				$fxOpt.specific('scale', 'origin-x').val()
			];
			opt.percent = $fxOpt.specific('scale', 'percent').val();
			opt.scale = $fxOpt.specific('scale', 'scale').val();
			break;
		case 'shake':
			opt.direction = $fxOpt.specific('shake', 'direction').val();
			opt.distance = Number($fxOpt.specific('shake', 'distance').val());
			opt.times = Number($fxOpt.specific('shake', 'times').val());
			break;
		case 'slide':
			var distance = $fxOpt.specific('slide', 'distance').val();
			if (distance !== '') { opt.distance = Number(distance); }
			opt.direction = $fxOpt.specific('slide', 'direction').val();
			break;
		}
	};
	
	return Mod;
});