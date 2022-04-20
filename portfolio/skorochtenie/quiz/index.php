<!DOCTYPE html>
<html lang="ru">

<head>
    <title>Скорочтение</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <link rel="stylesheet" type="text/css" href="scss/styles/styles.css">
</head>

<body>

<!-- Google Tag Manager -->
<noscript>
    <iframe src="//www.googletagmanager.com/ns.html?id=GTM-5TGFD7"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script>(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
        '//www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-5TGFD7');</script>
<!-- End Google Tag Manager -->
<div class="wrapper">
    <div class="start-page">
        <div class="start-page__img" style="background: url(img/main.jpeg)"></div>
        <div class="start-page__desc">
            <div class="start-page__desc-title">Узнайте во сколько раз Ваш ребенок сможет читать быстрее</div>
            <div class="start-page__desc-subtitle">
                Ответьте на 4 простых вопроса на нашем сайте и получите приглашение на бесплатное тестирование
            </div>
            <div class="start-page__desc-button button start-quiz">
                <div class="button__icon button__icon--check"></div>
                <div class="button__text">Получить приглашение</div>
            </div>
        </div>
    </div>


    <div class="quiz">
        <div class="quiz__container">
            <div class="quiz__items">
                <div class="quiz__item active">
                    <div class="quiz__item-title">
                        Как зовут Вашего ребенка?
                    </div>
                    <div class="quiz__item-input-block">
                        <input class="quiz__item-input">
                    </div>


                </div>
                <div class="quiz__item hide">
                    <div class="quiz__item-title">
                        В каком классе учится Ваш ребенок?
                    </div>
                    <div class="quiz__item-radio-block">
                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Начальные классы (1-4 класс)" name="step_2">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Начальные классы (1-4 класс)</div>
                            </label>
                        </div>
                        <div class="quiz__item-radio-item">

                            <label class="radio">
                                <input type="radio" value="Средние классы (5-9 класс)" name="step_2">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Средние классы (5-9 класс)</div>
                            </label>
                        </div>
                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Старшие классы (10-11 класс)" name="step_2">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Старшие классы (10-11 класс)</div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="quiz__item hide">
                    <div class="quiz__item-title">
                        Ваш ребенок любит читать?
                    </div>
                    <div class="quiz__item-radio-block">
                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Читать очень любит, много читает и все понимает." name="step_3">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Читать очень любит, много читает и все понимает.</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Читает, но не запоминает что читает" name="step_3">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Читает, но не запоминает что читает</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Медленно читает, я хочу, чтобы читал быстрее" name="step_3">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Медленно читает, я хочу, чтобы читал быстрее</div>
                            </label>
                        </div>
                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Не любит читать, приходится заставлять" name="step_3">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Не любит читать, приходится заставлять</div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="quiz__item hide">
                    <div class="quiz__item-title">
                        В каком районе вы живете?
                    </div>
                    <div class="quiz__item-radio-block">

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Таирово" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Таирово</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Черемушки" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Черемушки</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Центр" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Центр</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Слободка" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Слободка</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Посёлок Котовского" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Посёлок Котовского</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Застава" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Застава</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <label class="radio">
                                <input type="radio" value="Совиньон" name="step_4">
                                <div class="radio__icon"></div>
                                <div class="radio__text">Совиньон</div>
                            </label>
                        </div>

                        <div class="quiz__item-radio-item">
                            <input type="text" class="quiz__item-input quiz__item-input--small" placeholder="Другое">
                        </div>

                    </div>
                </div>
            </div>
            <div class="quiz__footer">
                <div class="quiz__footer-field">
                    <div class="quiz__footer-field-label">
                        <div class="quiz__footer-field-label-name">Готово</div>
                        <div class="quiz__footer-field-label-val">0%</div>
                    </div>
                    <div class="quiz__footer-field-line">
                        <div class="quiz__footer-field-line-fill"></div>
                    </div>
                </div>
                <div class="quiz__footer-buttons">
                    <div class="disabled quiz__footer-button-prev button button--gray">
                        <div class="button__icon button__icon--prev"></div>
                    </div>
                    <div class="disabled quiz__footer-button-next button">
                        <div class="button__text">Далее</div>
                        <div class="button__icon button__icon--next"></div>
                    </div>
                    <div class="disabled hide quiz__footer-button-final final-quiz button">
                        <div class="button__text">Последний шаг</div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="final-page ">
        <div class="final-page__container">
            <div class="final-page__desc">
                <div class="final-page__desc-text-main">Благодарим вас, что вы прошли опрос и сэкономили свое и наше время!</div>
                <div class="final-page__desc-text-natural">Заполните форму, чтобы мы пригласили вас на бесплатное тестирование в нашу школу >>></div>
            </div>
            <form class="final-page__form">
                <div class="final-page__form-item">
                    <div class="final-page__form-item-title">ВВЕДИТЕ ИМЯ</div>
                    <div class="final-page__form-item-input-block final-page__form-item-input-block--person">
                        <input class="final-page__form-item-input" placeholder="Имя" name="name">
                    </div>
                </div>
                <div class="final-page__form-item">
                    <div class="final-page__form-item-title">ВВЕДИТЕ ТЕЛЕФОН</div>
                    <div class="final-page__form-item-input-block final-page__form-item-input-block--phone">
                        <input class="final-page__form-item-input" name="phone">
                    </div>
                </div>
                <input type="hidden" name="DATA[utm_source]"
                       value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : ''; ?>">
                <input type="hidden" name="DATA[utm_medium]"
                       value="<?php echo isset($_GET['utm_medium']) ? $_GET['utm_medium'] : ''; ?>">
                <input type="hidden" name="DATA[utm_campaign]"
                       value="<?php echo isset($_GET['utm_campaign']) ? $_GET['utm_campaign'] : ''; ?>">
                <input type="hidden" name="DATA[utm_content]"
                       value="<?php echo isset($_GET['utm_content']) ? $_GET['utm_content'] : ''; ?>">
                <input type="hidden" name="DATA[utm_term]"
                       value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : ''; ?>">
                <input type="hidden" name="answers">
                <div class="final-page__form-item">
                    <div class="final-page__button button disabled submit">
                        <div class="button__icon button__icon--check"></div>
                        <div class="button__text">Получить приглашение</div>
                    </div>
                </div>
                <div class="final-page__form-item">
                    <div class="checkbox">
                        <div class="checkbox__item">
                            <input class="checkbox__item-input" checked id="checkbox_1" value="checkbox_1"
                                   type="checkbox"/>
                            <label class="checkbox__item-label" for="checkbox_1">
                                C <a href="https://drive.google.com/open?id=17dvQN9cyT26IuqHDwNQJPJieQQ_gZe_P-GCChQcOaFE" target="_blank">политикой конфиденциальности</a> ознакомлен(а)
                            </label>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
</div>

<div class="screen__hidden">
    <div class="screen__hidden-inner"></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="plugins/jquery.maskedinput.min.js"></script>
<script src="js/main.js"></script>

</body>


