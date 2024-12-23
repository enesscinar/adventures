// Simple scroll animation for sections to fade in
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});
