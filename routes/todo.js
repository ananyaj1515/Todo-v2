const router = require('express').Router();
const Todo = require("../models/todo");


// routes
router.post("/add/todo", async(req, res) =>{
    const todo = req.body.todo;
    const newTodo = new Todo({todo: todo});
    
    //save
    // newTodo.save()
    // .then(() =>{
    //     console.log("Successfuly Added");
    //     res.redirect("/");
    // })
    // .catch(err => console.log(err));
   
    try {
        const todoDocument = await newTodo.save();
        return res.redirect("/");
    }
    catch (err) {
        console.log(err);
        return 
    }
})

.get("/delete/todo/:_id", (req, res) =>
{
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("Deleted Successfully")
        res.redirect("/");
    })
    .catch((err) => console.log(err));
})



module.exports = router;
