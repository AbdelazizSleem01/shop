/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
     .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })
})();

const scriptURL = 'https://script.google.com/macros/s/AKfycbxtq1jCv2H0-OfQ6Gs4xwls3bsGP974-DsefW9ofpCZZhtjpMc3coo1tqR9UBo_FY9i/exec'
const form = document.querySelector('#form')
const btn = document.querySelector('#submit')


form.addEventListener('submit', e => {
e.preventDefault()
btn.disabled = true
btn.innerHTML = "Loading..."

console.log(form)
fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => { 
        btn.disabled = false
btn.innerHTML = "Submit"
        alert('Success!', response) })
    .catch(error => {
        btn.disabled = false
btn.innerHTML = "Submit"
        alert('Error!', error.message)})
})


const conURL = 'https://script.google.com/macros/s/AKfycbztTnN8p0qIrHoPhP3Bs9A202DG0ZdEEY1ODFqTCJgNtURGjaSIFyX9f7Z52VNKeshW/exec'
const formcont = document.querySelector('#conForm')
const conbtn = document.querySelector('#consubmit')


formcont.addEventListener('submit', e => {
e.preventDefault()
conbtn.disabled = true
conbtn.innerHTML = "Loading..."

console.log(formcont)
fetch(conURL, { method: 'POST', body: new FormData(formcont) })
    .then(response => { 
        conbtn.disabled = false
        conbtn.innerHTML = "Submit"
        alert('A successful message will be reviewed !', response) })
    .catch(error => {
        conbtn.disabled = false
        conbtn.innerHTML = "Submit"
        alert('Error!', error.message)})
})
