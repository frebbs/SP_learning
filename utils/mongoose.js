const mongoose = require('mongoose');
const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;