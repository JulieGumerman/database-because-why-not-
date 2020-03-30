require('dotenv').config()

const express = require('express');
const server = express();
const cors = require("cors");

const bookRoute = require('./books/book-routes.js')
const ethosRoute = require('./books/ethos-routes.js')

server.use(express.json())
server.use(cors());


server.use("/api/books", bookRoute)

server.use("/api/ethos", ethosRoute)

server.get('/', (req, res) => {
    res.send("the more i learn about the world, the bigger it seems and the smaller i feel..i can't decide if learning things makes me happy or if knowing things things makes me happy. either way, i would be sad if i knew everything and i would be sad if i knew nothing.")
})

server.listen(5000, () => {
    console.log("Server running locally. Yay.")
});