const express = require('express');
const app = express();
const  expbs  = require('express-handlebars');
const path = require('path');
const hbs = expbs.create({defaultLayout: 'main'});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) =>
{
    res.render('index');
});

app.get('/about', (req, res) =>
{
    res.render('about');
})

app.listen(5001, () =>
{
    console.log('Server is starting at port', 5001);
});