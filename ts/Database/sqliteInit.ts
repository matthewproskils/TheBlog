import sql from "sqlite3";
const sqlite3 = sql.verbose();

class init {
    db: sql.Database;
    constructor() {
        const db = new sqlite3.Database('database.db');
        db.exec(`CREATE TABLE IF NOT EXISTS blogs (
            title TEXT,
            description TEXT,
            content TEXT,
            comments TEXT,
            info TEXT
        )`);
        db.exec(`CREATE TABLE IF NOT EXISTS users (
            username TEXT,
            id TEXT,
            comments TEXT,
            blogs TEXT
        )`);

        this.db = new sqlite3.Database('database.db');
    }
    insertUser(user: { username: String, id: String, }) {
        this.db.all("SELECT * FROM users WHERE id = ?", [user.id], (err: Error, res: any) => {
            if (err) {
                throw err;
            }
            console.log(res)
            if (res.length == 0) {
                console.log("Creating New User");
                this.db.run("INSERT INTO users VALUES(?, ?, ?, ?)", [user.username, user.id, JSON.stringify([]), JSON.stringify([])])
            } else {
                console.log("User Exists");
            }
        })
    }
}

export default init;