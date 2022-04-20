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
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#company">Дизайн</div>
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
                    <div class="first-screen__content-menu-item active">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Дизайн</div>
                        <div class="first-screen__content-menu-desc">UI/UX проектирование, брендинг для вашего сайта</div>
                    </div>
                    <a href="/development/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Программирование</div>
                        <div class="first-screen__content-menu-desc">Разработка сайтов, Интернет-магазинов, CRM систем, индивидуальные проекты</div>
                    </a>
                    <a href="/advertising/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Реклама</div>
                        <div class="first-screen__content-menu-desc">Контекстная реклама, SEO, SMM, индивидуальный расчет под Ваш проект</div>
                    </a>
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
                    <div class="first-screen__content-inner-page-title first-screen__content-inner-page-title--design">Создаём креативную концепцию и дизайн любой сложности.</div>
                    <div class="first-screen__content-inner-page-design-list">
                        <div class="first-screen__content-inner-page-design-list-item">
                            <div class="first-screen__content-inner-page-design-list-item-icon">
                                <img class="first-screen__content-inner-page-design-list-item-icon-img" src="../img/design-icon-1.svg">
                            </div>
                            <div class="first-screen__content-inner-page-design-list-item-text">
                                <div class="first-screen__content-inner-page-design-list-item-title">Брендинг.</div>
                                <div class="first-screen__content-inner-page-design-list-item-desc">
                                    Знаем, как создать продающий имидж вашей компании и увеличить ее конкурентоспособность. Разрабатываем
                                    айдентику и систему визуальной идентификации.
                                </div>
                            </div>
                        </div>
                        <div class="first-screen__content-inner-page-design-list-item">
                            <div class="first-screen__content-inner-page-design-list-item-icon">
                                <img class="first-screen__content-inner-page-design-list-item-icon-img" src="../img/design-icon-2.svg">
                            </div>
                            <div class="first-screen__content-inner-page-design-list-item-text">
                                <div class="first-screen__content-inner-page-design-list-item-title">Дизайн сайтов, CRM-систем и приложений.</div>
                                <div class="first-screen__content-inner-page-design-list-item-desc">Используем индивидуальный подход в дизайне.
                                    Прежде, чем приступить к проектированию, подробно изучаем
                                    и анализируем ваш бизнес.
                                    Создаем прототипы и сценарии взаимодействий, проектируем правильную и удобную структуру UI/UX.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="first-screen__content-inner-page-desc">
                        <div class="first-screen__content-inner-page-desc-background">UI/UX</div>
                        Мы создаём правильный дизайн, который действительно работает.
                    </div>

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


            <div class="service__header service__header--design">
                <div class="service__header-title-block">
                    <div class="service__title">Стратегия:</div>
                    <div class="service__subtitle">Главное для нас в разработке дизайна, создать не только красивый визуал, но и продумать весь функционал, сделать удобную
                        навигацию, которая будет подсказывать пользователю куда держать курс.
                    </div>
                </div>
                <div class="service__header-icon">
                    <img class="service__header-icon-img" src="../img/design-icon-3.svg">
                </div>
            </div>

            <div class="service__items service__items--design">
                <div class="service__item">
                    <div class="service__item-title">Задачи</div>
                    <div class="service__item-two-col">
                        <div class="service__number-list">
                            <div class="service__number-list-item">Проводим аудит и анализируем ваш бизнес.</div>
                            <div class="service__number-list-item">Создаём креативную концепцию проекта.</div>
                            <div class="service__number-list-item">Разрабатываем прототипы и сценарии взаимодействий.</div>
                            <div class="service__number-list-item">Проектируем UI/UX интерфейсы + адаптив.</div>
                            <div class="service__number-list-item">Создаем иерархию стандартов вашего проекта.</div>
                            <div class="service__number-list-item">Отдаем готовую дизайн-систему разработчикам.</div>
                        </div>
                        <div class="service__green-desc">
                            <div class="service__green-desc-title">А вы знаете про учёт поведенческих факторов поисковыми системами?</div>
                            <div class="service__green-desc-text">
                                Когда пользователь не производит никаких действий на странице и недолго задерживается на ней, то ваш сайт падает в выдаче у поисковой системы.<br>
                                Поэтому очень важно сделать так, чтобы дизайн понравился посетителю и зацепил его.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="service__item">
                    <div class="service__item-title">Что вы получаете:</div>
                    <div class="service__mark-list">
                        <div class="service__mark-list-item">В первую очередь вы получите крутой и уникальный дизайн концепт!</div>
                        <div class="service__mark-list-item">Качественный интерфейс, который привлечет серьёзный поток новых клиентов и вызовет у них доверие.</div>
                        <div class="service__mark-list-item">Удобную дизайн систему, с которой легко сможете работать в дальнейшем.</div>
                        <div class="service__mark-list-item">Новые фишки из сферы диджитал (мы не отстаем от трендов и следим за ними каждый день).</div>
                        <div class="service__mark-list-item">Заказав у нас брендинг для вашей компании, вы получите полную упаковку имиджа вашего бизнеса (фирменный стиль,
                            брендбук).
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="lead" id="lead">
        <div class="lead__block layout__block">
            <div class="lead__title title title--center title--white">Остались вопросы?</div>
            <div class="lead__subtitle title title--white title--small">Заполните короткую форму ниже</div>
            <form class="lead__form form-check" id="lead-form" data-form-name="Дизайн: Рассчитать проект">
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
                <div class="footer__menu-item animation-scroll" data-scroll-goal="#service">Дизайн</div>
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