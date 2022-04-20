let $searchBox = document.getElementsByClassName('demo__search-box')[0];

window.searchBox = new SearchBox({
    $wrapper: $searchBox,
    mainClass: 'search-box'
});

// Обработчик поиска
$searchBox.addEventListener('search', (event) => {
    console.log('Нужно выполнить поиск по запросу: ' + event.target.value);
});

// Обработчик ввода и вывода подсказок
$searchBox.addEventListener('completeHint', (event) => {
    let text = event.detail.value;

    let length = event.detail.value.length;
    let resultRow = '';

    if (length < 10) {
        for (let index = 10 - length; index > 0; index--) {
            resultRow += `<div class="demo__search-result" onclick="console.log('Клиент кликнул на: ${text}')">${text}</div>`;
        }

        let result = `<div class="demo__search-result-wrapper">${resultRow}</div>`;

        window.searchBox.showHints(result);
    } else {
        window.searchBox.hideHints();
        window.searchBox.clearHints();
    }
});