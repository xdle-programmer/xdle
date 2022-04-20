// Подключение Jquery
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

window.mobileWidth = 1200;

window.viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
window.viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;

// Подключение jQuery UI
// require('../../../libs/jquery-ui/assets/jquery-ui.js');
// import '../../../libs/jquery-ui/assets/jquery-ui.min.css';