fetch('https://worldtimeapi.org/api/timezone/Etc/UTC')
    .then(response => response.json())
    .then(data => {
        const currentDate = new Date(data.datetime);
        document.getElementById('year').textContent = currentDate.getFullYear();
    })
    .catch(error => {
        console.error('Error fetching date:', error);
        document.getElementById('year').textContent = new Date().getFullYear();
    });
