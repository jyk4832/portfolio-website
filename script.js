document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });

            document.getElementById(sectionId).classList.add('active');
        });
    });
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Remove active class from all list items
        document.querySelectorAll('.navbar ul li').forEach(item => {
            item.classList.remove('active');
        });

        // Add active class to the clicked item
        this.parentElement.classList.add('active');

        // Update the data-active attribute
        const navbar = document.querySelector('.navbar');
        navbar.setAttribute('data-active', this.getAttribute('data-section'));
    });
});