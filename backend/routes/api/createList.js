const express = require('express');
const router = express.Router();
const {restoreUser} = require('../../utils/auth')

const {List} = require('../../db/models');

router.post('/', restoreUser, async (req, res, next) => {
    try{
        const {listName} = req.body;
        const {user} = req;
        const userId = user.id;
        const newList = await List.build({
            listName: listName,
            userId: userId
        });
        await newList.save();

        return res.json(newList);
    } catch(err){
        next(err);
    }
})

module.exports = router;
