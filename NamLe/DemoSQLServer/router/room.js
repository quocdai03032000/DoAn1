const express = require('express');
const router=express.Router();
const room=require('../model/room');

// fill room by id
router.get('/fill/:id?',function(req,res,next){
    if(req.params.id){
        room.getRoomByID(req.params.id,function(err,rows){
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
        room.getALLRoom(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

//fill room by hotel

router.get('/filled/:id_hotel?',function(req,res,next){
    if(req.params.id_hotel){
        room.getRoomByHotel(req.params.id_hotel,function(err,rows){
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
        room.getALLRoom(function(err,rows){
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