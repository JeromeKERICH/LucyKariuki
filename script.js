const navbar = document.querySelector('.navbar')
const hamb = document.querySelector('.hamb')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')
const workItems = document.querySelectorAll('.work')

window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamb.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamb.classList.toggle('active')
})



navLinksLi.forEach(li =>li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))

    hamb.classList.remove('active')
    navLinks.classList.remove('active')
}))


document.addEventListener('DOMContentLoaded', function() {

    var h1Element = document.querySelector('.hero h2');
    
    
    h1Element.classList.add('slide-in');
});





  


document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.querySelector('.read-more');
    const moreContent = document.getElementById('more-intro');

    readMoreButton.addEventListener('click', function(event) {
      event.preventDefault(); 

      if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'inline';
        readMoreButton.textContent = 'Read Less';
      } else {
        moreContent.style.display = 'none'; 
        readMoreButton.textContent = 'Read More'; 
      }
    });
  });
















//newsletter 

document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        e.target.rese   (); 
    } else {
        alert('Please enter a valid email address.');
    }
});


AOS.init();