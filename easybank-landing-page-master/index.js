var body = document.querySelector('body');
var navlist = document.querySelector('.nav-list');
var requestButt = document.querySelector('.Request-butt');
var requestsubButt = document.querySelector('.sub-button');


var h1s = document.querySelectorAll('h1');
var Ps = document.querySelectorAll('.div-quotation p');
var quations = document.querySelectorAll('.qu-reason div');
var posts = document.querySelectorAll('.post-div');

// on mobile list button
function menuIcon(x) {
  x.classList.toggle("change");
  body.classList.toggle('mask')
  navlist.classList.toggle('mobile')
}

// animetion child 
const allPost = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('animetion' , entry.isIntersecting);
  });
}, {
  // rootMargin: '10px',
})

h1s.forEach(h1 => { allPost.observe(h1) });
Ps.forEach(p => { allPost.observe(p) });
posts.forEach(post => { allPost.observe(post) });
quations.forEach(quation => { allPost.observe(quation) });