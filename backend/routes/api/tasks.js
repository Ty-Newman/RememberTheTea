const express = require("express");
const router = express.Router();

const {Task} = require("../../db/models");

router.get('/', async (req, res, next) => {
    try{
        const id = parseInt(req.params.id);
        console.log('logID:' + req.params);
        const tasks = await Task.findAll();
        res.json({tasks: tasks})
    } catch(err){
        next(err);
    }
})

module.exports = router
