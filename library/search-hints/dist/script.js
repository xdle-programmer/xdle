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
    window.SearchBox = factory();
  }
})(function () {
  var _createDom = _classPrivateFieldLooseKey("createDom");

  var _setup = _classPrivateFieldLooseKey("setup");

  var _inputEventHandler = _classPrivateFieldLooseKey("inputEventHandler");

  var _toggleFocusClass = _classPrivateFieldLooseKey("toggleFocusClass");

  var _toggleClearButton = _classPrivateFieldLooseKey("toggleClearButton");

  var SearchBox = /*#__PURE__*/function () {
    /* Example options
    {
        wrapperClass:'search',     // String
        $wrapper: document.getElementsByClassName(this.formClass)[0],       // node element
        mainClass:'search-box',     // String
        buttonText:'Найти',     // String
        placeholderText:'Поиск',     // String
        completeMinSymbols:3,     // String
        showHintsClass: 'search-box--open'
    }
     */
    function SearchBox(options) {
      _classCallCheck(this, SearchBox);

      Object.defineProperty(this, _toggleClearButton, {
        value: _toggleClearButton2
      });
      Object.defineProperty(this, _toggleFocusClass, {
        value: _toggleFocusClass2
      });
      Object.defineProperty(this, _inputEventHandler, {
        value: _inputEventHandler2
      });
      Object.defineProperty(this, _setup, {
        value: _setup2
      });
      Object.defineProperty(this, _createDom, {
        value: _createDom2
      });
      this.wrapperClass = options && options.wrapperClass ? options.wrapperClass : 'search';
      this.$wrapper = options && options.$wrapper ? options.$wrapper : document.getElementsByClassName(this.wrapperClass)[0];
      this.mainClass = options && options.mainClass ? options.mainClass : 'search-box';
      this.buttonText = options && options.buttonText ? options.buttonText : 'Найти';
      this.placeholderText = options && options.placeholderText ? options.placeholderText : 'Поиск';
      this.completeMinSymbols = options && options.completeMinSymbols ? options.completeMinSymbols : 3;
      this.showHintsClass = options && options.showHintsClass ? options.showHintsClass : this.mainClass + '--open';
      this.init();
    }

    _createClass(SearchBox, [{
      key: "init",
      value: function init() {
        this.$wrapper.innerHTML = _classPrivateFieldLooseBase(this, _createDom)[_createDom]();

        _classPrivateFieldLooseBase(this, _setup)[_setup]();
      }
    }, {
      key: "submitHandler",
      value: function submitHandler(event) {
        event.preventDefault();
      }
    }, {
      key: "inputHandler",
      value: function inputHandler() {
        _classPrivateFieldLooseBase(this, _toggleClearButton)[_toggleClearButton]();

        _classPrivateFieldLooseBase(this, _inputEventHandler)[_inputEventHandler]();
      }
    }, {
      key: "showHints",
      value: function showHints($hints) {
        this.$hintsWrapper.innerHTML = $hints;
        this.$box.classList.add(this.showHintsClass);
      }
    }, {
      key: "hideHints",
      value: function hideHints() {
        this.$box.classList.remove(this.showHintsClass);
      }
    }, {
      key: "clearHints",
      value: function clearHints() {
        this.$hintsWrapper.innerHTML = '';
      }
    }]);

    return SearchBox;
  }();

  function _createDom2() {
    return "\n                <form action class=\"".concat(this.mainClass, "\" role=\"search\"> \n                    <div class=\"").concat(this.mainClass, "__input-wrapper\" tabindex=\"1\">\n                        <input type=\"search\" class=\"").concat(this.mainClass, "__input\" placeholder=\"").concat(this.placeholderText, "\">\n                        <div class=\"").concat(this.mainClass, "__clear-button\"></div>\n                        <div class=\"").concat(this.mainClass, "__hints\"></div>\n                    </div>\n                    <div class=\"").concat(this.mainClass, "__back-button\"></div>\n                    <button type=\"submit\" class=\"").concat(this.mainClass, "__button\">").concat(this.buttonText, "</button>\n                </form>            \n            ");
  }

  function _setup2() {
    var _this = this;

    this.$box = this.$wrapper.getElementsByClassName(this.mainClass)[0];
    this.$input = this.$wrapper.getElementsByClassName(this.mainClass + '__input')[0];
    this.$inputWrapper = this.$wrapper.getElementsByClassName(this.mainClass + '__input-wrapper')[0];
    this.$clearButton = this.$wrapper.getElementsByClassName(this.mainClass + '__clear-button')[0];
    this.$hintsWrapper = this.$wrapper.getElementsByClassName(this.mainClass + '__hints')[0];
    this.submitHandler = this.submitHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.$box.addEventListener('submit', this.submitHandler);
    this.$input.addEventListener('input', this.inputHandler);
    this.$clearButton.addEventListener('click', function () {
      _this.$input.value = '';

      _classPrivateFieldLooseBase(_this, _toggleClearButton)[_toggleClearButton]();

      _this.$input.focus();
    });
    this.$inputWrapper.addEventListener('focusin', function () {
      _classPrivateFieldLooseBase(_this, _toggleFocusClass)[_toggleFocusClass](true);
    });
    this.$inputWrapper.addEventListener('focusout', function () {
      _classPrivateFieldLooseBase(_this, _toggleFocusClass)[_toggleFocusClass](false);
    });
  }

  function _inputEventHandler2() {
    this.completeEvent = new CustomEvent('completeHint', {
      detail: {
        value: this.$input.value
      }
    });
    var length = this.$input.value.length;

    if (length >= this.completeMinSymbols) {
      this.$wrapper.dispatchEvent(this.completeEvent);
    } else {
      this.hideHints();
      this.clearHints();
    }
  }

  function _toggleFocusClass2(state) {
    var _this2 = this;

    var onFocusClass = this.mainClass + '--on-focus';

    if (state) {
      this.$box.classList.add(onFocusClass);
    } else {
      this.$box.classList.remove(onFocusClass);
      setTimeout(function () {
        _this2.hideHints();
      }, 100);
    }
  }

  function _toggleClearButton2() {
    var length = this.$input.value.length;
    var notEmptyClass = this.mainClass + '--not-empty';

    if (length > 0) {
      this.$box.classList.add(notEmptyClass);
    } else {
      this.$box.classList.remove(notEmptyClass);
    }
  }

  return SearchBox;
});
//# sourceMappingURL=script.js.map