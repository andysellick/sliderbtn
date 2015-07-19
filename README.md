sliderbtn
=========
A simple jQuery plugin for a sliding button selector

Example here: http://www.custarddoughnuts.co.uk/article/2015/4/27/a-plugin-to-make-a-slider-button

Usage
-----

```html
<div class="sliderbtn">
  <a href="#" data-item="Malcolm Reynolds">Mal</a>
  <a href="#" data-item="Zoe Alleyne Washburne">Zoe</a>
  <a href="#" data-item="Inara Serra">Inara</a>
  <a href="#" data-item="Simon Tam">Simon</a>
  <a href="#" data-item="River Tam">River</a>
  <a href="#" data-item="Kaywinnet Lee Frye">Kaylee</a>
  <a href="#" data-item="Jayne Cobb">Jayne</a>
  <a href="#" data-item="Hoban Washburne">Wash</a>
  <a href="#" data-item="Derrial Book">Book</a>
</div>

<script>
  $(document).ready(function(){
    $('.sliderbtn').sliderbtn({
      onClickChange: function(num,item){
        $('#output').html('Item clicked was number ' + num + ', ' + item);
      }
    });
  });
</script>
```

Callback
--------

The 'onClickChange' function applied to the plugin init call allows you to add an event for when an option is clicked. This function has two parameters - num, the index of the element clicked, and item, the value of the data-item attribute of the element clicked (if it exists).

Options
-------

**numbering**: 0 or 1, causes indexing of elements to either start from 0 or 1, defaults to 1

**initial**: -1 off, 0 or higher sets which link to initialise as the active one on load

**initialInstant**: sets whether initialisation of hilight should be instant or animated

**speed**: sets speed of animation, ms


Responsiveness
--------------

The plugin is mobile friendly, although you'll have to put in your own styles to decide how the slider should collapse or stack.
