// Lazy load images to improve page performance
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    const lazyLoad = (image) => {
        const src = image.getAttribute('data-src');
        if (src) {
            image.src = src;
            image.removeAttribute('data-src');
        }
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                lazyLoad(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});
