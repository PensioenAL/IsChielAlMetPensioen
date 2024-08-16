(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24,
          year = day * 365;
  
    // Set the retirement date (July 3, 2055)
    const retirementDate = "07/03/2055";
    
    // Get the countdown target date in milliseconds
    const countDown = new Date(retirementDate).getTime(),
        x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        // Calculate remaining years, days, hours, minutes, and seconds
        const yearsRemaining = Math.floor(distance / year);
        const daysRemaining = Math.floor((distance % year) / day);
        const hoursRemaining = Math.floor((distance % day) / hour);
        const minutesRemaining = Math.floor((distance % hour) / minute);
        const secondsRemaining = Math.floor((distance % minute) / second);
        
        // Update the countdown elements
        document.getElementById("jaar").innerText = yearsRemaining;
        document.getElementById("dagen").innerText = daysRemaining;
        document.getElementById("uren").innerText = hoursRemaining;
        document.getElementById("minuten").innerText = minutesRemaining;
        document.getElementById("seconden").innerText = secondsRemaining;

        // Check if the countdown has reached zero
        const isPensioenElement = document.getElementById("isPensioen");
        if (distance < 0) {
            document.getElementById("headline").innerText = "It's time to retire!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);

            // Update isPensioen element
            isPensioenElement.innerText = "Gefeliciteerd man🎉! Geniet van je pensioen👴🏻!";
            isPensioenElement.classList.remove("isPensioenFalse");
            isPensioenElement.classList.add("isPensioenTrue");
        } else {
            // If not zero, show the countdown message
            isPensioenElement.innerText = "Helaas niet Chiel😔, wel bijna een dag dichter bij je pensioen!";
            isPensioenElement.classList.remove("isPensioenTrue");
            isPensioenElement.classList.add("isPensioenFalse");
        }
    }, 1000); // Set the interval to 1 second
}());

document.addEventListener("DOMContentLoaded", function () {
    const flyingImage = document.getElementById("flyingImage");

    // Function to play a random sound from the "Gekkies" folder when the image is clicked
    function playSound() {
        const gekkiesFolder = 'Gekkies/';
        const soundFiles = [
            '1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3',
            '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3',
            '11.mp3', '12.mp3', '13.mp3', '14.mp3', '15.mp3',
            '16.mp3', '17.mp3', '18.mp3'
        ];

        // Randomly select one of the sound files
        const randomIndex = Math.floor(Math.random() * soundFiles.length);
        const selectedSound = gekkiesFolder + soundFiles[randomIndex];

        // Play the selected sound
        const audio = new Audio(selectedSound);
        audio.play();
    }

    function flyAcrossScreen() {
        // Set a random vertical position (between 0 and window height - image height)
        const randomY = Math.floor(Math.random() * (window.innerHeight - flyingImage.height));
        
        // Set the initial position
        flyingImage.style.top = `${randomY}px`;
        flyingImage.style.left = '-100px'; // Start just off-screen to the left

        // Trigger the animation to move across the screen
        requestAnimationFrame(() => {
            flyingImage.style.transition = 'left 5s linear'; // Apply transition
            flyingImage.style.left = '100%'; // Move off-screen to the right
        });
    }

    // Start the animation and repeat every 30 seconds
    flyAcrossScreen();
    setInterval(flyAcrossScreen, 30000); // Repeat every 30 seconds

    // Add click event listener to play a random sound
    flyingImage.addEventListener('click', playSound);
});
