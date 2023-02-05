const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'JocLuc&Aug81',
        database: 'employee_db',
    }
);
db.connect(function (err) {
    if (err) throw err;
});


module.exports = db;