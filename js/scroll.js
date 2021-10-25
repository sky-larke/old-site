// forked from: https://github.com/dilanx-site/dilanx-site/blob/main/header/header.js
// thanks dilan you are cool

const DISTANCE = 80;

window.onscroll = function() {scroll()};

var style = getComputedStyle(document.body);

function scroll() {

    if (document.body.scrollTop > DISTANCE || document.documentElement.scrollTop > DISTANCE) {

        document.getElementById("nav").style.padding = "20px 0px";
        document.getElementById("title").style.fontSize = style.getPropertyValue('--header-fontsize-mid');


        var eles = document.getElementsByClassName('page');



        document.body.style.setProperty('--header-current', style.getPropertyValue('--BgColor'))

    } else {

        document.getElementById("nav").style.padding = "5px 0px";
        document.getElementById("title").style.fontSize = style.getPropertyValue('--header-fontsize-big');

        var eles = document.getElementsByClassName('page');


        document.body.style.setProperty('--header-current', style.getPropertyValue('--InverseBgColor'))

    }

}

var pages = document.getElementById("nav-links").getElementsByTagName('a');

for (var i = 0; i < pages.length; i++) {

    if (window.location.pathname === pages[i].getAttribute('href')) {

        pages[i].className += " active";
        console.log("test")

    }

}
