// Add event listener to each image to toggle grayscale effect
document.querySelectorAll('img:not(#banner):not(.timer-table)').forEach(img => {
  //set grayscale to everything
  img.classList.toggle('grayscale');
  img.addEventListener('click', () => {
    img.classList.toggle('grayscale');
  });
});