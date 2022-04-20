"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    window.Select = factory();
  }
})(function () {
  var _getSelectData = _classPrivateFieldLooseKey("getSelectData");

  var _setHtml = _classPrivateFieldLooseKey("setHtml");

  var _setup = _classPrivateFieldLooseKey("setup");

  var _setSelectHtml = _classPrivateFieldLooseKey("setSelectHtml");

  var Select = /*#__PURE__*/function () {
    /* Example options
    {
        selectClass:'select',     // String
        $select:document.getElementsByClassName(this.selectClass)[0],       // node element
        customSelectClass:'custom-select',     // String
    }
     */
    function Select(options) {
      _classCallCheck(this, Select);

      Object.defineProperty(this, _setSelectHtml, {
        value: _setSelectHtml2
      });
      Object.defineProperty(this, _setup, {
        value: _setup2
      });
      Object.defineProperty(this, _setHtml, {
        value: _setHtml2
      });
      Object.defineProperty(this, _getSelectData, {
        value: _getSelectData2
      });
      this.selectClass = options && options.selectClass ? options.selectClass : 'select';
      this.$select = options && options.$select ? options.$select : document.getElementsByClassName(this.selectClass)[0];
      this.customSelectClass = options && options.customSelectClass ? options.customSelectClass : 'custom-select';
      this.openClass = options && options.openClass ? options.openClass : this.customSelectClass + '--open';
      this.itemClass = options && options.itemClass ? options.itemClass : this.customSelectClass + '__item';
      this.selectedItemClass = options && options.selectedItemClass ? options.selectedItemClass : this.itemClass + '--selected';
      this.disabledItemClass = options && options.disabledItemClass ? options.disabledItemClass : this.itemClass + '--disabled';
      this.$customSelect = document.createElement('div');
      this.current = null;
      this.options = Array.from(this.$select.getElementsByTagName('option'));
      this.changeEvent = new Event('change');
      this.data = _classPrivateFieldLooseBase(this, _getSelectData)[_getSelectData]();
      this.init();
    }

    _createClass(Select, [{
      key: "init",
      value: function init() {
        this.$select.parentElement.appendChild(this.$customSelect);
        this.$customSelect.classList.add(this.customSelectClass);
        this.$customSelect.appendChild(this.$select);

        _classPrivateFieldLooseBase(this, _setHtml)[_setHtml]();
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(event) {
        var _this = this;

        var isSelectClick = function isSelectClick(click) {
          if (click === _this.$customSelect) {
            return true;
          } else if (click.closest('.' + _this.customSelectClass) && click.closest('.' + _this.customSelectClass) === _this.$customSelect) {
            return true;
          } else {
            return false;
          }
        };

        if (isSelectClick(event.target)) {
          var type = event.target.dataset.selectType;

          if (type === 'button') {
            this.toggle();
          } else if (type === 'value') {
            if (!event.target.classList.contains(this.disabledItemClass)) {
              this.select(event.target.dataset.selectIndex);
              this.close();
            }
          }
        } else {
          this.close();
        }
      }
    }, {
      key: "changeHandler",
      value: function changeHandler(event) {
        var _this2 = this;

        this.options = Array.from(this.$select.getElementsByTagName('option'));
        this.options.map(function (item, index) {
          var value;

          if (item.hasAttribute('value')) {
            value = item.getAttribute('value');
          } else {
            value = item.innerText;
          }

          if (value === _this2.$select.value) {
            _classPrivateFieldLooseBase(_this2, _setSelectHtml)[_setSelectHtml](index);
          }
        });
      }
    }, {
      key: "select",
      value: function select(index) {
        this.current = index;

        _classPrivateFieldLooseBase(this, _setSelectHtml)[_setSelectHtml](index);

        this.$select.value = this.options[index].value;
        this.$select.dispatchEvent(this.changeEvent);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        if (this.$customSelect.classList.contains(this.openClass)) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: "open",
      value: function open() {
        this.$customSelect.classList.add(this.openClass);
      }
    }, {
      key: "close",
      value: function close() {
        this.$customSelect.classList.remove(this.openClass);
      } // TODO: Сделать рефреш

    }]);

    return Select;
  }();

  function _getSelectData2() {
    var _this3 = this;

    this.options = Array.from(this.$select.getElementsByTagName('option'));
    var optionsArray = new Map();
    this.options.map(function (item, index) {
      var value = item.hasAttribute('value') ? item.getAttribute('value') : item.innerText;

      if (item.hasAttribute('selected')) {
        _this3.current = index;
      }

      var option = {
        name: item.innerText,
        selected: item.hasAttribute('selected'),
        disabled: item.hasAttribute('disabled'),
        hidden: item.hasAttribute('hidden'),
        index: index
      };
      optionsArray.set('index' + option.index, option);
    });

    if (this.current === null) {
      this.current = optionsArray.get('index' + 0).index;
    }

    return optionsArray;
  }

  function _setHtml2() {
    var list = '';

    var _iterator = _createForOfIteratorHelper(this.data.values()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (!item.hidden) {
          var classDisabled = '';
          var classSelected = '';

          if (item.selected) {
            classSelected = this.selectedItemClass;
          }

          if (item.disabled) {
            classDisabled = this.disabledItemClass;
          }

          list += "<div data-select-index=\"".concat(item.index, "\" data-select-type=\"value\" class=\"").concat(this.customSelectClass, "__item ").concat(classDisabled, "\">").concat(item.name, "</div>");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var template = "\n            <div data-select-type=\"button\" class=\"".concat(this.customSelectClass, "__input\">\n                <div data-select-type=\"button\" class=\"").concat(this.customSelectClass, "__input-name\">").concat(this.data.get('index' + this.current).name, "</div>\n                <div data-select-type=\"button\" class=\"").concat(this.customSelectClass, "__input-icon\"></div>\n            </div>\n            <div data-select-type=\"button\" class=\"").concat(this.customSelectClass, "__list\">\n                ").concat(list, "\n            </div>\n        ");
    this.$customSelect.insertAdjacentHTML('beforeEnd', template);

    _classPrivateFieldLooseBase(this, _setup)[_setup]();
  }

  function _setup2() {
    this.clickHandler = this.clickHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    document.addEventListener('click', this.clickHandler);
    this.$select.addEventListener('change', this.changeHandler);
    this.$name = this.$customSelect.querySelector('.' + this.customSelectClass + '__input-name');
    this.$items = this.$customSelect.querySelectorAll('.' + this.customSelectClass + '__item');
  }

  function _setSelectHtml2(index) {
    var _this4 = this;

    this.$name.innerText = this.data.get('index' + index).name;
    this.$items.forEach(function ($item) {
      if ($item.dataset.selectIndex === index) {
        $item.classList.add(_this4.selectedItemClass);
      } else {
        $item.classList.remove(_this4.selectedItemClass);
      }
    });
  }

  return Select;
});
//# sourceMappingURL=script.js.map