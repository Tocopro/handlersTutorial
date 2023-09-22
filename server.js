const express = require('express');
const app = express();
const  expbs  = require('express-handlebars');
const path = require('path');
const hbs = expbs.create({defaultLayout: 'main',
partialsDir: path.join(__dirname,'views/partials'),
layoutsDir: path.join(__dirname, 'views/layouts')});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) =>
{
    res.render('index', {title: 'Home Page', name: 'John Doe', isDisplayedName:true});
});

app.get('/about', (req, res) =>
{
    res.render('about', {title: 'About Page', description: 'Cinema'});
});

app.get('/dashboard', (req, res) =>
{
    res.render('dashboard',
    {
        isListEnabled: true
    });
});

app.get('/each/helper', (req, res) =>
{
    res.render('contact',
    {people:    [
        "james",
        "peter",
        "morris",
        "joe"        
    ],
    user: {
        username: 'accent',
        age: 21,
        phone: 5555555
    },
    lists:
    [
        {
            items: ['mango', 'banana', 'pineapple']
        },
        {
            items: ['potatoes', 'manioc', 'avocado']
        }
    ]

}

    );
});



app.listen(5001, () =>
{
    console.log('Server is starting at port', 5001);
});