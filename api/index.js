const express = require("express");
const cors = require('cors');
// const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}))

app.get('/test', (req, res) => {
    res.json("ok")
})

app.post('/register', (req, res) => {
    // console.log(res);
    const { userName, userEmail, userPass } = req.body;
    res.json({
        userName, userPass, userEmail
    });
    // console.log(req.body);
})

app.listen(3000, () => {
    console.log("on port 3000");
})

