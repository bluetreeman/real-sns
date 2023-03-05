const router = require("express").Router();

app.get("/", (req,res) => {
    res.send("auth Router")
});

module.exports = router;