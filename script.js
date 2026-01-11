const form = document.getElementById('book-form');
const services = document.querySelectorAll('.service-item');
const header = document.querySelector('header');
const bookNow = document.getElementById('bookNow');
const bookLink = document.querySelector('a[href="#book-form"]');
const phoneInputField = document.querySelector("#phone");
const info = document.querySelector(".alert-info");
const phoneInput = window.intlTelInput(phoneInputField, {
 
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
const revealServices = () => {
    services.forEach(service => {
        const position = service.getBoundingClientRect();
        if (position.top < window.innerHeight - 40) {
            service.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', revealServices);
window.addEventListener('load', revealServices);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    if (name === '') {
        alert('Please enter your name!');
        return;
    }
    const phoneNumber = phoneInput.getNumber();
    info.classList.remove('hidden');
    info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
    // Handle form submission (e.g., send data to server)
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

bookNow.addEventListener('click', () => {
    form.classList.add('show');
    form.classList.remove('hidden');
});

if (bookLink) {
    bookLink.addEventListener('click', (event) => {
        event.preventDefault();
        form.classList.add('show');
        form.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#book-form');
    });
}

window.addEventListener('load', () => {
    if (window.location.hash === '#book-form') {
        form.classList.add('show');
        form.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

const onInput = event => {
    event.target.value = event.target.value.replace(/[^0-9+]/g, '')
};
phoneInputField.addEventListener('input', onInput);

const currentYear = document.getElementById('currentYear');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
