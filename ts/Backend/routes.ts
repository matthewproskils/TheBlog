import express from "express";
import path from "path";
import init from "../Database/sqliteInit.js"
import bodyParser from "body-parser";
import auth from "./auth.js";

const __dirname = path.resolve();

import dotenv from "dotenv"; //Env Configuration
dotenv.config();

import sql from "sqlite3";
const sqlite = sql.verbose();

export default function (app: express.Application, db: init) {
    app.use(express.static(__dirname));

    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.get('/', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/index.html");
    });

    app.get('/auth', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/auth.html")
    })

    app.post('/api/tokenauth', (req: express.Request, res: express.Response) => {
        let userdata = auth(req.body.data);
        console.log(userdata)
        return res.end(userdata);
    })

    app.listen(process.env.PORT, () => {
        console.log(`Running on http://localhost:${process.env.PORT}`)
    });
}