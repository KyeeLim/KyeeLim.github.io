function countdownTimer() {
  // Set the target date and time (year, month (0-11), day, hour, minute, second)
  const targetDate = new Date('2024-03-24T19:00:00').getTime();

  // Update the countdown every second
  const countdownTimer = setInterval(function() {
    // Get the current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = targetDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the countdown timer
    document.getElementById('countdown').innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // If the countdown is over, clear the timer
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById('countdown').innerHTML = 'Livestream is ongoing now!';
    }
  }, 1000);

  //document.getElementById('bingoSheetContainer').style.display = 'none';
  //document.getElementById('countdownContainer').style.display = 'block';
}

countdownTimer()