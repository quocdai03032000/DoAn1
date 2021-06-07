const sql=require('mssql');
const con=new sql.connect({
    user: 'admin',        
    password: '123456789', 
    server: 'mydb.cuwkszeaebz5.us-east-1.rds.amazonaws.com',    
    database: 'DB_Hotel',    
    options: {
        enableArithAbort: true,
        encrypt: true
    }
}, (err) => {
if(err){
    console.log("Connect Failure: ", err)
}
else {
    console.log("Connect Success", con.request()      )
}

});

module.exports=con;