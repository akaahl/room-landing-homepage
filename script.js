const header = document.querySelector("header");

function mediaQuery() {
  const screenSize = window.matchMedia("(max-width: 425px)");

  //   if (screenSize) {
  //     header.style.backgroundImage = 'url("images/mobile-image-hero-1.jpg")';
  //   }

  if (window.screen.width > 425) {
    header.style.backgroundImage = 'url("images/desktop-image-hero-1.jpg")';
  }

  if (window.screen.width <= 425) {
    header.style.backgroundImage = 'url("images/mobile-image-hero-1.jpg")';
  }
}

mediaQuery();
