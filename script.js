// Carrusel de noticias destacadas
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentItem = 0;

function showItem(index) {
  carouselItems.forEach(item => item.classList.remove('active'));
  carouselItems[index].classList.add('active');
}

function prevItem() {
  currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentItem);
}

function nextItem() {
  currentItem = (currentItem + 1) % carouselItems.length;
  showItem(currentItem);
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

// Auto-avance del carrusel (opcional) - descomenta la línea de abajo si lo quieres
// setInterval(nextItem, 5000);