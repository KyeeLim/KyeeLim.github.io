function toggleGrayscale(img) {
    img.classList.toggle('grayscale');
    const imageName = img.alt;
    const isGrayscale = img.classList.contains('grayscale');
    localStorage.setItem(imageName, isGrayscale);
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

