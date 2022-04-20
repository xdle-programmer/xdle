<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="../scss/styles/styles.css">

    <?php

    ?>

    <title>Made in Earth</title>
</head>
<body class="russian">
<style>
    body {
        background: #000
    }

    .wrapper {
        opacity: 0;
    }
</style>
<div class="wrapper">
    <header class="header">
        <div class="header__block layout">
            <a href="/" class="header__logo"></a>
            <div class="header__toggle-button"></div>
            <div class="header__item">
                <div class="header__menu">
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#company">Реклама</div>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#service">Услуги</div>
                    <a href="/#portfolio" class="header__menu-item">Портфолио</a>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#footer">Контакты</div>
                </div>
                <a href="tel:+78004565447" class="header__phone">8 800 456 54 47</a>
                <div class="header__lead animation-scroll" data-scroll-goal="#lead">Рассчитать проект</div>
            </div>
        </div>
    </header>

    <div class="first-screen" id="company">
        <div class="first-screen__content layout">
            <div class="first-screen__content-item">
                <div class="first-screen__content-menu">
                    <a href="/design/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Дизайн</div>
                        <div class="first-screen__content-menu-desc">UI/UX проектирование, брендинг для вашего сайта</div>
                    </a>
                    <a href="/development/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Программирование</div>
                        <div class="first-screen__content-menu-desc">Разработка сайтов, Интернет-магазинов, CRM систем, индивидуальные проекты</div>
                    </a>
                    <div class="first-screen__content-menu-item active">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Реклама</div>
                        <div class="first-screen__content-menu-desc">Контекстная реклама, SEO, SMM, индивидуальный расчет под Ваш проект</div>
                    </div>
                    <a href="/migration/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Миграция</div>
                        <div class="first-screen__content-menu-desc">Новый Мир - Новые возможности! Не упустите свой шанс.</div>
                    </a>
                    <a href="/#portfolio" class="first-screen__content-menu-item first-screen__content-menu-item--desktop-hidden">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Портфолио</div>
                        <div class="first-screen__content-menu-desc">Новый Мир - Новые возможности! Не упустите свой шанс.</div>
                    </a>
                </div>
                <div class="first-screen__content-inner-page">
                    <div class="first-screen__content-inner-page-title">Реклама и Маркетинг</div>
                    <div class="first-screen__content-inner-page-subtitle">Каждый новый проект или уже действующий нуждается в росте продаж. На рынке существует множество инструментов рекламы и маркетинга , мы поможем вам выделится из толпы ваших конкурентов.
                    </div>
                    <div class="first-screen__content-inner-page-list">
                        <div class="first-screen__content-inner-page-list-item">
                            <div class="first-screen__content-inner-page-list-item-title">Аналитика</div>
                            <div class="first-screen__content-inner-page-list-item-text">Мы проведем исследование ваших действующих рекламных компаний и поможем оптимизировать бюджет, либо увеличить его с целю получения большего отклика в виде запросов на ваши услуги или заказы.
                            </div>
                        </div>
                        <div class="first-screen__content-inner-page-list-item">
                            <div class="first-screen__content-inner-page-list-item-title">Инструменты</div>
                            <div class="first-screen__content-inner-page-list-item-text">Сайты наших клиентов занимают уверенный ТОП в выдаче поисковых систем. Мы не забываем про формирование положительного образа в социальных сетях и если ваш продукт или услуга подходит под этот критерий, мы обязательно учтем и эти инструменты 
                            </div>
                        </div>
                    </div>
                    <div class="first-screen__content-inner-page-desc">В нашем арсенале большой опыт ведения контекстной рекламы более чем в 35 отраслевых нишах.</div>

                </div>
            </div>
        </div>
        <div class="first-screen__background">
            <div class="first-screen__video-wrapper">
                <div class="first-screen__video-block">
                    <div class="first-screen__video-preview"></div>
                    <video class="first-screen__video" autoplay muted loop playsinline data-src="../video/video_"></video>
                </div>
            </div>
        </div>
    </div>

    <div class="service" id="service">
        <div class="service__block layout__block">
            <div class="service__header">
                <div class="service__header-title-block">
                    <div class="service__title">Цели:</div>
                    <div class="service__subtitle">Применить уже известные технологии в единый механизм и запустить его в вашем сегменте рынка.</div>
                </div>
                <div class="service__header-desc">
                    Сделать интернет-проект привлекательным для целевых посетителей, привлечь целевой трафик, вывести сайт в ТОП поисковых систем, повысить узнаваемость, увеличить продажи.
                </div>
            </div>

            <div class="service__items">
                <div class="service__item">
                    <div class="service__item-title">В чем смысл?</div>
                    <div class="service__item-text">
                        В том чтобы правильно представить аудитории продаваемый продукт или услугу, от чего зависит уровень конверсии посетителей в покупатели.
                    </div>
                </div>
                <div class="service__item">
                    <div class="service__item-title">Мы поможем</div>
                    <div class="service__item-text">
                        Подобрать и реализовать эффективные решения, которые помогут решить поставленную задачу. Инструменты подбираются в зависимости от поставленной задачи, начиная контекстной и баннерной рекламой, заканчивая комплексным продвижением.
                    </div>
                </div>
                <div class="service__item">
                    <div class="service__item-title">На шаг впереди</div>
                    <div class="service__item-text">
                        Любой бизнес – это большая конкуренция. Грамотная реклама бизнеса способствует его быстрому масштабированию. Мы знаем как обойти любого конкурента, в любой нише.
                    </div>
                </div>
                <div class="service__item">
                    <div class="service__item-title">Активные действия</div>
                    <div class="service__item-text">
                        Тот кто ставит перед собой максимальные задачи начинает действовать прямо сейчас. Используя комплексный подход, основанный на понимании принципов работы поисковых систем, мы готовы предоставить результат прямо здесь и сейчас.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="lead" id="lead">
        <div class="lead__block layout__block">
            <div class="lead__title title title--center title--white">Остались вопросы?</div>
            <div class="lead__subtitle title title--white title--small">Заполните короткую форму ниже</div>
            <form class="lead__form form-check" id="lead-form" data-form-name="Реклама: Рассчитать проект">
                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Ваше имя</div>
                    <div class="lead__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="Имя" name="name">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Почта</div>
                    <div class="lead__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="E-mail" name="email">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Телефон</div>
                    <div class="lead__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" name="phone" placeholder="+7 (___) ___-____">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--2-3">
                    <div class="lead__form-item-title">Опишите свой бизнес</div>
                    <div class="lead__form-item-input-block">
                        <div class="input">
                            <div class="input__button input__button--textarea">
                                <textarea class="input__text" placeholder="Введите текст" name="task"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--1-3">
                    <div class="lead__form-item-title">Ссылка на сайт (если имеется)</div>
                    <div class="lead__form-item-input-block">
                        <div class="input">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="https://" name="site">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-footer">
                    <div class="lead__form-footer-desc">
                        Нажав на кнопку «Отправить», вы соглашаетесь на обработку
                        <a href="#" class="lead__form-footer-desc-link">персональных данных.</a>
                    </div>
                    <input type="hidden" name="service_list">
                    <input type="hidden" name="answers"><input type="hidden" name="hidden_email">
                    <button class="lead__form-footer-button form-check__button submit">
                        Отправить
                    </button>
                </div>

            </form>
        </div>
    </div>

    <div class="review">
        <div class="review__block">
            <div class="review__subtitle title title--small">Хотите узнать о качестве нашей работы?</div>
            <div class="review__title title">Запросите живой отзыв от наших клиентов</div>
            <div class="review__items">
                <div class="review__item">
                    <img class="review__item-img" src="../img/client-icon-1.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="../img/client-icon-2.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="../img/client-icon-3.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="../img/client-icon-4.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="../img/client-icon-5.svg">
                </div>
            </div>
            <div class="review__form-title">Оставьте свои данные и с вами свяжутся</div>
            <form class="review__form form-check form-check--white-error" id="review-form" data-form-name="Миграция: Запросить отзыв">
                <div class="review__form-item">
                    <div class="review__form-item-title">Почта</div>
                    <div class="review__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="E-mail" name="email">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="review__form-item">
                    <div class="review__form-item-title">Телефон</div>
                    <div class="review__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" name="phone" placeholder="+7 (___) ___-____">
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="answers"><input type="hidden" name="hidden_email">
                <button class="review__form-button form-check__button submit">Запросить</button>
            </form>
        </div>
    </div>

    <footer class="footer" id="footer">
        <div class="footer__block">
            <div class="footer__menu">
                <div class="footer__menu-item animation-scroll" data-scroll-goal="#company">Компания</div>
                <div class="footer__menu-item animation-scroll" data-scroll-goal="#service">Реклама</div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-contact">
                <a href="tel:+78004565447" class="footer__bottom-contact-phone">8 800 456 54 47</a>
                <a href="mailto:info@madeinearth.ru" class="footer__bottom-contact-mail">info@madeinearth.ru</a>
            </div>
            <a href="/" class="footer__bottom-logo"></a>
        </div>
    </footer>


    <div class="modal__background close-modal"></div>

    <div class="modal__block" id="modal_success">
        <div class="modal__close close-modal"></div>

        <div class="modal__header">
            <div class="modal__logo"></div>
            <div class="modal__title">Спасибо!</div>
        </div>
        <div class="modal__content">
            <div class="modal__content-text">Ваше сообщение отправлено</div>
        </div>
    </div>

</div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../plugins/imask.js"></script>
<script src="../plugins/errors_handler.js"></script>
<script src="../js/main.js"></script>
</html>