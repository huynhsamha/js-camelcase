const toCamelCase = require('../index');

console.log(toCamelCase('foo-bar'));
console.log(toCamelCase('foo_bar'));
console.log(toCamelCase('Foo-Bar'));
console.log(toCamelCase('--foo.bar'));
console.log(toCamelCase('__foo__bar__'));
console.log(toCamelCase('foo bar'));
console.log(toCamelCase('foo', 'bar'));
console.log(toCamelCase('__foo__', '--bar_'));
