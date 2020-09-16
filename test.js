'use strict';

require('mocha');
const assert = require('assert').strict;
const karacase = require('.');

describe('karacase', () => {
    it('should uppercase a single character string', () => {
        assert.strictEqual(karacase('a'), 'myA');
        assert.strictEqual(karacase('Z'), 'myZ');
        assert.strictEqual(karacase('6Z'), 'my6Z');
        assert.strictEqual(karacase('6Z', true), 'mySimple6Z');
        assert.strictEqual(karacase('a', true), 'mySimpleA');
        assert.strictEqual(karacase('a', true, 2), 'mySimpleAV2');
        assert.strictEqual(karacase('a', false, 2), 'myAV2');
    });

    it('should work with spaces', () => {
        assert.strictEqual(karacase('foo bar baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('foo     baz'), 'myFooBaz');
        assert.strictEqual(karacase('  foo  bar   baz  '), 'myFooBarBaz');
    });

    it('should work with empty, null, undefined and only whitespaces', () => {
        assert.strictEqual(karacase(''), '');
        assert.strictEqual(karacase(null), '');
        assert.strictEqual(karacase(undefined), '');
        assert.strictEqual(karacase('   '), '');
    });

    it('should work with numbers', () => {
        assert.strictEqual(karacase(3), 'my3');
        assert.strictEqual(karacase('foo2bar5baz'), 'myFoo2bar5baz');
        assert.strictEqual(karacase('foo 2 bar 5 baz'), 'myFoo2Bar5Baz');
    });

    it('should not lowercase existing camelcasing', () => {
        assert.strictEqual(karacase('fooBarBaz'), 'myFooBarBaz');
        assert.strictEqual(karacase('FooBarBaz'), 'myFooBarBaz');
        assert.strictEqual(karacase(' FooBarBaz'), 'myFooBarBaz');
        assert.strictEqual(karacase(' fooBarBaz'), 'myFooBarBaz');
    });

    it('should remove non-word-characters', () => {
        assert.strictEqual(karacase('foo_bar-baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('foo.bar.baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('foo/bar/baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('foo[bar)baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('#foo+bar*baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('$foo~bar`baz'), 'myFooBarBaz');
        assert.strictEqual(karacase('_foo_bar-baz-'), 'myFooBarBaz');
        assert.strictEqual(karacase('_A_B_c-'), 'myABC');
    });

    it('should call .toString() when value is not a primitive', () => {
        assert.strictEqual(karacase(['one', 'two', 'three']), 'myOneTwoThree');
        assert.strictEqual(karacase([]), '');
        assert.strictEqual(karacase(function foo_bar() { }), 'myFunctionFooBar');
        assert.strictEqual(karacase({}), 'myObjectObject');
        assert.strictEqual(karacase(/foo/), 'myFoo');
    });
});
