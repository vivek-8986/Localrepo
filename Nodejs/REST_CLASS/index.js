const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username : "Niamt",
        content :"I love coading"
    },
    {
        id: uuidv4(),
        username : "Ayush",
        content :"feeling proud indian army"
    },
    {
        id: uuidv4(),
        username : "Nisha",
        content :"I like my clothes"
    },
]

app.get("/posts",(req,res) => {
    res.render("index.ejs",{ posts});
})

app.get("/posts/new", (req,res) => {
    res.render("new.ejs")
});

app.post("/posts",(req,res) =>{
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id,username,content});
    res.redirect("/posts");
})

app.get("/posts/:id",(req,res) =>{
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id", (req, res) =>{
    let {id} = req.params;
    console.log(id);
    res.send("patch request is working");
})

app.listen(port, () =>{
    console.log("listening to port : 8080");
});