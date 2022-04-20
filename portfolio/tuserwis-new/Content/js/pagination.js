function PaggingTemplate(model) {
    var template = "";
    //var TotalPages = model.totalPage;
    //var CurrentPage = model.currentPage;
    var PageNumberArray = Array();
    //var amountDisplayedPages = model.amountDisplayedPages;

    var countIncr = 0;
    for (var i = 0; i < model.totalPage; i++) {
        PageNumberArray[countIncr] = i + 1;
        countIncr++;
    };
    PageNumberArray = slicePaginationArray(model.currentPage, model.amountDisplayedPages, model.totalPage, PageNumberArray);
    var FirstPage = 1;
    var LastPage = model.totalPage;
    if (model.totalPage != model.currentPage) {
        var ForwardOne = model.currentPage + 1;
    }
    var BackwardOne = 1;
    if (model.currentPage > 1) {
        BackwardOne = model.currentPage - 1;
    }

    template = '<ul class="pagination">';
    if (model.displayFirstLastPageBtn) {
        template += '<li class="previous" onclick="GetPageData(' + FirstPage + ')">First</li>';
    }
    
    if (model.currentPage > 1) {
        template += '<li class="arrow-step-back" onclick="GetPageData(' + BackwardOne + ')"></li>';
    }

    var numberingLoop = "";

    for (var i = 0; i < PageNumberArray.length; i++) {
        if (model.currentPage == PageNumberArray[i]) {
            numberingLoop = numberingLoop + '<li class="active" onclick="GetPageData(' + PageNumberArray[i] + ')">' + PageNumberArray[i] + ' </li>';
        } else {
            numberingLoop = numberingLoop + '<li class="number-pagination" onclick="GetPageData(' + PageNumberArray[i] + ')">' + PageNumberArray[i] + ' </li>';
        }

    }
    template += numberingLoop;
    if (model.currentPage < model.totalPage) {
        template += '<li class="arrow-step-forward" onclick="GetPageData(' + ForwardOne + ')"></li>';
    }

    if (model.displayFirstLastPageBtn) {
        template += '<li class="next" onclick="GetPageData(' + LastPage + ')">Last</li>';
    }
    template += '</ul>';
    $(".pagination-container").append(template);
}

function slicePaginationArray(currentPage, maxPages, totalPages, PageNumberArray) {
    var startPage = 0, endPage = 0;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // create an array of pages that can be looped over
    var pages = PageNumberArray.slice(startPage - 1, endPage);
    return pages;
}