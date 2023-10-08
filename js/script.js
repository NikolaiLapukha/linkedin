document.addEventListener('click', menu);

const  headerMenu = document.querySelector('.header__menu');
const  brg = document.querySelector('.header__brg');
const body = document.querySelector('.home');
function menu(e) {
	if(e.target.closest('.header__brg')){
		headerMenu.classList.toggle('active');
		brg.classList.toggle('active');
		body.classList.toggle('active');
	}
};

new Swiper('.page__discover-slider',{
	pagination:{
		el: '.swiper-pagination',
		clickable:true,
	},
	loop:true,
	autoplay:{
	},
});