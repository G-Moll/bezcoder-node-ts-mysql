import mysql from 'mysql2';
import dbconfig from '../conf/db.config'

export default mysql.createConnection({
    host: dbconfig.DB_HOST,
    user: dbconfig.DB_USER,
    pass: dbconfig.DB_PASS,
    name: dbconfig.DB_NAME
});

