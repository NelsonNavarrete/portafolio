document.addEventListener("DOMContentLoaded", function() {
    let menu = document.querySelector(".menu");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop > 70) { 
            menu.classList.add("menu-fixed");
        } else {
            menu.classList.remove("menu-fixed");
        }

        lastScrollTop = scrollTop;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector(".menu-toggle");
    let menuLinks = document.querySelector(".menu-links");

    menuToggle.addEventListener("click", function() {
        menuLinks.classList.toggle("active");
    });
});

document.querySelectorAll('.btn-descarga').forEach(btn => {
  btn.addEventListener('click', function () {
    const label = this.textContent.includes('Curriculum') ? 'Curriculum PDF' : 'Certificaciones PDF';
    gtag('event', 'click_descarga', {
      'event_category': 'Descargas',
      'event_label': label
    });
  });
});