const tg = window.Telegram.WebApp;

// Expand the web app to full view
tg.expand();

// Handle close button
document.getElementById('close-btn').addEventListener('click', () => {
    tg.close();
});

// Handle theme changes
tg.onEvent('themeChanged', () => {
    document.body.style.backgroundColor = tg.themeParams.bg_color || '#ffffff';
});