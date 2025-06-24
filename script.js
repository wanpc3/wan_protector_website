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

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Close menu on link click (mobile/tablet only)
document.addEventListener("click", function(e) {
    if (e.target.closest('.nav-links a')) {
        const nav = document.getElementById('navLinks');
        if (window.innerWidth <= 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    }
});

window.onload = function() {
    includeAppbar();
};
