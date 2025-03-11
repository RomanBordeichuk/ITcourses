import express from "express";
const app = express();
app.use(express.static("wwwroot"));
app.get("/someRequest", (req, res) => {
    res.send("asfasd");
});
app.listen(3000, () => {
    console.log("Server started");
});
