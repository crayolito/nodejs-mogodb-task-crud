import {Router} from 'express'
const Task = require('../models/Task')
const router = Router()
const {renderTasks,createTask,renderTaskEdit, editTask, deleteTask, TasksToogleDone} = require('../controllers/tasks.controllers')


router.get('/',renderTasks);
router.post('/tasks/add', createTask)  
router.get('/edit/:id', renderTaskEdit)


router.post('/edit/:id',editTask)
router.get('/delete/:id',deleteTask)
router.get('/toogleDone/:id',TasksToogleDone)

module.exports = router