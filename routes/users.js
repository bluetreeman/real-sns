const router = require("express").Router();

app.get("/", (req,res) => {
    res.send("user Router")
});

module.exports = router;