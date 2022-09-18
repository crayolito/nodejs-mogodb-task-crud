const Task = require('../models/Task')


export const renderTasks = async(req,res)=>{
    const tasks = await Task.find().lean()
    res.render('index',{tasks}) 
}

export const createTask = async(req,res)=>{
    try{
        const {title,description} = req.body
        const newTask =  new Task({title,description})
        await newTask.save()
        res.redirect("/")
    }catch(error){
         console.log(error);
    }
}

export const renderTaskEdit = async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id).lean()
        res.render("edit",{task})
    }catch(error){
        console.log(error.message);
    }
}

export const editTask = async(req,res)=>{
    const {id} = req.params
    await Task.findByIdAndUpdate(id,req.body)
    res.redirect("/")
}

export const deleteTask = async(req,res)=>{
    const {id} = req.params
    await Task.findByIdAndDelete(id,req.body)
    res.redirect("/")
}

export const TasksToogleDone = async(req,res)=>{
    const {id} = req.params
    const task = await Task.findById(id)

    task.done = !task.done
    await task.save()
    res.redirect("/")
}