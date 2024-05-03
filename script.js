let cartCounter = 0;
let cartCounterDisplay = document.querySelector('.cart-counter');
let productImages = document.querySelectorAll('.productImage');

productImages.forEach(function(image) {
  image.addEventListener('click', function() {
    cartCounter++;
    cartCounterDisplay.textContent = cartCounter;
  });
});