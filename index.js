const express = require('express');
const wordsRouter = require('./routers/wordsRouter');

const app = express();

app.use(express.json());
app.use('/words', wordsRouter);

app.listen(3000, () => {
    console.log('server started');
})