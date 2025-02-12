import mysql from "mysql2";

// create a connection pool
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "laptopstore",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,
});
export default pool.promise();