'use strict';





(function () {
  var screenshots = document.querySelector('.screenshots'),
    screenshotsPreviousButton = screenshots.querySelector('.toggle-slide--previous'),
    screenshotsNextButton = screenshots.querySelector('.toggle-slide--next'),
    screenshotsSlidedBlock = screenshots.querySelector('.screenshots__slider'),
    screenshotsImages = screenshots.querySelectorAll('.slide'),
    reviews = document.querySelector('.reviews'),
    reviewsNextButton = reviews.querySelector('.toggle-slide--next'),
    reviewsPreviousButton = reviews.querySelector('.toggle-slide--previous'),
    reviewSlidedBlock = reviews.querySelector('.reviews__slider'),
    setSlider = function (offset, parent, slidedBlock) {
      var images = parent.querySelectorAll('.slide'), //обозначаем блок, в котором находятся слайды
        firstImage,
        currentImage;
      if (offset < 0) {
        firstImage = images[0];
        currentImage = images[images.length - 1];
        ++offset;
      } else if (offset > 0) {
        currentImage = images[0];
        --offset;
      } else {
        return false;
      }
      if (firstImage) {
        slidedBlock.insertBefore(currentImage, firstImage);
      } else {
        slidedBlock.appendChild(currentImage);
      }
      if (offset !== 0) {
        setSlider(offset);
      }
      return true;
    };
  screenshotsPreviousButton.addEventListener('click', function () {
    setSlider(-1, screenshots, screenshotsSlidedBlock);
  });
  screenshotsNextButton.addEventListener('click', function () {
    setSlider(1, screenshots, screenshotsSlidedBlock);
  });
  reviewsPreviousButton.addEventListener('click', function () {
    setSlider(-1, reviews, reviewSlidedBlock);
  });
  reviewsNextButton.addEventListener('click', function () {
    setSlider(1, reviews, reviewSlidedBlock);
  });
 /* for (var index = 0; index < images.length; ++index) {
    images[index].addEventListener('click', function (event) {
      var images = Array.prototype.slice.call(slidedBlock.querySelectorAll('.slide')),
        current_image = event.currentTarget,
        current_index = images.indexOf(current_image),
        offset = current_index + 1 - Math.round(images.length / 2);
      setSlider(offset);
    });
  }*/
})();



