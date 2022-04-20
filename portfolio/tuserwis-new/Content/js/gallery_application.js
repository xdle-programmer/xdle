function createGalleryAppDownload(input) {
    // enable fileuploader plugin
    $(input).fileuploader({
        theme: 'application',
        addMore: true,
        canvasImage: {width: 180, height: 180},
        afterRender: function(listEl, parentEl, newInputEl, inputEl) {

            var $input_wrapper = $(input).closest('.fileuploader').find('.fileuploader-input');
            var item_template = '<div class="fileuploader-input-button-custom">Załącz zdjęcia</div>';
            $(item_template).appendTo($input_wrapper);
        },
    });
}
