<!doctype html>
<html lang="ru">
<head>
    <!-- Google Analytics Content Experiment code -->
    <script>function utmx_section() {
        }

        function utmx() {
        }

        (function () {
            var
                k = '125148814-0', d = document, l = d.location, c = d.cookie;
            if (l.search.indexOf('utm_expid=' + k) > 0) return;

            function f(n) {
                if (c) {
                    var i = c.indexOf(n + '=');
                    if (i > -1) {
                        var j = c.indexOf(';', i);
                        return escape(c.substring(i + n.length + 1, j < 0 ? c.length : j))
                    }
                }
            }

            var x = f('__utmx'), xx = f('__utmxx'), h = l.hash;
            d.write(
                '<sc' + 'ript src="' + 'http' + (l.protocol == 'https:' ? 's://ssl' :
                '://www') + '.google-analytics.com/ga_exp.js?' + 'utmxkey=' + k +
                '&utmx=' + (x ? x : '') + '&utmxx=' + (xx ? xx : '') + '&utmxtime=' + new Date().valueOf() + (h ? '&utmxhash=' + escape(h.substr(1)) : '') +
                '" type="text/javascript" charset="utf-8"><\/sc' + 'ript>')
        })();
    </script>
    <script>utmx('url', 'A/B');</script>
    <!-- End of Google Analytics Content Experiment code -->

    <link rel="icon" type="image/png" href="../img/logo.png"/>
    <link rel="apple-touch-icon" href="../img/logo.png"/>
    <meta charset="UTF-8">
    <title>Наши курсы - Скорочтение и развитие памяти у детей в Одессе | Методика Шамиля Ахмадуллина </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/reset.css"/>
    <link rel="stylesheet" href="../css/fonts.css"/>
    <link rel="stylesheet" href="../css/jquery.formstyler.css"/>
    <link rel="stylesheet" href="../style.css"/>
    <link rel="stylesheet" href="new_style.css"/>
    <link rel="stylesheet" href="../js/jquery.bxslider/jquery.bxslider.css"/>
    <link rel="stylesheet" type="text/css" href="../js/fancybox/source/jquery.fancybox.css">
</head>
<body>


<script src="https://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script>
    jQuery(document).ready(function () {

        $("#filial").on('change', function () {
            switch ($(this).val()) {
                case '1':
                    $('#val4').css('display', 'none');
                    $('#val2').css('display', 'none');
                    $('#val3').css('display', 'block');
                    $('#val1').css('display', 'block');
                    break;
                case '2':
                    $('#val1').css('display', 'none');
                    $('#val3').css('display', 'none');
                    $('#val2').css('display', 'block');
                    $('#val4').css('display', 'block');
                    break;
            }
            ;
        });

    });
</script>
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

<header>
    <div class="cont">
        <div class="top">
            <div class="logo">
                <a href="/">
                    <img src="../img/logo.png" alt="">
                    <div class="text">
                        <p>Школа СКОРОЧТЕНИЯ</p>
                        <p>и развития памяти</p>
                    </div>
                </a>
            </div>
            <div class="right">


                <div class="tel">
                    <div id="val3">
                        <a href="tel:+38-(094)-94-12-518">(094) 94-12-518</a><br/>
                        <a href="tel:+38-(048)-78-38-518">(048) 78-38-518</a>
                    </div>
                    <div id="val4">
                        <a href="tel:+38-(094)-99-78-834">(094) 99-78-834</a><br/>
                        <a href="tel:+38-(048)-77-24-834">(048) 77-24-834</a>
                    </div>
                </div>

            </div>
        </div>
        <div class="menu">
            <ul>
                <li><a href="/">Главная</a></li>
                <li><a href="/courses/">Наши курсы</a></li>

            </ul>
        </div>
    </div>
</header>

