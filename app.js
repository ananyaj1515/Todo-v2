const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require("./routes/index")

// connection to mongodb
mongoose.connect("mongodb://localhost/todo_list", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// server configuration
app.listen(process.env.PORT, () => {
    console.log('Started Listening on port 3000');
});