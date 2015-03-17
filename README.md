# sliderbtn
A simple jQuery plugin for a sliding button selector

See example and plugin for details.

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
