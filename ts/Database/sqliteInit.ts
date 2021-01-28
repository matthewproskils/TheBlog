import sql from "sqlite3";
const sqlite3 = sql.verbose();

function init() {
    const db = new sqlite3.Database('database.db');
    db.exec(`CREATE TABLE blogs IF NOT EXISTS(
        title TEXT
        description TEXT
        content TEXT
    )`);

    return db
}
 
export default init;