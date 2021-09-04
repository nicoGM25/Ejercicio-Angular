'use strict';
var app = angular.module('miTienda', []);
app.controller('TiendaController', function(){
	this.productos = articulos;
});

var articulos = [{
    nombre: 'FUJIFILM FinePix S8600 - negro - Cámara fotográfica digital',
    precio: 149.00,
    img: 'img/fujifilm.jpg',
    stock: 5,
	descuento: 11,
}, {
    nombre: 'PANASONIC VIERA TX-55AS650E - Televisor LED 3D Smart TV',
    precio: 1499.00,
    img: 'img/tv1.jpg',
    stock: 9,
	descuento: 17,
}, {
    nombre: 'SAMSUNG Galaxy S4 Value Edition - blanco - 16 GB - Smartphone',
    precio: 399.00,
    img: 'img/galaxy_1.jpg',
    stock: 22,
	descuento: 18,
}, {
    nombre: 'WD WD Red WD40EFRX - 4 TB - Disco duro interno - 3.5"',
    precio: 174.90,
    img: 'img/disco-duro.jpg',
    stock: 0,
	descuento: 25,
}, {
    nombre: 'SAMSUNG Gear Fit - negro - Reloj conectado',
    precio: 199.00,
    img: 'img/samsung-gear.jpg',
    stock: 34,
	descuento: 12,
}];