'use strict';

$('.hero-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 461,
			settings: {
				dots: false,
			},
		},
	],
});

$('.test-slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
		{
			breakpoint: 840,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			},
		},
		{
			breakpoint: 541,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
			},
		},
	],
});

// Menue Bar
const openMenueBar = document.querySelector('.menu-bar');
const closeMenueBar = document.querySelector('.close-menu');
const menueBar = document.querySelector('nav ul');
const overlay = document.querySelector('.overlay');

openMenueBar.addEventListener('click', () => {
	menueBar.classList.add('active');
	overlay.classList.add('active');
});

closeMenueBar.addEventListener('click', () => {
	menueBar.classList.remove('active');
	overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
	menueBar.classList.remove('active');
	overlay.classList.remove('active');
});

// ------- Accordian -----------

let accBox = document.querySelectorAll('.acc-box');
let symbol = document.querySelectorAll('.symbol');

accBox.forEach((item, index) => {
	item.addEventListener('click', () => {
		accBox.forEach(cuurItem => {
			cuurItem.classList.remove('active');
		});
		item.classList.add('active');
		symbol.forEach(symbol => {
			symbol.textContent = '+';
		});
		symbol[index].textContent = '-';
	});
});

// 	 Scroll Top

var scrollTopPage = document.querySelector('.scroll-tp');
var arrowY = 150;

window.addEventListener('scroll', function () {
	// console.log(window.scrollY)
	var scrollTop = window.scrollY;
	if (scrollTop < arrowY) {
		scrollTopPage.classList.remove('active');
	} else {
		scrollTopPage.classList.add('active');
	}
});
