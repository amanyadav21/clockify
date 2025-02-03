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

// Function to populate specific time zones in the dropdown
function populateTimeZones() {
    const timeZoneSelect = document.getElementById('timezone');
    const timeZones = [
        'Asia/Kolkata',       // India
        'Asia/Dubai',         // Dubai
        'America/New_York',   // New York
        'America/Los_Angeles', // Los Angeles
        'Asia/Tokyo',         // Tokyo (Asia)
        'Europe/Moscow',      // Moscow (Russia)
        'Europe/London',      // London (UK)
        'Europe/Berlin',      // Berlin (Germany)
        'Europe/Paris',       // Paris (France)
        'Europe/Rome',        // Rome (Italy)
        'Australia/Sydney',   // Sydney (Australia)
        'Asia/Shanghai',      // Shanghai (China)
        'Asia/Hong_Kong',     // Hong Kong
        'Asia/Singapore',     // Singapore
        'America/Toronto',    // Toronto (Canada)
        'America/Mexico_City', // Mexico City (Mexico)
        'America/Chicago',    // Chicago (USA)
        'Africa/Johannesburg', // Johannesburg (South Africa)
        'Asia/Jakarta',       // Jakarta (Indonesia)
        'America/Sao_Paulo',  // São Paulo (Brazil)
        'America/Argentina/Buenos_Aires', // Buenos Aires (Argentina)
        'Asia/Seoul',         // Seoul (South Korea)
        'Pacific/Auckland',   // Auckland (New Zealand)
        'Europe/Amsterdam',   // Amsterdam (Netherlands)
        'Europe/Madrid',      // Madrid (Spain)
        'Asia/Bangkok',       // Bangkok (Thailand)
        'Asia/Karachi',       // Karachi (Pakistan)
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