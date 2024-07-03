
// Function to update current day and time in UTC
function updateDateTime() {
    const now = new Date();
    
    // Update current day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];
    document.getElementById('currentDay').textContent =`Current Day : ${currentDay}`;

    // Update current time in UTC
    const currentTimeUTC = `Current Time: ${now.getUTCHours().toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')} UTC`;
    document.getElementById('currentTimeUTC').textContent = currentTimeUTC;
}

// Update date-time initially
updateDateTime();

// Update date-time every minute (adjust as needed)
setInterval(updateDateTime, 10000); // Every minute
