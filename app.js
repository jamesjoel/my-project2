const express = require("express");
const app = express();
const cors = require("cors");
const root = require("path").join(__dirname, "build");
const routes = require("./config/routes");
const upload = require("express-fileupload");

app.use(express.static(root));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cors());
app.use(upload());

app.use(routes);

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running");
})

//jamessteppingstone
//2QknKG9Zw1S8YxDj
