const express = require("express");

const app = express();

app.get("/", (req: any, res: any) => {
    res.send("asfasd");
});

app.listen(3000, () => {
    console.log("Server started");
});
