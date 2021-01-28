import sql from "sqlite3";
const sqlite3 = sql.verbose();
class init {
    constructor() {
        this.db = new sqlite3.Database('database.db');
    }
}
export default init;
//# sourceMappingURL=sqliteInit.js.map