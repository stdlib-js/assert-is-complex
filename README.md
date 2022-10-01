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

# isComplex

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [64-bit][@stdlib/complex/float32] or [128-bit][@stdlib/complex/float64] complex number.



<section class="usage">

## Usage

```javascript
import isComplex from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex@deno/mod.js';
```

#### isComplex( value )

Tests if a value is a [64-bit][@stdlib/complex/float32] or [128-bit][@stdlib/complex/float64] complex number.

```javascript
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@deno/mod.js';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';

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
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@deno/mod.js';
import isComplex from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex@deno/mod.js';

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

-   <span class="package-name">[`@stdlib/assert/is-complex64`][@stdlib/assert/is-complex64]</span><span class="delimiter">: </span><span class="description">test if a value is a 64-bit complex number.</span>
-   <span class="package-name">[`@stdlib/assert/is-complex128`][@stdlib/assert/is-complex128]</span><span class="delimiter">: </span><span class="description">test if a value is a 128-bit complex number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-complex/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-complex/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-complex/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-complex/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-complex/main/LICENSE

[@stdlib/complex/float64]: https://github.com/stdlib-js/complex-float64/tree/deno

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32/tree/deno

<!-- <related-links> -->

[@stdlib/assert/is-complex64]: https://github.com/stdlib-js/assert-is-complex64/tree/deno

[@stdlib/assert/is-complex128]: https://github.com/stdlib-js/assert-is-complex128/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
