console.log("Hello World");



// Locavore exploding fruit

document.addEventListener('DOMContentLoaded', function() {
    const link = document.querySelector('.case-study-link');
    const emojis = document.querySelectorAll('.emoji');
  
    link.addEventListener('mouseenter', function() {
      emojis.forEach((emoji, index) => {
        setTimeout(() => {
          emoji.style.opacity = '1';
          emoji.style.transform = 'scale(1)';
        }, index * 100); // 100ms delay between each emoji animation
      });
    });
  
    link.addEventListener('mouseleave', function() {
      emojis.forEach((emoji, index) => {
        setTimeout(() => {
          emoji.style.opacity = '0';
          emoji.style.transform = 'scale(0)';
        }, index * 50);
      });
    });
  });
  