<!--Старый блок-->
<div style="display: none">
    <div class="courses_block">
        <div class="cont">
            <div class="course" style="border-color:#fe6a16">
                <div class="img"><img src="../img/devotchka1.jpg" alt=""></div>
                <div class="content">
                    <h2>Обучение чтению</h2>
                    <p>Группа <span>5-6</span> и <span>6-7 лет</span></p>
                    <a href="../lp/learnread" class="button" style="background:#fe6a16">Подробнее</a>
                </div>
            </div>
            <div class="course" style="border-color:#0d8eda">
                <div class="img"><img src="../img/malchick.jpg" alt=""></div>
                <div class="content">
                    <h2>Скорочтение для детей</h2>
                    <p>Группа <span>7-8</span> <span>9-12</span> и <span>13-17 лет</span></p>
                    <a href="../lp/speedread" class="button" style="background:#0d8eda">Подробнее</a>
                </div>
            </div>
            <div class="course" style="border-color:#92d616">
                <div class="img"><img src="../img/devotchka3.jpg" alt=""></div>
                <div class="content">
                    <h2>Развитие памяти у детей</h2>
                    <p>Группа <span>9-12</span> и <span>13-17 лет</span></p>
                    <a href="../lp/memory" class="button" style="background:#92d616">Подробнее</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="courses_block">
    <div class="cont">


        <div class="course" style="border-color:#fe6a16;">
            <div class="img"><img src="../img/foto4.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2>Обучение чтению</h2>
                <p>Для детей <span>4-7</span> лет</p>
                <a href="../lp/new_learnread/" class="button">Подробнее</a> <a href="#popup" id="buttonlead"
                                                                                          class="button2 fancybox">Записаться</a>


            </div>
        </div>
        <div class="course" style="border-color:#92d616;">
            <div class="img"><img src="../img/foto1.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2>Скорочтение</h2>
                <p>Для детей <span>7-17</span> лет</p>
                <a href="../lp/new_speedread/" class="button">Подробнее</a> <a href="#popup" id="buttonlead"
                                                                                          class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div style=" width:100%; height:1px; clear:both;"></div>

        <div class="course" style="border-color:#FF8C00;">
            <div class="img"><img src="../img/foto6.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2>Развитие памяти</h2>
                <p>Для детей <span>9-16</span> лет</p>
                <a href="../lp/new_memory2/" class="button">Подробнее</a> <a href="#popup" id="buttonlead"
                                                                                        class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div class="course" style="border-color:#fe6a16;">
            <div class="img"><img src="../img/foto2.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2>Каллиграфия</h2>
                <p>Для детей <span>6-12</span> лет</p>
                <a href="../lp/new_kalligrafiya/" class="button">Подробнее</a> <a href="#popup"
                                                                                             id="buttonlead"
                                                                                             class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div style=" width:100%; height:1px; clear:both;"></div>

        <div class="course" style="border-color:#00ccff;">
            <div class="img"><img src="../img/foto3.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2 style="font-size:180%">Нементальная арифметика</h2>
                <p>Для детей <span>6-12</span> лет</p>
                <a href="../lp/new_ne-mentalnya-arifmetika/" class="button">Подробнее</a><a href="#popup"
                                                                                                       id="buttonlead"
                                                                                                       class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div class="course" style="border-color:#fe6a16;">
            <div class="img"><img src="../img/foto7.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2>Скорочтение</h2>
                <p>Для взрослых</p>
                <a href="../lp/new_speedread_adult/" class="button">Подробнее</a><a href="#popup"
                                                                                               class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div style=" width:100%; height:1px; clear:both;"></div>

        <div class="course" style="border-color:#00ccff;">
            <div class="img"><img src="../img/logic_main.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2 style="font-size:180%">РАЗВИТИЕ ЛОГИКИ</h2>
                <p>Для детей <span>6-8</span>, <span>9-11</span> и <span>12-16</span> лет</p>
                <a href="../lp/logic/" class="button">Подробнее</a><a href="#popup"
                                                                                            id="buttonlead"
                                                                                            class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div class="course" style="border-color:#fe6a16;">
            <div class="img"><img src="../img/learnstudy_main.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2>КУРС НАУЧИСЬ УЧИТЬСЯ</h2>
                <p>Для детей <span>4-6</span>, <span>7-9</span> и <span>10-16</span> лет</p>
                <a href="../lp/learnstudy/" class="button">Подробнее</a><a href="#popup"
                                                                                    class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div style=" width:100%; height:1px; clear:both;"></div>

        <div class="course" style="border-color:#00ccff;">
            <div class="img"><img src="../img/speedcub_main.jpg" alt="курсы скорочтение памяти  детям"></div>
            <div class="content2">

                <h2 style="font-size:180%">КУРС СПИДКУБИНГ</h2>
                <p>Для детей <span>6-8</span>, <span>9-11</span> и <span>12-16</span> лет</p>
                <a href="../lp/speedcub/" class="button">Подробнее</a><a href="#popup"
                                                                                            id="buttonlead"
                                                                                            class="button2 fancybox">Записаться</a>
            </div>
        </div>
        <div style=" width:100%; height:1px; clear:both;"></div>

    </div>
