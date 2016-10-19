var express = require('express');
var router = express.Router();
var mongojs = require ('mongojs');
var db = mongojs('mongodb://pevargas:Policia9@ds061506.mlab.com:61506/todolist_pato',['tasks']);
//GET ALL TASKS
router.get('/tasks',function(req, res, next){
    db.tasks.find(function(err,tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
//GET SINGLE TASKS
router.get('/task/:id',function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err,task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});
module.exports = router;
