document.addEventListener("DOMContentLoaded", function() {
  // Array of background image URLs
  var backgroundImages = [
    'url("../img/background/BA_Background.mp4")',
    'url("../img/background/rickroll.mp4")'
    // Add more URLs as needed
  ];

  // Function to set random background image
  function setRandomBackground() {
    var randomNumber = Math.floor(Math.random() * 100);
    
    // Check if randomNumber is less than or equal to 5 (which is 6% of 100)
    if (randomNumber <= 6) {
      // 6% chance to set the second background image
      document.querySelector('.background-video').style.backgroundImage = backgroundImages[1];
      console.log('test',randomNumber);
    } else {
      // 94% chance to set the first background image
      document.querySelector('.background-video').style.backgroundImage = backgroundImages[0];
      console.log('rickroll',randomNumber);
    }
  }

  // Initially set a random background image on page load
  setRandomBackground();
});
