const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//---ALWAYS-----------------------------------------------------
//Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);
//Same as...
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";...
//^--ALWAYS-----------------------------------------------------


//ftn change CSS to move slides
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}
//ftn change CSS on dots to show current slide
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

//ftn show which buttons to have active
const hideShowArrows = (slides, targetIndex, prevButton, nextButton) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

//When I click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const targetIndex = slides.findIndex(slide => slide === prevSlide);

  //Move to next slide
  moveToSlide(track, currentSlide, prevSlide);
  //Show which dot is now current
  updateDots(currentDot, prevDot);
  //Make scrolling buttons invisible when necessary
  hideShowArrows(slides, targetIndex, prevButton, nextButton);
})

//When I click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex(slide => slide === nextSlide);

  //Move to the next slide
  moveToSlide(track, currentSlide, nextSlide);
  //Show which dot is now current
  updateDots(currentDot, nextDot);
  //Make scrolling buttons invisible when necessary
  hideShowArrows(slides, targetIndex, prevButton, nextButton);
})

//When I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
  //What indicator was clicked on?
  const targetDot = e.target.closest('button');
  //Stop running if we don't need anything to happen
  if(!targetDot) return; //targetDot = null if click anywhere in dotsNav besides on dots

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  //Move to target slide
  moveToSlide(track, currentSlide, targetSlide);
  //Show which dot is now current
  updateDots(currentDot, targetDot);
  //Make scrolling buttons invisible when necessary
  hideShowArrows(slides, targetIndex, prevButton, nextButton);
})


