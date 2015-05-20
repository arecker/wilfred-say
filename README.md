# wilfred-say

Print Wilfred quotes to the commandline.

[![Build Status](http://travis-ci.org/arecker/wilfred-say.svg?branch=master)](http://travis-ci.org/arecker/wilfred-say)

## Building

To build the project, just run ```make```

    $ make

## Installing

Running the grunt task should create the binary ```build/bin/wilfred-say```.  You can run this executable directly, or place it in the system  bin by running

    $ sudo make install

Alternatively, if you are comfortable with node you are free to run the minified script generated as ```build/wilfred-say.js``` directly with node.  Whatever floats your boat.

    $ node wilfred-say.js
