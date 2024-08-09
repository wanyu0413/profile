// Select all trigger elements
const triggers = document.querySelectorAll('.trigger');

// Loop through each trigger and add a click event listener
triggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
    const popupID = this.getAttribute('data-popup');
    const popup = document.getElementById(popupID);
    const overlay = document.querySelector('.overlay');
    
    // Show the popup and overlay
    popup.classList.add('active');
    overlay.classList.add('active');
  });
});

// Close the popup when the overlay is clicked
const overlay = document.createElement('div');
overlay.classList.add('overlay'); 
document.body.appendChild(overlay);
