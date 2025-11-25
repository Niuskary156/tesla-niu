// Slider logic
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }
  slides[currentIndex].style.display = "block";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto-play
function startAutoPlay() {
  setInterval(() => {
    nextSlide();
  }, 4000);
}

// Initialize
showSlide(currentIndex);
startAutoPlay();

// MPG Calculator
function calculateMPG(event) {
  event.preventDefault();
  const miles = parseFloat(document.getElementById("miles").value);
  const gallons = parseFloat(document.getElementById("gallons").value);

  if (miles > 0 && gallons > 0) {
    const mpg = (miles / gallons).toFixed(2);
    document.getElementById("mpg-result").textContent = `Your MPG is: ${mpg}`;
  } else {
    document.getElementById("mpg-result").textContent = "Please enter valid numbers.";
  }
}
