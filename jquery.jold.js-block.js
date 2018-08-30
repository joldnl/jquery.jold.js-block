/*!
 * JOLD jQuery js-block 1.0.0
 *
 * Copyright (c) 2018 JOLD Interactive; Jurgen Oldenburg <info@jold.nl>
 *
 * A jQuery plugin that places a onclick event on a block, looking for the first link in that block.
 * See README.md for usage
 *
 * Licences: BSD-3-Clause
 * https://opensource.org/licenses/BSD-3-Clause
 */
(function($){

    var JoldJsblock = function( element, options ) {

        var obj         = this;
        var $element    = $(element);

        /**
         * Pick up the options passed to the plugin
         */
        var settings = $.extend({
            param: 'defaultValue'
        }, options || {});


        $element.on('click', function(){

            var closestHref = $(this).find("a").not('.js-block-skip').attr("href");
            window.location = closestHref;
            return false;

        });

    };


    $.fn.joldJsblock = function( options ) {

        var element = $(this);

        // Return early if this element already has a plugin instance
        if (element.data('joldJsblock')) return element.data('joldJsblock');

        // pass options to plugin constructor
        var joldJsblock = new JoldJsblock( this, options );

        // Store plugin object in this element's data
        element.data('joldJsblock', joldJsblock);

        return joldJsblock;

    };

})(jQuery);
