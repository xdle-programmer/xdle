function addNeedWrecker(needWrecker) {
    if (needWrecker) {
        return `<div class="ticket__help">Potrzebuję lawety</div>`;
    }
    return ``;
}

function addOwnSpares(ownSpares) {
    if (ownSpares) {
        return `<div class="ticket__help">Mam swoje części</div>`;
    }
    return ``;
}

function addPhotos(photos) {
    var result = ``;
    if (photos.length > 0) {
        result = `<div class="ticket__img-slider-wrapper">
                        <div class="ticket__img-slider owl-carousel">`;
        $.each(photos, function (index, photo) {
            result += `<a href="${photo}" class="ticket__img-slider-item"
                                                        style="background: url('${photo}')"
                                                        data-lightbox="ticket_1"></a>`;
        });
        result += `</div>
                    </div>`;
    }
    return result;
}

function addMessages(messages) {
    var result = '';

    $.each(messages, function (index, message) {
        if (message.UserType == 0) {
            result += `<div class="messages__item messages__item--client">
                                <div class="messages__item-author">
                                    <div class="messages__item-author-name">
                                        Ty
                                    </div>
                                    <div class="messages__item-author-date">${message.MessageTime}</div>
                                </div>
                                <div class="messages__item-text">
                                    ${message.Message}
                                </div>
                            </div>`;
        } else {
            result += `<div class="messages__item">
                                <div class="messages__item-author">
                                    <div class="messages__item-author-name">Klient</div>
                                    <div class="messages__item-author-date">${message.MessageTime}</div>
                                </div>
                                <div class="messages__item-text">
                                    ${message.Message}
                                </div>
                            </div>`;
        }
    });

    return result;
}