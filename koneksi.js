var mysql = require('mysql');

//koneksi database

const conn = mysql.createConnection({
host : 'localhost',
user : 'root',
password:'',
database : 'nodejs'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('My sql terkoneksi');
});

module.exports = conn;