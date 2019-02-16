window.onscroll= function(){
    scroll();
}

var nav = document.getElementById('navbar');

var stick = page.offsetTop;

function scroll(){
    if (window.pageYOffset >= 100){
        nav.classList.add('pagenav')
        
    } else {
        nav.classList.remove('pagenav').style.transition = "0.5s";
        
    }
}