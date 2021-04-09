/* 
Hi ! If you are reading this comment I need your help . 
Can you add a command that makes my items appear with a appear animation like show(1000) when $('document').ready ?
*/

// Ready by default containers

var hideHero = document.getElementsByClassName('hero-cover')[0];

hideHero.style.display = "none";

// Some variables 

var showHero = document.getElementsByClassName('hero-cover')[0];

function pressShowCover() {
    showHero.style.display = "block";
}

function pressHideCover() {
    hideHero.style.display = "none";
}
