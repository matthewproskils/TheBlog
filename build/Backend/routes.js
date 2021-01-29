import express from "express";
import path from "path";
import bodyParser from "body-parser";
import auth from "./auth.js";
const __dirname = path.resolve();
import dotenv from "dotenv";
dotenv.config();
import sql from "sqlite3";
const sqlite = sql.verbose();
export default function (app, db) {
    app.use(express.static(__dirname));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get('/', (req, res) => {
        res.sendFile(__dirname + "/public/html/index.html");
    });
    app.get('/auth', (req, res) => {
        res.sendFile(__dirname + "/public/html/auth.html");
    });
    app.post('/api/tokenauth', (req, res) => {
        let userdata = auth(req.body.data);
        console.log(userdata);
        return res.end(userdata);
    });
    app.listen(process.env.PORT, () => {
        console.log(`Running on http://localhost:${process.env.PORT}`);
    });
}
//# sourceMappingURL=routes.js.map