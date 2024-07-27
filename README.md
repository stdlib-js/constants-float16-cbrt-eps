<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Cube Root of Epsilon

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Cube root][@stdlib/math/base/special/cbrt] of [half-precision floating-point epsilon][@stdlib/constants/float16/eps].



<section class="usage">

## Usage

To use in Observable,

```javascript
FLOAT16_CBRT_EPSILON = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-cbrt-eps@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/constants-float16-cbrt-eps/tags). For example,

```javascript
FLOAT16_CBRT_EPSILON = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-cbrt-eps@v0.2.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var FLOAT16_CBRT_EPSILON = require( 'path/to/vendor/umd/constants-float16-cbrt-eps/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-cbrt-eps@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.FLOAT16_CBRT_EPSILON;
})();
</script>
```

#### FLOAT16_CBRT_EPSILON

[Cube root][@stdlib/math/base/special/cbrt] of [half-precision floating-point epsilon][@stdlib/constants/float16/eps].

```javascript
var bool = ( FLOAT16_CBRT_EPSILON === 0.09921256574801247 );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-maxabs@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/constants-float16-cbrt-eps@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool;
var a;
var b;
var i;

function isApprox( a, b ) {
    var delta;
    var tol;

    delta = abs( a - b );
    tol = FLOAT16_CBRT_EPSILON * maxabs( a, b );

    return ( delta <= tol );
}

for ( i = 0; i < 100; i++ ) {
    a = randu() * 10.0;
    b = a + randu() - 0.5;
    bool = isApprox( a, b );
    console.log( '%d %s approximately equal to %d', a, ( bool ) ? 'is' : 'is not', b );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/constants-float16/eps`][@stdlib/constants/float16/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a half-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/constants-float16/sqrt-eps`][@stdlib/constants/float16/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of half-precision floating-point epsilon.</span>
-   <span class="package-name">[`@stdlib/constants-float32/cbrt-eps`][@stdlib/constants/float32/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of single-precision floating-point epsilon.</span>
-   <span class="package-name">[`@stdlib/constants-float64/cbrt-eps`][@stdlib/constants/float64/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of double-precision floating-point epsilon.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float16-cbrt-eps.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float16-cbrt-eps

[test-image]: https://github.com/stdlib-js/constants-float16-cbrt-eps/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/constants-float16-cbrt-eps/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float16-cbrt-eps/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float16-cbrt-eps?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float16-cbrt-eps.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float16-cbrt-eps/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-float16-cbrt-eps/tree/deno
[deno-readme]: https://github.com/stdlib-js/constants-float16-cbrt-eps/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/constants-float16-cbrt-eps/tree/umd
[umd-readme]: https://github.com/stdlib-js/constants-float16-cbrt-eps/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/constants-float16-cbrt-eps/tree/esm
[esm-readme]: https://github.com/stdlib-js/constants-float16-cbrt-eps/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/constants-float16-cbrt-eps/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float16-cbrt-eps/main/LICENSE

[@stdlib/math/base/special/cbrt]: https://github.com/stdlib-js/math-base-special-cbrt/tree/umd

<!-- <related-links> -->

[@stdlib/constants/float16/eps]: https://github.com/stdlib-js/constants-float16-eps/tree/umd

[@stdlib/constants/float16/sqrt-eps]: https://github.com/stdlib-js/constants-float16-sqrt-eps/tree/umd

[@stdlib/constants/float32/cbrt-eps]: https://github.com/stdlib-js/constants-float32-cbrt-eps/tree/umd

[@stdlib/constants/float64/cbrt-eps]: https://github.com/stdlib-js/constants-float64-cbrt-eps/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
