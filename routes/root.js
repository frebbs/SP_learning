const express = require('express');
const router = express.Router();


const getRootController = require('../controller/getRootController.js');
const postRootController = require('../controller/postRootController.js');

// Get Routes for rendering pages
router.get('/', getRootController.index);

router.get('/about', getRootController.about)

router.get('/contact', getRootController.contact);

router.get('/signin', getRootController.signin);


// Post Rotes for handling form submissions and returning data
router.post('/login', postRootController.login);

router.post('/signup', postRootController.signin);

module.exports = router;