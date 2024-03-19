<<<<<<< HEAD
function onClick(){
  // Add event listener to each image to toggle grayscale effect
  document.querySelectorAll('img:not(#banner)').forEach(img => {
	//set grayscale to everything
	img.classList.toggle('grayscale');
    img.addEventListener('click', () => {
      img.classList.toggle('grayscale');
    });
  });
=======
function toggleGrayscale(img) {
    img.classList.toggle('grayscale');
    const imageName = img.alt;
    const isGrayscale = img.classList.contains('grayscale');
    localStorage.setItem(imageName, isGrayscale);
>>>>>>> 8afe14aa49c6eca1e32dc142eb5981385a4cbe9e
}

  // Add event listener to each image to toggle grayscale effect
document.querySelectorAll('img').forEach(img => {
  const imageName = img.alt;
  const isGrayscale = localStorage.getItem(imageName) === 'true';
  if (isGrayscale) {
    img.classList.add('grayscale');
  }

  img.addEventListener('click', () => {
    toggleGrayscale(img);
  });
});

