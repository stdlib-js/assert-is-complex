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

# isComplex

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [64-bit][@stdlib/complex/float32/ctor] or [128-bit][@stdlib/complex/float64/ctor] complex number.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-complex
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var isComplex = require( '@stdlib/assert-is-complex' );
```

#### isComplex( value )

Tests if a value is a [64-bit][@stdlib/complex/float32/ctor] or [128-bit][@stdlib/complex/float64/ctor] complex number.

```javascript
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );

var x = new Complex128( 1.0, 3.0 );
var bool = isComplex( x );
// returns true

x = new Complex64( 3.0, 1.0 );
bool = isComplex( x );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var isComplex = require( '@stdlib/assert-is-complex' );

var out = isComplex( new Complex64( 2.0, 2.0 ) );
// returns true

out = isComplex( new Complex128( 3.0, 1.0 ) );
// returns true

out = isComplex( {} );
// returns false

out = isComplex( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-complex64`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert-is-complex128`][@stdlib/assert/is-complex128]</span><span class="delimiter">: </span><span class="description">test if a value is a 128-bit complex number.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-complex.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-complex

[test-image]: https://github.com/stdlib-js/assert-is-complex/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-complex/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-complex/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-complex?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-complex.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-complex/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-complex/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-complex/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-complex/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-complex/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-complex/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-complex/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-complex/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex/main/LICENSE

[@stdlib/complex/float64/ctor]: https://github.com/stdlib-js/complex-float64-ctor

[@stdlib/complex/float32/ctor]: https://github.com/stdlib-js/complex-float32-ctor

<!-- <related-links> -->

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert-is-complex64

[@stdlib/assert/is-complex128]: https://github.com/stdlib-js/assert-is-complex128

<!-- </related-links> -->

</section>

<!-- /.links -->
