const express = require('express');
const router = express.Router();


const getRootController = require('../controller/getRootController.js');
const postRootController = require('../controller/postRootController.js');

// Get Routes for rendering pages
router.get('/', getRootController.renderHomePage);

router.get('/about', getRootController.renderAboutPage)

router.get('/contact', getRootController.renderContactPage);

router.get('/signin', getRootController.renderSignInPage);


// Post Rotes for handling form submissions and returning data
router.post('/login', postRootController.login);

router.post('/signup', postRootController.signin);

module.exports = router;