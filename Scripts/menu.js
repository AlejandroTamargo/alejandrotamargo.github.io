function menuFixed() {
    var stickySidebar = $('.tabs-container').offset().top;

    $(window).scroll(function() {  
        if ($(window).scrollTop() > stickySidebar) {
            $('.tabs-container').addClass('affix');
        }
        else {
            $('.tabs-container').removeClass('affix');
        }  
    });
};
menuFixed();

/* -- Glow effect -- */

document.addEventListener('mousemove', function(event) {
  var blob = document.getElementById('blob');
  var x = event.clientX;
  var y = event.clientY;
  blob.style.left = x + 'px';
  blob.style.top = y + 'px';
});
 /* -- Language Menu -- */

var toggleButton = document.querySelector('.language-toggle');
var languageMenu = document.querySelector('.language-menu');

toggleButton.addEventListener('click', function() {
  if (languageMenu.style.display === 'block') {
    languageMenu.style.display = 'none';
  } else {
    languageMenu.style.display = 'block';
  }
});


/*-- Stars --*/
function generateStars() {
  const starsContainer = document.getElementById("stars");

  for (let i = 0; i < 300; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.classList.add(`star--${getRandomSize()}`);
    star.style.top = getRandomPosition() + "%";
    star.style.left = getRandomPosition() + "%";

    starsContainer.appendChild(star);

    // Añadir y eliminar la clase "blink" de forma aleatoria
    setInterval(() => {
      if (Math.random() < 0.5) {
        star.classList.add("blink");
      } else {
        star.classList.remove("blink");
      }
    }, getRandomBlinkTime());
  }
}
function getRandomPosition() {
  return Math.random() * 100;
}

function getRandomSize() {
  const sizes = ["small", "medium", "large"];
  const index = Math.floor(Math.random() * sizes.length);
  return sizes[index];
}

function getRandomBlinkTime() {
  // Devuelve un número aleatorio entre 0.5 y 2 segundos
  return Math.floor(Math.random() * 1500) + 500;
}

setTimeout(() => {
  generateStars();
}, 1000);

