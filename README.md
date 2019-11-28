# jQuery JOLD Js-block

Version 1.0.2

## Summary

A jQuery plugin that places a onclick event causing a webpage top open on a block, looking for the first link in that block.

## Usage

Include `jquery.jold.js-block.min.js` after calling jQuery in the footer. Alternatively, include in your `plugins.js` file if using [HTML5 Boilerplate](http://html5boilerplate.com).


### Installation

```bash
$ npm install jquery.jold.js-block
```

### Initialize the plugin

```js
$('.js-block').joldJsblock();
```

This example opens adds an onclick event on the selected element, it looks for the closest link inside that block, skipping all '.js-block-skip' links.


## Requirements

Tested with jQuery 1.12.1.


## Changelog


#### Version 1.0.0

* Initial commit.



## Author

Jurgen Oldenburg ( [@staxxnl](http://twitter.com/staxxnl) / [jold.nl](https://www.jold.nl) / [info@jold.nl](info@jold.nl) )

