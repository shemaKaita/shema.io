webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


class Shema{
	constructor(message){
		this.msg = message;
	}
	greet(){
		console.log(`Hello ${this.msg}`);
	}
}

const greeting = new Shema("Shema");

__WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(($) => {
	greeting.greet();
});

/***/ })
],[1]);