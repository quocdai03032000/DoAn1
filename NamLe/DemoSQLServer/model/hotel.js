var db=require('../config/db');

var hotel={
    getAllValueTable: (_obj) => {
        return db.request().query(`SELECT * FROM ${_obj.TABLE}`,_obj.callback);
    },
    getALLHotel:function(callback){
        return db.request().query('SELECT * FROM Hotel',callback);
    },

    getHotelByID:function(id,callback){
        return db.request().query(`SELECT * FROM Hotel WHERE id=${id}`,callback);
    },

    getAllHotelByCity:function(id_city,callback){
        return db.request().query(`SELECT * FROM Hotel WHERE ID_City=${id_city}`,callback);
    },

    addHotel:function(callback){
        return db.request().query(`INSERT INTO Hotel(id,CodeRoom,Address,Picture,Price) VALUES(${id},${CodeRoom},${Address},${Picture},${Price})`,callback);
    },

    deleteHotel:function(id,callback){
        return db.request().query(`DELETE FROM Hotel WHERE id=${id}`,callback);
    }
};

module.exports=hotel;