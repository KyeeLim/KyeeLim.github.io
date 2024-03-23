function calculateTimeRemaining(targetTime) {
  var now = new Date().getTime();
  var timeRemaining = targetTime - now;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    'total': timeRemaining,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

// Function to start the countdown
function startCountdown(targetTime, elementId) {
  var countdownElement = document.getElementById(elementId);

  function updateCountdown() {
    var time = calculateTimeRemaining(targetTime);

    countdownElement.innerHTML =  'Countdown: ' +
                                  time.days + ' d ' +
                                  time.hours + ' h ' +
                                  time.minutes + ' m ' +
                                  time.seconds + ' s ';

    if (time.total <= 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = 'EXPIRED';
    }
  }

  updateCountdown(); // Initial call to avoid delay

  var countdownInterval = setInterval(updateCountdown, 1000);
}

// Adjust for user's timezone
var targetTime = new Date('2024-03-24T10:00:00Z').getTime(); // Set your target time in UTC
var offset = new Date().getTimezoneOffset(); // User's timezone offset in minutes
targetTime += offset * 60 * 1000;
startCountdown(targetTime, 'countdown');