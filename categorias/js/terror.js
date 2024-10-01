document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    let interval = setInterval(nextSlide, 3000); // Cambia cada 3 segundos

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function showSlide(index) {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        updateIndicators();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(interval);
        nextSlide();
        interval = setInterval(nextSlide, 3000);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(interval);
        prevSlide();
        interval = setInterval(nextSlide, 3000);
    });

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            clearInterval(interval);
            currentIndex = parseInt(indicator.getAttribute('data-slide'));
            showSlide(currentIndex);
            interval = setInterval(nextSlide, 3000);
        });
    });

    carouselInner.addEventListener('mouseover', () => clearInterval(interval));
    carouselInner.addEventListener('mouseout', () => interval = setInterval(nextSlide, 3000));
});



