fetch('https://www.eman-shahrour.de/version.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('version').textContent = data.version;
    })
    .catch(error => {
        console.error('Error loading version:', error);
        document.getElementById('version').textContent = '1.0';
    });
