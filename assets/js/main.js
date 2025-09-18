const body = document.body;
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const toTop = document.querySelector('.to-top');
const navLinks = document.querySelectorAll('.nav-list a');
const navClose = document.querySelector('.nav-close');

const setNavState = (isOpen) => {
  if (!siteNav) return;

  if (isOpen) {
    siteNav.classList.add('is-open');
  } else {
    siteNav.classList.remove('is-open');
  }

  if (navToggle) {
    navToggle.setAttribute('aria-expanded', String(isOpen));
  }

  body.classList.toggle('is-locked', isOpen);
};

const toggleNav = () => {
  if (!siteNav) return;
  setNavState(!siteNav.classList.contains('is-open'));
};

if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

if (navClose) {
  navClose.addEventListener('click', () => {
    setNavState(false);
    if (navToggle) {
      navToggle.focus();
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('is-open')) {
      setNavState(false);
    }
  });
});

const handleScroll = () => {
  const offset = window.scrollY;
  if (offset > 40) {
    header?.classList.add('is-scrolled');
    toTop?.classList.add('is-visible');
  } else {
    header?.classList.remove('is-scrolled');
    toTop?.classList.remove('is-visible');
  }
};

window.addEventListener('scroll', handleScroll, { passive: true });

if (toTop) {
  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

handleScroll();



