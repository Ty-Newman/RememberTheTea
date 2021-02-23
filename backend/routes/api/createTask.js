const express = require('express');
const router = express.Router();
const {restoreUser} = require('../../utils/auth')

const {Task} = require('../../db/models');

router.post('/', restoreUser, async (req, res, next) => {
    try{
        const {taskName, listId, note, dueDate, priority, isComplete} = req.body;
        const {user} = req;
        const userId = user.id;
        const newTask = await Task.build({
            taskName: taskName,
            listId: listId,
            note: note,
            dueDate: dueDate,
            priority: priority,
            isComplete: isComplete,
            userId: userId
        });
        await newTask.save();

        return res.json(newTask);
    } catch(err){
        next(err);
    }
})

module.exports = router;
