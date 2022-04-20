"use strict";

var $searchBox = document.getElementsByClassName('demo__search-box')[0];
window.searchBox = new SearchBox({
  $wrapper: $searchBox,
  mainClass: 'search-box'
}); // Обработчик поиска

$searchBox.addEventListener('search', function (event) {
  console.log('Нужно выполнить поиск по запросу: ' + event.target.value);
}); // Обработчик ввода и вывода подсказок

$searchBox.addEventListener('completeHint', function (event) {
  var text = event.detail.value;
  var length = event.detail.value.length;
  var resultRow = '';

  if (length < 10) {
    for (var index = 10 - length; index > 0; index--) {
      resultRow += "<div class=\"demo__search-result\" onclick=\"console.log('\u041A\u043B\u0438\u0435\u043D\u0442 \u043A\u043B\u0438\u043A\u043D\u0443\u043B \u043D\u0430: ".concat(text, "')\">").concat(text, "</div>");
    }

    var result = "<div class=\"demo__search-result-wrapper\">".concat(resultRow, "</div>");
    window.searchBox.showHints(result);
  } else {
    window.searchBox.hideHints();
    window.searchBox.clearHints();
  }
});
//# sourceMappingURL=demo.js.map