// Burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const blackScreen = document.querySelector('.black-screen');
const menuList = document.querySelector('.menu__list');

function burgerClose() {
  menu.classList.remove('menu_active');
  blackScreen.classList.remove('block');
  document.body.classList.remove('lock');
  burger.classList.remove('burger_rotate');
  menuList.classList.remove('menu__list_active');
}

burger.addEventListener('click', () => {
  document.body.classList.toggle('lock');
  burger.classList.toggle('burger_rotate');
  menu.classList.toggle('menu_active');
  blackScreen.classList.toggle('block');
  menuList.classList.toggle('menu__list_active');
})

menu.addEventListener('click', function (event) {
  if (event.target.matches('.menu__link')) {
    burgerClose();
  }
})

blackScreen.addEventListener('click', () => burgerClose());

