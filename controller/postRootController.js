const bcrypt = require('bcrypt');
const SALT = 10;
const User = require('../models/users');

module.exports = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            let user = await User.findOne({ email });

            if (!user) {
                return res.json({
                    error: 'User not found'
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.json({
                    error: 'Password is incorrect'
                });
            }

            console.log('User logged in');

            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    signin: async (req, res) => {
        try {
            const { fname, lname, username, email, password, password2, newsletter } = req.body;

            if (password !== password2) {
                return res.json({
                    error: 'Passwords do not match'
                });
            }

            let getNewsletter = false;
            if (newsletter === 'on') {
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

            const data = await newUser.save();
            console.log(data);

            res.redirect('/');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};