</div>


<footer>
    <div class="cont">
        <div class="top">
            <div class="left">
                <div class="logo">
                    <a href="/">
                        <img src="../img/footLogo.png" alt="">
                        <div class="text">
                            <p>Школа СКОРОЧТЕНИЯ</p>
                            <p>и развития памяти</p>
                        </div>
                    </a>
                </div>
                <div class="menu">
                    <ul>
                        <li><a href="/">Главная</a></li>
                        <li><a href="">Наши курсы</a></li>

                    </ul>
                </div>
            </div>
            <div class="right">
                <div class="callback" style="visibility:hidden">
                    <a href="#">Подписаться на рассылку</a>
                </div>
                <div class="social">
                    <p>
                        <a href="https://plus.google.com/u/0/communities/118410824239640143202" target="_blank">
                            <img src="../img/google-plus-logo-button.png" alt="">
                        </a>
                        <a href="https://ok.ru/group/52833900888266" target="_blank">
                            <img src="../img/odnoklassniki-logo.png" alt="">
                        </a>
                        <a href="https://new.vk.com/skorochtenieodesa" target="_blank">
                            <img src="../img/vk.png" alt="">
                        </a>
                        <a href="https://www.facebook.com/SKR4E/" target="_blank">
                            <img src="../img/fb.png" alt="">
                        </a>
                        <a href="https://www.instagram.com/skorochtenieodessa/" target="_blank">
                            <img src="../img/instagram-logo.png" alt="">
                        </a>

                    </p></div>
            </div>
        </div>
        <div class="bottom">
            <div class="left">
                <p>г. Одесса, Люстдорфская дорога 140А<br></p>
                <p>Использование материалов сайта разрешено только с согласия правообладателей.<br/>
                    Мотов Андрей Юрьевич © 2014 - 2020</br>
                    <a href="http://forumodua.com/showthread.php?t=2727491"
                                                          target="_blank">Мы на Одесском форуме</a></br>
                    <a href="#policy" class="fancybox">Политика конфиденциальности</a>
                </p>

            </div>
            <div class="right">
                <div class="text">
                    <p>ИНН 2599022497</p>
                    <p>odessa@turboread.ru</p>
                    <p>Все права защищены.</p>

                </div>

            </div>
        </div>
    </div>
</footer>


