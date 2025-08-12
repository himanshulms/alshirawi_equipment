AOS.init();

document.addEventListener('DOMContentLoaded', function () {
  // Find all dropdowns with submenus
  const dropdowns = document.querySelectorAll('.dropdown-menu .dropdown-toggle');

  dropdowns.forEach(function (dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation(); 
      e.preventDefault(); 
      const submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('dropdown-menu')) {
        dropdownToggle.classList.toggle('show');
      }
    });
  });

  document.addEventListener('click', function () {
    const openSubmenus = document.querySelectorAll('.dropdown-menu .dropdown-menu.show');
    openSubmenus.forEach(function (submenu) {
      submenu.classList.remove('show');
      const dropdownToggle = submenu.previousElementSibling;
      if (dropdownToggle) {
        dropdownToggle.classList.remove('show');
      }
    });
  });
});

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});

const progressCircle = document.querySelector('.progress');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 283; // 283 = full circumference
  progressCircle.style.strokeDashoffset = 283 - scrolled;

  // Show/hide button
  backToTop.style.display = scrollTop > 100 ? 'block' : 'none';
});

// Scroll to top
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
