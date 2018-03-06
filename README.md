# js-camelcase

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

JavaScript Camelcase string. Use for both node.js and browser


## Installation

`$ npm install --save js-camelcase`

or

`$ yarn add js-camelcase`


## Usage

#### Node.JS

```js
const toCamelCase = require('js-camelcase');

console.log(toCamelCase('foo-bar'));
console.log(toCamelCase('foo_bar'));
console.log(toCamelCase('Foo-Bar'));
console.log(toCamelCase('--foo.bar'));
console.log(toCamelCase('__foo__bar__'));
console.log(toCamelCase('foo bar'));
console.log(toCamelCase('foo', 'bar'));
console.log(toCamelCase('__foo__', '--bar_'));

// All above result are 'fooBar'
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/js-camelcase/index.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/js-camelcase"></script>
```
##### Usage
```html
<script>
	console.log(toCamelCase('foo-bar'));
	console.log(toCamelCase('foo_bar'));
	console.log(toCamelCase('Foo-Bar'));
	console.log(toCamelCase('--foo.bar'));
	console.log(toCamelCase('__foo__bar__'));
	console.log(toCamelCase('foo bar'));
	console.log(toCamelCase('foo', 'bar'));
	console.log(toCamelCase('__foo__', '--bar_'));
</script>
```

## API

### toCamelCase(str || str[])

Returns a new string which is camelcase format of str (or concat of str[]).


## Related


[npm-image]: https://img.shields.io/npm/v/js-camelcase.svg?style=flat
[npm-url]: https://www.npmjs.com/package/js-camelcase
[downloads-image]: https://img.shields.io/npm/dm/js-camelcase.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/js-camelcase
