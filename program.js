// script.js

// Function to toggle the mobile navigation menu
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}

// Event listener for the mobile menu button
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰'; // Hamburger icon
    menuButton.classList.add('menu-button');
    document.querySelector('header').appendChild(menuButton);

    menuButton.addEventListener('click', toggleNav);
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('nav ul');
        nav.classList.remove('active');
    });
});