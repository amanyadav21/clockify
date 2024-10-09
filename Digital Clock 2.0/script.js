// Function to update the clock based on selected timezone
// Function to update the clock based on selected timezone
function updateClock() {
    const now = new Date();
    const timeZone = document.getElementById('timezone').value || Intl.DateTimeFormat().resolvedOptions().timeZone;
    const options = { hour12: true, timeZone };

    let hours = new Intl.DateTimeFormat('en-US', { hour: '2-digit', ...options }).format(now);
    let minutes = new Intl.DateTimeFormat('en-US', { minute: '2-digit', ...options }).format(now);
    let seconds = new Intl.DateTimeFormat('en-US', { second: '2-digit', ...options }).format(now);
    let ampm = hours.includes("PM") ? "PM" : "AM";

    hours = hours.replace(/[APM]/g, "").trim();

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
}

// Function to populate specific time zones in the dropdown
function populateTimeZones() {
    const timeZoneSelect = document.getElementById('timezone');
    const timeZones = [
        'Asia/Kolkata', // India
        'Asia/Dubai',   // Dubai
        'America/New_York', // New York
        'America/Los_Angeles', // Los Angeles
        'Asia/Tokyo',   // Tokyo (Asia)
        'Europe/Moscow' // Moscow (Russia)
    ];

    timeZones.forEach(zone => {
        const option = document.createElement('option');
        option.value = zone;
        option.textContent = zone.replace('_', ' ');
        timeZoneSelect.appendChild(option);
    });

    timeZoneSelect.value = Intl.DateTimeFormat().resolvedOptions().timeZone; // Set to user's time zone
}

// Color picker functionality
document.getElementById('colorPicker').addEventListener('input', function() {
    document.querySelector('.section').style.color = this.value;
});

// Initialize
populateTimeZones();
setInterval(updateClock, 1000);
updateClock();
