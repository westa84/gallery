/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/super-event-emitter/dist/super-event-emitter.min.js":
/*!**************************************************************************!*\
  !*** ./node_modules/super-event-emitter/dist/super-event-emitter.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(\"undefined\"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,\"a\",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=\"\",t(t.s=0)}([function(e,t,n){\"use strict\";e.exports=n(1)},function(e,t,n){\"use strict\";function i(e,t){if(\"forEach\"in Array.prototype)e.forEach(t);else for(var n=0;n<e.length;n+=1)t(e[n])}function r(e,t){if(\"filter\"in Array.prototype)return e.filter(t);for(var n=[],i=0;i<e.length;i+=1){var r=e[i];t(r)&&n.push(r)}return n}function o(e,t){if(!e)throw new Error(t)}function s(e){return\"string\"==typeof e}function a(e){return\"function\"==typeof e}function u(){if(!(this instanceof u))return new u;this._listeners=[]}/**\n * @author Piotr Kowalski <piecioshka@gmail.com> (https://piecioshka.pl/)\n * @name super-event-emitter\n * @description Super small (2KB) and simple interpretation of popular event management.\n * @version 4.1.6\n * @license MIT\n * @example\n * var bar = {}; // Or any other object.\n * EventEmitter.mixin(bar);\n * bar.on('foo', function () {\n *     console.log('foo event emitted');\n * });\n * bar.emit('foo');\n */\nvar c=n(2),f={on:function(e,t,n){return o(s(e),\"EventEmitter#on: name is not a string\"),o(a(t),\"EventEmitter#on: fn is not a function\"),n=n||this,this._listeners.push({name:e,fn:t,ctx:n}),this},once:function(e,t,n){function i(){t.apply(n,arguments),r.off(e,i)}n=n||this;var r=this;return this.on(e,i,n),this},off:function(e,t){return this._listeners=e?r(this._listeners,function(n){return n.name!==e||!!a(t)&&n.fn!==t}):[],this},emit:function(e,t){return o(s(e),\"EventEmitter#emit: name is not a string\"),i(this._listeners,function(n){n.name===e&&n.fn.call(n.ctx,t),/^all|\\*$/.test(n.name)&&n.fn.call(n.ctx,e,t)}),this}};f.addEventListener=f.addListener=f.bind=f.on,f.removeEventListener=f.removeListener=f.unbind=f.off,f.dispatchEventListener=f.dispatchListener=f.trigger=f.emit,u.prototype=f,u.mixin=function(e){var t=new u;for(var n in t)e[n]=t[n];return e},u.prototype.mixin=u.mixin,u.VERSION=c.version,e.exports=u},function(e,t){e.exports={name:\"super-event-emitter\",description:\"Super small (2KB) and simple interpretation of popular event management.\",version:\"4.1.6\",license:\"MIT\",author:{name:\"Piotr Kowalski\",email:\"piecioshka@gmail.com\",url:\"https://piecioshka.pl/\"},scripts:{build:\"webpack --profile\",watch:\"webpack -w\",test:\"jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json\",coverage:\"istanbul cover jasmine JASMINE_CONFIG_PATH=test/unit/jasmine.json\",coveralls:\"npm run coverage && cat ./coverage/lcov.info | coveralls -v\",version:\"npm run build && git add dist/ && auto-changelog -p && git add CHANGELOG.md\"},\"auto-changelog\":{\"commit-limit\":!1,template:\".github/CHANGELOG_TEMPLATE.hbs\"},repository:{type:\"git\",url:\"http://github.com/piecioshka/super-event-emitter.git\"},devDependencies:{\"auto-changelog\":\"^1.4.5\",coveralls:\"^3.0.0\",istanbul:\"^0.4.4\",jasmine:\"^2.4.1\",\"json-loader\":\"^0.5.4\",\"string-replace-loader\":\"^1.0.3\",webpack:\"^3.10.0\"},files:[\"dist\",\"src\",\"index.js\",\"package.json\",\"README.md\"],keywords:[\"super\",\"event\",\"emitter\",\"mixin\",\"on\",\"off\",\"emit\",\"trigger\",\"simple\"],main:\"./dist/super-event-emitter.min.js\"}}])});\n\n//# sourceURL=webpack:///./node_modules/super-event-emitter/dist/super-event-emitter.min.js?");

/***/ }),

