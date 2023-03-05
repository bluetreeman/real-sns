const router = require("express").Router();

app.get("/", (req,res) => {
    res.send("posts Router")
});

module.exports = router;