module.exports = {
    index: async (req, res) => {
        res.render('homepage');
    },
    about: async (req, res) => {
        res.render('about');
    },
    contact: async (req, res) => {
        res.render('contact');
    },
    signin: async (req, res) => {
        res.render('signin');
    }
}