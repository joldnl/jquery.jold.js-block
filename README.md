# jQuery JOLD Js-block

Version 1.0.2

## Summary

A jQuery plugin that places a onclick event causing a webpage top open on a block, looking for the first link in that block.


## Installation:
Install the plugin with npm and include it in your build process, or directly include the files in the head of your page.

### Install with npm (recommended):

```bash
$ npm install jquery.jold.js-block
```

After installing the plugin with npm, you still need to include the downloaded files from node_modules into your workflow.


### Include script from cdn:

```html
<!-- Include js from jsdelivr cdn -->
<script src="https://cdn.jsdelivr.net/npm/jquery.jold.js-block/jquery.jold.js-block.min.js"></script>
```

Load the plugin from jsdeliver CDN

## Using the plugin

#### Add click on an element:

```js
// Add click event with the url from the first found <a> in the element
$('.js-block').joldJsblock();
```

This example adds an onclick event on the selected element, it looks for the closest (first) link inside that block, skipping all '.js-block-skip' links.


## Requirements

- jQuery > 1.12.1


## Changelog


#### Version 1.0.0

* Initial commit.



## Author

Jurgen Oldenburg ( [@staxxnl](http://twitter.com/staxxnl) / [jold.nl](https://www.jold.nl) / [info@jold.nl](info@jold.nl) )

