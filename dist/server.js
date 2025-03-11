"use strict";
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("asfasd");
});
app.listen(3000, () => {
    console.log("Server started");
});
