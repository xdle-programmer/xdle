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
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#company">Миграция</div>
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
                    <a href="/advertising/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Реклама</div>
                        <div class="first-screen__content-menu-desc">Контекстная реклама, SEO, SMM, индивидуальный расчет под Ваш проект</div>
                    </a>
                    <div class="first-screen__content-menu-item active">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Миграция</div>
                        <div class="first-screen__content-menu-desc">Новый Мир - Новые возможности! Не упустите свой шанс</div>
                    </div>
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
                    <div class="first-screen__content-inner-page-title">Миграция из Offline</div>
                    <div class="first-screen__content-inner-page-subtitle">Мир стоит на пороге полного и глобального обновления.<br>Прошлые элементы управления, привлечения
                        клиентов и методы инвестирования перестают работать.
                    </div>
                    <div class="first-screen__content-inner-page-list">
                        <div class="first-screen__content-inner-page-list-item">
                            <div class="first-screen__content-inner-page-list-item-title">Адаптация</div>
                            <div class="first-screen__content-inner-page-list-item-text">Мы все больше погружаемся в цифровой мир, а значит, что бы выжить, необходимо
                                адаптироваться.
                            </div>
                        </div>
                        <div class="first-screen__content-inner-page-list-item">
                            <div class="first-screen__content-inner-page-list-item-title">Стратегия</div>
                            <div class="first-screen__content-inner-page-list-item-text">Бизнес не исключение – выживает тот предприниматель, который может и умеет адаптироваться к
                                любой ситуации и который знает, что он будет делать в случае того или иного кризиса – поражения!
                            </div>
                        </div>
                    </div>
                    <div class="first-screen__content-inner-page-desc">Проект «Сделано на Земле» предлагает совершенно по-новому взглянуть на ваш бизнес.</div>

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
                    <div class="service__title">Задача:</div>
                    <div class="service__subtitle">Применить уже известные технологии в единый механизм и запустить его в вашем сегменте рынка.</div>
                </div>
                <div class="service__header-desc">
                    Поверьте нашему богатому опыту, что 90% видов <span class="bold">offline</span> бизнеса можно перенести в <span class="bold">online</span> без потерь,
                    увеличивая его и масштабируя дальше. Вы можете и не знать этого сами, но после нашего с вами общения, вы поймете всю суть и срочно побежите в патентное бюро
                    <span class="bold">:)</span>
                </div>
            </div>

            <div class="service__items">
                <div class="service__item">
                    <div class="service__item-title">Смысл</div>
                    <div class="service__item-text">
                        в том, что у каждого из вас есть сейчас очень короткая возможность перенести ваш действующий бизнес в сеть и провести эту миграцию поможем вам мы, команда
                        проекта «Сделано на Земле».
                    </div>
                </div>
                <div class="service__item">
                    <div class="service__item-title">Мы поможем</div>
                    <div class="service__item-text">
                        на всех этапах от проектирования и подготовки документов в государственные органы до финального тестирования и запуска проекта.
                        <br>
                        Подумайте хорошенько, ведь ваш конкурент может уже этим заниматься в данный момент.
                    </div>
                </div>
                <div class="service__item">
                    <div class="service__item-title">Проведите простые расчеты:</div>
                    <div class="service__item-text">
                        Есть ваш бизнес.<br>
                        Сколько у вас сейчас конкурентов? 10-20-100?<br>
                        А представьте, что вы можете выйти за рамки вашего локального бизнеса и быстро его масштабировать и стать №1!
                    </div>
                </div>
                <div class="service__item">
                    <div class="service__item-title">Уже сейчас</div>
                    <div class="service__item-text">очень много желающих провести миграцию своего бизнеса. Мы тщательно рассматриваем, тот или иной бизнес и проводим свои
                        исследования, прежде чем дать ответ.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="lead" id="lead">
        <div class="lead__block layout__block">
            <div class="lead__title title title--center title--white">Остались вопросы?</div>
            <div class="lead__subtitle title title--white title--small">Заполните короткую форму ниже</div>
            <form class="lead__form form-check" id="lead-form" data-form-name="Миграция: Рассчитать проект">
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
                <div class="footer__menu-item animation-scroll" data-scroll-goal="#service">Миграция</div>
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