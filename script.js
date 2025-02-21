const video = document.querySelector('video');
const form = document.getElementById('contactForm');
const services = document.querySelectorAll('.service-item');
const header = document.querySelector('header');


document.getElementById('bookNow').addEventListener('click', function() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

window.addEventListener('scroll', function() {
    services.forEach(service => {
        const position = service.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            service.classList.add('fade-in');
        }
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Please enter your name!');
        return;
    }
    // Handle form submission (e.g., send data to server)
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});