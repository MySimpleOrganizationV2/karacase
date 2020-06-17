'use strict';

require('mocha');
const assert = require('assert').strict;
const karacase = require('.');

describe('karacase', () => {
  it('should uppercase a single character string', () => {
    assert.equal(karacase('a'), 'myA');
    assert.equal(karacase('Z'), 'myZ');
  });

  it('should work with spaces', () => {
    assert.equal(karacase('foo bar baz'), 'myFooBarBaz');
    assert.equal(karacase('foo     baz'), 'myFooBaz');
    assert.equal(karacase('  foo  bar   baz  '), 'myFooBarBaz');
  });

  it('should work with empty, null, undefined and only whitespaces', () => {
    assert.equal(karacase(''), '');
    assert.equal(karacase(null), '');
    assert.equal(karacase(undefined), '');
    assert.equal(karacase('   '), '');
  });

  it('should work with numbers', () => {
    assert.equal(karacase(3), 'my3');
    assert.equal(karacase('foo2bar5baz'), 'myFoo2bar5baz');
    assert.equal(karacase('foo 2 bar 5 baz'), 'myFoo2Bar5Baz');
  });

  it('should not lowercase existing camelcasing', () => {
    assert.equal(karacase('fooBarBaz'), 'myFooBarBaz');
    assert.equal(karacase('FooBarBaz'), 'myFooBarBaz');
    assert.equal(karacase(' FooBarBaz'), 'myFooBarBaz');
    assert.equal(karacase(' fooBarBaz'), 'myFooBarBaz');
  });

  it('should remove non-word-characters', () => {
    assert.equal(karacase('foo_bar-baz'), 'myFooBarBaz');
    assert.equal(karacase('foo.bar.baz'), 'myFooBarBaz');
    assert.equal(karacase('foo/bar/baz'), 'myFooBarBaz');
    assert.equal(karacase('foo[bar)baz'), 'myFooBarBaz');
    assert.equal(karacase('#foo+bar*baz'), 'myFooBarBaz');
    assert.equal(karacase('$foo~bar`baz'), 'myFooBarBaz');
    assert.equal(karacase('_foo_bar-baz-'), 'myFooBarBaz');
    assert.equal(karacase('_A_B_c-'), 'myABC');
  });

  it('should call .toString() when value is not a primitive', () => {
    assert.equal(karacase(['one', 'two', 'three']), 'myOneTwoThree');
    assert.equal(karacase([]), '');
    assert.equal(karacase(function foo_bar() {}), 'myFunctionFooBar');
    assert.equal(karacase({}), 'myObjectObject');
    assert.equal(karacase(/foo/), 'myFoo');
  });
});