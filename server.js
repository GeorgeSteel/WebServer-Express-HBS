const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Julián',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        year: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticionen en el puerto ${port}`);
});
