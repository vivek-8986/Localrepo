const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res) => {
//     // console.log(req);
//     console.log("request recived");
//     res.send({
//         name:"apple",
//         color: "red",
//     });
// });


app.get("/", (req, res) => {
    res.send("hello, i am root");
})



// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// })



// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// })


// app.get("*",(req,res) => {
//     res.send("this path does not exist");
// });


// app.get("/{*splat}", (req, res) => {
//     res.send("Page Not Found");
// });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// })



app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the page of @${username}</h1>`
    res.send(htmlStr);
});

app.get("/search",(req,res) => {
    let { q } = req.query;

    res.send(`search results for query: ${q}`);
})




