function onClick(){
  // Add event listener to each image to toggle grayscale effect
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('grayscale');
    });
  });
}
