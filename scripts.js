let dateTimeDisplay = document.getElementById('date-time-display');
let changeStyleButton = document.getElementById('change-style-button');
let bodyElement = document.body;

// Display current date and time in the top
function updateDateTime() {
    let now = new Date();
    let date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    let time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    dateTimeDisplay.innerText = `${date}, ${time}`;
}

// Randomize background and font colors
function randomizeColors() {
    // Generate random RGB values for background and font
    const bgGrayValue = Math.floor(Math.random() * 256); // Range: 0-255
    const fontGrayValue = Math.floor(Math.random() * 256); // Range: 0-255

    // Update body background and font colors
    bodyElement.style.backgroundColor = `rgb(${bgGrayValue}, ${bgGrayValue}, ${bgGrayValue})`;
    bodyElement.style.color = `rgb(${fontGrayValue}, ${fontGrayValue}, ${fontGrayValue})`;
}

// Change font color based on the day of the week
function updateFontColorByDay() {
    let dayOfWeek = new Date().getDay(); // Get day as a number (0-6)
    
    if (dayOfWeek === 1 || dayOfWeek === 4) {
        // Monday or Thursday: violet font color
        bodyElement.style.color = 'violet';
    } else if (dayOfWeek === 2 || dayOfWeek === 3) {
        // Tuesday or Wednesday: dark grey font color
        bodyElement.style.color = 'darkgrey';
    } else {
        // No modification for other days
        bodyElement.style.color = ''; // Reset to default
    }
}

// Event Listener for Button Click
changeStyleButton.addEventListener('click', randomizeColors);

// Initialize date/time and font color
updateDateTime();
updateFontColorByDay();

// Update date and time every second
setInterval(updateDateTime, 1000);
