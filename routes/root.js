const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/', async(req, res) => {
    res.json({
        message: "API is working"
    })
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

router.get('/get/users', async(req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;