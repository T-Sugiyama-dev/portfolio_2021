window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
  const photoSlider = document.getElementById('photography_wrapper');
  photoSlider.classList.add('photography_container');
  const photoSlider2 = document.getElementById('photography_wrapper_2');
  photoSlider2.classList.add('photography_container_2');
}

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

const onScroll = (el, listener) => {
   el.addEventListener('scroll', listener)
}

let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onScroll(document, headerScrolled)
}

// mobile menu

const mobileNav = $('#mobile-menu');
const nav = $('#nav-menu-container');
mobileNav.on('click', function () { 
  mobileNav.toggleClass('active'); 
  nav.toggleClass('active'); 
});

nav.on('click', function () {
  mobileNav.toggleClass('active');
  nav.toggleClass('active');
})


// fade in animation

function fadeInAnimation(){
  $('.fadeInTrigger').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');
    }else{
    $(this).removeClass('fadeIn');
    }
    });
}

$(window).scroll(function (){
  fadeInAnimation();
});

window.addEventListener('load', function(){
  fadeInAnimation();
});



// fade in animation index

function fadeInAnimation2(){
  $('.fadeInTrigger-2').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn-2');
    }else{
    $(this).removeClass('fadeIn-2');
    }
    });
}


$(window).scroll(function (){
  fadeInAnimation2();
});

window.addEventListener('load', function(){
  fadeInAnimation2();
});


// img
$(function(){
  $("img").on("contextmenu",function(){
    return false;
  });
});
  
$(function(){
  $("img").on("selectstart",function(){
    return false;
  });
});
  
$(function(){
  $("img").on("mousedown",function(){
    return false;
  });
});

// video
$(function(){
  $("video").on("contextmenu",function(){
    return false;
  });
});
  
$(function(){
  $("video").on("selectstart",function(){
    return false;
  });
});
  
$(function(){
  $("video").on("mousedown",function(){
    return false;
  });
});