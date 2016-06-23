# panto-transformer-aspect
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Aspect transformer for panto.

```js
panto.loadTransformer('aspect');

panto.pick('**/*.js').pipe(panto.aspect({
    aspect: file => {}
})).end();
```

## options:
 - aspect: function

[npm-url]: https://npmjs.org/package/panto-transformer-aspect
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-aspect.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-aspect.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-aspect
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-aspect.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-aspect#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-aspect/dev-status.svg
