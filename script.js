// Function to include appbar in all pages
function includeAppbar() {
    const header = document.createElement('header');
    header.classList.add('appbar');
    header.innerHTML = `
        <div class="appbar-container">
            <a href="index.html" class="app-title">WanProtector</a>
            <button class="menu-toggle" onclick="toggleMenu()">☰</button>
            <nav class="nav-links" id="navLinks">
                <a href="terms.html">Terms of Service</a>
                <a href="privacy.html">Privacy Policy</a>
            </nav>
        </div>
    `;
    document.body.prepend(header);
}

// Call the function when page loads
window.onload = function() {
    includeAppbar();
};

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}