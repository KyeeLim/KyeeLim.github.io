// Function to hide the overlay and unpause & unmute video
  function hideOverlay() {
    var overlay = document.getElementById('overlay');
	var vid = document.getElementById('backgroundVideo');
    overlay.style.display = 'none';
	vid.autplay = true;
	vid.muted = false;
  }