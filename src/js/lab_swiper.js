import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const labSwiper = () => {
	let labSwiper = null;

	const initLabSwiper = () => {
		if (window.innerWidth < 1440) {
			if (!labSwiper) {
				labSwiper = new Swiper(".swiper-lab", {
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
						el: ".swiper-pagination-lab",
						clickable: true,
					},
				});
			}
		} else {
			if (labSwiper) {
				labSwiper.destroy(true, true);
				labSwiper = null;
			}
		}
	};

	initLabSwiper();
	window.addEventListener("resize", initLabSwiper);
};