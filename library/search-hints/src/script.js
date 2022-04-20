(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.SearchBox = factory();
    }
})(function () {

    class SearchBox {

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

        constructor(options) {
            this.wrapperClass = options && options.wrapperClass ? options.wrapperClass : 'search';
            this.$wrapper = options && options.$wrapper ? options.$wrapper : document.getElementsByClassName(this.wrapperClass)[0];
            this.mainClass = options && options.mainClass ? options.mainClass : 'search-box';
            this.buttonText = options && options.buttonText ? options.buttonText : 'Найти';
            this.placeholderText = options && options.placeholderText ? options.placeholderText : 'Поиск';
            this.completeMinSymbols = options && options.completeMinSymbols ? options.completeMinSymbols : 3;
            this.showHintsClass = options && options.showHintsClass ? options.showHintsClass : this.mainClass + '--open';

            this.init();
        }

        init() {
            this.$wrapper.innerHTML = this.#createDom();
            this.#setup();
        }

        #createDom() {
            return `
                <form action class="${this.mainClass}" role="search"> 
                    <div class="${this.mainClass}__input-wrapper" tabindex="1">
                        <input type="search" class="${this.mainClass}__input" placeholder="${this.placeholderText}">
                        <div class="${this.mainClass}__clear-button"></div>
                        <div class="${this.mainClass}__hints"></div>
                    </div>
                    <div class="${this.mainClass}__back-button"></div>
                    <button type="submit" class="${this.mainClass}__button">${this.buttonText}</button>
                </form>            
            `;
        }

        #setup() {
            this.$box = this.$wrapper.getElementsByClassName(this.mainClass)[0];
            this.$input = this.$wrapper.getElementsByClassName(this.mainClass + '__input')[0];
            this.$inputWrapper = this.$wrapper.getElementsByClassName(this.mainClass + '__input-wrapper')[0];
            this.$clearButton = this.$wrapper.getElementsByClassName(this.mainClass + '__clear-button')[0];
            this.$hintsWrapper = this.$wrapper.getElementsByClassName(this.mainClass + '__hints')[0];
            this.submitHandler = this.submitHandler.bind(this);
            this.inputHandler = this.inputHandler.bind(this);
            this.$box.addEventListener('submit', this.submitHandler);
            this.$input.addEventListener('input', this.inputHandler);
            this.$clearButton.addEventListener('click', () => {
                this.$input.value = '';
                this.#toggleClearButton();
                this.$input.focus();
            });

            this.$inputWrapper.addEventListener('focusin', () => {
                this.#toggleFocusClass(true);
            });

            this.$inputWrapper.addEventListener('focusout', () => {
                this.#toggleFocusClass(false);
            });
        }

        submitHandler(event) {
            event.preventDefault();
        }

        inputHandler() {
            this.#toggleClearButton();
            this.#inputEventHandler();
        }

        #inputEventHandler() {
            this.completeEvent = new CustomEvent('completeHint', {
                detail: {value: this.$input.value}
            });

            let length = this.$input.value.length;
            if (length >= this.completeMinSymbols) {
                this.$wrapper.dispatchEvent(this.completeEvent);
            } else {
                this.hideHints();
                this.clearHints();
            }
        }

        #toggleFocusClass(state) {
            let onFocusClass = this.mainClass + '--on-focus';

            if (state) {
                this.$box.classList.add(onFocusClass);
            } else {
                this.$box.classList.remove(onFocusClass);
                setTimeout(()=>{
                    this.hideHints();
                },100)
            }
        }

        #toggleClearButton() {
            let length = this.$input.value.length;
            let notEmptyClass = this.mainClass + '--not-empty';

            if (length > 0) {
                this.$box.classList.add(notEmptyClass);
            } else {
                this.$box.classList.remove(notEmptyClass);
            }
        }

        showHints($hints) {
            this.$hintsWrapper.innerHTML = $hints;
            this.$box.classList.add(this.showHintsClass);
        }

        hideHints() {
            this.$box.classList.remove(this.showHintsClass);
        }

        clearHints() {
            this.$hintsWrapper.innerHTML = '';
        }
    }

    return SearchBox;
});
