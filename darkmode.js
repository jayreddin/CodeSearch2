// Initialize dark mode before DOM loads
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    
    // Set initial icon based on current mode
    if (document.documentElement.classList.contains('dark')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle dark mode
    toggleButton.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});