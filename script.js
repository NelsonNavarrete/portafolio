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
