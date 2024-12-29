# package name here
![tests](https://github.com/substrate-system/is-ip/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/is-ip?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![Common Changelog](https://nichoth.github.io/badge/common-changelog.svg)](./CHANGELOG.md)
[![install size](https://flat.badgen.net/packagephobia/install/@substrate-system/is-ip?cache-control=no-cache)](https://packagephobia.com/result?p=@substrate-system/is-ip)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-Polyform_Non_Commercial-26bc71?style=flat-square)](LICENSE)

Check if a string is an IP address.


[See the docs](https://substrate-system.github.io/is-ip/)


<details><summary><h2>Contents</h2></summary>
<!-- toc -->
</details>

## install

```sh
npm i -S @substrate-system/is-ip
```

## Formats

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import { isIP } from '@substrate-system/is-ip'
```

### Common JS
```js
const isIP = require('@substrate-system/is-ip')
```

### pre-built JS
This package exposes minified JS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@namespace/package/dist/module.min.js ./public
```

#### HTML
```html
<script type="module" src="./module.min.js"></script>
```

------------------------------------------------------------------

## Example

Return either `0`, `4`, or `6` depending on the type of IP address.

```js
import { isIP } from '@substrate-system/is-ip'

isIP('::1')  // returns 6
isIP('127.0.0.1')  // returns 4
isIP('127.000.000.001')  // returns 0
isIP('127.0.0.1/24')  // returns 0
isIP('fhqwhgads')  // returns 0
```
