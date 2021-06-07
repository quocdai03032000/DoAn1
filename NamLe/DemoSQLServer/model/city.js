var db=require('../config/db');

var city={
    getAllValueTable: (_obj) => {
        return db.request().query(`SELECT * FROM ${_obj.TABLE}`,_obj.callback);
    },
    getALLCity:function(callback){
        return db.request().query('SELECT * FROM City',callback);
    },

    getCityByID:function(id,callback){
        return db.request().query(`SELECT * FROM City WHERE ID=${id}`,callback);
    },

    getCityBySlug:function(slug,callback){
        return db.request().query(`SELECT * FROM City WHERE slug=${slug}`,callback);
    }
}

module.exports=city;