<div id="popup" style="display: none">
    <!-- BEGIN LEAD-CRM CODE -->
    <p style="font: 32px/40px 'calibri-bold'; color: #313131; text-align:center; margin: 10px">Запишитесь на
        собеседование</p>
    <form action="../thankyou.php" method=post enctype="multipart/form-data" id="contact_form"
          novalidate="novalidate" data-selector="form" class="animated bounce"
          style="opacity: 1;">

        <div class="form-group padding_left">
            <input type="text" class="form-control lead_crm_input" id="contact_name" placeholder="Ваше имя"
                   name="DATA[NAME]">
        </div>
        <div class="form-group padding_left">
            <input class="form-control lead_crm_input" type="text" placeholder="Ваш телефон" id="phone01" required
                   name="DATA[PHONE_WORK]">
        </div>
        <input id="contact_submit" type="submit" class="applicationButton" name="submit"
               value="Записаться">
        <input type="hidden" name="DATA[number_form]"
               value="Страница выбора курсов http://odessa.turboread.ru/courses">

        <!--<input hidden name="DATA[emailto]" value="tairova@skorochtenie.od.ua">-->
        <input type="hidden" name="DATA[emailto]" value="and2771@gmail.com">
        <input type="hidden" name="subject" value="Заявка с выбора курсов">

        <input type="hidden" name="DATA[utm_source]"
               value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : ''; ?>">
        <input type="hidden" name="DATA[utm_medium]"
               value="<?php echo isset($_GET['utm_medium']) ? $_GET['utm_medium'] : ''; ?>">
        <input type="hidden" name="DATA[utm_campaign]"
               value="<?php echo isset($_GET['utm_campaign']) ? $_GET['utm_campaign'] : ''; ?>">
        <input type="hidden" name="DATA[utm_content]"
               value="<?php echo isset($_GET['utm_content']) ? $_GET['utm_content'] : ''; ?>">


    </form>

    <p style="font-family:PT Sans, sans-serif; font-size:100%;text-transform:none;line-height:100%;color: #000;  font-weight: 200; padding: 15px 0px 0px; margin:5px;">
        Нажимая на кнопку «Записаться», я принимаю условия <span class="policy-popup"
                                                                 style="color: #708090; text-decoration: underline;">пользовательского
            соглашения</span> и даю своё согласие на обработку моих персональных данных.</p>

    <div class="policy-popup-text" style="display:none;font-family: arial;margin-top: 20px;">
        <h2 style="font-size:14px;text-align:center;font-weight:600">Политика конфиденциальности</h2>
        <p style="color:#000; font-size:14px; text-align:justify;font-weight:400;">Ваша
            конфиденциальность очень важна для нас. Мы хотим, чтобы Ваша работа в Интернет по возможности была
            максимально
            приятной и полезной, и Вы совершенно спокойно использовали широчайший спектр информации, инструментов и
            возможностей, которые предлагает Интернет.<br> Личная информация Членов, собранная при регистрации (или
            в любое
            другое время) преимущественно используется для подготовки Продуктов или Услуг в соответствии с Вашими
            потребностями. Ваша информация не будет передана или продана третьим сторонам. Однако мы можем частично
            раскрывать личную информацию в особых случаях, описанных в «Согласии с рассылкой»</p>
        <h3 style="color:#000; font-size:14px;margin-top:10px;margin-bottom:10px; text-align:center; font-weight:800;">
            Какие
            данные собираются на сайте</h3>
        <p style="color:#000; font-size:12px; text-align:justify; font-weight:400;">При добровольной
            регистрации на получение рассылки Вы отправляете свое Имя и E-mail через форму регистрации.</p>
        <h3 style="color:#000; font-size:14px; text-align:center; font-weight:800;">С какой целью собираются эти
            данные</h3>
        <p style="color:#000; font-size:12px; text-align:justify; font-weight:400;">Имя используется
            для обращения лично к вам, а ваш e-mail для отправки вам писем рассылок, новостей тренинга, полезных
            материалов,
            коммерческих предложений. Ваши имя и e-mail не передаются третьим лицам, ни при каких условиях кроме
            случаев,
            связанных с исполнением требований законодательства. Ваше имя и e-mail на защищенных серверах сервиса
            getresponse.com и используются в соответствии с его политикой конфиденциальности.<br>Вы можете
            отказаться от
            получения писем рассылки и удалить из базы данных свои контактные данные в любой момент, кликнув на
            ссылку для
            отписки, присутствующую в каждом письме.</p>
        <h3 style="color:#000; font-size:14px; text-align:center; font-weight:800;">Как эти данные используются</h3>
        <p style="color:#000; font-size:12px; text-align:justify; font-weight:400;">На сайте
            speed-read2.ru используются куки (Cookies) и данные о посетителях сервиса Яндекс.Метрика.<br>При помощи
            этих
            данных собирается информация о действиях посетителей на сайте с целью улучшения его содержания,
            улучшения
            функциональных возможностей сайта и, как следствие, создания качественного контента и сервисов для
            посетителей.<br>Вы можете в любой момент изменить настройки своего браузера так, чтобы браузер
            блокировал все
            файлы cookie или оповещал об отправке этих файлов. Учтите при этом, что некоторые функции и сервисы не
            смогут
            работать должным образом</p>
        <h3 style="color:#000; font-size:14px; text-align:center; font-weight:800;">Как эти данные защищаются</h3>
        <p style="color:#000; font-size:12px; text-align:justify; font-weight:400;">Для защиты Вашей
            личной информации мы используем разнообразные административные, управленческие и технические меры
            безопасности.
            Наша Компания придерживается различных международных стандартов контроля, направленных на операции с
            личной
            информацией, которые включают определенные меры контроля по защите информации, собранной в Интернет.<br>Наших
            сотрудников обучают понимать и выполнять эти меры контроля, они ознакомлены с нашим Уведомлением о
            конфиденциальности, нормами и инструкциями.<br>Тем не менее, несмотря на то, что мы стремимся
            обезопасить Вашу
            личную информацию, Вы тоже должны принимать меры, чтобы защитить ее.<br>Мы настоятельно рекомендуем Вам
            принимать все возможные меры предосторожности во время пребывания в Интернете. Организованные нами
            услуги и
            веб-сайты предусматривают меры по защите от утечки, несанкционированного использования и изменения
            информации,
            которую мы контролируем. Несмотря на то, что мы делаем все возможное, чтобы обеспечить целостность и
            безопасность своей сети и систем, мы не можем гарантировать, что наши меры безопасности предотвратят
            незаконный
            доступ к этой информации хакеров сторонних организаций.<br>В случае изменения данной политики
            конфиденциальности
            вы сможете прочитать об этих изменениях на этой странице или, в особых случаях, получить уведомление на
            свой
            e-mail.<br>Для связи с администратором сайта по любым вопросам вы можете написать письмо на e-mail:
            info@speed-read2.ru</p>
    </div>


