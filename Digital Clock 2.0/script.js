// Function to update the clock based on selected timezone
function updateClock() {
    const now = new Date();
    const timeZone = document.getElementById('timezone').value || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const options = { hour12: true, timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };

    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    const [time, ampm] = timeString.split(' ');
    const [hours, minutes, seconds] = time.split(':');

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
}

function populateTimeZones() {
    const timeZoneSelect = document.getElementById('timezone');
    const timeZones = [
        // North America
        'America/New_York',   // New York, USA
        'America/Los_Angeles', // Los Angeles, USA
        'America/Chicago',    // Chicago, USA
        'America/Toronto',    // Toronto, Canada
        'America/Mexico_City', // Mexico City, Mexico

        // South America
        'America/Sao_Paulo',  // São Paulo, Brazil
        'America/Argentina/Buenos_Aires', // Buenos Aires, Argentina

        // Europe
        'Europe/London',      // London, UK
        'Europe/Berlin',      // Berlin, Germany
        'Europe/Paris',       // Paris, France
        'Europe/Moscow',      // Moscow, Russia
        'Europe/Rome',        // Rome, Italy
        'Europe/Amsterdam',   // Amsterdam, Netherlands
        'Europe/Madrid',      // Madrid, Spain

        // Asia
        'Asia/Tokyo',         // Tokyo, Japan
        'Asia/Shanghai',      // Shanghai, China
        'Asia/Hong_Kong',     // Hong Kong
        'Asia/Singapore',     // Singapore
        'Asia/Seoul',         // Seoul, South Korea
        'Asia/Bangkok',       // Bangkok, Thailand
        'Asia/Kolkata',       // Kolkata, India
        'Asia/Karachi',       // Karachi, Pakistan
        'Asia/Jakarta',       // Jakarta, Indonesia
        'Asia/Dubai',         // Dubai, UAE

        // Africa
        'Africa/Johannesburg', // Johannesburg, South Africa

        // Australia & Oceania
        'Australia/Sydney',   // Sydney, Australia
        'Pacific/Auckland',   // Auckland, New Zealand
    ];

    timeZones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone;
        option.textContent = zone.replace(/_/g, ' ');
        timeZoneSelect.appendChild(option);
    });

    timeZoneSelect.value = Intl.DateTimeFormat().resolvedOptions().timeZone; // Set to user's time zone
}

// Color picker functionality
document.getElementById('colorPicker').addEventListener('input', function() {
    const clockElements = document.querySelectorAll('.section h1');
    clockElements.forEach(element => {
        element.style.color = this.value;
    });
});

// Initialize
populateTimeZones();
setInterval(updateClock, 1000);
updateClock();