const form = document.getElementById('book-form');
const services = document.querySelectorAll('.service-item');
const header = document.querySelector('header');
const bookNow = document.getElementById('bookNow');
const phoneInputField = document.querySelector("#phone");
const info = document.querySelector(".alert-info");
const phoneInput = window.intlTelInput(phoneInputField, {
 
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
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

bookNow.addEventListener('click', () => {
    form.classList.add('show');
    form.classList.remove('hidden');
});

const onInput = event => {
    event.target.value = event.target.value.replace(/[^0-9+]/g, '')
};

function process(event) {
 event.preventDefault();

 const phoneNumber = phoneInput.getNumber();

 info.style.display = "";
 info.innerHTML = `Phone number in E.164 format: <strong>${phoneNumber}</strong>`;
}