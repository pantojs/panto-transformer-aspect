/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[10:32:40]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.2
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');

class AspectTransformer extends Transformer {
    _transform(file) {
        const {
            aspect
        } = this.options;

        return new Promise(resolve => {
            if (panto._.isFunction(aspect)) {
                aspect(file);
            } else {
                throw new Error(`AspectTransform error: "aspect" must be a function`);
            }
            resolve(file);
        });
    }
}

module.exports = AspectTransformer;