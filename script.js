define(['jquery'], function($) {
  return {
    init: function() {
      var self = this;
      
      function hideLogs() {
        $('.feed-note, .feed-body').each(function() {
          var text = $(this).text();
          if (
            text.indexOf('поле установлено') !== -1 ||
            text.indexOf('Поле установлено') !== -1 ||
            text.indexOf('sensei') !== -1 ||
            text.indexOf('Sensei') !== -1
          ) {
            $(this).closest('.feed-note-wrap, .js-feed-note').hide();
          }
        });
      }
      
      hideLogs();
      
      var observer = new MutationObserver(function() {
        hideLogs();
      });
      
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      
      return this;
    },
    
    render: function() {
      return this;
    },
    
    bind_actions: function() {
      return this;
    },
    
    settings: function() {
      return this;
    },
    
    onSave: function() {
      return this;
    },
    
    destroy: function() {
      return this;
    }
  };
});
