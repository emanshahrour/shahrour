// Check if the user has consented to cookies
function checkUserConsent() {
    if (document.cookie.indexOf('cookiesAccepted=true') !== -1) {
        loadGoogleAnalytics();
    }
}

// Function to load Google Analytics script dynamically
function loadGoogleAnalytics() {
    var script = document.createElement('script');
    script.src = "https://www.eman-shahrour.de/g2.js";
    script.onload = function() {
        initializeGoogleAnalytics(); // Initialize Google Analytics if consent is given
    };
    document.head.appendChild(script);
}

// Handle user consent (This code should be triggered when the user accepts cookies)
function handleUserConsent() {
    document.cookie = "cookiesAccepted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
    
    // Load Google Analytics immediately after consent
    loadGoogleAnalytics();
}

// Check consent on page load
checkUserConsent();
