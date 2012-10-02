;(function ( $, window, undefined ) {

  var pluginName = 'cakeMapIframe',
      document = window.document,
      defaults = {
        location: "Miami, FL",
        width: 425,
        height: 350
      };

  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {
    var location = this.options.location,
    width = this.options.width,
    height = this.options.height,
    ele = $(this.element);
    location = location.replace(/ /g, '+');
    iframe = '<iframe width="'+width+'" height="'+height+'" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q='+location+'&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear='+location+'&amp;z=12&amp;output=embed"></iframe>'
    ele.html(iframe);
  };


  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

}(jQuery, window));