import express from "express";
import path from "path";
import init from "../Database/sqliteInit.js"

const __dirname = path.resolve();

import dotenv from "dotenv"; //Env Configuration
dotenv.config();

import sql from "sqlite3";
const sqlite = sql.verbose();

export default function (app: express.Application, db: init) {
    app.use(express.static(__dirname));

    app.get('/', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/index.html");
    });

    app.get('/auth', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/auth.html")
    })

    app.listen(process.env.PORT, () => {
        console.log(`Running on http://localhost:${process.env.PORT}`)
    });
}