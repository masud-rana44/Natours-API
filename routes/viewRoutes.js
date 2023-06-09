const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');
const userController = require('../controllers/userController');

const router = express.Router();

router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);

router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', authController.isLoggedIn, viewsController.getSignupForm);

router.get(
  '/forgotPassword',
  authController.isLoggedIn,
  viewsController.getForgotPasswordForm
);

router.get(
  '/api/v1/users/resetPassword/:token',
  authController.isLoggedIn,
  viewsController.getResetPasswordForm
);

router.get(
  '/resetLinkConfirmation',
  authController.isLoggedIn,
  viewsController.getResetLinkConfirmation
);

router.get(
  '/paymentConfirmation',
  authController.protect,
  authController.isLoggedIn,
  viewsController.getPaymentConfirmation
);

router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', authController.protect, viewsController.getMyTours);
router.get('/my-reviews', authController.protect, viewsController.getMyReviews);

router.get(
  '/all-bookings',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAllBookings
);

router.patch(
  '/update-user-data',
  authController.protect,
  viewsController.updateUserData
);

module.exports = router;
