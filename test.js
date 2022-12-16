const express = require('express');
const app = express();

const addition = (x, y) => x + y;
const substraction = (x,y) => x-y;
const multiplication = (x,y) => x*y;
const division = (x,y) => x/y;


function Calculatrice(x,y,callback){
    return callback(x,y);
}

app.get('/addition', function (req, res) { // http://localhost:3000/addition?x=10&y=5

    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)
    if (!x || !y){
        res.sendStatus(400)
    }
    res.send(Calculatrice(x,y,addition).toString());

})
app.get('/substraction', function (req, res) {

    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)
    if (!x || !y){
        res.sendStatus(400)
    }
    res.send(Calculatrice(x,y,substraction).toString());

})
app.get('/multiplication', function (req, res) {

    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)
    if (!x || !y){
        res.sendStatus(400)
    }
    res.send(Calculatrice(x,y,multiplication()).toString());

})
app.get('/division', function (req, res) {

    const x = parseInt(req.query.x)
    const y = parseInt(req.query.y)
    if (!x || !y){
        res.sendStatus(400)
    }
    res.send(Calculatrice(x,y,division()).toString());

})

app.listen(3000)