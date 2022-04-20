(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === "object") {
        // Node/CommonJS
        module.exports = factory();
    } else {
        // Browser globals
        window.Select = factory();
    }
})(function () {
    class Select {

        /* Example options
        {
            selectClass:'select',     // String
            $select:document.getElementsByClassName(this.selectClass)[0],       // node element
            customSelectClass:'custom-select',     // String
        }
         */

        constructor(options) {
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
            this.data = this.#getSelectData();
            this.init();
        }

        init() {
            this.$select.parentElement.appendChild(this.$customSelect);
            this.$customSelect.classList.add(this.customSelectClass);
            this.$customSelect.appendChild(this.$select);
            this.#setHtml();
        }

        #getSelectData() {
            this.options = Array.from(this.$select.getElementsByTagName('option'));
            let optionsArray = new Map();

            this.options.map((item, index) => {
                let value = item.hasAttribute('value') ? item.getAttribute('value') : item.innerText;

                if (item.hasAttribute('selected')) {
                    this.current = index;
                }

                const option = {
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

        #setHtml() {
            let list = '';

            for (let item of this.data.values()) {
                if (!item.hidden) {
                    let classDisabled = '';
                    let classSelected = '';

                    if (item.selected) {
                        classSelected = this.selectedItemClass;
                    }

                    if (item.disabled) {
                        classDisabled = this.disabledItemClass;
                    }

                    list += `<div data-select-index="${item.index}" data-select-type="value" class="${this.customSelectClass}__item ${classDisabled}">${item.name}</div>`;
                }
            }

            const template = `
            <div data-select-type="button" class="${this.customSelectClass}__input">
                <div data-select-type="button" class="${this.customSelectClass}__input-name">${this.data.get('index' + this.current).name}</div>
                <div data-select-type="button" class="${this.customSelectClass}__input-icon"></div>
            </div>
            <div data-select-type="button" class="${this.customSelectClass}__list">
                ${list}
            </div>
        `;

            this.$customSelect.insertAdjacentHTML('beforeEnd', template);

            this.#setup();
        }

        #setup() {
            this.clickHandler = this.clickHandler.bind(this);
            this.changeHandler = this.changeHandler.bind(this);
            document.addEventListener('click', this.clickHandler);
            this.$select.addEventListener('change', this.changeHandler);
            this.$name = this.$customSelect.querySelector('.' + this.customSelectClass + '__input-name');
            this.$items = this.$customSelect.querySelectorAll('.' + this.customSelectClass + '__item');
        }

        clickHandler(event) {
            const isSelectClick = (click) => {
                if (click === this.$customSelect) {
                    return true;
                } else if (click.closest('.' + this.customSelectClass) && click.closest('.' + this.customSelectClass) === this.$customSelect) {
                    return true;
                } else {
                    return false;
                }
            };

            if (isSelectClick(event.target)) {
                const type = event.target.dataset.selectType;
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

        changeHandler(event) {
            this.options = Array.from(this.$select.getElementsByTagName('option'));

            this.options.map((item, index) => {
                let value;

                if (item.hasAttribute('value')) {
                    value = item.getAttribute('value');
                } else {
                    value = item.innerText;
                }

                if (value === this.$select.value) {
                    this.#setSelectHtml(index);
                }
            });
        }

        select(index) {
            this.current = index;
            this.#setSelectHtml(index);
            this.$select.value = this.options[index].value;
            this.$select.dispatchEvent(this.changeEvent);
        }

        #setSelectHtml(index) {
            this.$name.innerText = this.data.get('index' + index).name;

            this.$items.forEach(($item) => {
                if ($item.dataset.selectIndex === index) {
                    $item.classList.add(this.selectedItemClass);
                } else {
                    $item.classList.remove(this.selectedItemClass);
                }
            });
        }

        toggle() {
            if (this.$customSelect.classList.contains(this.openClass)) {
                this.close();
            } else {
                this.open();
            }
        }

        open() {
            this.$customSelect.classList.add(this.openClass);
        }

        close() {
            this.$customSelect.classList.remove(this.openClass);
        }

        // TODO: Сделать рефреш
    }

    return Select;
});
