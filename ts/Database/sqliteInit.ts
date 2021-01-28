import sql from "sqlite3";
const sqlite3 = sql.verbose();

function init() {
    return new sqlite3.Database('database.db');
}
 
export default init;