
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;

function goToSlide(n) {
  slides[currentSlide].className = 'slide';
  currentSlide = (n+slides.length)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
  goToSlide(currentSlide+1);
};
previous.onclick = function() {
  goToSlide(currentSlide+1);
};
