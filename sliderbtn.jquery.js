/*
    Simple slider selector plugin
    https://github.com/andysellick/sliderbtn
    
    Usage:
        $('.sliderbtn').sliderbtn();

    Options:
        'numbering': 0 or 1, causes indexing of elements to either start from 0 or 1, defaults to 1

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
				onClickChange: function() {}
			}, this.defaults, this.options);

			var clinks = this.$elem.find('a');
			//create the slider
			var $hilight = $('<div/>').addClass('hilight').css('width',clinks.first().outerWidth()).appendTo(this.$elem);
			var numbering = this.settings.numbering;
			var onClickChange = this.settings.onClickChange;

			clinks.on('click',function(e){
                e.preventDefault();
                clinks.removeClass('active');
                $(this).addClass('active');

                var p = $(this).position();
                var w = $(this).outerWidth(true);
                var h = $(this).outerHeight(true);

                $hilight.animate({
                    'left': p.left,
                    'top': p.top,
                    'width': w,
                    'height': h
                });

                //get variables for callback
                var num = $(this).index();
                if(numbering)
                    num += 1;
                var item = $(this).data('item') || "";

                //call callback
    			onClickChange.call(this,num,item);
            });
        	/* $(window).on('resize',function(){}); */
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