window.addEventListener('load', function() {
	const loader = document.querySelector('.loader');
	loader.classList.add('done');
});
window.addEventListener('scroll', function() {
	let menuArea = document.getElementById('navigation');

	if (window.pageYOffset > 0) {
		menuArea.classList.add('trans');
	} else {
		menuArea.classList.remove('trans');
	}
});

function myFunction() {
	var dots = document.getElementById('dots');
	var moreText = document.getElementById('more');
	var btnText = document.getElementById('myBtn');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}
$(document).ready(function() {
	$('#myBtn2').click(function() {
		$('.more-content').slideToggle();
		$('.more-content1').slideToggle();
		$('.more-content2').slideToggle();
		$('.more-content3').slideToggle();
	});
});

let closeMenu = true;
function myFunction2() {
	var btnContent = document.getElementById('myBtn2');
	if (!closeMenu) {
		btnContent.innerHTML = 'Show More';
		closeMenu = true;
	} else {
		btnContent.innerHTML = 'Show Less';
		closeMenu = false;
	}
}

window.addEventListener('load', function() {
	gsap.to('.first', 2, {
		x: '150',
		opacity: 0,
		display: 'none',
		delay: 0.4
	});
	gsap.to('.second', 2, {
		x: '150',
		opacity: 0,
		display: 'none',
		delay: 0.7
	});
	gsap.to('.third', 2, {
		x: '150',
		opacity: 0,
		display: 'none',
		delay: 0.9
	});
	gsap.from('.landing-area h1', 1.5, {
		y: '-100',
		opacity: 0,
		display: 'none',
		delay: 1
	});
});
