const mysql = require('mysql2/promise');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'JocLuc&Aug81',
        database: 'employee_db'
    }
)


module.exports = db;