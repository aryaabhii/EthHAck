document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const message = document.getElementById('message');

    // Example ASCII art generated with figlet
    const figletText = `
 __   __                                                   _                _
 \\ \\ / /__  _   _    __ _ _ __ ___   _ __   _____      __ | |__   __ _  ___| | _____
  \\ V / _ \\| | | |  / _\` | '__/ _ \\ | '_ \\ / _ \\ \\ /\\ / / | '_ \\ / _\` |/ __| |/ / _ \\
   | | (_) | |_| | | (_| | | |  __/ | | | | (_) \\ V  V /  | | | | (_| | (__|   <  __/
   |_|\___/ \\__,_|  \\__,_|_|  \\___| |_| |_|\\___/ \\_/\\_/   |_| |_\\__,_|\\___|_\\_\\___|
    `;

    // Set your preferred color here
    const textColor = "#ff4500"; // Change to your desired color code

    function showMessage() {
        message.style.color = textColor; // Apply the color
        message.style.display = 'block';
        message.innerHTML = `<pre>${figletText}</pre>`;
    }

    // Simulate the hold screen time
    setTimeout(() => {
        showMessage();
    }, 3000); // Change 3000 to the number of milliseconds you want to hold the screen for
});
