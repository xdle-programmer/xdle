ymaps.ready(init); //как только загрузится api и будет готов DOM начнет выполняться код функции init (ymaps это пространство имен через которые осуществляется доступ к компонентам карты )

//создаем массив с метками
var placemarks = [
	{
		latitude: 60.01733706,
		longitude: 30.30389350,
		hintContent: '<div class="map_hint">ул. Афонская, дом 2</div>',
		balloonContent: [
			'<div class="map_balloon">ПСТГ',
			'<img src="img/logo-map.png" alt="ПСТГ">',
			'<p class="desc_balloon">Профессиональное управление проектами строительства</p>',
			'</div>'
		]
	},
	{
		latitude: 60.00190741,
		longitude: 30.30876475,
		hintContent: '<div class="map_hint">ул. Афонская, дом 2</div>',
		balloonContent: [
			'<div class="map_balloon">ПСТГ',
			'<img src="img/logo-map.png" alt="ПСТГ">',
			'<p class="desc_balloon">Профессиональное управление проектами строительства</p>',
			'</div>'
		]
	},
	{
		latitude: 60.01990741,
		longitude: 30.33976475,
		hintContent: '<div class="map_hint">ул. Афонская, дом 2</div>',
		balloonContent: [
			'<div class="map_balloon">ПСТГ',
			'<img src="img/logo-map.png" alt="ПСТГ">',
			'<p class="desc_balloon">Профессиональное управление проектами строительства</p>',
			'</div>'
		]
	},
	{
		latitude: 60.03430741,
		longitude: 30.30436475,
		hintContent: '<div class="map_hint">ул. Афонская, дом 2</div>',
		balloonContent: [
			'<div class="map_balloon">ПСТГ',
			'<img src="img/logo-map.png" alt="ПСТГ">',
			'<p class="desc_balloon">Профессиональное управление проектами строительства</p>',
			'</div>'
		]
	},
],
	geoObjects = [];
function init(){
	var map = new ymaps.Map('map', { //создаем конструктор карты, и привязываемся к нашему id map
		//указываем 2 обязательные опции без которых карта не создастся (center и zoom):
		//сервис определения координат http://dimik.github.io/ymaps/examples/location-tool/
		center: [60.01733706, 30.30389350],
		zoom: 12,
		controls: ['zoomControl'], //эта оция позволяет управлять элементами управления на карте, оставляем на карте только zoom
		behaviors: ['drag'], //убираем масштабирование при прокрутке страницы, оставляем перемещение при зажатии левой кнопки мыши
	});

	//проходимся циклом по массиву меток
	for(var i=0; i<placemarks.length; i++){
		geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], //устанавливаем координаты метки
		{
			hintContent: placemarks[i].hintContent, //всплывающий блок при наведении на метку (может быть в виде текста либо html)
			balloonContent: placemarks[i].balloonContent.join(''), //перевод массива в строку
		},
		{
			//создаем свою иконку для метки
			iconLayout: 'default#image', //указываем тип макета
			iconImageHref: 'img/placemark.png', //путь к изображению
			iconImageSize: [72, 81], //размеры изображения
			iconImageOffset: [-36, -81], //смещение изображения метки
			//iconImageClipRect: [[415, 0], [461, 57]] //если в качестве картинки используется sprite
		});

		
	}

	//кластеризация иконок, кластеризует объекты только в видимой части карты
	var clusterer = new ymaps.Clusterer({
		//задаем картинку для кластера
		clusterIcons: [
			{
				href: 'img/icon-cluster.png',
				size: [100, 100],
				offset: [-50, -50]
			}
		],
		clusterIconContentLayout: null, //убираем количество меток в кластере
	});
	map.geoObjects.add(clusterer); //выводим кластер
	//map.geoObjects.add(placemark); //выводим 1 метку на карту (geoObjects это коллекция геообъектов, которая отвечает за добавление геообъектов на карту, изменение, удаление)
	clusterer.add(geoObjects);
}