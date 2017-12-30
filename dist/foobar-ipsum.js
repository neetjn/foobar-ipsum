(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("foobarIpsum", [], factory);
	else if(typeof exports === 'object')
		exports["foobarIpsum"] = factory();
	else
		root["foobarIpsum"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dictionary = __webpack_require__(1);

var _dictionary2 = _interopRequireDefault(_dictionary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {

  /**
   * Represents the core text generator.
   * @param {object} opts - Options for generator to consume.
   * @returns {string}
   */
  function _class(opts) {
    _classCallCheck(this, _class);

    opts = Object.assign({}, opts);
    opts.sentenceLowerBound = opts.sentenceLowerBound || 5;
    opts.sentenceUpperBound = opts.sentenceUpperBound || 15;
    opts.paragraphLowerBound = opts.paragraphLowerBound || 3;
    opts.paragraphUpperBound = opts.paragraphUpperBound || 7;
    opts.dictionary = opts.dictionary || _dictionary2.default.words;

    this.opts = opts;
  }

  /**
   * Generate a random integer given a minimum and maximum value.
   * @param {int} min - Minimum bound for random integer.
   * @param {int} max - Maximum bound for random integer.
   */


  _createClass(_class, [{
    key: '_randomInt',
    value: function _randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    /**
     * Generate a random word given the provided dictionary.
     * @returns {string}
     */

  }, {
    key: 'word',
    value: function word() {
      return this.opts.dictionary[this._randomInt(0, this.opts.dictionary.length - 1)];
    }

    /**
     * Generate a random sentence given the provided dictionary and sentence bounds.
     * @returns {string}
     */

  }, {
    key: 'sentence',
    value: function sentence() {
      var sentence = '';
      var bounds = {
        min: 0,
        max: this._randomInt(this.opts.sentenceLowerBound, this.opts.sentenceUpperBound)
      };

      while (bounds.min < bounds.max) {
        sentence += ' ' + this.word();
        bounds.min++;
      }

      if (sentence.length) {
        sentence = sentence.slice(1);
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }

      return sentence;
    }

    /**
     * Generate a random paragraph given the provided dictionary and paragraph bounds.
     * @returns {string}
     */

  }, {
    key: 'paragraph',
    value: function paragraph() {
      var paragraph = '';
      var bounds = {
        min: 0,
        max: this._randomInt(this.opts.paragraphLowerBound, this.opts.paragraphUpperBound)
      };

      while (bounds.min < bounds.max) {
        paragraph += '. ' + this.sentence();
        bounds.min++;
      }

      if (paragraph.length) {
        paragraph = paragraph.slice(2);
        paragraph += '.';
      }

      return paragraph;
    }
  }]);

  return _class;
}();

exports.default = _class;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"words":["ad","adipisicing","Aenean","aliqua","aliquip","amet","anim","aute","bar","barfoo","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eget","eiusmod","eleifend","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","foo","foobar","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","leo","Lorem","magna","minim","mollit","nam","nec","nisi","non","nostrud","nulla","occaecat","officia","pariatur","parturient","proident","qui","quis","reprehenderit","sint","sit","sunt","tellus","tempor","tempus","ullamco","ut","velit","veniam","Vivamus","voluptate"]}

/***/ })
/******/ ]);
});