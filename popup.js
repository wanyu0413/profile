// Select all trigger elements
const triggers = document.querySelectorAll('.trigger');

// Loop through each trigger and add a click event listener
triggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
    const overlay = document.querySelector('.popup');

    overlay.classList.add('active');
  });
});