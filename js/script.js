let burger = document.querySelector('#navToggle');
let nav = document.querySelector('#nav');



burger.addEventListener('click', function (event) {
	event.preventDefault();

	nav.classList.toggle('show');

	burger.classList.toggle('active');
})