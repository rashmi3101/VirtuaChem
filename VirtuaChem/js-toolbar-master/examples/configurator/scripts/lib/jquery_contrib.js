/*global define*/
/*jslint white: false*/

define(['jquery'], function($) {
	
	'use strict';
	
	$.fn.check = function(flag) {
		var zeroArgs = arguments.length === 0;
		this.each(function() {
			if (zeroArgs || flag) {
				$(this).attr('checked', 'checked');
			} else {
				$(this).removeAttr('checked');
			}
		});
		return this;
	};
	
	$.fn.disable = function(flag) {
		this.each(function() {
			if (flag) {
				$(this).attr('disabled', 'disabled');
			} else {
				$(this).removeAttr('disabled');
			}
		});
		return this;
	};
	
	$.fn.select = function(optVal, nonExclusive) {
		nonExclusive = Boolean(nonExclusive);
		if (!nonExclusive) { //eclusive selection
			$('> option', $(this)).removeAttr('selected');
		}
		$('> option[value="' + optVal + '"]', $(this)).attr('selected', 'selected');
		return this;
	};
});