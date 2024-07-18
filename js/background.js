document.addEventListener("DOMContentLoaded", function() {
  // Array of background image URLs
  var videos = [
    '../img/background/BA_Background.mp4',
    '../img/background/rickroll.mp4',
    // Add more URLs as needed
  ];

  // Function to set random background image
  function setRandomBackground() {
    var randomNumber = Math.floor(Math.random() * 100);
    const videoElement = document.getElementById('backgroundVideo');
    
    // Check if randomNumber is less than or equal to 5 (which is 6% of 100)
    if (randomNumber <= 6) {
      // 6% chance to set the second background image
      videoElement.innerHTML = `<source src="${videos[1]}" type="video/mp4">`;
      console.log('rick',randomNumber);
    } else {
      // 94% chance to set the first background image
      videoElement.innerHTML = `<source src="${videos[0]}" type="video/mp4">`;
      console.log('roll',randomNumber);
    }

    videoElement.load();
    videoElement.play().catch(error => {
      console.error('Error attempting to play video:', error);
      // Handle autoplay policy restrictions
      videoElement.muted = true;
      videoElement.play();
    });
  }

  // Initially set a random background image on page load
  setRandomBackground();
});


