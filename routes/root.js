const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/', async(req, res) => {
    res.render('homepage', {
        title: 'Homepage'
    });
});

router.get('/signin', async(req, res) => {
    res.render('signin');
});

router.get('/get/users', async(req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/save/user', async(req, res) => {
    const { username, email, password } = req.body;
    const user = new User({
        username,
        email,
        password
    });
    const savedUser = await user.save();
    res.json(savedUser);
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.redirect('/');
});

router.post('/signup', async(req, res) => {
    const { fname, lname, username, email, password, password2, newsletter } = req.body;

    const newUser = new User({
        username,
        email,
        password,
        firstName: fname,
        lastName: lname,
        newsletter
    });

    console.log(newUser);
    res.redirect('/');
});

module.exports = router;