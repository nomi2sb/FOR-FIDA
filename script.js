const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
let clickCount = 0; // Counter for number of clicks on the "NO" button

// Function to move the "NO" button to a random location
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth; // Ensure button doesn't go off-screen horizontally
    const maxY = window.innerHeight - noBtn.offsetHeight; // Ensure button doesn't go off-screen vertically
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Event listener for the "NO" button click
noBtn.addEventListener('click', function() {
    clickCount++; // Increase the click count each time "NO" is clicked

    if (clickCount < 6) {
        // If clicked less than 6 times, change button location
        moveNoButton();
    } else {
        // On the 6th click, show the pop-up with the message "BUT I LOVE YOU 💖🌹"
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.left = '50%';
        modal.style.top = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.padding = '30px';
        modal.style.backgroundColor = '#fff';
        modal.style.border = '2px solid #4CAF50';
        modal.style.textAlign = 'center';
        modal.style.borderRadius = '10px';
        modal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
        modal.innerHTML = "<h2>BUT I LOVE YOU 💖🌹</h2>"; // Updated message

        // Add the modal to the body
        document.body.appendChild(modal);

        // Automatically close the modal after 3 seconds
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 3000);
    }
});

// YES button event listener
yesBtn.addEventListener('click', function() {
    // Show a pop-up immediately when "YES" is clicked
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.left = '50%';
    modal.style.top = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.padding = '30px';
    modal.style.backgroundColor = '#fff';
    modal.style.border = '2px solid #4CAF50';
    modal.style.textAlign = 'center';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    modal.innerHTML = "<h2>I LOVE YOU TOO! 💖🌹</h2>"; // Message when YES is clicked

    // Add the modal to the body
    document.body.appendChild(modal);

    // Automatically close the modal after 3 seconds
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 3000);
});
