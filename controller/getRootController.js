module.exports = {
    renderHomePage: async (req, res) => {
        try {
            const data = { pageTitle: 'Home' };
            res.render('homepage', data);
        } catch (err) {
            res.status(500).send('Error rendering home page');
        }
    },

    renderAboutPage: async (req, res) => {
        try {
            const data = { pageTitle: 'About' };
            res.render('about', data);
        } catch (err) {
            res.status(500).send('Error rendering about page');
        }
    },

    renderContactPage: async (req, res) => {
        try {
            const data = { pageTitle: 'Contact' };
            res.render('contact', data);
        } catch (err) {
            res.status(500).send('Error rendering contact page');
        }
    },

    renderSignInPage: async (req, res) => {
        try {
            const data = { pageTitle: 'Sign In' };
            res.render('signin', data);
        } catch (err) {
            res.status(500).send('Error rendering sign in page');
        }
    },
};