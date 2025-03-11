import express from "express";

const app = express();

app.use(express.static("wwwroot"));

app.get("/someRequest", (req: any, res: any) => {
    res.send("asfasd");
});

app.listen(3000, () => {
    console.log("Server started");
});
