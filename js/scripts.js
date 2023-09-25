console.log("Hello World");



// Add the new script below

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.case-study-link');
    const emojis = document.querySelectorAll('.emoji');
  
    link.addEventListener('mouseenter', function() {
      emojis.forEach((emoji) => {
        emoji.style.opacity = '1';
        emoji.style.transform = 'scale(1.2)'; // expand the emojis slightly for the "breathe" effect
      });
    });
  
    link.addEventListener('mouseleave', function() {
      emojis.forEach((emoji) => {
        emoji.style.opacity = '0';
        emoji.style.transform = 'scale(0)';
      });
    });
  });
  