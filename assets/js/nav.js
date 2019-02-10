
//Runs the fuction when page is scrolled
window.onscroll = function() {scroll()};


//selects the navbar
var navBar = document.getElementById('nav-bar');

//Gets the Y offset of the navbar
var stick = navBar.offsetTop;


// Makes navbar sticky when it reaches the top of the page
function scroll() {
    if (window.pageYOffset >= stick) {
      navBar.classList.add("sticky")
    } else {
      navBar.classList.remove("sticky");
    }
  }

