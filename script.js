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



//services 

document.addEventListener("DOMContentLoaded", function() {
    // Select all service headings
    const serviceHeadings = document.querySelectorAll(".service_heading");

    serviceHeadings.forEach(heading => {
        heading.addEventListener("click", function() {
            // Get the corresponding service list
            const serviceList = this.nextElementSibling;
            const isActive = serviceList.classList.contains("active");

            // Close all other open lists and reset icons
            document.querySelectorAll(".service_list.active").forEach(list => {
                if (list !== serviceList) {
                    list.classList.remove("active");
                    list.style.maxHeight = "0";
                    const icon = list.previousElementSibling.querySelector("i");
                    icon.classList.replace("ri-subtract-line", "ri-add-line");
                }
            });

            // Toggle the current list
            serviceList.classList.toggle("active");

            // Toggle the icon
            const icon = this.querySelector("i");
            if (!isActive) {
                // Expand the list
                serviceList.style.maxHeight = serviceList.scrollHeight + "px";
                icon.classList.replace("ri-add-line", "ri-subtract-line");
            } else {
                // Collapse the list
                serviceList.style.maxHeight = "0";
                icon.classList.replace("ri-subtract-line", "ri-add-line");
            }
        });
    });
});




// about

let currentSlide = 0;
const teamContainer = document.querySelector('.team-container');
const teamMembers = document.querySelectorAll('.team-member');
const totalSlides = teamMembers.length;

function showSlide(slideIndex) {
    const slideWidth = teamMembers[0].clientWidth + 20; // Width + gap
    teamContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

document.addEventListener('swiped-left', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
});

document.addEventListener('swiped-right', () => {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
});


//newsletter 

document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;

    if (email) {
        alert(`Thank you for subscribing with: ${email}`);
        e.target.reset(); // Reset the form
    } else {
        alert('Please enter a valid email address.');
    }
});


AOS.init();