document.getElementById('start-btn').addEventListener('click', function() {
    const targetDate = new Date(document.getElementById('countdown-date').value);
    
    if (!targetDate) {
        alert("Please select a valid date!");
        return;
    }

    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective HTML elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, stop the timer and display message
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
            alert("Countdown has ended!");
        }
    }, 1000);
});