<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="scss/styles/styles.css">
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
            <div class="header__logo"></div>
            <div class="header__toggle-button"></div>
            <div class="header__item">
                <div class="header__menu">
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#company">Компания</div>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#services">Услуги</div>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#portfolio">Портфолио</div>
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
                        <div class="first-screen__content-menu-desc">UI/UX проектирование, брендинг для вашей компании</div>
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
                    <a href="/migration/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Миграция</div>
                        <div class="first-screen__content-menu-desc">Новый Мир - Новые возможности! Не упустите свой шанс.</div>
                    </a>
                </div>
                <div class="first-screen__content-about">
                    <div class="first-screen__content-about-title">Создаем уникальные решения</div>
                    <div class="first-screen__content-about-subtitle">12 лет</div>
                    <div class="first-screen__content-about-desc">
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">01.</div>
                            <div class="first-screen__content-about-desc-title">UI/UX</div>
                            <div class="first-screen__content-about-desc-text">Премиальный дизайн с продающим стратегическим веб-маркетингом</div>
                        </div>
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">02.</div>
                            <div class="first-screen__content-about-desc-title">Аналитика</div>
                            <div class="first-screen__content-about-desc-text">Аудит и аналитика вашего проекта с usability-тестированием</div>
                        </div>
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">03.</div>
                            <div class="first-screen__content-about-desc-title">Функционал</div>
                            <div class="first-screen__content-about-desc-text">Задачи с технически сложными решениями в программировании</div>
                        </div>
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">04.</div>
                            <div class="first-screen__content-about-desc-title">Внедрение</div>
                            <div class="first-screen__content-about-desc-text">Интеграция со сторонними сервисами для CRM и ERP систем</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="first-screen__background">
            <div class="first-screen__video-wrapper">
                <div class="first-screen__video-block">
                    <div class="first-screen__video-preview"></div>
                    <video src="video/video_768.mp4" class="first-screen__video" autoplay muted loop playsinline data-src="video/video_"></video>
                </div>
            </div>
        </div>
    </div>

    <div class="services" id="services">
        <div class="services__block layout__block">
            <div class="services__subtitle title title--small">услуги для увеличения ваших продаж</div>
            <div class="services__title title">Решаем самые сложные бизнес задачи</div>
            <div class="services__items">
                <div class="services__lines">
                    <div class="services__lines-horizontal"></div>
                    <div class="services__lines-vertical services__lines-vertical--1"></div>
                    <div class="services__lines-vertical services__lines-vertical--2"></div>
                    <div class="services__lines-vertical services__lines-vertical--3"></div>
                    <div class="services__lines-vertical services__lines-vertical--4"></div>
                </div>
                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Дизайн</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/design.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Дизайн сайтов, CRM-систем и мобильных приложений.</div>
                        <div class="services__item-list-item">Создание креативной концепции. Предлагаем уникальные решения для вашего продукта.</div>
                        <div class="services__item-list-item">Разработка брендбука. Поможем сформировать целостный образ для вашего бренда.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line">UI/UX</div>
                        <div class="services__item-title-line">Проектирование</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/ux.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Разрабатываем прототипы и сценарии взаимодействий.</div>
                        <div class="services__item-list-item">Применяем элементы пользовательского интерфейса в тестировании.</div>
                        <div class="services__item-list-item">Проектируем всю последовательную иерархию стандартов.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line">Программирование и</div>
                        <div class="services__item-title-line">разработка CRM</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/crm.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Разработка сайтов всех видов и под любые задачи.</div>
                        <div class="services__item-list-item">Разработка CRM и внедрение.</div>
                        <div class="services__item-list-item">Включимся в ваш проект и доработаем его.</div>
                        <div class="services__item-list-item">Адаптируем вёрстку под все виды устройств</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Мобильная разработка</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/mobile-dev.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Создание мобильных приложений под IOS и Android.</div>
                        <div class="services__item-list-item">Разработка серверной части и клиентской с адаптацией под ваши задачи.</div>
                        <div class="services__item-list-item">ASO - поисковая оптимизация мобильных приложений.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Реклама и Маркетинг</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/xyz.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Настройка и ведение контекстной рекламы Yandex и Google.</div>
                        <div class="services__item-list-item">Подготовим маркетинговый план для вашей компании.</div>
                        <div class="services__item-list-item">SEO - поисковое продвижение, выведем ваш сайт в ТОП-1</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-mark">New</div>
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Миграция из offline</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/migration.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Проводим аудит сайта и вашего бизнеса.</div>
                        <div class="services__item-list-item">Разрабатываем стратегию вывода вашего бизнеса на новый уровень.</div>
                        <div class="services__item-list-item">Сопровождаем на всех этапах, от начала и до конца.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio" id="portfolio">
        <div class="portfolio__item portfolio__item--trade open-portfolio" data-target="trade">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Мобильное приложение</div>
                <div class="portfolio__item-header-name">Торговая платформа</div>
            </div>
            <div class="portfolio__item-img-block">
                <img src="img/products/product-1.png" class="portfolio__item-img">
            </div>
        </div>
        <div class="portfolio__item portfolio__item--promo open-portfolio" data-target="promo">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Веб-разработка</div>
                <div class="portfolio__item-header-name">Промо сайт Мастера Алекса Анатоль</div>
            </div>
            <div class="portfolio__item-img-block">
                <img src="img/products/product-2.png" class="portfolio__item-img">
            </div>
        </div>
        <div class="portfolio__item portfolio__item--quotes open-portfolio" data-target="quotes">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Веб-разработка</div>
                <div class="portfolio__item-header-name">График котировок франшиз</div>
            </div>
            <div class="portfolio__item-img-block">
                <img src="img/products/product-3.png" class="portfolio__item-img">
            </div>
        </div>
        <div class="portfolio__item portfolio__item--coffee open-portfolio" data-target="coffee">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Мобильное приложение</div>
                <div class="portfolio__item-header-name">Абонементы кофейни</div>
            </div>
            <div class="portfolio__item-img-block">
                <img src="img/products/product-4.png" class="portfolio__item-img">
            </div>
        </div>
    </div>

    <div class="lead" id="lead">
        <div class="lead__block layout__block">
            <div class="lead__subtitle title title--white title--small">Вы можете оставить заявку на расчет проекта</div>
            <div class="lead__title title title--white">Рассчитать проект</div>
            <form class="lead__form form-check" id="lead-form" data-form-name="Главная страница: Рассчитать проект">
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

                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Предполагаемый бюджет проекта</div>
                    <div class="lead__form-item-input-block">
                        <div class="input">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="Введите сумму в рублях" name="budget">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item">
                    <div class="lead__form-item-title">Выберите услугу</div>
                    <div class="lead__form-item-input-block">
                        <div class="lead__form-item-input-checkbox">
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_1" name="service" value="Дизайн"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_1">Дизайн</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_2" name="service" value="Веб-разработка"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_2">Веб-разработка</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_3" name="service" value="Мобильная разработка"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_3">Мобильная разработка</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_4" name="service" value="Реклама"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_4">Реклама</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_5" name="service" value="Миграция"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_5">Миграция</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--2-3">
                    <div class="lead__form-item-title">Опишите задачу проекта</div>
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
                    <img class="review__item-img" src="img/client-icon-1.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="img/client-icon-2.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="img/client-icon-3.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="img/client-icon-4.svg">
                </div>
                <div class="review__item">
                    <img class="review__item-img" src="img/client-icon-5.svg">
                </div>
            </div>
            <div class="review__form-title">Оставьте свои данные и с вами свяжутся</div>
            <form class="review__form form-check form-check--white-error" id="review-form" data-form-name="Главная страница: Запросить отзыв">
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
                <div class="footer__menu-item animation-scroll" data-scroll-goal="#services">Услуги</div>
                <div class="footer__menu-item animation-scroll" data-scroll-goal="#portfolio">Портфолио</div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-contact">
                <a href="tel:+78004565447" class="footer__bottom-contact-phone">8 800 456 54 47</a>
                <a href="mailto:info@madeinearth.ru" class="footer__bottom-contact-mail">info@madeinearth.ru</a>
            </div>
            <div class="footer__bottom-logo"></div>
        </div>
    </footer>

    <div class="portfolio-modal__close close-portfolio">
        <div class="portfolio-modal__close-text">Закрыть</div>
    </div>

    <div class="portfolio-modal">
        <div class="portfolio-modal__inner">
            <div class="portfolio-modal__preloader"></div>
            <div class="portfolio-modal__item" data-name="trade">
                <img class="portfolio-modal__item-img" data-href-desktop="img/portfolio-modal/portfolio-1.jpg" data-href-mobile="img/portfolio-modal/portfolio-1-mob.jpg">
            </div>
            <div class="portfolio-modal__item" data-name="promo">
                <img class="portfolio-modal__item-img" data-href-desktop="img/portfolio-modal/portfolio-2.jpg" data-href-mobile="img/portfolio-modal/portfolio-2-mob.jpg">
            </div>
            <div class="portfolio-modal__item" data-name="quotes">
                <img class="portfolio-modal__item-img" data-href-desktop="img/portfolio-modal/portfolio-3.jpg" data-href-mobile="img/portfolio-modal/portfolio-3-mob.jpg">
            </div>
            <div class="portfolio-modal__item" data-name="coffee">
                <img class="portfolio-modal__item-img" data-href-desktop="img/portfolio-modal/portfolio-4.jpg" data-href-mobile="img/portfolio-modal/portfolio-4-mob.jpg">
            </div>
        </div>
    </div>

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
<script src="plugins/jquery.maskedinput.min.js"></script>
<script src="plugins/errors_handler.js"></script>
<script src="js/main.js"></script>
</html>