import sql from "sqlite3";
const sqlite3 = sql.verbose();
class init {
    constructor() {
        const db = new sqlite3.Database('database.db');
        db.exec(`CREATE TABLE IF NOT EXISTS blogs (
            title TEXT
            description TEXT
            content TEXT
        )`);
        this.db = new sqlite3.Database('database.db');
    }
}
export default init;
//# sourceMappingURL=sqliteInit.js.map