function createGalleryDownload(input) {
    // enable fileuploader plugin
    $(input).fileuploader({
        limit: 100,
        fileMaxSize: 20,
        theme: 'list',
        addMore: true,
        enableApi: true,
        canvasImage: { width: 180, height: 180 },
        upload: {
            url: '/image/uploadworkshopavatar',
            data: null, // should be null
            type: 'POST',
            enctype: 'multipart/form-data',
            start: true,
            onSuccess: function (result, item, listEl, parentEl, newInputEl, inputEl) {
                var api = $.fileuploader.getInstance(inputEl),
                    data = {};

                if (result)
                    data = result;
                else
                    data.hasWarnings = true;

                if (api.getFiles().length > 1)
                    api.getFiles()[0].remove();

                // if success
                if (data.isSuccess && data.name) {
                    item.name = data.name;
                    avatarId = data.id;
                }

                // if warnings
                if (data.hasWarnings) {
                    for (var warning in data.warnings) {
                        alert(data.warnings[warning]);
                    }

                    item.html.removeClass('upload-successful').addClass('upload-failed');
                    return this.onError ? this.onError(item) : null;
                }
            },
            onComplete: null,
        }
    });
}
