const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const SALT = 10;
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

    let user = await User.findOne({ email })


    if(!user) {
        return res.json({
            error: 'User not found'
        })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        return res.json({
            error: 'Password is incorrect'
        })
    }

    console.log('User logged in');

    res.redirect('/');
});

router.post('/signup', async(req, res) => {
    const { fname, lname, username, email, password, password2, newsletter } = req.body;

    if(password !== password2) {
        return res.json({
            error: 'Passwords do not match'
        })
    }

    let getNewsletter = false;
    if(newsletter === 'on') {
        getNewsletter = true;
    }

    const hashedPassword = await bcrypt.hash(password, SALT);

    const newUser = User({
        username,
        email,
        password: hashedPassword,
        firstName: fname,
        lastName: lname,
        newsletter
    });
    
    await newUser.save()
        .then((data) => {
            console.log(data);
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
            res.json({
                error: err
            });
        });

});

module.exports = router;