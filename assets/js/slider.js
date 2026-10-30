/* ==========================================
   CinePleX - HERO BANNER SLIDER (AUTO-ROTACIÓN 5S)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('#heroSliderDots .dot');
  const bannerCard = document.getElementById('heroBannerCard');

  if (!slides || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length; // Exactamente 4 imágenes
  const INTERVAL_TIME = 5000; // 5 segundos
  let sliderInterval = null;

  function showSlide(index) {
    // Normalizar el índice circular
    currentIndex = (index + totalSlides) % totalSlides;

    // Cambiar diapositiva activa
    slides.forEach((slide, idx) => {
      if (idx === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Actualizar indicador activo (dots)
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function startAutoSlide() {
    stopAutoSlide();
    sliderInterval = setInterval(nextSlide, INTERVAL_TIME);
  }

  function stopAutoSlide() {
    if (sliderInterval) {
      clearInterval(sliderInterval);
      sliderInterval = null;
    }
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  // Controles: Puntos indicadores (dots)
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetAutoSlide();
    });
  });

  // Pausa la rotación automática si el usuario pasa el cursor por encima
  if (bannerCard) {
    bannerCard.addEventListener('mouseenter', stopAutoSlide);
    bannerCard.addEventListener('mouseleave', startAutoSlide);
  }

  // Iniciar la rotación automática de 5 segundos
  startAutoSlide();
});
