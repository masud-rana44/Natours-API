/* eslint-disable */
const review = document.querySelector('.review');
const overlay = document.querySelector('.overlay');
const btnCloseReviewForm = document.querySelector('.btn--close-review');
const btnsReview = document.querySelectorAll('.review-btn');

//////////////////////////////////////
// review Window

const openReviewForm = () => {
  review.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeReviewForm = () => {
  review.classList.add('hidden');
  overlay.classList.add('hidden');
};

export const reviewFormHandler = () => {
  btnsReview.forEach((btn) => btn.addEventListener('click', openReviewForm));
  btnCloseReviewForm.addEventListener('click', closeReviewForm);
  overlay.addEventListener('click', closeReviewForm);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !review.classList.contains('hidden')) {
      closeReviewForm();
    }
  });
};
