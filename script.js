let currentSlide = 0;
let totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  let slider = document.getElementById("slider");
  let slideWidth = document.querySelector(".slide").offsetWidth;
  let newPosition = -currentSlide * slideWidth;
  slider.style.transform = "translateX(" + newPosition + "px)";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}
