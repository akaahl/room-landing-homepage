const header = document.getElementById('header');
const changeImageButtons = document.querySelectorAll('.button');
const heroH1 = document.getElementById('hero-h1');
const heroP = document.getElementById('hero-p');

let imageCarouselInfo = [
  {
    imageUrl: "url('images/desktop-image-hero-1.jpg')",
    heroH1: 'Discover innovative ways to create',
    heroP:
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    imageUrl: "url('images/desktop-image-hero-1.jpg')",
    heroH1: 'We are available across the globe',
    heroP:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    imageUrl: "url('images/desktop-image-hero-1.jpg')",
    heroH1: 'Manufactured with the best materials',
    heroP:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product: is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
  },
];

let dataIndex = +heroH1.dataset.attribute;

let headerStyle = window
  .getComputedStyle(header)
  .getPropertyValue('background-image');

headerStyle = imageCarouselInfo[1].imageUrl;
// console.log(headerStyle);
// function updateDataIndex(index) {
//   if (index == 0) return (index = 3);
//   if (index == 4) return (index = 1);
//   // return index == 0 ? (index = 3) : index == 4 ? (index = 1) : index;
//   console.log(index);
// }

function updateDOM(header, h1, p) {
  if (dataIndex == 1) {
    header.style.backgroundImage = imageCarouselInfo[0].imageUrl;
    h1.innerText = imageCarouselInfo[0].heroH1;
    p.innerText = imageCarouselInfo[0].heroP;
  }

  if (dataIndex == 2) {
    header.style.backgroundImage = imageCarouselInfo[1].imageUrl;
    h1.innerText = imageCarouselInfo[1].heroH1;
    p.innerText = imageCarouselInfo[1].heroP;
  }

  if (dataIndex == 3) {
    header.style.backgroundImage = imageCarouselInfo[2].imageUrl;
    h1.innerText = imageCarouselInfo[2].heroH1;
    p.innerText = imageCarouselInfo[2].heroP;
  }
}

changeImageButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('left')) {
      dataIndex -= 1;
      if (dataIndex == 0) dataIndex = 3;
      updateDOM(header, heroH1, heroP);
      console.log(dataIndex);
    }

    if (button.classList.contains('right')) {
      dataIndex += 1;
      if (dataIndex == 4) dataIndex = 1;
      updateDOM(header, heroH1, heroP);

      console.log(dataIndex);
    }
  });
});
