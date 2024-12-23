// Image lightbox functionality
document.querySelectorAll('.gallery-image').forEach(image => {
    image.addEventListener('click', (event) => {
        const overlay = document.getElementById('overlay');
        const overlayImage = document.getElementById('overlayImage');
        const overlayCaption = document.getElementById('overlayCaption');
        
        overlay.style.display = 'flex';
        overlayImage.src = event.target.src;
        overlayCaption.textContent = event.target.getAttribute('data-caption');
    });
});

// Close the overlay when clicking the close button
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
});
