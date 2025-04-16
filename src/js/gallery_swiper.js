import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const gallerySwiper = () => {
	let gallerySwiper = null;

	const initGallerySwiper = () => {
		// Уничтожаем предыдущий экземпляр
		if (gallerySwiper) {
		  gallerySwiper.destroy(true, true);
		  gallerySwiper = null;
		}
	  
		if (window.innerWidth < 1440) {
		  gallerySwiper = new Swiper(".swiper-gallery", {
			slidesPerView: 1,
			slidesPerGroup: 1,
			centeredSlides: true,
			loop: false,
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
			  el: ".swiper-pagination-gallery",
			  clickable: true,
			},
		  });
		} else {
		  gallerySwiper = new Swiper(".swiper-gallery", {
			slidesPerView: 2,
			slidesPerGroup: 1,
			centeredSlides: false,
			loop: false,
			grabCursor: true,
			spaceBetween: 24,
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
			scrollbar: {
			  el: '.swiper-scrollbar-gallery',
			  draggable: true,
			},
		  });
		}
	  };

	initGallerySwiper();
	window.addEventListener("resize", initGallerySwiper);
};