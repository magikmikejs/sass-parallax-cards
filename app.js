const images = document.querySelectorAll('.img');

const parallax = (element, distance, speed) => {
    element.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', ()=> {
    images.forEach(image => {
        parallax(image, window.scrollY, 0.2);
    });
});