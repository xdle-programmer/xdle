ymaps.ready(init); //как только загрузится api и будет готов DOM начнет выполняться код функции init (ymaps это пространство имен через которые осуществляется доступ к компонентам карты )

function init(){
	var map = new ymaps.Map('map', { //создаем конструктор карты, и привязываемся к нашему id map
		//указываем 2 обязательные опции без которых карта не создастся (center и zoom):
		//сервис определения координат http://dimik.github.io/ymaps/examples/location-tool/
		center: [60.01733706, 30.30389350],
		zoom: 16,
		controls: ['zoomControl'], //эта оция позволяет управлять элементами управления на карте, оставляем на карте только zoom
		behaviors: ['drag'], //убираем масштабирование при прокрутке страницы, оставляем перемещение при зажатии левой кнопки мыши
	});

	//создаем метку на карте
	var placemark = new ymaps.Placemark([60.01690741, 30.30376475],{ //устанавливаем координаты метки
		hintContent: '<div class="map_hint">ул. Афонская, дом 2</div>', //всплывающий блок при наведении на метку (может быть в виде текста либо html)
		balloonContent: [  //всплывающий блок при клике на метку (может быть в виде текста либо html)
			'<div class="map_balloon">ПСТГ',
			'<img src="img/logo-map.png" alt="ПСТГ">',
			'<p class="desc_balloon">Профессиональное управление проектами строительства</p>',
			'</div>'
		].join(''), //перевод массива в строку
	},
	{
		//создаем свою иконку для метки
		iconLayout: 'default#image', //указываем тип макета
		iconImageHref: 'img/placemark.png', //путь к изображению
		iconImageSize: [72, 81], //размеры изображения
		iconImageOffset: [-36, -81], //смещение изображения метки
	});

	map.geoObjects.add(placemark); //выводим метку на карту (geoObjects это коллекция геообъектов, которая отвечает за добавление геообъектов на карту, изменение, удаление)
}