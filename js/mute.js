function mute(){
	var vid = document.getElementById('backgroundVideo');
  // allow video bg to be unmute and mute
  if(vid.muted != true){
    vid.muted = true;
  }else {
    vid.muted = false;
  }
}