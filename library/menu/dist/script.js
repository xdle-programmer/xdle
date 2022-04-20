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
    window.Menu = factory();
  }
})(function () {
  var _setup = _classPrivateFieldLooseKey("setup");

  var Menu = /*#__PURE__*/function () {
    function Menu(options) {
      _classCallCheck(this, Menu);

      Object.defineProperty(this, _setup, {
        value: _setup2
      });
      this.init();
    }

    _createClass(Menu, [{
      key: "init",
      value: function init() {
        _classPrivateFieldLooseBase(this, _setup)[_setup]();
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(event) {
        var click = event.target;
        var isButtonClick = false;

        if (click.closest('[data-menu-target]') || click.dataset.menuTarget) {
          isButtonClick = true;
        }

        var isMenuClick = false;

        if (click.closest('[data-menu-id]') || click.dataset.menuId) {
          isMenuClick = true;
        }

        if (!isMenuClick && !isButtonClick) {
          this.closeAll();
        }
      }
    }, {
      key: "clickOpenHandler",
      value: function clickOpenHandler(event) {
        var activeButtonClass = event.target.dataset.buttonActiveClass;

        if (event.target.classList.contains(activeButtonClass)) {
          this.closeAll();
        } else {
          this.closeAll();
          this.open(event.target.dataset.menuTarget);
        }
      }
    }, {
      key: "open",
      value: function open(id) {
        var $menu = this.allMenuArray.get(id);
        var $buttons = Array.from(document.querySelectorAll('[data-menu-target="' + id + '"]'));
        var menuActiveClass = $menu.dataset.menuActiveClass;
        $menu.classList.add(menuActiveClass);

        if ($menu.dataset.backgroundSelector) {
          var $backgrounds = Array.from(document.querySelectorAll($menu.dataset.backgroundSelector));
          var backgroundActiveClass = $menu.dataset.backgroundActiveClass;
          $backgrounds.forEach(function ($background) {
            $background.classList.add(backgroundActiveClass);
          });
        }

        $buttons.forEach(function ($button) {
          var buttonActiveClass = $button.dataset.buttonActiveClass;
          $button.classList.add(buttonActiveClass);
        });
      }
    }, {
      key: "closeAll",
      value: function closeAll() {
        this.$allMenu.forEach(function ($menu) {
          var menuActiveClass = $menu.dataset.menuActiveClass;
          var id = $menu.dataset.menuId;
          $menu.classList.remove(menuActiveClass);
          var $buttons = Array.from(document.querySelectorAll('[data-menu-target="' + id + '"]'));

          if ($menu.dataset.backgroundSelector) {
            var $backgrounds = Array.from(document.querySelectorAll($menu.dataset.backgroundSelector));
            var backgroundActiveClass = $menu.dataset.backgroundActiveClass;
            $backgrounds.forEach(function ($background) {
              $background.classList.remove(backgroundActiveClass);
            });
          }

          $buttons.forEach(function ($button) {
            var buttonActiveClass = $button.dataset.buttonActiveClass;
            $button.classList.remove(buttonActiveClass);
          });
        });
      }
    }]);

    return Menu;
  }();

  function _setup2() {
    var _this = this;

    this.$allMenu = Array.from(document.querySelectorAll('[data-menu-id]'));
    this.allMenuArray = new Map();
    this.$allMenu.forEach(function ($menu) {
      _this.allMenuArray.set($menu.dataset.menuId, $menu);
    });
    this.$openButtons = document.querySelectorAll('[data-menu-target]');
    this.clickOpenHandler = this.clickOpenHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.$openButtons.forEach(function ($button) {
      $button.addEventListener('click', _this.clickOpenHandler);
    });
    document.addEventListener('click', this.clickHandler);
  }

  return Menu;
});
//# sourceMappingURL=script.js.map