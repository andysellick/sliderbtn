/*
    Simple slider selector plugin
    https://github.com/andysellick/sliderbtn
    
    Usage:
        $('.sliderbtn').sliderbtn();

    Options:
        'numbering': 0 or 1, causes indexing of elements to either start from 0 or 1, defaults to 1
        'initial': -1 off, 0 or higher sets which link to initialise as the active one on load
        'initialInstant': sets whether initialisation of hilight should be instant or animated
        'speed': sets speed of animation, ms

    Callback:
        $('.sliderbtn').sliderbtn({
            'numbering':0,
            onClickChange: function(num,item){
                console.log('Item clicked was number ' + num + ', ' + item);
            }
        });

        Callback has two parameters:
            - num is the index of the element clicked on
            - item is the value of the data-item attribute of the element clicked on, if it exists

*/
(function (window,$) {
	var Plugin = function(elem,options){
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options
	}

	Plugin.prototype = {

		init: function(){
			var thisobj = this;

			this.settings = $.extend({
				numbering: 1, //given a non-zero value, numbers the elements from 1 to x rather than 0 to x
				initial: 0, //sets which link to initialise as the active one, if 0 or greater
				initialInstant: 1, //sets whether initialisation of hilight should be instant or animated
				speed: 500, //sets speed of animation, ms
				onClickChange: function() {}
			}, this.defaults, this.options);

			var clinks = this.$elem.find('a');
			var $hilight = $('<div/>').addClass('hilight').css('width',clinks.first().outerWidth()).appendTo(this.$elem); //create the slider
            if(thisobj.settings.initial > clinks.length - 1)
                thisobj.settings.initial = clinks.length - 1;

			if(thisobj.settings.initial >= 0)
                animateSlider(this.$elem.find('a:eq(' + thisobj.settings.initial + ')'),thisobj.settings.initialInstant);

			clinks.on('click',function(e){
                e.preventDefault();
                animateSlider($(this));

                //get variables for callback
                var num = $(this).index();
                if(thisobj.settings.numbering)
                    num += 1;
                var item = $(this).data('item') || "";
    			thisobj.settings.onClickChange.call(this,num,item); //call callback
            });

            function animateSlider(thisel,instant=0){
                clinks.removeClass('active');
                thisel.addClass('active');

                var p = thisel.position();
                var w = thisel.outerWidth(true);
                var h = thisel.outerHeight(true);

                var speed = thisobj.settings.speed;
                if(instant)
                    speed = 0;
                $hilight.stop().animate({
                    'left': p.left,
                    'top': p.top,
                    'width': w,
                    'height': h
                },speed);
            }

        	$(window).on('resize',function(){
                var $curr = thisobj.$elem.find('.active');
                if($curr){
                    animateSlider($curr,1);
                }
            });
		},

		//below a given screen size, remove all plugin functionality
		/*
		destroy: function(){
			console.log('deactivating plugin');
		},
		*/
	}
	$.fn.sliderbtn = function(options){
		return this.each(function(){
			new Plugin(this,options).init();
		});
	}
	window.Plugin = Plugin;
})(window,jQuery);