(function(quotes, Math){
    'use strict';
    
    var r = Math.floor(Math.random() * quotes.length),
        quote = quotes[r],
        output = '{0}\n-- {1}'.format(quote.text, quote.author);
    
    console.log(output);
}(quotes, Math));
