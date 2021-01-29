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
    app.post('/api/tokenauth', async (req, res) => {
        await auth(req.body.data).then(response => {
            Promise.resolve(response).then((val) => {
                res.end(JSON.stringify(val));
            });
        }).catch(err => {
            throw err;
        });
    });
    app.listen(process.env.PORT, () => {
        console.log(`Running on http://localhost:${process.env.PORT}`);
    });
}
//# sourceMappingURL=routes.js.map