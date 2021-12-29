import { openingAnimation } from './animations.js';

openingAnimation();

// scroll bar animation progress
const scrollBar = document.querySelector('.scroll--bar');
const container = document.querySelector('.container');

const scrollBarAnimation = () => {
	const distance = -container.getBoundingClientRect().top;
	const progressWidth =
		(distance /
			(container.getBoundingClientRect().height -
				document.documentElement.clientHeight)) *
		100;
	const value = Math.floor(progressWidth);
	scrollBar.style.width = `${value}%`;
};
window.addEventListener('scroll', scrollBarAnimation);

// menu animation
const menuBtn = document.querySelector('.nav__menu-btn');
const nav = document.querySelector('.nav');

const showMenu = (e) => {
	nav.classList.toggle('active--menu');
};
menuBtn.addEventListener('click', showMenu);

// scroll text animation
const sections = document.querySelectorAll('.scroll');
sections.forEach((section) =>
	gsap.fromTo(
		section.children,
		{ y: '+=140', opacity: '0' },
		{
			y: '0',
			opacity: '1',
			ease: 'easeInOut',
			stagger: '0.2',
			duration: '1.2',
			scrollTrigger: { trigger: section, start: 'top 50%', end: '0%' },
		}
	)
);

// brand section animation
const brands = document.querySelector('.brands');
gsap.to('.brands .title', {
	top: '50px',
	transform: 'scale(2.5) translateX(-20%)',
	duration: '1',
	delay: '.3',
	scrollTrigger: {
		trigger: '.brands',
		start: 'top 40%',
		end: '0%',
	},
});
gsap.fromTo(
	'.content--brands .box',
	{ opacity: 0, transform: 'scaleX(0)' },
	{
		opacity: 1,
		transform: 'scaleX(1)',
		duration: '.6',
		stagger: '.15',
		delay: '1',
		scrollTrigger: {
			trigger: '.brands',
			start: 'top 40%',
			end: '0%',
		},
	}
);
// informations section
gsap.fromTo(
	'.informations .content .box',
	{ opacity: '0' },
	{
		opacity: '1',
		duration: '1.5',
		stagger: '.2',
		scrollTrigger: {
			trigger: '.informations',
			start: 'top 40%',
			end: '0%',
		},
	}
);
