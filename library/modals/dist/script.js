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
    window.Modals = factory();
  }
})(function () {
  var _setup = _classPrivateFieldLooseKey("setup");

  var Modals = /*#__PURE__*/function () {
    function Modals(options) {
      _classCallCheck(this, Modals);

      Object.defineProperty(this, _setup, {
        value: _setup2
      });
      this.init();
    }

    _createClass(Modals, [{
      key: "init",
      value: function init() {
        _classPrivateFieldLooseBase(this, _setup)[_setup]();
      }
    }, {
      key: "clickOpenHandler",
      value: function clickOpenHandler(event) {
        this.open(event.target.dataset.modalOpen);
      }
    }, {
      key: "clickCloseHandler",
      value: function clickCloseHandler() {
        this.close();
      }
    }, {
      key: "open",
      value: function open(id) {
        this.modalsArray.get(id).classList.add(Modals.modalOpenClass);
      }
    }, {
      key: "close",
      value: function close() {
        this.$modals.forEach(function ($modal) {
          $modal.classList.remove(Modals.modalOpenClass);
        });
      }
    }]);

    return Modals;
  }();

  function _setup2() {
    var _this = this;

    this.$modals = Array.from(document.getElementsByClassName(Modals.modalClass));
    this.modalsArray = new Map();
    this.$modals.forEach(function ($modal) {
      var background = '<div class="modal__background" data-modal-close></div>';
      $modal.insertAdjacentHTML('afterbegin', background);

      _this.modalsArray.set($modal.id, $modal);
    });
    this.$openButtons = document.querySelectorAll('[data-modal-open]');
    this.$closeButtons = document.querySelectorAll('[data-modal-close]');
    this.clickOpenHandler = this.clickOpenHandler.bind(this);
    this.clickCloseHandler = this.clickCloseHandler.bind(this);
    this.$openButtons.forEach(function ($button) {
      $button.addEventListener('click', _this.clickOpenHandler);
    });
    this.$closeButtons.forEach(function ($button) {
      $button.addEventListener('click', _this.clickCloseHandler);
    });
  }

  Modals.modalClass = 'modal';
  Modals.modalOpenClass = 'modal--open';
  return Modals;
});
//# sourceMappingURL=script.js.map