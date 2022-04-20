$('.structure__item-button').on('click', function () {
    let $items = $('.structure__item');
    let $item = $(this).closest('.structure__item');
    let $text = $item.find('.structure__item-text');
    let $texts = $('.structure__item-text');
    let activeClass = 'structure__item--active';



    if ($item.hasClass(activeClass)) {
        $texts.slideUp()
        $items.removeClass(activeClass)
    } else {
        $texts.slideUp()
        $items.removeClass(activeClass)
        $item.addClass(activeClass)
        $text.slideDown()
    }

});
