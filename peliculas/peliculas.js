// script.js
document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    const infoBox = document.getElementById('info-box');

    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const info = circle.getAttribute('data-info');
            infoBox.textContent = info;
            infoBox.style.display = 'block';
        });
    });

});
