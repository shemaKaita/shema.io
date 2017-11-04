webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JQS = function () {
	function JQS() {
		_classCallCheck(this, JQS);

		this.loadScripts = [];
		this.loadScriptsReady = [];
		this.loadReady();
		this.load();
	}

	_createClass(JQS, [{
		key: 'load',
		value: function load() {
			var _this = this;

			$(window).on('load', function () {
				_this.loadScripts.forEach(function (script, index) {
					_this[script]();
				});
			});
		}
	}, {
		key: 'loadReady',
		value: function loadReady() {
			var _this2 = this;

			$(document).ready(function (e) {
				_this2.loadScriptsReady.forEach(function (script, index) {
					_this2[script]();
				});
			});
		}
	}]);

	return JQS;
}();

exports.default = JQS;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _second = __webpack_require__(4);

var _second2 = _interopRequireDefault(_second);

var _first = __webpack_require__(5);

var _first2 = _interopRequireDefault(_first);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jQuery = __webpack_require__(1);
var three = __webpack_require__(2);
window.$ = jQuery, window.jQuery = jQuery;

new _second2.default();
new _first2.default();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqs = __webpack_require__(0);

var _jqs2 = _interopRequireDefault(_jqs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Second = function (_JQS) {
	_inherits(Second, _JQS);

	function Second() {
		_classCallCheck(this, Second);

		var _this = _possibleConstructorReturn(this, (Second.__proto__ || Object.getPrototypeOf(Second)).call(this));

		_this.loadScriptsReady = [_this.changeTitle.name];
		return _this;
	}

	_createClass(Second, [{
		key: 'changeTitle',
		value: function changeTitle() {
			console.log('hi there');
			$('h3').text('Shema');
		}
	}]);

	return Second;
}(_jqs2.default);

exports.default = Second;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqs = __webpack_require__(0);

var _jqs2 = _interopRequireDefault(_jqs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var First = function (_JQS) {
	_inherits(First, _JQS);

	function First() {
		_classCallCheck(this, First);

		var _this = _possibleConstructorReturn(this, (First.__proto__ || Object.getPrototypeOf(First)).call(this));

		_this.loadScripts = [_this.logger.name, _this.greet.name];
		_this.loadScriptsReady = [_this.calc.name];
		return _this;
	}

	_createClass(First, [{
		key: "logger",
		value: function logger() {
			console.log("hello world");
		}
	}, {
		key: "greet",
		value: function greet() {
			console.log("Hello shema");
		}
	}, {
		key: "calc",
		value: function calc() {
			console.log(237 + 4998);
		}
	}]);

	return First;
}(_jqs2.default);

exports.default = First;

/***/ })
],[3]);