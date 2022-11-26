const express = require("express");
const app = express();
var fs = require('fs');
var http = require('http');

const routers = require('./routers');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/views'));

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    const pollutionData = JSON.parse(fs.readFileSync('data-pollution.json', 'utf8'));

    res.render("index.ejs", {
        pollutionData: Array.from(pollutionData.pollution)
    });
});


app.use('/', routers);

app.listen(4000, () => {
    console.log("Backend already!")
})