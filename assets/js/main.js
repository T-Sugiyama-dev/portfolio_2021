window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

  const photoSlider = document.getElementById('photography_wrapper');
  photoSlider.classList.add('photography_container');

  const photoSlider2 = document.getElementById('photography_wrapper_2');
  photoSlider2.classList.add('photography_container_2');
};

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const onScroll = (el, listener) => {
  el.addEventListener('scroll', listener);
};

let selectHeader = select('#header');
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled');
    } else {
      selectHeader.classList.remove('header-scrolled');
    }
  };
  window.addEventListener('load', headerScrolled);
  onScroll(document, headerScrolled);
}

// mobile menu

const mobileNav = document.querySelector('#mobile-menu');
const nav = document.querySelector('#nav-menu-container');
mobileNav.addEventListener('click', function () { 
  mobileNav.classList.toggle('active'); 
  nav.classList.toggle('active'); 
});

nav.addEventListener('click', function () {
  mobileNav.classList.toggle('active');
  nav.classList.toggle('active');
});

// fade in animation

function fadeInAnimation(element, className) {
  const elements = document.querySelectorAll(element);
  elements.forEach(elem => {
    const elemPos = elem.getBoundingClientRect().top - 50;
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scroll >= elemPos - windowHeight) {
      elem.classList.add(className);
    } else {
      elem.classList.remove(className);
    }
  });
}

window.addEventListener('scroll', function () {
  fadeInAnimation('.fadeInTrigger', 'fadeIn');
});

window.addEventListener('load', function () {
  fadeInAnimation('.fadeInTrigger', 'fadeIn');
});

// fade in animation index

window.addEventListener('scroll', function () {
  fadeInAnimation('.fadeInTrigger-2', 'fadeIn-2');
});

window.addEventListener('load', function () {
  fadeInAnimation('.fadeInTrigger-2', 'fadeIn-2');
});

// Disable image and video interactions

const disableInteractions = (element) => {
  const elements = document.querySelectorAll(element);
  elements.forEach(elem => {
    elem.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
    elem.addEventListener('selectstart', function (e) {
      e.preventDefault();
    });
    elem.addEventListener('mousedown', function (e) {
      e.preventDefault();
    });
  });
};

disableInteractions('img');
disableInteractions('video');