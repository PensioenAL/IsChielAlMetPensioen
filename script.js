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
