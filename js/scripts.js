console.log("Hello World");



// Add the new script below

document.addEventListener('DOMContentLoaded', function() {
  const link = document.querySelector('.case-study-link');
  const emojis = document.querySelectorAll('.emoji');

  link.addEventListener('mouseenter', function() {
    emojis.forEach((emoji) => {
      emoji.style.opacity = '1';
      emoji.style.animation = 'explode 0.5s forwards';
    });
  });

  link.addEventListener('mouseleave', function() {
    emojis.forEach((emoji) => {
      emoji.style.opacity = '0';
      emoji.style.animation = 'none';
    });
  });
});
