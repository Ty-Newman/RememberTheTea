const express = require("express");
const router = express.Router();

const {List} = require("../../db/models");

router.get('/', async (req, res, next) => {
    try {
        const lists = await List.findAll();
        res.json({lists: lists})
    } catch (err){
        next(err);
    }
})

module.exports = router;
