#js-toolbar
__Helps you to create stylish toolbars for web pages.__

## Overview
You can...

+ Create toolbars with buttons and groups of buttons

+ Create toolbars with menus

+ Define effects and animate menus

+ Create custom themes suitable to your page design

[Visit the demo page!](http://www.pecherstorfer.bplaced.com/lab/js-toolbar/)

The toolbar is JavaScript driven, implemented as a jQuery plugin, conforming to AMD.
It can be bound to an unordered list element, using jQuery selectors.

## Usage

Step 1: [Download](https://github.com/mpecherstorfer/js-toolbar) the latest version.

Step 2: Import `toolbar.js`, `toolbar.css` and optionally a toolbar theme in the head declaration of your html files.

Step 3: Create the underlying DOM structure with an unordered list as the toolbar's root element and bind the Toolbar using jQuery selectors.

## Minimalist example

    <!DOCTYPE html>
    <html>
    	<head>
    		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    		<link rel="stylesheet" type="text/css" href="toolbar.css" />
    		<script type="text/javascript" src="jquery.js"></script>
    		<script type="text/javascript" src="toolbar.js"></script>
    		<script type="text/javascript">
    			$(function() {
    				$('#toolbar').toolbar();
    			});
    		</script>
    		<title>Minimalist example</title>
    	</head>
    	<body>
    		<ul id="toolbar">
    			<li><a href="#">Toolbar button</a></li>
    		</ul>
    	</body>
    </html>

## Adding menus
    <ul id="toolbar">
    	<li><a href="#">Toolbar button</a></li>
    	<li>
    		<a href="#">Menu lead button</a>
    		<ul>
    			<li><a>Menu item</a></li>
    		</ul>
    	</li>
    </ul>

## Animated menus
You can use basic jQuery or jQuery UI effects for showing/hiding menus.
Just supply menu effect options when binding the toolbar to the underlying list element:

    $(function() {
    	$('#toolbar').toolbar({
    		showMenuFx {
    			//options for animation effects used to show menus
    		},
    		hideMenuFx {
    			//options for animation effects used to hide menus
    		}
    	});
    });

Visit the [demo page](http://pecherstorfer.bplaced.com/lab/js-toolbar/) to try out supported effects.

### Options for animated menus using basic jQuery effects
<table>
  <tr>
    <th>Option</th><th>Description</th><th>Range</th><th>Default value</th>
  </tr>
  <tr>
    <td>effect</td>
    <td>Effect name</td>
    <td>none, slide, fade</td>
    <td>slide</td>
  </tr>
  <tr>
    <td>duration</td>
    <td>Effect duration in milliseconds</td>
    <td>Number</td>
    <td>500</td>
  </tr>
</table>

### Options for animated menus using jQuery UI effects
You need to download and import jQueryUI first. Then set the following options:
<table>
  <tr>
    <th>Option</th><th>Description</th><th>Range</th><th>Default value</th>
  </tr>
  <tr>
    <td>effect</td>
    <td>Effect name</td>
    <td>none, blind, bounce, clip, drop, explode, fade, fold, puff, pulsate, scale, shake, slide</td>
    <td>slide</td>
  </tr>
  <tr>
    <td>duration</td>
    <td>Effect duration in milliseconds</td>
    <td>Number</td>
    <td>500</td>
  </tr>
  <tr>
    <td>easing</td>
    <td>Speed at which an animation progresses at different points within the animation</td>
    <td>Visit the <a href="http://api.jqueryui.com/easings/">jQueryUI easings API</a> for more information</td>
    <td>swing</td>
  </tr>
</table>

These options apply to all jQuery UI effects. Besides that you can declare effect specific options like `direction` for the `slide` effect.
Visit the <a href="http://api.jqueryui.com/category/effects/">jQueryUI effects API</a> for details on effect specific options.

## Other toolbar options
There are two other options, besides `showMenuFx` and `hideMenuFx`:
<table>
  <tr>
    <th>Option</th><th>Description</th><th>Range</th><th>Default value</th>
  </tr>
  <tr>
    <td>isRounded</td>
    <td>Whether the toolbar has rounded ends</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>isAboveMenus</td>
    <td>Whether the toolbar is located above or beneath menus</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>isSkippable</td>
    <td>Whether the toolbar provides a link to skip navigation. See <a href="#navigation-and-accessibility">Navigation and accessibility</a>.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>skipNavigationTarget</td>
    <td>ID or name of the element referenced by the skip navigation link. See <a href="#navigation-and-accessibility">Navigation and accessibility</a>.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
</table>

## Toolbar button groups
You can use the CSS class `tb-end-group` on list items if you want your toolbar to have one or several groups of buttons. Button groups have horizontal space in between them.
Example:

    <ul id="toolbar">
    	<li><a href="#">1st group, 1st button</a></li>
    	<li class="tb-end-group"><a href="#">1st group, 2nd button</a></li>
    	<li><a href="#">2nd group, 1st button</a></li>
    	<li><a href="#">2nd group, 2nd button</a></li>
    </ul>

## Other CSS classes
<table>
  <tr>
    <th>CSS class</th><th>Description</th>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Disabled buttons. Focusing a disabled menu lead button will not open the corresponding menu</td>
  </tr>
  <tr>
    <td>hidden</td>
    <td>Hidden buttons</td>
  </tr>
  <tr>
    <td>wakeup</td>
    <td>For buttons associated with operations better not to be executed by drowsy users</td>
  </tr>
</table>

## Themes
js-toolbar comes with a minimalist default theme included within `toolbar.css`, and two external theme files located in the `themes` directory. To create a custom theme it's easist to change one of the two existing themes.

<h2 id="accessibility">Navigation and accessibility</h2>
js-toolbar is designed for users with keyboard, mouse, touchscreen, and screen-reader devices.

It captures arrow key events in order to support scanning toolbar and menu buttons using 'left', 'right', 'up', and 'down' arrow keys. It also captures escape key events in order to close open menus. Other keys are not affected so you can linearly scan the toolbar using the tab key and activate individual buttons using the enter key.

js-toolbar includes the 'skip navigation' feature, enabling users with keyboards or screen-readers to quickly 'jump over' the toolbar links. Per default, this link references an empty span element succeeding the toolbar's underlying list element. To make this feature more useful, you can explicitly provide the target element (normally the element containing the page content). To do this just set the `skipNavigationTarget` option to the ID or name of the corresponding element. The link to skip toolbar navigation is only visible while being focused in order not to disturb mouse-only or touchscreen users. If you have your own accessibility features or simply do not want to use it, you can turn off this feature setting the `isSkippable` option to false.

## AMD compliance

js-toolbar is AMD compliant, so you can load the toolbar module and jQueryUI effect modules using require.js.
Check out index.js in the `examples/configurator/scripts` directory to see an example.

To convert jQuery UI files into separate AMD modules you can use James Burke's fantastic conversion script [hosted on GitHub](https://github.com/jrburke/jqueryui-amd).

## Acknowledgements

+ [jQueryUI](http://jqueryui.com/) effects are used for advanced menu animations
+ Theme `theme_02.css` in the `themes` directory is based on Nicolas Gallagher's stylish [CSS3 GitHub buttons](http://nicolasgallagher.com/lab/css3-github-buttons/)
+ 'Skip toolbar navigation' feature based on [material from WebAim](http://webaim.org/techniques/skipnav/)
+ jQuery UI files have been converted to AMD modules using James Burke's conversion script [hosted on GitHub](https://github.com/jrburke/jqueryui-amd)
