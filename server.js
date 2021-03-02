const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shortUrl', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('db connect');
    }
})

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/shortGenerator', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('app is listening to ' + process.env.PORT);
})