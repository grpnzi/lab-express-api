const express = require("express");
const app = express();
const data = require('./data.json')

function RandomObjectFromArrayOfObjects(array) {
    randomObject = Math.floor(Math.random() * array.length)

    return array[randomObject];
}

// Routes
app.get("/api", (req, res, next) => {
    console.log('API is working');
    res.send(data);
});

app.get("/api/all", (req, res, next) => {
    console.log('API endpoint accessed');
    res.send(data);
});

app.get("/api/random", (req, res, next) => {
    console.log('API random');
    const random = RandomObjectFromArrayOfObjects(data);
    res.send(random);
});

app.get('/api/:id', (req, res) => {
    const id = req.params.id;
  
    res.send(data[id]);
});

app.get('/add', (req, res) => {

    res.sendFile(__dirname + '/views/form.html');
});

// Allow to save the information in the 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/add-character', (req, res) => {
    // This route handler will handle the POST request to /api/add-character
    const newCharacter =  {name: req.body.name, lastName: req.body.lastName, age: parseInt(req.body.age), id: (data.length + 1)};
    data.push(newCharacter);
    res.redirect('/add'); // Redirect back to the display route
});


app.listen(3000, ()=>{
    console.log('Running on 3000');
});
