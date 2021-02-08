const express = require("express");
const cors = require("cors");
const datas = require("./datas.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    try {
        return res.status(200).json(datas);
    } catch (error) {
        return res.status(400).json({ error: { message: error.message } });
    }
});

app.all("*", (req, res) => {
    return res.status(404).json({ error: { message: "Unknown route." } });
});

app.listen(process.env.PORT || 3111, () => {
    console.log(`Server started with port ${process.env.PORT || 3111}.`);
});
