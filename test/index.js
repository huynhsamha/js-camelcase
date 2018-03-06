const toCamelCase = require('../index');

console.log(toCamelCase('string')); // => string
console.log(toCamelCase('camelCase')); // => camelCase
console.log(toCamelCase('param-case')); // => paramCase
console.log(toCamelCase('PascalCase')); // => pascalCase
console.log(toCamelCase('UPPER_CASE')); // => upperCase
console.log(toCamelCase('snake_case')); // => snakeCase
console.log(toCamelCase('sentence case')); // => sentenceCase
console.log(toCamelCase('Title Case')); // => titleCase
console.log(toCamelCase('dot.case')); // => // dotCase

console.log(toCamelCase('')); // => ''
console.log(toCamelCase(null)); // => ''
console.log(toCamelCase(undefined)); // => ''

console.log(toCamelCase('Abc ___ 123 ___ xYz')); // => abc123XYz
console.log(toCamelCase('123__abc  ... ?// {#} def 12')); // => 123AbcDef12
console.log(toCamelCase('	tab space ??? ________')); // => tabSpace
console.log(toCamelCase('___?||123  abc|| 123..123')); // => 123Abc123123
console.log(toCamelCase('!@#$%  {}|":;" ABC XyZ G123H')); // => abcXyZG123h
console.log(toCamelCase(' ^&* #DEFine x: 15 + ==')); // => defineX15
console.log(toCamelCase('123456789')); // => 123456789
