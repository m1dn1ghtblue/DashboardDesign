const dmButton = document.getElementById('dark-mode-btn');
dmButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});