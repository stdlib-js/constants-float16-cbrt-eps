/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var cbrt = require( '@stdlib/math-base-special-cbrt' );
var FLOAT16_EPSILON = require( '@stdlib/constants-float16-eps' );
var FLOAT16_CBRT_EPSILON = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FLOAT16_CBRT_EPSILON, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value equals the cube root of half-precision floating-point epsilon', function test( t ) {
	var expected = cbrt( FLOAT16_EPSILON );
	t.strictEqual( FLOAT16_CBRT_EPSILON, expected, 'returns expected value' );
	t.end();
});
