/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-06-24[17:01:26]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const AspectTransformer = require('../');

describe('panto-transformer-aspect', () => {
    describe('#transform', () => {
        it('should aspect', done => {
            const file = {
                filename: 'a.js'
            };
            new AspectTransformer({
                aspect: tfile => {
                    assert.deepEqual(tfile, file);
                    done();
                }
            }).transform(file);
        });
        it('should fail if aspect is not a function', done => {
            const file = {
                filename: 'a.js'
            };
            new AspectTransformer({
                aspect: 1
            }).transform(file).catch(() => {
                done();
            });
        });
    });
});