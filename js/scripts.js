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
function bubbles() {
  $.each($(".yuj-link"), function(){
      var bubblecount = ($(this).width()/50)*10;
      var emojis = ["🧘", "🕉️", "✨", "🌙", "☮️", "🦄", "🌈", "💎", "❤️", "☀️", "🌒", "🧚‍♀️", "🙏", "📿"];
      for(var i = 0; i <= bubblecount; i++) {
          var size = ($.rnd(20,40)/10); // Adjusted size for better visibility
          var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          $(this).append('<span class="yuj-emoji" aria-hidden="true" style="top:' + $.rnd(-10,110) + '%; left:' + $.rnd(-10,110) + '%;font-size:' + size + 'em;animation-delay: ' + ($.rnd(0,30)/10) + 's;">' + randomEmoji + '</span>');
      }
  });
}

jQuery.rnd = function(m,n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor( Math.random() * (n - m + 1) ) + m;
}

$(document).ready(function() {
  bubbles();
});
