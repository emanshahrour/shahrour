document.getElementById('main-css').addEventListener('error', function() {
    var fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = 'https://cdn.jsdelivr.net/gh/emanshahrour/shahrour@main/compressed-backup.css';
    document.head.appendChild(fallbackLink);
});
