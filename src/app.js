const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 5000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);


app.get("/", (req, res) => {
    res.render('simple', {
        titleName: "Color Flicker || Simple",
        active1: "active"
    });
});
app.get("/hex", (req, res) => {
    res.render('hex', {
        titleName: "Color Flicker || Hex",
        active2: "active"
    });
});
app.get("/rgb", (req, res) => {
    res.render('rgb',  {
        titleName: "Color Flicker || RGB",
        active3: "active"
    });
});
app.get("*", (req, res) => {
    res.render('error', {
        errormessage: "Oops! Page Not Found..."
    });
});

app.listen(port, () => console.log(`Server started at port ${port}`));
