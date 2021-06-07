//City
const express = require('express');
const router=express.Router();
const city=require('../model/city');

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        city.getCityByID(req.params.id,function(err,rows){
            if(err){
                console.log("err: ", err)
                res.json(err);
            }
            else{
                console.log("rows: ", rows)
                res.json(rows);
            }
        });
    }
    else{
        city.getALLCity(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

module.exports=router;