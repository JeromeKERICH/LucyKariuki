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
        document.addEventListener("DOMContentLoaded", function() {
        const readMoreBtn = document.querySelector('.read-more');
        const moreContent = document.querySelector('.more-content');
        
        readMoreBtn.addEventListener('click', function(event) {
            event.preventDefault();
            
            if (moreContent.style.display === 'none' || !moreContent.style.display) {
                moreContent.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    });

    const serviceHeadings = document.querySelectorAll('.service_heading');

        serviceHeadings.forEach(heading => {
            heading.addEventListener('click', () => {
                const serviceList = heading.nextElementSibling;
                serviceList.classList.toggle('active');
                
                
                const icon = heading.querySelector('i');
                icon.classList.toggle('rotate-icon');
            });
        });
        


// JavaScript to Toggle Form Visibility
document.getElementById('show-form-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var form = document.getElementById('partnership-form');
    form.style.display = 'block';
});

document.getElementById('close-form').addEventListener('click', function() {
    var form = document.getElementById('partnership-form');
    form.style.display = 'none';
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var form = document.getElementById('form'); 
    var formContainer = document.getElementById('partnership-form'); 

    
    formContainer.style.display = 'none';


    alert('Form submitted successfully!');

    
    setTimeout(function() {
        form.reset();
    }, 1000);
});




//java services

document.getElementById('show-service-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    var form = document.getElementById('service-form');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('close-service-form').addEventListener('click', function() {
    var form = document.getElementById('service-form');
    form.style.display = 'none';
});

document.getElementById('service-form-content').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var selectedServices = [];
    var checkboxes = document.querySelectorAll('input[name="services"]:checked');
    checkboxes.forEach(function(checkbox) {
        selectedServices.push(checkbox.value);
    });

    if (selectedServices.length === 0) {
        alert('Please select at least one service.');
        return;
    }

    var message = `Hello, I am interested in the following services:\n\n${selectedServices.join('\n')}\n\nPlease contact me at your earliest convenience for more details.\nThank you!`;

    var phoneNumber = '+254729442536';
    var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    window.location.href = whatsappUrl;

    document.getElementById('service-form-content').reset(); // This resets the form, including checkboxes

    document.getElementById('service-form').style.display = 'none';
});





//Contact section

document.getElementById('web3form').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const form = e.target; 
    const formData = new FormData(form); 
    const statusMessage = document.getElementById('status-message');

    try {
   
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
      
            statusMessage.textContent = "Message sent successfully!";
            statusMessage.style.color = "green";

   
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";

           
            setTimeout(() => {
                statusMessage.textContent = "";
            }, 3000);
        } else {

            statusMessage.textContent = "Failed to send the message. Please try again.";
            statusMessage.style.color = "red";
        }
    } catch (error) {
    
        statusMessage.textContent = "An error occurred. Please check your connection.";
        statusMessage.style.color = "red";
    }
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