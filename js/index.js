/*
To Do -->   Functions for every button .
            Blog Post Implementation
*/

// Variables

const hidedHero = document.getElementsByClassName('hero-cover')[0]; // hideHero - Hided Hero Elements

const showHero = document.getElementsByClassName('hero-cover')[0]; // showHero - Show Hero Elements

const btnBlogs = document.getElementsByClassName('btn-primary')[0]; // btnBlog - Reveals Blog Post

const hidedBlog = document.getElementsByClassName('blog-post')[0]; // hidedBlog - Hided Blog Post

const showBlog = document.getElementsByClassName('blog-post')[0]; // showBlog - Show Blog Post

// Ready by default containers

hidedHero.style.display = "none";

hidedBlog.style.display = "none";

// Navbar Brand Function

function pressShowCover() {
    showHero.style.display = "block";
}

// Blog Post Function

function btnBlog() {
    showBlog.style.display = 'block';
}