const express = require("express");
const app = express();
const cors = require("cors");
const root = require("path").join(__dirname, "build");

app.use(cors());
app.use(express.static(root));

app.get("*", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
const port = process.env.PORT || 3001;
app.listen(port, ()=>{
    console.log("server running");
})
