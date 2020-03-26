require('dotenv').config()

const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send("the more i learn about the world, the bigger it seems and the smaller i feel..i can't decide if learning things makes me happy or if knowing things things makes me happy. either way, i would be sad if i knew everything and i would be sad if i knew nothing.")
})

server.listen(5000, () => {
    console.log("Server running locally. Yay.")
});