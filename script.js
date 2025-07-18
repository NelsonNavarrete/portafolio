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


gtag('event', 'descarga_cv', {
  event_category: 'Descargas',
  event_label: 'Curriculum PDF'
});