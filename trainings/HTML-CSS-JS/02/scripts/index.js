const loader = document.querySelector('#loader');
let loaderOpacity = 1;
let stop;
const body = document.querySelector('body');
const close = document.querySelectorAll('.close')[0];
const open = document.querySelectorAll('.cta')[0];
const modal = document.querySelectorAll('.modal')[0];
const modalContainer = document.querySelectorAll('.modal-container')[0];
const submit = document.querySelector('.submit');
const modalAlert = document.querySelector('.modal-alert');
const btnMenu = document.querySelector('.ham');
const menuShow = document.querySelector('.nav-show');
const product = document.querySelectorAll('.products-selection');
let topScrollProduct;
const screenWidth = screen.width;

const hoverScroll = () => {
  const scroll = document.documentElement.scrollTop;

  for (let i = 0; i < product.length; i++) {
    topScrollProduct = product[i].offsetTop;
    if (screenWidth <= 640) {
      if (topScrollProduct - 200 < scroll) {
        product[i].classList.add('hover-mobile', 'scale-mobile');
      } else if (topScrollProduct - 200 > scroll) {
        product[i].classList.remove('hover-mobile', 'scale-mobile');
      }
    }
  }
};

window.addEventListener('scroll', hoverScroll);

submit.addEventListener('click', () => {
  modalAlert.style.opacity = 1;
  modalAlert.style.visibility = 'visible';
  setTimeout(() => {
    modalAlert.style.opacity = 0;
    modalAlert.style.visibility = 'hidden';
  }, 3000);
});

open.addEventListener('click', e => {
  e.preventDefault();
  modalContainer.style.opacity = 1;
  modalContainer.style.visibility = 'visible';
  modal.classList.toggle('modal-close');
  body.classList.toggle('hidden');
});

close.addEventListener('click', () => {
  modal.classList.toggle('modal-close');
  body.classList.remove('hidden');
  setTimeout(() => {
    modalContainer.style.opacity = 0;
    modalContainer.style.visibility = 'hidden';
  }, 700);
});

document.addEventListener('DOMContentLoaded', () => {
  body.classList.toggle('hidden');

  stop = setInterval(() => {
    if (loaderOpacity > 0) {
      loaderOpacity = loaderOpacity - 0.1;
      loader.style.opacity = loaderOpacity;
    } else {
      loader.style.display = 'none';
      body.classList.remove('hidden');
      clearInterval(stop);
    }
  }, 300);
});

btnMenu.addEventListener('click', () => {
  menuShow.classList.toggle('mostrar');
});
