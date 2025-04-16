import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const lineSwiper = () => {
	let lineSwiper = null;

	const initLineSwiper = () => {
		if (window.innerWidth < 1440) {
			if (!lineSwiper) {
				lineSwiper = new Swiper(".swiper-line", {
					slidesPerView: 1,
					slidesPerGroup: 1,
					centeredSlides: true,
					loop: true,
					grabCursor: true,
					spaceBetween: 10,
					speed: 800,
					simulateTouch: true,
					touchRatio: 1,
					mousewheel: {
						sensitivity: 0.5,
					},
					keyboard: {
						enabled: true,
						onlyInViewport: true,
					},
					pagination: {
						el: ".swiper-pagination-line",
						// type: "bullets",
						clickable: true,
					},
				});
			}
		} else {
			if (lineSwiper) {
				lineSwiper.destroy(true, true);
				lineSwiper = null;
			}
		}
	};

	initLineSwiper();
	window.addEventListener("resize", initLineSwiper);
};



