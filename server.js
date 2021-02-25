const { response } = require("express");
const express = require("express");

const server = express();

server.get("/", (request, response) => {
    response.end("hello");
});

server.listen(process.env.PORT);
