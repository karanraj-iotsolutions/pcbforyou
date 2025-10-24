  document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------------------------------
    // 1. STICKY HEADER APPEARANCE
    // Fades the header in/out or adds a shadow when the user scrolls past the top
    // ------------------------------------------------------------------
    const header = document.querySelector('header.sticky-nav');

    // Add a class when the page scrolls past a certain point (e.g., 50px)
    const toggleStickyClass = () => {
        if (window.scrollY > 50) {
            // Add a class to make the header background solid and show shadow
            header.classList.add('scrolled');
        } else {
            // Remove the class when the user is back at the top
            header.classList.remove('scrolled');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleStickyClass);

    // Initial check in case the user reloads the page while already scrolled down
    toggleStickyClass();


    // ------------------------------------------------------------------
    // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
    // Makes the scrolling animation smooth when clicking on links like #services
    // ------------------------------------------------------------------
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the built-in smooth scrolling feature
                window.scrollTo({
                    top: targetElement.offsetTop - header.offsetHeight, // Adjust for fixed header height
                    behavior: 'smooth'
                });

                // Optional: Update the URL hash without jumping
                history.pushState(null, null, targetId);
            }
        });
    });


    // ------------------------------------------------------------------
    // 3. Simple Form Submission Alert (for the Contact section)
    // Note: This is FRONTEND ONLY. A real form needs a BACKEND.
    // ------------------------------------------------------------------
    const contactForm = document.getElementById('contact-form'); 
    
    // Assuming you wrapped your contact fields in a <form id="contact-form">
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would send the data to a server here using fetch().

            // Simple user feedback simulation:
            alert('Thank you! Your quote request has been sent and we will respond within 2 hours.');
            contactForm.reset(); // Clear the form fields
        });
    }

});
