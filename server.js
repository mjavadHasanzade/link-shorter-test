const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ShortUrl = require('./models/model');

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
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const allUrls = await ShortUrl.find();
    res.render('index', { allUrls: allUrls });
});

app.post('/shortGenerator', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl });

    res.redirect('/')

});

app.listen(process.env.PORT || 3000, () => {
    console.log('app is listening to ' + process.env.PORT);
})