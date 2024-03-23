// Set the end time in UTC
const endDateUTC = new Date("2024-03-24T11:00:00Z"); // Equivalent to 20:00 JST

function updateCountdown() {
  const now = new Date();

  // Get the user's time zone offset in minutes
  const userTimezoneOffset = now.getTimezoneOffset();

  // Adjust the end time based on the user's offset to make it local for them
  const endDateLocal = endDateUTC;

  const difference = endDateLocal.getTime() - now.getTime();

  //console.log("UTC : "+endDateUTC)
  //console.log(endDateLocal)

  if (difference <= 0) {
    document.getElementById("countdown").textContent = "Live Now!/Ended!";
    return;
  }

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const formattedTime = `${days ? days + 'd ' : ''}${hours ? hours + 'h ' : ''}${minutes ? minutes + 'm ' : ''}${seconds}s`;
  document.getElementById("countdown").textContent = formattedTime;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();