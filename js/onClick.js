// Add event listener to each image to toggle grayscale effect
document.querySelectorAll('img:not(#banner):not(.timer-table)').forEach(img => {
  //set grayscale to everything
  //img.classList.toggle('grayscale');
  img.addEventListener('click', () => {
    //img.classList.toggle('grayscale');
    img.classList.toggle('opacity');
	//img.style.opacity = img.style.opacity === '0' ? '1' : '0';
  });
});