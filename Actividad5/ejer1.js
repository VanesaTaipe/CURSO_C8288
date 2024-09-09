// server.js
import express from "express";
import operacion from "./ejercicio1.js";

const server = express();
const port = 8080;

server.get("/hello", (req, res) => {
    const { a, b } = req.query;
    const response = operacion(Number(a), Number(b));
    res.send(response);
});

server.listen(port, () => {
    console.log("Listening on " + port);
});
