const express = require("express");

const router = express.Router();

const burger = require("../models/burgers");


router.get("/", function(req, res) {
    burger.selectAll().then(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name).then(function(data) {
        res.redirect("/");
    });
});

module.exports = router;