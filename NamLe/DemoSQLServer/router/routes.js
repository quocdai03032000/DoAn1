const express = require('express');
const router=express.Router();
const hotel=require('../model/hotel');

//fill hotel by id
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        hotel.getHotelByID(req.params.id,function(err,rows){
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
        hotel.getALLHotel(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

//fill hotel by city

router.get('/region/:id_city?',function(req,res,next){
    if(req.params.id_city){
        hotel.getAllHotelByCity(req.params.id_city,function(err,rows){
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
        hotel.getALLHotel(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});

// router.post('/addhotel',function(req,res,next){
//     hotel.addHotel(res.body,function(err,count){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(count);
//         }
//     });
// });

// router.delete('/:id',function(req,res,next){
//     hotel.deleteHotel(req.params.id,function(err,count){
//         if(err){
//             res.json(err);
//         }
//         else{
//             res.json(count);
//         }
//     });
// });

module.exports=router;
