const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuButtonClose = document.querySelector(
    '.header-nav-mobile-button-close'
  );
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  const header = document.querySelector('.header');


  const openSvg = document.querySelector('.header-nav-mobile-button-open');
  const closeSvg = document.querySelector('.header-nav-mobile-button-close');

  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      openSvg.classList.remove('is-hidden');
      closeSvg.classList.add('is-hidden');
    } else {
      mobileMenu.classList.add('is-open');
      openSvg.classList.add('is-hidden');
      closeSvg.classList.remove('is-hidden');
    }
  });


  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      openSvg.classList.remove('is-hidden');
      closeSvg.classList.add('is-hidden');
    });
  });

};

export default mobileMenu;
