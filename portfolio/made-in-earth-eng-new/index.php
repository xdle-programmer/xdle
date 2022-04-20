<!doctype html>
<html lang="ru">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NV8J5XS');</script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <title>Made in Earth</title>
    <!-- Facebook Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '310708233270894');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
                   src="https://www.facebook.com/tr?id=310708233270894&ev=PageView&noscript=1"
        /></noscript>
    <!-- End Facebook Pixel Code -->
</head>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments);
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a);
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(62701246, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
</script>
<style>
    body {
        background: #000
    }

    .wrapper {
        opacity: 0;
    }
</style>
<link rel="stylesheet" type="text/css" href="scss/styles/styles.2.4.css">

<?php
if (strpos($_SERVER['HTTP_ACCEPT'], 'image/webp') !== false || strpos($_SERVER['HTTP_USER_AGENT'], ' Chrome/') !== false) {
    $webp_support = true;
} else {
    $webp_support = false;
}
?>

<body class="english" style="background: #000">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NV8J5XS"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div class="wrapper">

    <header class="header">
        <div class="header__block layout">
            <div class="header__logo"></div>
            <div class="header__toggle-button"></div>
            <div class="header__item">
                <div class="header__menu">
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#company">Company</div>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#services">Service</div>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#portfolio">Portfolio</div>
                    <div class="header__menu-item animation-scroll" data-scroll-goal="#footer">Contacts</div>
                </div>
                <div class="header__phone">
                    <a href="tel:+18448842080" class="header__phone-item">+1 844 884 20 80</a>
                    <a href="tel:+34822621080" class="header__phone-item">+34 822 621 080</a>
                </div>

                <div class="header__lead animation-scroll" data-scroll-goal="#lead">Calculate the project</div>
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
                        <div class="first-screen__content-menu-title">Design</div>
                        <div class="first-screen__content-menu-desc">UI/UX programming, branding for your company</div>
                    </a>
                    <a href="/development/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Programming</div>
                        <div class="first-screen__content-menu-desc">Web site, Online store, CRM systems development, individual projects</div>
                    </a>
                    <a href="/advertising/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Advertising</div>
                        <div class="first-screen__content-menu-desc">Contextual advertising, SEO, SMM, individual calculation for Your project</div>
                    </a>
                    <a href="/ar/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">VR/AR</div>
                        <div class="first-screen__content-menu-desc">Augmented Reality and Virtual Reality apps development</div>
                    </a>
                    <a href="/migration/" class="first-screen__content-menu-item">
                        <div class="first-screen__content-menu-icon">
                            <?php for ($a = 0; $a < 100; $a++) {
                                echo '<div class="first-screen__content-menu-icon-inner first-screen__content-menu-icon-inner--' . rand(1, 7) . '"></div>';
                            } ?>
                        </div>
                        <div class="first-screen__content-menu-title">Migration</div>
                        <div class="first-screen__content-menu-desc">New World - New opportunities! Do not miss your chance.</div>
                    </a>
                </div>
                <div class="first-screen__content-about">
                    <div class="first-screen__content-about-title">Create unique solutions</div>
                    <div class="first-screen__content-about-subtitle">12 years</div>
                    <div class="first-screen__content-about-desc">
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">01.</div>
                            <div class="first-screen__content-about-desc-title">UI/UX</div>
                            <div class="first-screen__content-about-desc-text">Premium design with selling strategic web marketing</div>
                        </div>
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">02.</div>
                            <div class="first-screen__content-about-desc-title">Analytics</div>
                            <div class="first-screen__content-about-desc-text">Audit and analytics of your project with usability-testing</div>
                        </div>
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">03.</div>
                            <div class="first-screen__content-about-desc-title">Functionality</div>
                            <div class="first-screen__content-about-desc-text">Goals and technically complicated solutions in programming area</div>
                        </div>
                        <div class="first-screen__content-about-desc-item">
                            <div class="first-screen__content-about-desc-number">04.</div>
                            <div class="first-screen__content-about-desc-title">Implementation</div>
                            <div class="first-screen__content-about-desc-text">Integration with third-party service for CRM and ERP systems</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="first-screen__background">
            <div class="first-screen__video-wrapper">
                <div class="first-screen__video-block">
                    <div class="first-screen__video-preview"></div>
                    <video src="" class="first-screen__video" autoplay muted loop playsinline data-video-src="/video/video_"></video>
                </div>
            </div>
        </div>
    </div>

    <div class="services" id="services">
        <div class="services__block layout__block">
            <div class="services__subtitle title title--small">Service for sales increase</div>
            <div class="services__title title">Meet the most difficult business challenges</div>
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
                        <div class="services__item-title-line services__item-title-line--one-line">Design</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/design.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Sites, CRM systems and mobile applications design.</div>
                        <div class="services__item-list-item">Making of creative concept. We offer the unique solutions for your product.</div>
                        <div class="services__item-list-item">Brand book development. We help form the integral image for your brand.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line">UI/UX</div>
                        <div class="services__item-title-line">Projective</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/ux.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Develop the prototypes and scenarios of interactions.</div>
                        <div class="services__item-list-item">Use the elements of users interface in testing.</div>
                        <div class="services__item-list-item">Design all coherent hierarchy of standards.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line">CRM programming and</div>
                        <div class="services__item-title-line">development.</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/crm.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Development of all kinds of sites adapted to any tasks.</div>
                        <div class="services__item-list-item">CRM development and implementation</div>
                        <div class="services__item-list-item">Include in your project and complete it.</div>
                        <div class="services__item-list-item">Adapt the page making to all kinds of devices.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Mobile development</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/mobile-dev.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Creation of mobile applications for IOS and Android</div>
                        <div class="services__item-list-item">Development of server and client part with adaption to your tasks.</div>
                        <div class="services__item-list-item">ASO – the search optimization of mobile applications.</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Advertising and marketing</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/xyz.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Setting and involvement Yandex and Google contextual advertising</div>
                        <div class="services__item-list-item">Prepare the marketing plan for your company.</div>
                        <div class="services__item-list-item">SEO – the search promotion, take your site toTOP-1</div>
                    </div>
                </div>

                <div class="services__item">
                    <div class="services__item-mark">New</div>
                    <div class="services__item-title">
                        <div class="services__item-title-line services__item-title-line--one-line">Migration from offline.</div>
                    </div>
                    <div class="services__item-icon">
                        <img class="services__item-icon-img" src="img/services-icon/migration.svg">
                    </div>
                    <div class="services__item-list">
                        <div class="services__item-list-item">Conduct the site and your business audit.</div>
                        <div class="services__item-list-item">Development the strategy of your business tacking to the new level.</div>
                        <div class="services__item-list-item">Support at all stages, from beginning to finish.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="portfolio" id="portfolio">
        <div class="portfolio__item portfolio__item--trade open-portfolio" data-target="trade">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Mobile application</div>
                <div class="portfolio__item-header-name">Trading platform</div>
            </div>
            <div class="portfolio__item-img-block">
                <?php
                if ($webp_support) {
                    echo '<img src="img/products/product-1-small.webp" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-1.webp" class="portfolio__item-img portfolio__item-img--desktop">';
                } else {
                    echo '<img src="img/products/product-1-small.png" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-1.png" class="portfolio__item-img portfolio__item-img--desktop">';
                }
                ?>
            </div>
        </div>
        <div class="portfolio__item portfolio__item--promo open-portfolio" data-target="promo">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Web development</div>
                <div class="portfolio__item-header-name">Promo-site of Master Alex Anatole</div>
            </div>
            <div class="portfolio__item-img-block">
                <?php
                if ($webp_support) {
                    echo '<img src="img/products/product-2-small.webp" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-2.webp" class="portfolio__item-img portfolio__item-img--desktop">';
                } else {
                    echo '<img src="img/products/product-2-small.png" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-2.png" class="portfolio__item-img portfolio__item-img--desktop">';
                }
                ?>
            </div>
        </div>
        <div class="portfolio__item portfolio__item--quotes open-portfolio" data-target="quotes">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Web development</div>
                <div class="portfolio__item-header-name">Franchise quotation schedule</div>
            </div>
            <div class="portfolio__item-img-block">
                <?php
                if ($webp_support) {
                    echo '<img src="img/products/product-3-small.webp" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-3.webp" class="portfolio__item-img portfolio__item-img--desktop">';
                } else {
                    echo '<img src="img/products/product-3-small.png" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-3.png" class="portfolio__item-img portfolio__item-img--desktop">';
                }
                ?>
            </div>
        </div>
        <div class="portfolio__item portfolio__item--coffee open-portfolio" data-target="coffee">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">Mobile application</div>
                <div class="portfolio__item-header-name">Coffee shops membership.</div>
            </div>
            <div class="portfolio__item-img-block">
                <?php
                if ($webp_support) {
                    echo '<img src="img/products/product-4-small.webp" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-4.webp" class="portfolio__item-img portfolio__item-img--desktop">';
                } else {
                    echo '<img src="img/products/product-4-small.png" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-4.png" class="portfolio__item-img portfolio__item-img--desktop">';
                }
                ?>
            </div>
        </div>
        <div class="portfolio__item portfolio__item--marketing open-modal" data-modal="#modal_marketing">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">VR/AR</div>
                <div class="portfolio__item-header-name">Marketing and Sales solutions</div>
            </div>
            <div class="portfolio__item-img-block">
                <?php
                if ($webp_support) {
                    echo '<img src="img/products/product-5-small.webp" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-5.webp" class="portfolio__item-img portfolio__item-img--desktop">';
                } else {
                    echo '<img src="img/products/product-5-small.png" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-5.png" class="portfolio__item-img portfolio__item-img--desktop">';
                }
                ?>
            </div>
        </div>
        <div class="portfolio__item portfolio__item--education open-modal" data-modal="#modal_education">
            <div class="portfolio__item-header">
                <div class="portfolio__item-header-category">VR/AR</div>
                <div class="portfolio__item-header-name">Education solutions</div>
            </div>
            <div class="portfolio__item-img-block">
                <?php
                if ($webp_support) {
                    echo '<img src="img/products/product-6-small.webp" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-6.webp" class="portfolio__item-img portfolio__item-img--desktop">';
                } else {
                    echo '<img src="img/products/product-6-small.jpg" class="portfolio__item-img portfolio__item-img--mobile">';
                    echo '<img src="img/products/product-6.jpg" class="portfolio__item-img portfolio__item-img--desktop">';
                }
                ?>
            </div>
        </div>
    </div>

    <div class="lead" id="lead">
        <div class="lead__block layout__block">
            <div class="lead__subtitle title title--white title--small">You can leave a project calculate request</div>
            <div class="lead__title title title--white">Calculate the project</div>
            <form class="lead__form form-check" id="lead-form" data-form-name="Главная страница: Calculate the project">
                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Your name</div>
                    <div class="lead__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="Name" name="name">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">E-mail</div>
                    <div class="lead__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="E-mail" name="email">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Telephone number</div>
                    <div class="lead__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" name="phone" placeholder="Phone">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--half">
                    <div class="lead__form-item-title">Estimated project budget</div>
                    <div class="lead__form-item-input-block">
                        <div class="input">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="Enter the amount" name="budget">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item">
                    <div class="lead__form-item-title">Select the service</div>
                    <div class="lead__form-item-input-block">
                        <div class="lead__form-item-input-checkbox">
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_1" name="service" value="Design"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_1">Design</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_2" name="service" value="Web development"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_2">Web development</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_3" name="service" value="Mobile development"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_3">Mobile development</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_4" name="service" value="Advertising"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_4">Advertising</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_5" name="service" value="Migration"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_5">Migration</label>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div class="checkbox__item">
                                    <input class="checkbox__item-input" id="checkbox_6" name="service" value="VR"
                                           type="checkbox"/>
                                    <label class="checkbox__item-label" for="checkbox_6">VR</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--2-3">
                    <div class="lead__form-item-title">Describe objectives of the project</div>
                    <div class="lead__form-item-input-block">
                        <div class="input">
                            <div class="input__button input__button--textarea">
                                <textarea class="input__text" placeholder="Enter the text" name="task"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lead__form-item lead__form-item--1-3">
                    <div class="lead__form-item-title">Link to one site (if you have)</div>
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
                        By pressing the button "Send" you agree to processing
                        <a href="policy/privacy-policy-en.pdf" target="_blank" class="lead__form-footer-desc-link">of the personal data.</a>
                    </div>
                    <input type="hidden" name="service_list">
                    <input type="hidden" name="answers"><input type="hidden" name="hidden_email">
                    <button class="lead__form-footer-button form-check__button submit">
                        Send
                    </button>
                </div>

            </form> 
        </div>
    </div>

    <div class="review">
        <div class="review__block">
            <div class="review__subtitle title title--small">Do you want to know about quality of our work?</div>
            <div class="review__title title">Solicit feedback from our clients</div>
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
            <div class="review__form-title">Leave your contact and we connect with you</div>
            <form class="review__form form-check form-check--white-error" id="review-form" data-form-name="Главная страница: Запросить отзыв">
                <div class="review__form-item">
                    <div class="review__form-item-title">E-mail</div>
                    <div class="review__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" placeholder="E-mail" name="email">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="review__form-item">
                    <div class="review__form-item-title">Telephone number</div>
                    <div class="review__form-item-input-block">
                        <div class="input form-check__field" data-check-type="input" data-check="input-required">
                            <div class="input__button">
                                <input type="text" class="input__text" name="phone" placeholder="Phone">
                            </div>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="answers"><input type="hidden" name="hidden_email">
                <button class="review__form-button form-check__button submit">Solicit</button>
            </form>
        </div>
    </div>

    <footer class="footer" id="footer">
        <div class="footer__block">
            <div class="footer__menu">
                <a href="/design/" class="footer__menu-item">Design</a>
                <a href="/development/" class="footer__menu-item">Programming</a>
                <a href="/advertising/" class="footer__menu-item">Advertising</a>
                <a href="/migration/" class="footer__menu-item">Migration</a>
                <a href="/ar/" class="footer__menu-item">VR/AR</a>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom-contact">
                <a href="tel:+18448842080" class="footer__bottom-contact-phone">+1 844 884 20 80</a>
                <a href="tel:+34822621080" class="footer__bottom-contact-phone">+34 822 621 080</a>
                <a href="mailto:info@madeinearth.online" class="footer__bottom-contact-mail">info@madeinearth.online</a>
            </div>
            <div class="footer__bottom-company">
                Roomy inc.<br>
                16192 Coastal Highway<br>
                Lewes, DE 19958
            </div>

            <div class="footer__bottom-logo"></div>
        </div>
    </footer>

    <div class="modal__background close-modal"></div>

    <div class="modal__block" id="modal_success">
        <div class="modal__close close-modal"></div>

        <div class="modal__header">
            <div class="modal__logo"></div>
            <div class="modal__title">Thank you!</div>
        </div>
        <div class="modal__content">
            <div class="modal__content-text">Your message sent</div>
        </div>
    </div>

    <div class="modal__block modal__block--video" id="modal_marketing">
        <div class="modal__close close-modal"></div>

        <div class="modal__header">
            <div class="modal__logo"></div>
            <div class="modal__title">Marketing solutions</div>
        </div>
        <div class="modal__content-video">
            <div class="youtube-player" data-youtube="FldY6XHapQk">
                <div class="youtube-player__inner"></div>
            </div>
        </div>
    </div>

    <div class="modal__block modal__block--video" id="modal_education">
        <div class="modal__close close-modal"></div>

        <div class="modal__header">
            <div class="modal__logo"></div>
            <div class="modal__title">Education solutions</div>
        </div>
        <div class="modal__content-video">
            <div class="youtube-player" data-youtube="kd_ELSvZbFg">
                <div class="youtube-player__inner"></div>
            </div>
        </div>
    </div>

    <a class="whatsapp-button" href="https://wa.me/34604343128?text=Question%20from%20the%20site%20Made%20in%20Earth"></a>
</div>

<div class="portfolio-modal">
    <div class="portfolio-modal__inner">
        <div class="portfolio-modal__preloader"></div>
        <div class="portfolio-modal__item" data-name="trade">
            <div class="portfolio-modal__item-block">
                <div class="portfolio-monyx">
                    <div class="portfolio-monyx__first-screen">
                        <div class="portfolio-monyx__first-screen-inner">
                            <div class="portfolio-monyx__first-screen-inner-grid">
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                                <div class="portfolio-monyx__first-screen-inner-grid-item"></div>
                            </div>
                            <div class="portfolio-monyx__first-screen-inner-wrapper">
                                <div class="portfolio-monyx__first-screen-logo">
                                    <img class="portfolio-monyx__first-screen-logo-img" data-src="img/portfolio-monyx/logo.png">
                                </div>
                                <div class="portfolio-monyx__first-screen-title-block">
                                    <div class="portfolio-monyx__first-screen-title-block-text">
                                        <div class="portfolio-monyx__first-screen-title-block-text-big">Trading platform</div>
                                        <div class="portfolio-monyx__first-screen-title-block-text-small">Mobile App</div>
                                    </div>
                                    <div class="portfolio-monyx__first-screen-title-block-img">
                                        <img class="portfolio-monyx__first-screen-title-block-img-inner" data-src="img/portfolio-monyx/first-logo.png">
                                    </div>
                                </div>
                                <div class="portfolio-monyx__first-screen-img-block">
                                    <img class="portfolio-monyx__first-screen-img" data-src="img/portfolio-monyx/first-img.svg">
                                </div>
                                <div class="portfolio-monyx__first-screen-list">
                                    <div class="portfolio-monyx__first-screen-list-items">
                                        <div class="portfolio-monyx__first-screen-list-items-title">Objective:</div>
                                        <div class="portfolio-monyx__first-screen-list-items-list">
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">Develop the application from the ground up for ios and android
                                                platform.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">Create the unique user-friendly product with news and analytical
                                                exercise.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">The application should be useful order to the client be available to
                                                read news, monitor currencies and certainly increase revenue trading in our platform.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">The trade opportunities for beginners and the switch to demo account
                                                should be taken into consideration.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">Trading platform should have the convenient tools and unique signal.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="portfolio-monyx__first-screen-list-items">
                                        <div class="portfolio-monyx__first-screen-list-items-title">Solutions:</div>
                                        <div class="portfolio-monyx__first-screen-list-items-list portfolio-monyx__first-screen-list-items-list--check">
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">The most popular applications from trading area had been analysed, it
                                                was decided to create the section with the private office, the analytical section, the section with quotes courses, trading platform
                                                section and the support link-service section.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">The trading process was examined; therefore it had been created the
                                                convenient functionality with well-designed tools and signals.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">It was designed the private office with simple method of recharge and
                                                withdrawal funds.
                                            </div>
                                            <div class="portfolio-monyx__first-screen-list-items-list-item">The convenient method of feedback, smart chat.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-monyx__second-screen">
                        <div class="portfolio-monyx__second-screen-title">Application structure</div>
                        <div class="portfolio-monyx__second-screen-title-background">
                            <img class="portfolio-monyx__second-screen-title-background-img" data-src="img/portfolio-monyx/second-background.png">
                        </div>
                        <div class="portfolio-monyx__second-screen-map">
                            <img class="portfolio-monyx__second-screen-map-img" data-src="img/portfolio-monyx/map.png">
                        </div>
                    </div>
                    <div class="portfolio-monyx__third-screen">
                        <div class="portfolio-monyx__third-screen-desc">
                            <div class="portfolio-monyx__third-screen-desc-title">Prototyping</div>
                            <div class="portfolio-monyx__third-screen-desc-subtitle">More than 200 detailed screens of prototypes. All scripts of user interface had been thought
                                out. It had been make the testing among focus group.
                            </div>
                        </div>
                        <div class="portfolio-monyx__third-screen-background">
                            <img class="portfolio-monyx__third-screen-background-img" data-src="img/portfolio-monyx/third-screen-background.jpg">
                        </div>
                    </div>
                    <div class="portfolio-monyx__fourth-screen">
                        <div class="portfolio-monyx__fourth-screen-title">UI KIT</div>
                        <div class="portfolio-monyx__fourth-screen-grids">
                            <div class="portfolio-monyx__fourth-screen-grid-vertical">
                                <?php for ($a = 0; $a < 22; $a++) {
                                    echo '<div class="portfolio-monyx__fourth-screen-grid-vertical-inner"></div>';
                                } ?>
                            </div>
                            <div class="portfolio-monyx__fourth-screen-grid-horizontal">
                                <?php for ($a = 0; $a < 100; $a++) {
                                    echo '<div class="portfolio-monyx__fourth-screen-grid-horizontal-inner"></div>';
                                } ?>
                            </div>
                        </div>
                        <div class="portfolio-monyx__fourth-screen-img-block-1">
                            <img class="portfolio-monyx__fourth-screen-img-block-1-img" data-src="img/portfolio-monyx/fourth-1.svg">
                        </div>
                        <div class="portfolio-monyx__fourth-screen-bottom">
                            <div class="portfolio-monyx__fourth-screen-bottom-img-block-1">
                                <img class="portfolio-monyx__fourth-screen-bottom-img-block-1-img" data-src="img/portfolio-monyx/fourth-bottom-1.svg">
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-monyx__fifth-screen">
                        <div class="portfolio-monyx__fifth-screen-img-block">
                            <img class="portfolio-monyx__fifth-screen-img" data-src="img/portfolio-monyx/fifth.jpg">
                        </div>
                        <div class="portfolio-monyx__fifth-screen-desc">
                            <div class="portfolio-monyx__fifth-screen-desc-title">Interface design</div>
                            <div class="portfolio-monyx__fifth-screen-desc-text">
                                The objective was to visually apart from competitors, and this colour scheme is not used among other platforms.<br>
                                The combination of shades looks prevalent and competitive.
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-monyx__sixth-screen">
                        <div class="portfolio-monyx__sixth-screen-desc">
                            <div class="portfolio-monyx__sixth-screen-desc-title">Trading platform</div>
                            <div class="portfolio-monyx__sixth-screen-desc-text">
                                <div class="portfolio-monyx__sixth-screen-desc-text-inner">Monyx – is the professional tool for traders and investors.</div>
                                <div class="portfolio-monyx__sixth-screen-desc-text-inner">The most advanced tools were introduced for graphic work.</div>
                            </div>
                        </div>
                        <div class="portfolio-monyx__sixth-screen-img-block">
                            <img class="portfolio-monyx__sixth-screen-img portfolio-monyx__sixth-screen-img--1" data-src="img/portfolio-monyx/sixth-1.png">
                            <img class="portfolio-monyx__sixth-screen-img portfolio-monyx__sixth-screen-img--2" data-src="img/portfolio-monyx/sixth-2.png">
                            <img class="portfolio-monyx__sixth-screen-img portfolio-monyx__sixth-screen-img--3" data-src="img/portfolio-monyx/sixth-3.png">
                            <img class="portfolio-monyx__sixth-screen-img portfolio-monyx__sixth-screen-img--4" data-src="img/portfolio-monyx/sixth-4.png">
                            <img class="portfolio-monyx__sixth-screen-img portfolio-monyx__sixth-screen-img--5" data-src="img/portfolio-monyx/sixth-5.png">
                            <img class="portfolio-monyx__sixth-screen-img portfolio-monyx__sixth-screen-img--6" data-src="img/portfolio-monyx/sixth-6.png">
                            <div class="portfolio-monyx__sixth-screen-img-grid portfolio-monyx__sixth-screen-img-grid--1">
                                <?php for ($a = 0; $a < 72; $a++) {
                                    echo '<div class="portfolio-monyx__sixth-screen-img-grid-inner"></div>';
                                } ?>
                            </div>
                            <div class="portfolio-monyx__sixth-screen-img-grid portfolio-monyx__sixth-screen-img-grid--2">
                                <?php for ($a = 0; $a < 72; $a++) {
                                    echo '<div class="portfolio-monyx__sixth-screen-img-grid-inner"></div>';
                                } ?>
                            </div>
                            <div class="portfolio-monyx__sixth-screen-img-grid portfolio-monyx__sixth-screen-img-grid--3">
                                <?php for ($a = 0; $a < 72; $a++) {
                                    echo '<div class="portfolio-monyx__sixth-screen-img-grid-inner"></div>';
                                } ?>
                            </div>
                            <div class="portfolio-monyx__sixth-screen-img-blue-background"></div>
                        </div>
                    </div>
                    <div class="portfolio-monyx__seventh-screen">
                        <div class="portfolio-monyx__seventh-screen-title">It was created the multifunctional product</div>
                        <div class="portfolio-monyx__seventh-screen-list">
                            <div class="portfolio-monyx__seventh-screen-list-item">Market statistic and macroeconomic events calendar, view the actual financial news</div>
                            <div class="portfolio-monyx__seventh-screen-list-item">Educational tendering allow to try own force in trading without the real funds risk
                            </div>
                            <div class="portfolio-monyx__seventh-screen-list-item">Buy and sale of various assets on the common fiscal position: stocks, bonds, currency, features
                                and options
                            </div>
                            <div class="portfolio-monyx__seventh-screen-list-item">Sophisticated tracking of broker account and open positions status</div>
                            <div class="portfolio-monyx__seventh-screen-list-item">The implementations of technical analyse with using of graphical tools and wide set of
                                indicators.
                            </div>
                            <div class="portfolio-monyx__seventh-screen-list-item">Online chat and instant feedback</div>
                        </div>

                        <div class="portfolio-monyx__seventh-screen-img-block">
                            <img class="portfolio-monyx__seventh-screen-img" data-src="img/portfolio-monyx/seventh.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal__item" data-name="promo">
            <div class="portfolio-modal__item-block">
                <div class="portfolio-dao">
                    <div class="portfolio-dao__first-screen">
                        <div class="portfolio-dao__background">
                            <img class="portfolio-dao__background-img" data-src="img/portfolio-dao/background-n.jpg">
                        </div>
                        <div class="portfolio-dao__main-title">
                            TAO Philosophy
                        </div>
                        <div class="portfolio-dao__main-desc">
                            <div class="portfolio-dao__main-desc-text">
                                <div class="portfolio-dao__main-desc-text-title">Objective :</div>
                                <div class="portfolio-dao__main-desc-text-item">Develop the new site with section for seminars of Temple of Original Simplicity, which has not been
                                    changed from 1996.
                                </div>
                                <a href="www.tao.org" class="portfolio-dao__main-desc-text-link">www.tao.org</a>
                                <div class="portfolio-dao__main-desc-text-item">USA, Boston</div>
                            </div>
                            <div class="portfolio-dao__main-desc-img">
                                <img class="portfolio-dao__main-desc-img-mac" data-src="img/portfolio-dao/mac.png">
                                <img class="portfolio-dao__main-desc-img-screen" data-src="img/portfolio-dao/mac-inner.jpg">
                                <img class="portfolio-dao__main-desc-img-icon" data-src="img/portfolio-dao/dao-icon.png">
                            </div>
                        </div>
                        <div class="portfolio-dao__second-title">
                            <div class="portfolio-dao__second-title-item">The visual drenched in Taoism history and culture</div>
                            <div class="portfolio-dao__second-title-item-small">Screen of the site main page</div>
                            <div class="portfolio-dao__second-title-img-block">
                                <img class="portfolio-dao__second-title-img" data-src="img/portfolio-dao/fox.png">
                            </div>
                        </div>
                        <div class="portfolio-dao__screenshot">
                            <img class="portfolio-dao__screenshot-img" data-src="img/portfolio-dao/screen_1.jpg">
                        </div>
                        <div class="portfolio-dao__screenshot">
                            <img class="portfolio-dao__screenshot-img portfolio-dao__screenshot-img--left" data-src="img/portfolio-dao/screen_2.jpg">
                        </div>
                        <div class="portfolio-dao__screenshot">
                            <img class="portfolio-dao__screenshot-img" data-src="img/portfolio-dao/screen_3.jpg">
                            <img class="portfolio-dao__screenshot-img-god" data-src="img/portfolio-dao/god.png">
                        </div>
                        <div class="portfolio-dao__screenshot">
                            <img class="portfolio-dao__screenshot-img portfolio-dao__screenshot-img--left" data-src="img/portfolio-dao/screen_4.jpg">
                        </div>
                        <div class="portfolio-dao__second-title portfolio-dao__second-title--fourth">
                            <div class="portfolio-dao__second-title-item portfolio-dao__second-title-item--fourth">Master promo page</div>
                            <div class="portfolio-dao__second-title-item-small portfolio-dao__second-title-item-small--fourth">The page about seminar and seminar appointment.</div>
                        </div>
                        <div class="portfolio-dao__screenshot">
                            <img class="portfolio-dao__screenshot-img portfolio-dao__screenshot-img--big" data-src="img/portfolio-dao/screen_5.jpg">
                        </div>
                        <div class="portfolio-dao__list">
                            <div class="portfolio-dao__list-title">Web-pack realization</div>
                            <div class="portfolio-dao__list-subtitle">It was given the task to develop the site, which stylistically reveals the way to taoism and attracts the new
                                participants
                            </div>
                            <div class="portfolio-dao__list-desc">
                                <div class="portfolio-dao__list-desc-text">The convenient site structure has been developed:</div>
                                <div class="portfolio-dao__list-desc-items">
                                    <div class="portfolio-dao__list-desc-item">History and clarification about TAO verity</div>
                                    <div class="portfolio-dao__list-desc-item">Meeting with Master Alex Anatole</div>
                                    <div class="portfolio-dao__list-desc-item">There are presented books and production of master</div>
                                    <div class="portfolio-dao__list-desc-item">The separation section about the section with register for it is thought out</div>
                                </div>
                            </div>

                            <img class="portfolio-dao__list-desc-img" data-src="img/portfolio-dao/drago.png">
                            <img class="portfolio-dao__list-desc-background" data-src="img/portfolio-dao/background_drago.jpg">
                        </div>
                        <div class="portfolio-dao__mobile">
                            <div class="portfolio-dao__mobile-inner">
                                <div class="portfolio-dao__mobile-desc">
                                    <div class="portfolio-dao__mobile-desc-title">Adaptive design</div>
                                    <div class="portfolio-dao__mobile-desc-text">The flow of new apprentices increased by 65%.
                                    </div>
                                    <div class="portfolio-dao__mobile-desc-profit">
                                        <div class="portfolio-dao__mobile-desc-profit-title">The flow of new apprentices increased by</div>
                                        <div class="portfolio-dao__mobile-desc-profit-number">65%</div>
                                    </div>
                                </div>
                                <img class="portfolio-dao__mobile-img" data-src="img/portfolio-dao/mobile.jpg">
                            </div>
                        </div>
                        <div class="portfolio-dao__final">
                            <img class="portfolio-dao__final-img" data-src="img/portfolio-dao/final-1.jpg">
                            <img class="portfolio-dao__final-img-icon" data-src="img/portfolio-dao/final-2.jpg">
                            <div class="portfolio-dao__final-title">
                                Along with development<br> we have known the truth<br>and way to TAO
                            </div>
                            <div class="portfolio-dao__final-subtitle">Thank you for watching!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="portfolio-modal__item" data-name="quotes">
            <div class="portfolio-modal__item-block">
                <div class="portfolio-bb">
                    <div class="portfolio-bb__first-screen">
                        <div class="portfolio-bb__first-screen-desc">
                            <div class="portfolio-bb__first-screen-desc-logo">
                                <img class="portfolio-bb__first-screen-desc-logo-img" data-src="img/portfolio-bb/logo.svg">
                            </div>
                            <div class="portfolio-bb__first-screen-desc-text">
                                The website about franchising and partner business
                            </div>
                        </div>
                        <div class="portfolio-bb__first-screen-main">
                            <div class="portfolio-bb__first-screen-main-title">Objective</div>
                            <div class="portfolio-bb__first-screen-main-list">
                                <div class="portfolio-bb__first-screen-main-list-item">
                                    Create the section with franchises quotations inside the website
                                </div>
                                <div class="portfolio-bb__first-screen-main-list-item">
                                    Create the section in private office and in
                                </div>
                                <div class="portfolio-bb__first-screen-main-list-item">
                                    The block structure of quotations should be adaptive on all devices
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-bb__second-screen">
                        <div class="portfolio-bb__second-screen-desc">
                            <div class="portfolio-bb__second-screen-desc-title">Solution</div>
                            <div class="portfolio-bb__second-screen-desc-list">
                                <div class="portfolio-bb__second-screen-desc-list-item">
                                    <div class="portfolio-bb__second-screen-desc-list-item-icon">
                                        <?php for ($a = 0; $a < 20; $a++) {
                                            echo '<div class="portfolio-bb__second-screen-desc-list-item-icon-inner"></div>';
                                        } ?>
                                    </div>
                                    <div class="portfolio-bb__second-screen-desc-list-item-text">
                                        Developed the interactive table similar to the stock market
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-bb__second-screen-desc-list">
                                <div class="portfolio-bb__second-screen-desc-list-item">
                                    <div class="portfolio-bb__second-screen-desc-list-item-icon">
                                        <?php for ($a = 0; $a < 20; $a++) {
                                            echo '<div class="portfolio-bb__second-screen-desc-list-item-icon-inner"></div>';
                                        } ?>
                                    </div>
                                    <div class="portfolio-bb__second-screen-desc-list-item-text">
                                        Made the uploading of the data from the independent analytic centre, and also the output in the section private of franchisee, which moderates with platform operator.
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-bb__second-screen-desc-list">
                                <div class="portfolio-bb__second-screen-desc-list-item">
                                    <div class="portfolio-bb__second-screen-desc-list-item-icon">
                                        <?php for ($a = 0; $a < 20; $a++) {
                                            echo '<div class="portfolio-bb__second-screen-desc-list-item-icon-inner"></div>';
                                        } ?>
                                    </div>
                                    <div class="portfolio-bb__second-screen-desc-list-item-text">
                                        Thought the representation of quotations  on all devices.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="portfolio-bb__second-screen-images">
                            <div class="portfolio-bb__second-screen-images-mobile-img-block">
                                <img class="portfolio-bb__second-screen-images-mobile-img" data-src="img/portfolio-bb/second-mobile.jpg">
                            </div>
                            <div class="portfolio-bb__second-screen-images-desktop-img-block">
                                <img class="portfolio-bb__second-screen-images-desktop-img" data-src="img/portfolio-bb/second-desktop.jpg">
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-bb__third-screen">
                        <div class="portfolio-bb__third-screen-desc">
                            <div class="portfolio-bb__third-screen-desc-title">Quotations</div>
                            <div class="portfolio-bb__third-screen-desc-list">
                                <div class="portfolio-bb__third-screen-desc-list-item">Quotations have the colour combination, which depends on the age of Franchise.</div>
                                <div class="portfolio-bb__third-screen-desc-list-item">Block size depends on overall fertility of franchise.</div>
                                <div class="portfolio-bb__third-screen-desc-list-item">The abbreviation has its own group and subgroup.</div>
                            </div>
                        </div>
                        <div class="portfolio-bb__third-screen-chart-img-block">
                            <img class="portfolio-bb__third-screen-chart-img" data-src="img/portfolio-bb/chart.png">
                        </div>
                        <div class="portfolio-bb__third-screen-top-img-block">
                            <img class="portfolio-bb__third-screen-top-img" data-src="img/portfolio-bb/top.svg">
                        </div>
                        <div class="portfolio-bb__third-screen-bottom-img-block">
                            <img class="portfolio-bb__third-screen-bottom-img" data-src="img/portfolio-bb/bottom.svg">
                        </div>
                    </div>
                    <div class="portfolio-bb__fourth-screen">
                        <div class="portfolio-bb__fourth-screen-title portfolio-bb__fourth-screen-title--1">
                            Tabular format of blocks
                        </div>

                        <div class="portfolio-bb__fourth-screen-desc portfolio-bb__fourth-screen-desc--1">
                            If you switch the “QUOTATIONS TYPES” button, blocks are changing to tabular format. It is available to move to subgroup, the position is showed in the form of digits on the graphic.
                        </div>

                        <div class="portfolio-bb__fourth-screen-title portfolio-bb__fourth-screen-title--2">
                            Elements
                        </div>

                        <div class="portfolio-bb__fourth-screen-desc portfolio-bb__fourth-screen-desc--2">
                            When hovering on the block of the one from quotations, it is appeared the information board with all quotations of this group (subgroups).
                        </div>

                        <div class="portfolio-bb__fourth-screen-desc portfolio-bb__fourth-screen-desc--3">
                            Tips window
                        </div>

                        <div class="portfolio-bb__fourth-screen-desc portfolio-bb__fourth-screen-desc--4">
                            The interactive graphic on the page with information about franchise.<br>
                            Data is uploaded from the third-party service.
                        </div>


                        <div class="portfolio-bb__fourth-screen-img-block-1">
                            <img class="portfolio-bb__fourth-screen-img-1" data-src="img/portfolio-bb/fourth-1.svg">
                        </div>
                        <div class="portfolio-bb__fourth-screen-img-block-2">
                            <img class="portfolio-bb__fourth-screen-img-2" data-src="img/portfolio-bb/fourth-2.svg">
                        </div>
                        <div class="portfolio-bb__fourth-screen-img-block-3">
                            <img class="portfolio-bb__fourth-screen-img-3" data-src="img/portfolio-bb/fourth-3.svg">
                        </div>
                        <div class="portfolio-bb__fourth-screen-img-block-4">
                            <img class="portfolio-bb__fourth-screen-img-4" data-src="img/portfolio-bb/fourth-4.svg">
                        </div>
                        <div class="portfolio-bb__fourth-screen-img-block-5">
                            <img class="portfolio-bb__fourth-screen-img-5" data-src="img/portfolio-bb/fourth-5.jpg">
                        </div>
                        <div class="portfolio-bb__fourth-screen-img-block-6">
                            <img class="portfolio-bb__fourth-screen-img-6" data-src="img/portfolio-bb/fourth-6.svg">
                        </div>
                        <div class="portfolio-bb__fourth-screen-img-block-7">
                            <img class="portfolio-bb__fourth-screen-img-7" data-src="img/portfolio-bb/fourth-7.jpg">
                        </div>
                    </div>
                    <div class="portfolio-bb__fifth-screen">
                        <div class="portfolio-bb__fifth-screen-video-block">
                            <div class="portfolio-bb__fifth-screen-video">
                                <div class="youtube-player" data-youtube="ODJ_6p_uEc0">
                                    <div class="youtube-player__inner"></div>
                                </div>
<!--                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ODJ_6p_uEc0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
                            </div>
                        </div>
                        <div class="portfolio-bb__fifth-screen-desc">
                            This section has complex functionality.<br>
                            We have provided a lot of tests and experienced difficulties.<br>
                            But we have managed to overcome the challenges and create the work product, which has not analogy.<br>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="portfolio-modal__item" data-name="coffee">
            <div class="portfolio-modal__item-block">
                <div class="portfolio-kofeek">
                    <div class="portfolio-kofeek__first-screen">
                        <div class="portfolio-kofeek__first-screen-img-block">
                            <img class="portfolio-kofeek__first-screen-img" data-src="img/portfolio-kofeek/first-img.png">
                        </div>
                        <div class="portfolio-kofeek__first-screen-desc">
                            <div class="portfolio-kofeek__first-screen-desc-logo">
                                <img class="portfolio-kofeek__first-screen-desc-logo-img" data-src="img/portfolio-kofeek/logo.svg">
                            </div>
                            <div class="portfolio-kofeek__first-screen-desc-title">Mobile App</div>
                            <div class="portfolio-kofeek__first-screen-desc-text">The design of mobile application for coffee ticket sale
                            </div>
                        </div>
                    </div>

                    <div class="portfolio-kofeek__second-screen">
                        <div class="portfolio-kofeek__second-screen-desc">
                            <div class="portfolio-kofeek__second-screen-desc-logo">
                                <img class="portfolio-kofeek__second-screen-desc-logo-img" data-src="img/portfolio-kofeek/logo-2.png">
                            </div>
                            <div class="portfolio-kofeek__second-screen-desc-title">Objective:</div>
                            <div class="portfolio-kofeek__second-screen-desc-text">Design the application for client and staff of coffee houses.</div>
                            <div class="portfolio-kofeek__second-screen-desc-list">
                                <div class="portfolio-kofeek__second-screen-desc-list-item">Make the convenient purchase of ticket with various tariffs</div>
                                <div class="portfolio-kofeek__second-screen-desc-list-item">Create the multiplatform of account replenishment</div>
                                <div class="portfolio-kofeek__second-screen-desc-list-item">Adopt the map with premium and standard class establishments with contacts and feed
                                </div>
                                <div class="portfolio-kofeek__second-screen-desc-list-item">Create online chat</div>
                            </div>
                        </div>
                        <div class="portfolio-kofeek__second-screen-img-block">
                            <img class="portfolio-kofeek__second-screen-img" data-src="img/portfolio-kofeek/second.jpg">
                        </div>
                    </div>

                    <div class="portfolio-kofeek__third-screen">
                        <div class="portfolio-kofeek__third-screen-desc">
                            <div class="portfolio-kofeek__third-screen-desc-title">Visual</div>
                            <div class="portfolio-kofeek__third-screen-desc-text">Colours are tailored to visual identity of client establishments </div>
                        </div>
                        <div class="portfolio-kofeek__third-screen-img-block">
                            <img class="portfolio-kofeek__third-screen-img" data-src="img/portfolio-kofeek/third.svg">
                        </div>
                    </div>
                    <div class="portfolio-kofeek__fourth-screen">
                        <div class="portfolio-kofeek__fourth-screen-img-block">
                            <img class="portfolio-kofeek__fourth-screen-img" data-src="img/portfolio-kofeek/fourth-1.jpg">
                        </div>
                        <div class="portfolio-kofeek__fourth-screen-img-block">
                            <img class="portfolio-kofeek__fourth-screen-img" data-src="img/portfolio-kofeek/fourth-2.jpg">
                        </div>
                    </div>

                    <div class="portfolio-kofeek__fifth-screen">
                        <div class="portfolio-kofeek__fifth-screen-title">Tariff selection </div>
                        <div class="portfolio-kofeek__fifth-screen-grid">
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                            <div class="portfolio-kofeek__fifth-screen-grid-inner"></div>
                        </div>
                        <div class="portfolio-kofeek__fifth-screen-img-background"></div>
                        <div class="portfolio-kofeek__fifth-screen-img-block portfolio-kofeek__fifth-screen-img-block--1">
                            <img class="portfolio-kofeek__fifth-screen-img" data-src="img/portfolio-kofeek/fifth-1.png">
                        </div>
                        <div class="portfolio-kofeek__fifth-screen-img-block portfolio-kofeek__fifth-screen-img-block--2">
                            <img class="portfolio-kofeek__fifth-screen-img" data-src="img/portfolio-kofeek/fifth-2.png">
                        </div>
                        <div class="portfolio-kofeek__fifth-screen-img-block portfolio-kofeek__fifth-screen-img-block--3">
                            <img class="portfolio-kofeek__fifth-screen-img" data-src="img/portfolio-kofeek/fifth-3.png">
                        </div>
                        <div class="portfolio-kofeek__fifth-screen-img-block portfolio-kofeek__fifth-screen-img-block--4">
                            <img class="portfolio-kofeek__fifth-screen-img" data-src="img/portfolio-kofeek/fifth-4.png">
                        </div>
                    </div>

                    <div class="portfolio-kofeek__sixth-screen">
                        <div class="portfolio-kofeek__sixth-screen-desc">
                            <div class="portfolio-kofeek__sixth-screen-desc-title">Map of establishments </div>
                            <div class="portfolio-kofeek__sixth-screen-desc-map-block">
                                <img class="portfolio-kofeek__sixth-screen-desc-map" data-src="img/portfolio-kofeek/sixth-map.png">
                            </div>
                            <div class="portfolio-kofeek__sixth-screen-desc-phone-block">
                                <img class="portfolio-kofeek__sixth-screen-desc-phone" data-src="img/portfolio-kofeek/sixth-phone.png">
                            </div>
                            <div class="portfolio-kofeek__sixth-screen-desc-text">
                                Tariff plan  of ticket has some differ regarding premium and standard class establishments
                            </div>
                        </div>
                        <div class="portfolio-kofeek__sixth-screen-img-block">
                            <img class="portfolio-kofeek__sixth-screen-img" data-src="img/portfolio-kofeek/sixth-img.jpg">
                        </div>
                    </div>
                    <div class="portfolio-kofeek__seventh-screen">
                        <div class="portfolio-kofeek__seventh-screen-desc">
                            <div class="portfolio-kofeek__seventh-screen-desc-title">Application Screens </div>
                            <div class="portfolio-kofeek__seventh-screen-desc-text">It was detailed more than 100 screens </div>
                        </div>
                        <div class="portfolio-kofeek__seventh-screen-img-block">
                            <img class="portfolio-kofeek__seventh-screen-img" data-src="img/portfolio-kofeek/seventh.jpg">
                        </div>
                    </div>

                    <div class="portfolio-kofeek__eighth-screen">
                        <div class="portfolio-kofeek__eighth-screen-img-block">
                            <img class="portfolio-kofeek__eighth-screen-img" data-src="img/portfolio-kofeek/eighth-main.jpg">
                        </div>
                        <div class="portfolio-kofeek__eighth-screen-desc">
                            <div class="portfolio-kofeek__eighth-screen-desc-grid">
                                <div class="portfolio-kofeek__eighth-screen-desc-grid-inner"></div>
                                <div class="portfolio-kofeek__eighth-screen-desc-grid-inner"></div>
                                <div class="portfolio-kofeek__eighth-screen-desc-grid-inner"></div>
                                <div class="portfolio-kofeek__eighth-screen-desc-grid-inner"></div>
                                <div class="portfolio-kofeek__eighth-screen-desc-grid-inner"></div>
                            </div>
                            <div class="portfolio-kofeek__eighth-screen-desc-img-top-block">
                                <img class="portfolio-kofeek__eighth-screen-desc-img-top" data-src="img/portfolio-kofeek/donut.png">
                            </div>
                            <div class="portfolio-kofeek__eighth-screen-desc-img-bottom-block">
                                <img class="portfolio-kofeek__eighth-screen-desc-img-bottom" data-src="img/portfolio-kofeek/off.png">
                                <img class="portfolio-kofeek__eighth-screen-desc-img-bottom" data-src="img/portfolio-kofeek/off_2.png">
                                <img class="portfolio-kofeek__eighth-screen-desc-img-bottom" data-src="img/portfolio-kofeek/off_3.png">
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-kofeek__ninth-screen">
                        <div class="portfolio-kofeek__ninth-screen-title">
                            The best offers and tickets for real coffee experts.
                        </div>
                        <div class="portfolio-kofeek__ninth-screen-img-block">
                            <img class="portfolio-kofeek__ninth-screen-img" data-src="img/portfolio-kofeek/logo-3.png">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal__close close-portfolio">
    <div class="portfolio-modal__close-text">Закрыть</div>
</div>

</body>
<link rel="stylesheet" type="text/css" href="scss/styles/add-fonts.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="plugins/imask.js"></script>
<script src="plugins/errors_handler.js"></script>
<script src="js/main.v2.3.js"></script>
</html>