</div>


<div id="policy" style="max-width:550px; width: 98%; padding:20px;display:none;">
    <h2 style="font-size:20px;text-align:center;font-weight:600">Политика конфиденциальности</h2>
    <p style="color:#000; font-size:14px; text-align:justify;font-family:'Open Sans'; font-weight:400;">Ваша
        конфиденциальность очень важна для нас. Мы хотим, чтобы Ваша работа в Интернет по возможности была максимально
        приятной и полезной, и Вы совершенно спокойно использовали широчайший спектр информации, инструментов и
        возможностей, которые предлагает Интернет.<br> Личная информация Членов, собранная при регистрации (или в любое
        другое время) преимущественно используется для подготовки Продуктов или Услуг в соответствии с Вашими
        потребностями. Ваша информация не будет передана или продана третьим сторонам. Однако мы можем частично
        раскрывать личную информацию в особых случаях, описанных в «Согласии с рассылкой»</p>
    <h3 style="color:#000; font-size:18px;margin-top:10px;margin-bottom:10px; text-align:center; font-weight:800;">Какие
        данные собираются на сайте</h3>
    <p style="color:#000; font-size:14px; text-align:justify;font-family:'Open Sans'; font-weight:400;">При добровольной
        регистрации на получение рассылки Вы отправляете свое Имя и E-mail через форму регистрации.</p>
    <h3 style="color:#000; font-size:18px; text-align:center; font-weight:800;">С какой целью собираются эти данные</h3>
    <p style="color:#000; font-size:14px; text-align:justify;font-family:'Open Sans'; font-weight:400;">Имя используется
        для обращения лично к вам, а ваш e-mail для отправки вам писем рассылок, новостей тренинга, полезных материалов,
        коммерческих предложений. Ваши имя и e-mail не передаются третьим лицам, ни при каких условиях кроме случаев,
        связанных с исполнением требований законодательства. Ваше имя и e-mail на защищенных серверах сервиса
        getresponse.com и используются в соответствии с его политикой конфиденциальности.<br>Вы можете отказаться от
        получения писем рассылки и удалить из базы данных свои контактные данные в любой момент, кликнув на ссылку для
        отписки, присутствующую в каждом письме.</p>
    <h3 style="color:#000; font-size:18px; text-align:center; font-weight:800;">Как эти данные используются</h3>
    <p style="color:#000; font-size:14px; text-align:justify;font-family:'Open Sans'; font-weight:400;">На сайте
        turboread.ru используются куки (Cookies) и данные о посетителях сервиса Яндекс.Метрика.<br>При помощи этих
        данных собирается информация о действиях посетителей на сайте с целью улучшения его содержания, улучшения
        функциональных возможностей сайта и, как следствие, создания качественного контента и сервисов для
        посетителей.<br>Вы можете в любой момент изменить настройки своего браузера так, чтобы браузер блокировал все
        файлы cookie или оповещал об отправке этих файлов. Учтите при этом, что некоторые функции и сервисы не смогут
        работать должным образом</p>
    <h3 style="color:#000; font-size:18px; text-align:center; font-weight:800;">Как эти данные защищаются</h3>
    <p style="color:#000; font-size:14px; text-align:justify;font-family:'Open Sans'; font-weight:400;">Для защиты Вашей
        личной информации мы используем разнообразные административные, управленческие и технические меры безопасности.
        Наша Компания придерживается различных международных стандартов контроля, направленных на операции с личной
        информацией, которые включают определенные меры контроля по защите информации, собранной в Интернет.<br>Наших
        сотрудников обучают понимать и выполнять эти меры контроля, они ознакомлены с нашим Уведомлением о
        конфиденциальности, нормами и инструкциями.<br>Тем не менее, несмотря на то, что мы стремимся обезопасить Вашу
        личную информацию, Вы тоже должны принимать меры, чтобы защитить ее.<br>Мы настоятельно рекомендуем Вам
        принимать все возможные меры предосторожности во время пребывания в Интернете. Организованные нами услуги и
        веб-сайты предусматривают меры по защите от утечки, несанкционированного использования и изменения информации,
        которую мы контролируем. Несмотря на то, что мы делаем все возможное, чтобы обеспечить целостность и
        безопасность своей сети и систем, мы не можем гарантировать, что наши меры безопасности предотвратят незаконный
        доступ к этой информации хакеров сторонних организаций.<br>В случае изменения данной политики конфиденциальности
        вы сможете прочитать об этих изменениях на этой странице или, в особых случаях, получить уведомление на свой
        e-mail.<br>Для связи с администратором сайта по любым вопросам вы можете написать письмо на e-mail:
        info@speed-read2.ru</p>
</div>

<script src="../js/jquery.formstyler.js"></script>
<script>
    (function ($) {
        $(function () {
            $('input, select').styler({
                selectSearch: true
            });
        });
    })(jQuery);
</script>
<script src="../js/jquery.bxslider/jquery.bxslider.min.js"></script>
<script src="../js/fancybox/source/jquery.fancybox.pack.js"></script>
<!--<script src="../js/script.js"></script>-->


<script src="js/jquery.placeholder.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.validate.min.js"></script>
<script src="js/mask.js"></script>
<script src="js/jquery.maskedinput.js"></script>
<script src=js/script.js></script>
<script src="/js/utm_cookie.min.js"></script>

</body>
</html>