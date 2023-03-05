const express = require("express");
const app = express();
const userRoute = require("./routers/users");
const authRoute = require("./routers/auth");
const postRoute = require("./routers/posts");
const PORT = 3000;

// ミドルウェア
app.use("/app/users", userRoute);
app.use("/app/auth", authRoute);
app.use("/app/posts", postRoute);

app.get("/", (req,res) => {
    res.send("hello express");
});

// app.get("/users", (req,res) => {
//     res.send("users express")
// });

app.listen(PORT, () => console.log("サーバーが起動しました"));