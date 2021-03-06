# helper-lorem [![NPM version](https://badge.fury.io/js/helper-lorem.svg)](http://badge.fury.io/js/helper-lorem)

> Template helper for generator lorem-ipsum placeholder text. Should work with any template engine, but can also be used a regular javascript util.


## Install
### Install with [npm](npmjs.org)

```bash
npm i helper-lorem --save
```


## Run tests

```bash
npm test
```

## Register the helper

> This should work with any engine, here are a few examples

### [template](https://github.com/jonschlinkert/template)

```js
template.helper('lorem', require('helper-lorem'));
```

### [assemble](https://github.com/assemble/assemble)

```js
assemble.helper('lorem', require('helper-lorem'));
```

### [verb](https://github.com/jonschlinkert/verb)

```js
verb.helper('lorem', require('helper-lorem'));
```

### [handlebars](https://github.com/wycats/handlebars.js/)

```js
var handlebars = require('handlebars');
handlebars.registerHelper('lorem', require('helper-lorem'));
```

## Example usage

Handlebars:

```js
// use default options
var template = Handlebars.compile('{{lorem}}');
var result = template();

// pass options on the context
var context = {count: 7, units: 'words'}
var template = Handlebars.compile('{{lorem this}}');
var result = template(context);

// pass options on the helper hash
var template = Handlebars.compile('{{lorem count="7" units="words"}}');
var result = template();
```

Lo-Dash or Underscore:

```html
<!-- use default options -->
<%= lorem() %>

<!-- pass options on the context -->
<%= lorem({count: 7, units: 'words'}) %>
```

Verb (lo-dash, with special delimiters to avoid delimiter collision in documentation):

```html
<!-- use default options -->
{%= lorem() %}

<!-- pass options on the context -->
{%= lorem({count: 7, units: 'words'}) %}
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/helpers/helper-lorem/issues)

## Author

**Jon Schlinkert**
 
+ [github/helpers](https://github.com/helpers)
+ [twitter/helpers](http://twitter.com/helpers) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/jonschlinkert/verb) on November 11, 2014._