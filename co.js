window.addEventListener("load", function () {
    // Create the consent banner
    var consentBanner = document.createElement("div");
    consentBanner.id = "cookieConsent";
    consentBanner.innerHTML = `
        <p>Wir verwenden Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website machen. 
        <a href="/privacy-policy" target="_blank">Mehr erfahren</a></p>
        <div class="buttons">
            <button id="acceptCookies">Mögliche akzeptieren</button>
            <button id="declineCookies">Nicht akzeptieren</button>
        </div>
    `;

    document.body.appendChild(consentBanner);

    // Function to load Google Analytics script dynamically and initialize it
    function loadAndInitializeGoogleAnalytics() {
        var script = document.createElement('script');
        script.src = "https://www.eman-shahrour.de/g2.js";
        script.onload = function() {
            initializeAndTrackGoogleAnalytics();  // Initialize and track page view after script is loaded
        };
        document.head.appendChild(script);
    }

    // Function to initialize Google Analytics and send a page view event
    function initializeAndTrackGoogleAnalytics() {
        if (typeof initializeGoogleAnalytics === 'function') {
            initializeGoogleAnalytics();  // Start Google Analytics
            gtag('event', 'page_view', {
                'page_title': document.title,
                'page_location': window.location.href,
                'page_path': window.location.pathname
            });
        } else {
            console.error("Google Analytics script not loaded correctly.");
        }
    }

    // Add event listener for the accept button
    document.getElementById("acceptCookies").addEventListener("click", function () {
        document.cookie = "cookiesAccepted=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
        consentBanner.style.display = "none";
        loadAndInitializeGoogleAnalytics();  // Load and initialize Google Analytics after consent
    });

    // Add event listener for the decline button
    document.getElementById("declineCookies").addEventListener("click", function () {
        document.cookie = "cookiesAccepted=false; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
        consentBanner.style.display = "none";
        // Do not initialize Google Analytics
    });

    // Check if consent is already given
    if (document.cookie.indexOf("cookiesAccepted=true") !== -1) {
        consentBanner.style.display = "none";
        loadAndInitializeGoogleAnalytics();  // Load and initialize Google Analytics if consent was already given
    } else if (document.cookie.indexOf("cookiesAccepted=false") !== -1) {
        consentBanner.style.display = "none";
        // Do nothing, Google Analytics will not be initialized
    }
});
