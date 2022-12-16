const express = require('express');
const app = express();






app.get('/parole', function (req, res) { // http://localhost:3000/parole?t=

    const titre = parseInt(req.query.titre)

    res.send(Calculatrice(x,y,addition).toString());

})


app.listen(3000)