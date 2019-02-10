window.onscroll= function(){
    scroll();
}

var page = document.getElementById('services');

var nav = document.getElementById('navbar');

var stick = page.offsetTop;

function scroll(){
    if (window.pageYOffset >= 780){
        nav.classList.add('pagenav')
        
    } else {
        nav.classList.remove('pagenav');
        
    }
}