/***/ "./scripts/components/thumb-list.component.js":
/*!****************************************************!*\
  !*** ./scripts/components/thumb-list.component.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EventEmitter = __webpack_require__(/*! super-event-emitter */ \"./node_modules/super-event-emitter/dist/super-event-emitter.min.js\");\r\nconst {Thumb} = __webpack_require__(/*! ./thumb.component */ \"./scripts/components/thumb.component.js\");\r\n\r\nclass ThumbList {\r\n        constructor() {\r\n            EventEmitter.mixin(this);\r\n\r\n            const $el = document.createElement('div');\r\n            $el.setAttribute('id', 'thumb-list');\r\n\r\n            const $app = document.querySelector('#app');\r\n            $app.append($el);\r\n        }\r\n\r\n\r\n        render(photos) {\r\n            photos.forEach(({ thumb, image }) => {\r\n                const photo = new Thumb(thumb);\r\n                photo.render();\r\n\r\n                photo.on('click', () => {\r\n                    this.trigger('click:thumb', { image });\r\n                });\r\n            });\r\n        }\r\n\r\n    }\r\n\r\nmodule.exports = {\r\n    ThumbList\r\n}\n\n//# sourceURL=webpack:///./scripts/components/thumb-list.component.js?");

/***/ }),

/***/ "./scripts/components/thumb.component.js":
/*!***********************************************!*\
  !*** ./scripts/components/thumb.component.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const EventEmitter = __webpack_require__(/*! super-event-emitter */ \"./node_modules/super-event-emitter/dist/super-event-emitter.min.js\");\r\n\r\nclass Thumb {\r\n        constructor(url) {\r\n            EventEmitter.mixin(this);\r\n            this.url = url;\r\n        }\r\n        render() {\r\n            const $el = document.createElement('img');\r\n            $el.setAttribute('src', this.url);\r\n            $el.addEventListener('click', () => {\r\n                this.trigger('click');\r\n            });\r\n\r\n            const $app = document.querySelector('#app');\r\n            $app.append($el);\r\n        }\r\n    }\r\n\r\n    module.exports = {\r\n        Thumb\r\n    }\n\n//# sourceURL=webpack:///./scripts/components/thumb.component.js?");

/***/ }),

/***/ "./scripts/components/title.component.js":
/*!***********************************************!*\
  !*** ./scripts/components/title.component.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Title {\r\n    render() {\r\n        const $el = document.createElement('h2');\r\n        $el.textContent = 'Galeria';\r\n        document.querySelector('#app').append($el);\r\n    }\r\n}\r\nmodule.exports = { Title };\n\n//# sourceURL=webpack:///./scripts/components/title.component.js?");

/***/ }),

/***/ "./scripts/components/zoom.component.js":
/*!**********************************************!*\
  !*** ./scripts/components/zoom.component.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Zoom {\r\n    render(image) {\r\n        const $zoom = document.querySelector('#zoom');\r\n        if ($zoom) {\r\n            $zoom.remove();\r\n        }\r\n\r\n        const $div = document.createElement('div');\r\n        $div.setAttribute('id', 'zoom');\r\n\r\n        const $el = document.createElement('img');\r\n        $el.setAttribute('src', image);\r\n\r\n        $div.append($el);\r\n\r\n        const $app = document.querySelector('#app');\r\n        $app.append($div);\r\n\r\n        //$el.classList.add('zoom');\r\n        //document.body.append($el);\r\n    }\r\n}\r\nmodule.exports = {\r\n    Zoom\r\n}\n\n//# sourceURL=webpack:///./scripts/components/zoom.component.js?");

/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Title } = __webpack_require__(/*! ./components/title.component */ \"./scripts/components/title.component.js\");\r\nconst { Zoom } = __webpack_require__(/*! ./components/zoom.component */ \"./scripts/components/zoom.component.js\");\r\nconst { ThumbList } = __webpack_require__(/*! ./components/thumb-list.component */ \"./scripts/components/thumb-list.component.js\");\r\nconst { PhotosService } = __webpack_require__(/*! ./services/photos.service */ \"./scripts/services/photos.service.js\");\r\n\r\n\r\nfunction setup() {\r\n    const title = new Title();\r\n    title.render();\r\n\r\n    const zoom = new Zoom();\r\n\r\n    const thumbList = new ThumbList();\r\n\r\n\r\n    thumbList.on('click:thumb', ({ image }) => {\r\n        zoom.render(image);\r\n    });\r\n\r\n    PhotosService.fetchPhotosAsync()\r\n        .then(({ photos }) => {\r\n            thumbList.render(photos);\r\n        });\r\n}\r\n\r\nwindow.addEventListener('DOMContentLoaded', setup);\n\n//# sourceURL=webpack:///./scripts/main.js?");

/***/ }),

/***/ "./scripts/services/photos.service.js":
/*!********************************************!*\
  !*** ./scripts/services/photos.service.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(" class PhotosService {\r\n        fetchPhotos() {\r\n            return window.fetch('backend/db.json')\r\n                .then((response) => {\r\n                    return response.json();\r\n                })\r\n        }\r\n\r\n        async fetchPhotosAsync() {\r\n            const response = await window.fetch('backend/db.json');\r\n            const data = await response.json();\r\n            return data;\r\n        }\r\n    }\r\n\r\n    module.exports = {\r\n       PhotosService: new PhotosService() //Singleton\r\n    };\n\n//# sourceURL=webpack:///./scripts/services/photos.service.js?");

/***/ })

/******/ });