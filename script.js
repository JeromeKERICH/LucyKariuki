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


//hero section//

const heroes = document.querySelectorAll('.hero');
let currentIndex = 0;

function showNextHero() {
    heroes[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % heroes.length;
    heroes[currentIndex].classList.add('active');
}

setInterval(showNextHero, 3000); // Change every 2 seconds

// Initialize the first hero
heroes[currentIndex].classList.add('active');

// Initialize the first hero
heroes[currentIndex].classList.add('active');

// Initialize the first hero
heroes[currentIndex].classList.add('active');

// Change content every 2 seconds
setInterval(showNextContent, 2000);



// contact //

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    
    if (name && email && message) {
        alert('Message sent successfully!');
       
    } else {
        alert('Please fill in all fields.');
    }
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





function showDetails(topic) {
    const details = {
        tech: {
            title: "Technology",
            content: "Our technology section covers the latest trends and innovations in the tech world. From software development to hardware reviews, we bring you the most up-to-date information."
        },
        health: {
            title: "Health & Wellness",
            content: "Our health and wellness section provides tips and advice for leading a healthier lifestyle. Whether it's mental health, nutrition, or fitness, we've got you covered."
        },
        travel: {
            title: "Travel",
            content: "Our travel section takes you on a journey to the best destinations around the globe. Find travel tips, guides, and inspiration for your next adventure."
        }
    };

    document.getElementById('details-title').innerText = details[topic].title;
    document.getElementById('details-content').innerText = details[topic].content;
    document.getElementById('details').style.display = 'block';
}

function hideDetails() {
    document.getElementById('details').style.display = 'none';
}

// Toggle the navigation menu on small screens
document.querySelector('.hamb').addEventListener('click', function() {
    document.querySelector('.navbar .container').classList.toggle('show-menu');
});


