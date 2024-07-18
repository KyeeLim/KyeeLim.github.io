document.addEventListener("DOMContentLoaded", function() {
  // Array of background image URLs
  var goodies = [
    '../img/goodies/rickroll.mp4',
	'../img/goodies/koshitan.mp4',
	'../img/goodies/toothless.mp4',
	'../img/goodies/hifumidaisuki.mp4',
	'../img/goodies/feet.mp4',
	'../img/goodies/mutsukicalifornia.mp4'
  ];

  // Function to set random background image
  function setRandomBackground() {
    var randomNumber = Math.floor(Math.random() * 100);
    const videoElement = document.getElementById('backgroundVideo');
    
    // Check if randomNumber is less than or equal to 5 (which is 6% of 100)
    if (randomNumber <= -1) {
      // 6% chance to set the second background image
	  var randomVid = Math.floor(Math.random()* goodies.length);
      videoElement.innerHTML = `<source src="${goodies[randomVid]}" type="video/mp4">`;
	  
    } else {
      // 94% chance to set the first background image
      videoElement.innerHTML = `<source src=\'../img/background/BA_Background.mp4\' type="video/mp4">`;
    }

    videoElement.load();
    videoElement.play().catch(error => {
      console.error('Error attempting to play video:', error);
      // Handle autoplay policy restrictions
      videoElement.muted = false;
      videoElement.play();
    });
  }

  // Initially set a random background image on page load
  setRandomBackground();
});


