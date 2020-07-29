var express = require('express');
var app = new express()
app.listen('3000', function () {
    console.log('aaaaaa');
})

app.get('/register', function (req, res) {
    var { username, passname, vert } = req.query;
    res.send(username + passname + vert)
})

var express = require('express');
var router = express.Router();

router.get('/c',function(req,res){
    res.json({
        msg:'c'
    })
})
app.use(login);
app.use(b)
