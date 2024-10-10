const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// "NO" button ki location tab change hogi jab user isay touch ya click karega (mobile ke liye touch aur desktop ke liye hover)
function moveNoButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth; // Button screen ke bahar na jaye
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

// Desktop par hover par location change
noBtn.addEventListener('mouseover', moveNoButton);

// Mobile par touch ya click par location change
noBtn.addEventListener('click', moveNoButton);

// YES button par click karne par pehla aur dosra message pop-up hoga
yesBtn.addEventListener('click', function() {
    // Pehla popup: top side par
    const firstModal = document.createElement('div');
    firstModal.style.position = 'fixed';
    firstModal.style.left = '50%';
    firstModal.style.top = '10%'; // Top side pe show hoga
    firstModal.style.transform = 'translate(-2%, 50)';
    firstModal.style.padding = '20px';
    firstModal.style.backgroundColor = '#fff';
    firstModal.style.border = '2px solid #4CAF50';
    firstModal.style.textAlign = 'center';
    firstModal.style.borderRadius = '10px';
    firstModal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
    firstModal.innerHTML = "<h2>IT'S FROM NOMI PHAPHRA</h2>";

    // Add pehla modal to the body
    document.body.appendChild(firstModal);

    // 2 seconds ke baad pehla modal remove hoga aur dusra modal show hoga
    setTimeout(() => {
        document.body.removeChild(firstModal);

        // Dusra popup: center me show hoga
        const secondModal = document.createElement('div');
        secondModal.style.position = 'fixed';
        secondModal.style.left = '50%';
        secondModal.style.top = '50%'; // Center par
        secondModal.style.transform = 'translate(-50%, -50%)';
        secondModal.style.padding = '30px';
        secondModal.style.backgroundColor = '#fff';
        secondModal.style.border = '2px solid #4CAF50';
        secondModal.style.textAlign = 'center';
        secondModal.style.borderRadius = '10px';
        secondModal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
        secondModal.innerHTML = "<h2>I LOVE YOU TOO! 💖🌹</h2>";

        // Dusra modal body mein add hoga
        document.body.appendChild(secondModal);

        // 3 second ke baad dusra modal close hoga
        setTimeout(() => {
            document.body.removeChild(secondModal);
        }, 7000);
    }, 1000); // Pehla modal 2 seconds tak dikhega
});
