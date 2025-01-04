const toggleButton = document.getElementById('toggle-mode');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (!document.body.classList.contains('dark-mode')) {
        document.body.style.backgroundColor = 'white'; // Set background to white for light mode
    } else {
        document.body.style.backgroundColor = ''; // Reset to default for dark mode
    }
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        toggleButton.classList.remove('light-mode');
        toggleButton.classList.add('dark-mode');
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        toggleButton.classList.remove('dark-mode');
        toggleButton.classList.add('light-mode');
    }
});