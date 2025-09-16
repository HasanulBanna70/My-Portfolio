'use strict';

const isTouchDevice = 'ontouchstart' in document.documentElement;

disableScroll();
if (!isTouchDevice) smoothScroll();

window.onresize = () => {
  resizeBodyHeight();
};

window.onload = () => {
  enableScroll();
  resizeBodyHeight();
};

// Functions

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

function smoothScroll() {
  document.querySelector('.viewport').classList.add('SmoothScroll');

  new SmoothScroll({
    target: document.querySelector('.container'),
    scrollEase: 0.08,
    maxOffset: 500,
  });
}

function resizeBodyHeight() {
  document.body.style.height = document.querySelector('.viewport').scrollHeight + 'px';
}


// Change navbar background on scroll
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Scroll Spy effect
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-bar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // account for navbar height
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
