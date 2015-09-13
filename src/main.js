(function(quotes, Math, String, undefined){
    'use strict';

    (function(String, undefined){
        if (!String.prototype.format) {
            String.prototype.format = function() {
                var args = arguments;
                return this.replace(/{(\d+)}/g, function(match, number) {
                    return typeof args[number] !== 'undefined' ? args[number] : match;
                });
            };
        }
    }(String));
    
    var r = Math.floor(Math.random() * quotes.length),
        quote = quotes[r],
        output = '{0}\n-- {1}'.format(quote.text, quote.author);
    
    console.log(require('wordwrap')(80)(output));
}(quotes, Math, String));
