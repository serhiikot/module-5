
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlideImg,5000);

// function nextSlideImg() {
//   slides[currentSlide].className = 'slide';
//   currentSlide = (currentSlide+1)%slides.length;
//   slides[currentSlide].className = 'slide showing';
// }

function nextSlideImg() {
  goToSlide(currentSlide+1);
}
function previousSlideImg() {
  goToSlide(currentSlide-1);
}
function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
  nextSlideImg();
};
previous.onclick = function() {
  previousSlideImg();
};