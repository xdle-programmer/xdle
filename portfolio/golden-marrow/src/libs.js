// Подключение Jquery
import $ from '../../../libs/js/jquery.min';

window.jQuery = $;
window.$ = $;


window.mobileWidth = 1279;
window.mobileWidthSmall = 768;

// Подключение кастомных глобальных переменных и универсальных функций
require('../../../libs/js/customLib.js');

// Подключение плагинов
require('../../../plugins/menu.js');

require('../../../plugins/owlcarousel2/owl.carousel.min.js');
import '../../../plugins/owlcarousel2/assets/owl.carousel.min.css';

// Подключение jQuery UI

require('../../../libs/jquery-ui/assets/jquery-ui.js');
import '../../../libs/jquery-ui/assets/jquery-ui.min.css';

// Подключение masked slick
require('../../../libs/slick-slider/slick/slick.min');
import '../../../libs/slick-slider/slick/slick.scss';