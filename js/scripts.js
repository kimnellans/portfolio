console.log("Hello World");



document.addEventListener('DOMContentLoaded', function() {
  const link = document.querySelector('.case-study-link');
  const emojis = document.querySelectorAll('.emoji');

  link.addEventListener('mouseenter', function() {
    emojis.forEach((emoji) => {
      emoji.style.opacity = '1';
      emoji.style.animation = 'explode 0.5s forwards';
    });
  });

  link.addEventListener('mousemove', function(e) {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    emojis.forEach((emoji) => {
      const dx = (emoji.getAttribute('data-dx') || 0) * (x / rect.width - 0.5) * 10; // Adjusted multiplier for more dynamic movement
      const dy = (emoji.getAttribute('data-dy') || 0) * (y / rect.height - 0.5) * 10; // Adjusted multiplier for more dynamic movement
      emoji.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  });

  link.addEventListener('mouseleave', function() {
    emojis.forEach((emoji) => {
      emoji.style.opacity = '0';
      emoji.style.animation = 'none';
    });
  });
});
