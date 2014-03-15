/*global requirejs*/
/*jslint white:false*/

(function(root) {

	'use strict';
	
	var $,
		TOGGLE_WIDGET_DURATION = 250;
	
	function $toolbar() {
		return $('div.toolbarContainer > ul');
	}
	
	function $btnWidgetView() {
		return $('#widgetView');
	}
	
	function $btnShowConf() {
		return $('#showConf');
	}
	
	function $toolbarOptionsWidget() {
		return $('div.toolbarOptionsWidget');
	}
	
	function $configBlock() {
		return $('div.toolbarOptionsWidget > div.configuration');
	}
	
	function updateConfig() {
		$configBlock().text(JSON.stringify($toolbar().toolbarModel(0).options()));
	}
	
	function createToolbar() {
		//Create toolbar button click handlers
		$btnWidgetView().click(function(ev) {
			ev.preventDefault();
			$toolbarOptionsWidget().toggle(TOGGLE_WIDGET_DURATION, function() {
				$('#widgetView').text($toolbarOptionsWidget().is(':hidden') ?
						'Show configuration widget' :
				'Hide configuration widget');
			});			
		});
		$btnShowConf().click(function(ev) {
			updateConfig();
			$configBlock().toggle(0, function() {
				$('#showConf').text($configBlock().is(':hidden') ?
						'Show configuration' :
				'Hide configuration');
			});			
		});
		//The toolbar container is hidden in order to avoid exposition of the
		//underlying unstyled list, so display it after creating the toolbar
		$toolbar().toolbar({
			isSkippable: true,
			skipNavigationTarget: 'content'
		}).parent().css('visibility', 'visible');
	}

	requirejs.config({
		baseUrl: './scripts/lib/',
		paths: {
			app: '../',
			jQueryUI: 'jqueryui',
			toolbar: '../../../../lib/'
		}
	});

	requirejs(['jquery',
	    'app/toolbar_options_controller',
		'jQueryUI/effect',
		'jQueryUI/effect-blind',
		'jQueryUI/effect-bounce',
		'jQueryUI/effect-clip',
		'jQueryUI/effect-drop',
		'jQueryUI/effect-explode',
		'jQueryUI/effect-fade',
		'jQueryUI/effect-fold',
		'jQueryUI/effect-pulsate',
		'jQueryUI/effect-scale',
		'jQueryUI/effect-shake',
		'jQueryUI/effect-slide',
		'toolbar/toolbar'],
	function(jQuery, ToolbarOptionsController) {
		$ = jQuery;
		$(function() { //DOM construction finished
			createToolbar();
			ToolbarOptionsController
				.create($toolbar().toolbarModel(0), $toolbarOptionsWidget())
				.addObserver('optionsChange', function() {
					updateConfig();
				});
		});
	});
}(this));