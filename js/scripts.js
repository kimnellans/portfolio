console.log("Hello World");



// Add the new script below

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.case-study-link');
    const emojis = document.querySelectorAll('.emoji');
  
    link.addEventListener('mouseenter', function() {
      emojis.forEach((emoji, index) => {
        setTimeout(() => {
          emoji.style.opacity = '1';
          emoji.style.transform = 'scale(1)';
        }, index * 50); // 50ms delay between each emoji animation for a rapid explosion
      });
    });
  
    link.addEventListener('mouseleave', function() {
      emojis.forEach((emoji) => {
        emoji.style.opacity = '0';
        emoji.style.transform = 'scale(0)';
      });
    });
  });
  