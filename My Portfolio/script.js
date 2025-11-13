// JavaScript for dynamic elements and initialization

// Set the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize Lucide icons
// This function ensures the SVG icons loaded from the CDN script are correctly rendered.
window.onload = function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
};

// Simple smooth scrolling for internal links (e.g., clicking 'About' navigates smoothly)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});