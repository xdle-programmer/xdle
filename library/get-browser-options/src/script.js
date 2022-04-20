(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.GetViewportOptions = factory();
    }
})(function () {

    class GetViewportOptions {

        constructor() {
            this.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
            this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
            this.scrollbarWidth = this.getScrollWidth();
            this.hoverAvailability = this.getHoverAvailability();
            this.#setup();
        }

        #setup() {
                        // Переопределение ширины и высоты при ресайзе
            window.addEventListener('resize', () => {
                this.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                this.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
            });
        }

        // Функция определения ширины скролла
        getScrollWidth() {
            let div = document.createElement('div');
            let width = 0;
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            document.body.append(div);
            width = div.offsetWidth - div.clientWidth;
            div.remove();
            return width;
        }

        // Функция определения поддержки ховера
        getHoverAvailability() {
            let style = document.createElement('style');
            style.textContent = `
                :root {
                    --hover-device:false;
                }
                @media (hover) {
                    :root {
                        --hover-device:true;
                    }
                }
            `;

            document.body.append(style);
            let hover = getComputedStyle(document.getElementsByTagName('body')[0]).getPropertyValue('--hover-device');

            if (hover === 'false') {
                return false;
            } else {
                return true;
            }


        }

        getViewportWidth() {
            return this.viewportWidth;
        }

        getViewportHeight() {
            return this.viewportHeight;
        }

        getFullOptions() {
            return {
                viewportWidth: this.viewportWidth,
                viewportHeight: this.viewportHeight,
                scrollbarWidth: this.scrollbarWidth,
                hoverAvailability: this.hoverAvailability
            };
        }
    }

    return GetViewportOptions;
});
