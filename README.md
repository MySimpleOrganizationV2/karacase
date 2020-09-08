# Karacase
> Convert a string to karacase.


![node-current](https://img.shields.io/node/v/karacase?color=1976D2&style=flat-square) ![node-lts](https://img.shields.io/node/v-lts/karacase?color=1976D2&style=flat-square) 


![npm version](https://img.shields.io/npm/v/karacase?style=flat-square&color=1976D2&label=npm%20version)
![npm bundle size](https://img.shields.io/bundlephobia/min/karacase?style=flat-square&color=1976D2&label=npm%20bundle%20size)
![npm downloads](https://img.shields.io/npm/dt/karacase?color=1976D2&style=flat-square&label=npm%20downloads)
![npm type definitions](https://img.shields.io/npm/types/karacase?color=1976D2&style=flat-square)
![npm license](https://img.shields.io/npm/l/karacase?color=1976D2&style=flat-square&label=npm%20license)


![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/phillip9587/karacase?color=1976D2&style=flat-square)

## Install

Install with [npm](https://www.npmjs.com/) (requires [Node.js](https://nodejs.org/en/) >=10.22.0):

```sh
$ npm install --save karacase
```

## Usage

```js
const karacase = require('karacase');

console.log(karacase('var')); //=> 'myVar'
console.log(karacase('var', true)); //=> 'mySimpleVar'
console.log(karacase('var', true, 2)); //=> 'mySimpleVarV2'
console.log(karacase('var', false, 3)); //=> 'myVarV3'

console.log(karacase('static webserver')); //=> 'myStaticWebserver'
console.log(karacase('static-webserver', true)); //=> 'mySimpleStaticWebserver'
console.log(karacase('static_webserver', true, 2)); //=> 'mySimpleStaticWebserverV2'
console.log(karacase('static webserver', false, 3)); //=> 'myStaticWebserverV3'
```
