function toggleMenu() {
    let menu = document.getElementById("menu");
    let navbarBg = document.getElementById("navbar-bg");
    
    let menuLinks = document.getElementById("menu").querySelectorAll(".menu-links"); 

    let menuBar1 = document.getElementById("menu-bar-1");
    let menuBar2 = document.getElementById("menu-bar-2");
    let menuBar3 = document.getElementById("menu-bar-3");
    
    if (menu.classList.contains('hidden')) {
        menu.classList.add('block');
        menu.classList.add('fadeIn');
        menu.classList.remove('fadeOut');
        menu.classList.remove('hidden');
        navbarBg.classList.add('block');
        navbarBg.classList.add('fadeIn');
        navbarBg.classList.remove('fadeOut');
        navbarBg.classList.remove('hidden');

        menuBar1.classList.add('bar1-active');
        menuBar2.classList.add('bar2-active');
        menuBar3.classList.add('bar3-active');

        for(i=0; i<menuLinks.length; i++){
            menuLinks[i].classList.remove('slideOutRight');
        }

    } else {
        menu.classList.add('fadeOut');
        menu.classList.remove('fadeIn');
        navbarBg.classList.add('fadeOut');
        navbarBg.classList.remove('fadeIn');
        
        for(i=0; i<menuLinks.length; i++){
            menuLinks[i].classList.add('slideOutRight');
        }

        menuBar1.classList.remove('bar1-active');
        menuBar2.classList.remove('bar2-active');
        menuBar3.classList.remove('bar3-active');

        setTimeout(function(){
            menu.classList.add('hidden');
            menu.classList.remove('block');
            navbarBg.classList.add('hidden');
            navbarBg.classList.remove('block');
    }, 1000);
    }
}