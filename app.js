const express = require("express");
const catsRouter = require("./routes/catsRouter");
const app = express();

app.use("/api", catsRouter);


app.all("/:anything", (req, res) => {
    res.send("Not Valid endpoints........");
})




app.listen(3000, () => {
    console.log("Server is running on port 3000");
})