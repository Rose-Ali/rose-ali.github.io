// Dark Mode / Light Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    // Create theme toggle button (only once)
    const navContainer = document.querySelector('.nav-container');
    if (!navContainer) return;
    // Remove any extra toggles if they exist (keep only the first)
    const toggles = navContainer.querySelectorAll('.theme-toggle');
    toggles.forEach((toggle, idx) => {
        if (idx > 0) toggle.remove();
    });
    const existingToggle = navContainer.querySelector('.theme-toggle');
    const themeToggle = existingToggle || document.createElement('button');
    if (!existingToggle) {
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        themeToggle.title = 'Toggle dark/light mode';
        navContainer.appendChild(themeToggle);
    }
    themeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });
    
    // Initialize theme
    updateTheme(currentTheme);
});

function updateTheme(theme) {
    document.body.setAttribute('data-theme', theme);
}

