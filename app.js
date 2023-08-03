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
    const id = req.params.id; // Convert id to integer
  
    res.send(data[id]);
});

app.listen(3000, ()=>{
    console.log('Running on 3000');
});
