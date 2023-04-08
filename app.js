const express = require('express');
const app = express();
const PORT = 8080;
const rootRouter = require('./routes/root');

app.set('view engine', 'ejs');

app.use([
    express.urlencoded({ extended: true }),
    express.json(),
    express.static('public')
])

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

