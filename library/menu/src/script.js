(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.Menu = factory();
    }
})(function () {

    class Menu {
        constructor(options) {
            this.init();
        }

        init() {
            this.#setup();
        }

        #setup() {
            this.$allMenu = Array.from(document.querySelectorAll('[data-menu-id]'));
            this.allMenuArray = new Map();
            this.$allMenu.forEach(($menu) => {
                this.allMenuArray.set($menu.dataset.menuId, $menu);
            });

            this.$openButtons = document.querySelectorAll('[data-menu-target]');

            this.clickOpenHandler = this.clickOpenHandler.bind(this);

            this.clickHandler = this.clickHandler.bind(this);

            this.$openButtons.forEach(($button) => {
                $button.addEventListener('click', this.clickOpenHandler);
            });

            document.addEventListener('click', this.clickHandler);
        }

        clickHandler(event) {
            const click = event.target;

            let isButtonClick = false;

            if (click.closest('[data-menu-target]') || click.dataset.menuTarget) {
                isButtonClick = true;
            }

            let isMenuClick = false;

            if (click.closest('[data-menu-id]') || click.dataset.menuId) {
                isMenuClick = true;
            }

            if (!isMenuClick && !isButtonClick) {
                this.closeAll();
            }
        }

        clickOpenHandler(event) {
            let activeButtonClass = event.target.dataset.buttonActiveClass;

            if (event.target.classList.contains(activeButtonClass)) {
                this.closeAll();
            } else {
                this.closeAll();
                this.open(event.target.dataset.menuTarget);
            }
        }

        open(id) {
            let $menu = this.allMenuArray.get(id);
            let $buttons = Array.from(document.querySelectorAll('[data-menu-target="' + id + '"]'));
            let menuActiveClass = $menu.dataset.menuActiveClass;
            $menu.classList.add(menuActiveClass);

            if ($menu.dataset.backgroundSelector) {
                let $backgrounds = Array.from(document.querySelectorAll($menu.dataset.backgroundSelector));
                let backgroundActiveClass = $menu.dataset.backgroundActiveClass;

                $backgrounds.forEach(($background) => {
                    $background.classList.add(backgroundActiveClass);
                });
            }

            $buttons.forEach(($button) => {
                let buttonActiveClass = $button.dataset.buttonActiveClass;
                $button.classList.add(buttonActiveClass);
            });
        }

        closeAll() {
            this.$allMenu.forEach(($menu) => {
                let menuActiveClass = $menu.dataset.menuActiveClass;
                let id = $menu.dataset.menuId;
                $menu.classList.remove(menuActiveClass);
                let $buttons = Array.from(document.querySelectorAll('[data-menu-target="' + id + '"]'));

                if ($menu.dataset.backgroundSelector) {
                    let $backgrounds = Array.from(document.querySelectorAll($menu.dataset.backgroundSelector));
                    let backgroundActiveClass = $menu.dataset.backgroundActiveClass;

                    $backgrounds.forEach(($background) => {
                        $background.classList.remove(backgroundActiveClass);
                    });
                }

                $buttons.forEach(($button) => {
                    let buttonActiveClass = $button.dataset.buttonActiveClass;
                    $button.classList.remove(buttonActiveClass);
                });
            });
        }
    }

    return Menu;
});
