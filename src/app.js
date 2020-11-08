const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const PORT = process.env.PORT || 8000;

//----------------give public file path ---------------------->
const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));


app.get("/", (req, res) => {
    // res.send("hey this is home pages")
    res.render('index');
})

app.get("/about", (req, res) => {
    // res.send("this is about us pages")
    res.render('about')
})

app.get("/weather", (req, res) => {
    res.render('weather')
})

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg : "Opps! Page Not Found"
    })
})

app.listen(PORT, () => console.log("server sucessfully open"));