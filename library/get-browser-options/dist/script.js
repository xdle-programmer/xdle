"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.GetViewportOptions = factory();
  }
})(function () {
  var _setup = _classPrivateFieldLooseKey("setup");

  var GetViewportOptions = /*#__PURE__*/function () {
    function GetViewportOptions() {
      _classCallCheck(this, GetViewportOptions);

      Object.defineProperty(this, _setup, {
        value: _setup2
      });
      this.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
      this.scrollbarWidth = this.getScrollWidth();
      this.hoverAvailability = this.getHoverAvailability();

      _classPrivateFieldLooseBase(this, _setup)[_setup]();
    }

    _createClass(GetViewportOptions, [{
      key: "getScrollWidth",
      // Функция определения ширины скролла
      value: function getScrollWidth() {
        var div = document.createElement('div');
        var width = 0;
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        document.body.append(div);
        width = div.offsetWidth - div.clientWidth;
        div.remove();
        return width;
      } // Функция определения поддержки ховера

    }, {
      key: "getHoverAvailability",
      value: function getHoverAvailability() {
        var style = document.createElement('style');
        style.textContent = "\n                :root {\n                    --hover-device:false;\n                }\n                @media (hover) {\n                    :root {\n                        --hover-device:true;\n                    }\n                }\n            ";
        document.body.append(style);
        var hover = getComputedStyle(document.getElementsByTagName('body')[0]).getPropertyValue('--hover-device');

        if (hover === 'false') {
          return false;
        } else {
          return true;
        }
      }
    }, {
      key: "getViewportWidth",
      value: function getViewportWidth() {
        return this.viewportWidth;
      }
    }, {
      key: "getViewportHeight",
      value: function getViewportHeight() {
        return this.viewportHeight;
      }
    }, {
      key: "getFullOptions",
      value: function getFullOptions() {
        return {
          viewportWidth: this.viewportWidth,
          viewportHeight: this.viewportHeight,
          scrollbarWidth: this.scrollbarWidth,
          hoverAvailability: this.hoverAvailability
        };
      }
    }]);

    return GetViewportOptions;
  }();

  function _setup2() {
    var _this = this;

    // Переопределение ширины и высоты при ресайзе
    window.addEventListener('resize', function () {
      _this.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
      _this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    });
  }

  return GetViewportOptions;
});
//# sourceMappingURL=script.js.map