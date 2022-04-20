let viewport_width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
let viewport_height = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
let output_viewport = document.getElementsByClassName('layout__output');
let output_viewport_width = output_viewport[0].clientWidth;
let output_viewport_height = output_viewport[0].clientHeight;

import * as THREE from '../lib/three.js-master/build/three.module.js';
import {OBJLoader} from '../lib/three.js-master/examples/jsm/loaders/OBJLoader.js';
import Stats from '../lib/three.js-master/examples/jsm/libs/stats.module.js';
import {DragControls} from '../lib/three.js-master/examples/jsm/controls/DragControls.js';
import {OrbitControls} from '../lib/three.js-master/examples/jsm/controls/OrbitControls.js';

function configureCargo() {
    // Основные переменные для функции
    let container;
    let scene = new THREE.Scene();
    let renderer = new THREE.WebGLRenderer();
    let camera;

    // Основные настройки рендера
    renderer.setClearColor(0xFFFFFF);
    renderer.setSize(output_viewport_width, output_viewport_height);

    // Размеры контейнеров и выбор текущего
    let containers = new Map([
        ['feet20', new Map([
            ['length', 575],
            ['width', 235],
            ['height', 239]
        ])],
        ['feet40', new Map([
            ['length', 1203],
            ['width', 235],
            ['height', 238]
        ])],
        ['feet40HC', new Map([
            ['length', 1200],
            ['width', 231],
            ['height', 265]
        ])],
        ['feet45HC', new Map([
            ['length', 1355],
            ['width', 235],
            ['height', 270]
        ])],
    ]);

    let active_container = containers.get('feet20');

    // Расчет дистанций камеры для контейнеров
    let gap_coefficient = .1;

    function calcGap(sizes) {
        let width = sizes.width;
        let length = sizes.length;
        let gap = width * gap_coefficient;
        let base = width + (2 * gap);
        let arctg = Math.atan((length / 2) / gap);
        let distance = base * Math.sqrt(2 * (1 - Math.cos(arctg)));

        return distance;
    }

    let views;

    function calcViews() {
        views = new Map([
            ['perspective', new Map([
                ['x', calcGap({width: active_container.get('length'), length: active_container.get('width')}) / 2],
                ['y', calcGap({width: active_container.get('length'), length: active_container.get('width')}) / 2],
                ['z', calcGap({width: active_container.get('length'), length: active_container.get('width')})]
            ])],
            ['right', new Map([
                ['x', calcGap({width: active_container.get('length'), length: active_container.get('width')})],
                ['y', 0],
                ['z', 0]
            ])],
            ['left', new Map([
                ['x', -calcGap({width: active_container.get('length'), length: active_container.get('width')})],
                ['y', 0],
                ['z', 0]
            ])],
            ['front', new Map([
                ['x', 0],
                ['y', 0],
                ['z', calcGap({width: active_container.get('length'), length: active_container.get('width')})]
            ])],
            ['back', new Map([
                ['x', 0],
                ['y', 0],
                ['z', -calcGap({width: active_container.get('length'), length: active_container.get('width')})]
            ])],
            ['top', new Map([
                ['x', 0],
                ['y', calcGap({width: active_container.get('length'), length: active_container.get('width')})],
                ['z', 0]
            ])],
        ]);
    }

    calcViews();

    // Настройка камеры
    let active_view = 'perspective';

    function createCamera() {
        camera = new THREE.PerspectiveCamera(50, output_viewport_width / output_viewport_height, .1, 5000);
        camera.position.x = views.get(active_view).get('x');
        camera.position.y = views.get(active_view).get('y');
        camera.position.z = views.get(active_view).get('z');
        updateCamera();
    }

    function updateCamera() {
        camera.updateProjectionMatrix();
        camera.lookAt(scene.position);
    }

    createCamera();

    let active_changing = false;

    // Изменение вида
    function changeView(view) {

        if (!active_changing) {
            active_changing = true;
            let step = 50;
            let start_x = camera.position.x;
            let end_x = views.get(view).get('x');
            let step_x = calcStep(start_x, end_x);
            let start_y = camera.position.y;
            let end_y = views.get(view).get('y');
            let step_y = calcStep(start_y, end_y);
            let start_z = camera.position.z;
            let end_z = views.get(view).get('z');
            let step_z = calcStep(start_z, end_z);
            let state = {
                x: false,
                y: false,
                z: false
            };

            function calcStep(start, end) {
                let delta = start - end;
                if (delta < 0) {
                    delta = -delta;
                }

                return delta / step;
            }

            animationChangeView();

            function animationChangeView() {
                if (state['x'] && state['y'] && state['z']) {
                    cancelAnimationFrame(animationChangeView);
                    active_changing = false;
                    active_view = view;
                } else {
                    requestAnimationFrame(animationChangeView);
                }

                function changePosition(start, end, step, axe) {
                    if (start < end) {
                        if (camera.position[axe] < end) {
                            camera.position[axe] += step;
                        } else {
                            camera.position[axe] = end;
                            state[axe] = true;
                        }
                    } else {
                        if (camera.position[axe] > end) {
                            camera.position[axe] -= step;
                        } else {
                            camera.position[axe] = end;
                            state[axe] = true;
                        }
                    }
                }

                changePosition(start_x, end_x, step_x, 'x');
                changePosition(start_y, end_y, step_y, 'y');
                changePosition(start_z, end_z, step_z, 'z');

                camera.updateProjectionMatrix();
                camera.lookAt(scene.position);
                $(document).trigger('camera_change');
                renderer.render(scene, camera);
            }
        }
    }

    this.changeView = function (view) {
        changeView(view);
    };


    // Методы изменения позиции камеры вручную
    this.changeCameraPositionX = function (val) {
        camera.position.x = parseFloat(val);
        updateCamera();
        render();
    };

    this.changeCameraPositionY = function (val) {
        camera.position.y = parseFloat(val);
        updateCamera();
        render();
    };

    this.changeCameraPositionZ = function (val) {
        camera.position.z = parseFloat(val);
        updateCamera();
        render();
    };

    // Создание и удаление контейнера
    let container_object = [];
    let container_coordinates = {
        x_min: 0,
        x_max: 0,
        y_min: 0,
        y_max: 0,
        z_min: 0,
        z_max: 0
    };

    function addContainer(new_container) {
        let containerLength = new_container.get('length');
        let containerWidth = new_container.get('width');
        let containerHeight = new_container.get('height');
        let wallWidth = 2;

        let near_options = {
            color: 0xCCCCCC,
            wireframe: false,
            opacity: .1,
            transparent: true
        };

        let far_options = {
            color: 0xCCCCCC,
            wireframe: false,
            opacity: .9,
            transparent: true
        };

        let containerGeometry = new THREE.BoxGeometry(containerLength, containerHeight, containerWidth);
        let containerMaterial = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
        let nearWallMaterial = new THREE.MeshBasicMaterial(near_options);
        let farWallMaterial = new THREE.MeshBasicMaterial(far_options);

        container = new THREE.Mesh(containerGeometry, containerMaterial);
        container.position.x = 0;
        container.position.y = 0;
        container.position.z = 0;
        container.name = 'container';

        let leftWallGeometry = new THREE.BoxGeometry(containerLength, containerHeight, wallWidth);
        let leftWall = new THREE.Mesh(leftWallGeometry, nearWallMaterial);
        leftWall.position.x = 0;
        leftWall.position.y = 0;
        leftWall.position.z = containerWidth / 2 + .5;
        leftWall.name = 'left_wall';
        container.add(leftWall);

        let rightWallGeometry = new THREE.BoxGeometry(containerLength, containerHeight, wallWidth);
        let rightWall = new THREE.Mesh(rightWallGeometry, farWallMaterial);
        rightWall.position.x = 0;
        rightWall.position.y = 0;
        rightWall.position.z = -containerWidth / 2 + .5;
        rightWall.name = 'right_wall';
        container.add(rightWall);

        let topWallGeometry = new THREE.BoxGeometry(containerLength, wallWidth, containerWidth);
        let topWall = new THREE.Mesh(topWallGeometry, nearWallMaterial);
        topWall.position.x = 0;
        topWall.position.y = containerHeight / 2 + .5;
        topWall.position.z = 0;
        topWall.name = 'top_wall';
        container.add(topWall);

        let bottomWallGeometry = new THREE.BoxGeometry(containerLength, wallWidth, containerWidth);
        let bottomWall = new THREE.Mesh(bottomWallGeometry, farWallMaterial);
        bottomWall.position.x = 0;
        bottomWall.position.y = -containerHeight / 2 + .5;
        bottomWall.position.z = 0;
        bottomWall.name = 'bottom_wall';
        container.add(bottomWall);

        let rearWallGeometry = new THREE.BoxGeometry(wallWidth, containerHeight, containerWidth);
        let rearWall = new THREE.Mesh(rearWallGeometry, farWallMaterial);
        rearWall.position.x = -containerLength / 2 + .5;
        rearWall.position.y = 0;
        rearWall.position.z = 0;
        rearWall.name = 'rear_wall';
        container.add(rearWall);
        scene.add(container);

        container_coordinates.x_min = -containerLength / 2;
        container_coordinates.x_max = containerLength / 2;
        container_coordinates.y_min = -containerHeight / 2;
        container_coordinates.y_max = containerHeight / 2;
        container_coordinates.z_min = -containerWidth / 2;
        container_coordinates.z_max = containerWidth / 2;

        container_object.push(container);
    }

    addContainer(active_container);

    this.changeContainer = function (new_container) {
        scene.remove(container);
        active_container = containers.get(new_container);
        addContainer(active_container);
        render();
        calcViews();
        changeView('perspective');
    };

    // Добавление вспомогательных осей (x -красная, y - зеленая, z - голубая)
    var axes = new THREE.AxesHelper(500);
    scene.add(axes);

    // Добавление груза
    let cargo_objects = [];
    let cargo_coordinates = new Map([]);

    function addCargo(data) {
        let length = data.length;
        let height = data.height;
        let width = data.width;
        let x = data.x;

        let containerLength = active_container.get('length');
        let containerWidth = active_container.get('width');
        let containerHeight = active_container.get('height');


        let cargoBoxMaterial = new THREE.MeshBasicMaterial({color: 0xf90000, wireframe: true, opacity: .8, transparent: true});
        let cargoBoxGeometry = new THREE.BoxGeometry(length, width, height);
        let cargoBox = new THREE.Mesh(cargoBoxGeometry, cargoBoxMaterial);
        cargoBox.position.x = x;
        cargoBox.position.y = -containerHeight / 2 + height / 2 + 2;
        cargoBox.position.z = 0;
        cargoBox.name = 'cargoBox_' + cargo_objects.length;
        cargo_objects.push(cargoBox);
        scene.add(cargoBox);

        let cargo_coordinate = {
            x: {
                min: (cargoBox.position.x - (length / 2)),
                max: (cargoBox.position.x + (length / 2))
            },
            y: {
                min: (cargoBox.position.y - (height / 2)),
                max: (cargoBox.position.y + (height / 2))
            },
            z: {
                min: (cargoBox.position.z - (width / 2)),
                max: (cargoBox.position.z + (width / 2))
            },
        };


        cargo_coordinates.set(cargoBox.name, cargo_coordinate);
    }

    this.addCargo = function (data) {
        addCargo(data);
        render();
    };



    // Рендер
    $(output_viewport[0]).append(renderer.domElement);
    $(output_viewport[0]).height(output_viewport_height);

    // Подключение рэйкастера и драг контрола для управления грузами
    // var raycaster = new THREE.Raycaster();
    // var mouse = new THREE.Vector2(), INTERSECTED;
    // var radius = 100, theta = 0;

    var controls = new DragControls(cargo_objects, camera, renderer.domElement);

    controls.addEventListener('dragstart', function (event) {
        // console.log(event)
        // event.testBox.material.color.set( 0xaaaaaa );

    });

    let count_drag = 0;
    let count_render = 0;

    controls.addEventListener('drag', function (event) {

        count_drag += 1;

        let limit_coordinates = {
            x: {
                min: container_coordinates.x_min,
                max: container_coordinates.x_max
            },
            y: {
                min: container_coordinates.y_min,
                max: container_coordinates.y_max
            },
            z: {
                min: container_coordinates.z_min,
                max: container_coordinates.z_max
            },

        };


        let ready = false;
        let collision = false;

        for (let vertexIndex = 0; vertexIndex < event.object.geometry.vertices.length; vertexIndex++) {
            let localVertex = event.object.geometry.vertices[vertexIndex].clone();
            let globalVertex = localVertex.applyMatrix4(event.object.matrix);
            let directionVector = globalVertex.sub(event.object.position);

            let ray = new THREE.Raycaster(event.object.position.clone(), directionVector.clone().normalize());
            let intersects = ray.intersectObjects(cargo_objects);

            if (intersects.length > 0) {
                let name = intersects[0].object.name;
                collision = true;

                for (let intersectsIndex = 0; intersectsIndex < intersects.length; intersectsIndex++) {
                    let face_normal = intersects[intersectsIndex].face.normal;

                    if (face_normal.x === 1) {
                        let axe = 'x';
                        let limit = cargo_coordinates.get(name)[axe].max;
                        if (limit_coordinates[axe].min < limit) {
                            limit_coordinates[axe].min = limit;
                        }

                    } else if (face_normal.x === -1) {

                    } else if (face_normal.y === 1) {

                    } else if (face_normal.y === -1) {

                    } else if (face_normal.z === 1) {

                    } else if (face_normal.z === -1) {

                    }


                    if (intersectsIndex === intersects.length - 1) {
                        ready = true;
                    }
                }
            } else {
                ready = true;
            }

            if (vertexIndex === event.object.geometry.vertices.length - 1) {
                let checkReady = setInterval(function () {
                    if (ready) {
                        checkAllAxes();
                        clearInterval(checkReady);
                        //
                        // if (collision) {
                        //     controls.deactivate();
                        //     $(document).trigger('drag_stop_manual');
                        // }
                    }
                }, 50);
            }
        }


        function checkBoxPosition(axe, parameter, event) {
            let correct_length = 2;
            let box_side = event.object.geometry.parameters[parameter];

            let max_position = limit_coordinates[axe].max - (box_side / 2) - correct_length;
            let min_position = limit_coordinates[axe].min + (box_side / 2) + correct_length;

            if (event.object.position[axe] > max_position) {
                event.object.position[axe] = max_position;
            }
            if (event.object.position[axe] < min_position) {
                event.object.position[axe] = min_position;
            }
        }

        function checkAllAxes() {
            checkBoxPosition('x', 'width', event);
            checkBoxPosition('y', 'height', event);
            checkBoxPosition('z', 'depth', event);
            console.log('render');
            render();
            count_render += 1;
        }
    });

    controls.addEventListener('dragend', function (event) {
        console.log(count_drag);

        // event.testBox.material.color.set( 0x000000 );

    });

    // let mouse_button = false;
    //
    // $(document).on('mousedown', function () {
    //     mouse_button = true;
    // });
    //
    // $(document).on('mouseup', function () {
    //     mouse_button = false;
    // });
    //
    //
    // $(document).on('drag_stop_manual', function () {
    //     let checkMouse = setInterval(function () {
    //         if (!mouse_button) {
    //             controls.activate();
    //             clearInterval(checkMouse);
    //         }
    //     }, 50);
    // });


    // var stats = new Stats();
    // statsbox.appendChild( stats.dom );


    // output_viewport[0].addEventListener('mousemove', onMouseMove, false);

    function render() {
        renderer.render(scene, camera);
    }

    render();

    this.render = function () {
        render();
    };


    $(document).ready(function () {

        let position_x_range_slider = new range_slider({
            slider: '#position_x_range',
            val_min: -4000,
            val_min_default: camera.position.x,
            val_max: 4000,
            step: 50
        });

        let position_y_range_slider = new range_slider({
            slider: '#position_y_range',
            val_min: -4000,
            val_min_default: camera.position.y,
            val_max: 4000,
            step: 50
        });

        let position_z_range_slider = new range_slider({
            slider: '#position_z_range',
            val_min: -4000,
            val_min_default: camera.position.z,
            val_max: 4000,
            step: 50
        });

        $('#position_x_range input').on('change', function () {
            let val = $(this).val();
            cargoFunction.changeCameraPositionX(val);
        });

        $('#position_y_range input').on('change', function () {
            let val = $(this).val();
            cargoFunction.changeCameraPositionY(val);
        });

        $('#position_z_range input').on('change', function () {
            let val = $(this).val();
            cargoFunction.changeCameraPositionZ(val);
        });

        $('.change-view').on('click', function () {
            let view = $(this).data('view');
            cargoFunction.changeView(view);
        });

        $('.change-container').on('click', function () {
            let container = $(this).data('container');
            cargoFunction.changeContainer(container);
        });

        let count_cargo = 0;

        $('.add-cargo').on('click', function () {
            if (count_cargo === 0) {
                cargoFunction.addCargo({length: 200, height: 100, width: 100, x: -120});
                count_cargo = 1;
            } else if (count_cargo === 1) {
                cargoFunction.addCargo({length: 200, height: 100, width: 100, x: 100});
                count_cargo = 2;
            }
        });


        $(document).on('camera_change', function () {
            $('#position_x_range input').val(camera.position.x).trigger('input');
            $('#position_y_range input').val(camera.position.y).trigger('input');
            $('#position_z_range input').val(camera.position.z).trigger('input');
        });


    });
}

$(document).ready(function () {
    cargoFunction = new configureCargo();
});


