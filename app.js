const express = require('express');
const app = express();
const PORT = 8080;
require('./utils/mongoose');
const rootRouter = require('./routes/root');

app.use([
    express.urlencoded({ extended: true }),
    express.json()
])

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

