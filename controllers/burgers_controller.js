const express = require("express");
const burger = require("../models/burger");
const router = express.Router();





router.get("/", (req, res) => {
    burger.selectAll((data) => {
        var dataObject = { 
            burgers: data
        };
        console.log(dataObject);
        res.render("index", dataObject);
    });

});


router.post("/api/burgers", (req, res) => {
    burger.insertOne(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured], 
        (result) => {
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        (result) => {
            
            res.status(200).end();
        }
    );

});



module.exports = router; 