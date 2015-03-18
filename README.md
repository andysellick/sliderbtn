sliderbtn
=========
A simple jQuery plugin for a sliding button selector

See example and plugin for details.

Callback
--------

The 'onClickChange' function applied to the plugin init call allows you to add an event for when an option is clicked. This function has two parameters - num, the index of the element clicked, and item, the value of the data-item attribute of the element clicked (if it exists).

Options
-------

'numbering': 0 or 1, causes indexing of elements to either start from 0 or 1, defaults to 1

'initial': -1 off, 0 or higher sets which link to initialise as the active one on load

'initialInstant': sets whether initialisation of hilight should be instant or animated

'speed': sets speed of animation, ms


Responsiveness
--------------

The plugin is mobile friendly, although you'll have to put in your own styles to decide how the slider should collapse or stack.
