(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.Modals = factory();
    }
})(function () {

    class Modals {

        constructor(options) {
            this.init();
        }

        init() {
            this.#setup();
        }

        static modalClass = 'modal';
        static modalOpenClass = 'modal--open';

        #setup() {
            this.$modals = Array.from(document.getElementsByClassName(Modals.modalClass));
            this.modalsArray = new Map();
            this.$modals.forEach(($modal) => {
                let background = '<div class="modal__background" data-modal-close></div>';
                $modal.insertAdjacentHTML('afterbegin', background);
                this.modalsArray.set($modal.id, $modal);
            });

            this.$openButtons = document.querySelectorAll('[data-modal-open]');
            this.$closeButtons = document.querySelectorAll('[data-modal-close]');

            this.clickOpenHandler = this.clickOpenHandler.bind(this);
            this.clickCloseHandler = this.clickCloseHandler.bind(this);
            this.$openButtons.forEach(($button) => {
                $button.addEventListener('click', this.clickOpenHandler);
            });

            this.$closeButtons.forEach(($button) => {
                $button.addEventListener('click', this.clickCloseHandler);
            });
        }

        clickOpenHandler(event) {
            this.open(event.target.dataset.modalOpen);
        }

        clickCloseHandler() {
            this.close();
        }

        open(id) {
            this.modalsArray.get(id).classList.add(Modals.modalOpenClass);
        }

        close() {

            this.$modals.forEach(($modal) => {
                $modal.classList.remove(Modals.modalOpenClass);
            });
        }

    }

    return Modals;
});
