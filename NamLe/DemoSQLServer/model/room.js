var db=require('../config/db');

var room={
    getAllValueTable: (_obj) => {
        return db.request().query(`SELECT * FROM ${_obj.TABLE}`,_obj.callback);
    },
    getALLRoom:function(callback){
        return db.request().query('SELECT * FROM Room1',callback);
    },

    getRoomByID:function(id,callback){
        return db.request().query(`SELECT * FROM Room1 WHERE id=${id}`,callback);
    },

    getRoomByHotel:function(id_hotel,callback){
        return db.request().query(`SELECT * FROM Room1 WHERE ID_Hotel=${id_hotel}`,callback);
    }
}

module.exports=room;