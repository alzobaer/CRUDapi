const express = require("express");
const catsRouter = express.Router();

//GET operation===================
catsRouter.get("/cats", (req, res) => {
    res.send("Received GET request in the router api/cats");
})
catsRouter.get("/cats/:catId", (req, res) => {
    res.send("Received GET request in the router api/cats/" + req.params.catId);
})
catsRouter.get("/cats/mini", (req, res) => {
    res.send("Received GET request in the router api/cats/mini");
})

//Delete operation===================
catsRouter.delete("/cats", (req, res) => {
    res.send("Received DELETE request in the router api/cats");
})
catsRouter.delete("/cats/:catId", (req, res) => {
    res.send("Received DELETE request in the router api/cats/" + req.params.catId);
})
catsRouter.delete("/cats/mini", (req, res) => {
    res.send("Received DELETE request in the router api/cats/mini");
})

//PUT operation===================
catsRouter.put("/cats", (req, res) => {
    res.send("Received PUT request in the router api/cats");
})
catsRouter.put("/cats/:catId", (req, res) => {
    res.send("Received PUT request in the router api/cats/" + req.params.catId);
})
catsRouter.put("/cats/mini", (req, res) => {
    res.send("Received PUT request in the router api/cats/mini");
})

//POST operation===================
catsRouter.post("/cats", (req, res) => {
    res.send("Received POST request in the router api/cats");
})
catsRouter.post("/cats/:catId", (req, res) => {
    res.send("Received POST request in the router api/cats/" + req.params.catId);
})
catsRouter.post("/cats/mini", (req, res) => {
    res.send("Received POST request in the router api/cats/mini");
})

catsRouter.all("/:anything", (req, res) => {
    res.send("Invalid endpoints...........");
})




module.exports = catsRouter;