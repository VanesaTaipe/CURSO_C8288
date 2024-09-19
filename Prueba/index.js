import { routeHello, routeAPINames, routeWeather } from './route.js';
import express from "express";

const server = express();
const port = 3000;

server.get("/hello", function (_req, res) {
    const response = routeHello();
    res.send(response);
});

server.get("/api/names", async function (_req, res) {
    try {
        const response = await routeAPINames();
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send("An error occurred");
    }
});

server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});

server.listen(port, function () {
    console.log("Listening on " + port);
});
