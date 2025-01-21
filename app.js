const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs','jpg');


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/services',(req, res)=>{
    res.render('services');
})

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
