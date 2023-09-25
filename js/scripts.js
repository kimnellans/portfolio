console.log("Hello World");

  //js for locavore interaction

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
      const dx = (emoji.getAttribute('data-dx') || 0) * (x / rect.width - 0.5);
      const dy = (emoji.getAttribute('data-dy') || 0) * (y / rect.height - 0.5);
      emoji.style.transform = `translate(${dx}px, ${dy}px)`;
    });
  });

  link.addEventListener('mouseleave', function() {
    emojis.forEach((emoji) => {
      // Reset the styles immediately without any transition
      emoji.style.transition = 'none'; 
      emoji.style.opacity = '0';
      emoji.style.animation = 'none';
      emoji.style.transform = 'none';
    });
    // Restore the transition after a brief timeout
    setTimeout(() => {
      emojis.forEach((emoji) => {
        emoji.style.transition = 'opacity 0.3s ease-out';
      });
    }, 10);
  });
});



  //js for YUJ interaction

  document.addEventListener('DOMContentLoaded', function() {
    const yujLink = document.querySelector('.yuj-link');
    const yujEmojis = document.querySelectorAll('.yuj-emoji');
  
    yujLink.addEventListener('mouseenter', function() {
      yujEmojis.forEach((emoji) => {
        emoji.style.opacity = '0.8';
        emoji.style.transform = `scale(1) translate(${emoji.style.getPropertyValue('--x')}, ${emoji.style.getPropertyValue('--y')})`;
      });
    });
  
    yujLink.addEventListener('mousemove', function(e) {
      const rect = yujLink.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      yujEmojis.forEach((emoji) => {
        const dx = (emoji.getAttribute('data-dx') || 0) * (x / rect.width - 0.5);
        const dy = (emoji.getAttribute('data-dy') || 0) * (y / rect.height - 0.5);
        emoji.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    });
  
    yujLink.addEventListener('mouseleave', function() {
      yujEmojis.forEach((emoji) => {
        emoji.style.transition = 'none';
        emoji.style.opacity = '0';
        emoji.style.transform = 'none';
        setTimeout(() => {
          emoji.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        }, 10);
      });
    });
  });
  