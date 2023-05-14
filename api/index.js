const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// var jsonParser = bodyParser.json();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false }); app.use(bodyParser.json());
app.use(jsonParser);

const USERS = [];
let USER_ID_COUNTER = 1;
const middleware = (req, res, next) => {
    console.log("middleware testing");
    next();
}


app.get("/", (req, res) => {
    res.send("IntroPage will be here");
})

app.post("/login", (req, res) => {

})

app.post("/register", (req, res) => {
    const UserName = req.body.name;
    const UserEmail = req.body.email;
    const UserPass = req.body.pass;

    if (USERS.find(x => x.UserEmail === UserEmail)) {
        return res.status(403).json({ msg: "email already exists" });
    }

    USERS.push({
        UserName, UserEmail, UserPass, id: USER_ID_COUNTER++
    })

    return res.json({
        msg: "success",
    })

})

app.get("/user", middleware, (req, res) => {
    res.send("UserPage will be shown to user after user in logged in");
})

app.listen(3000, () => {
    console.log("on port 3000");
})

