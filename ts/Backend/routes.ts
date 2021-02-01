import express from "express";
import path from "path";
import init from "../Database/sqliteInit.js"
import bodyParser from "body-parser";
import axios from "axios";
const __dirname = path.resolve();

import dotenv from "dotenv"; //Env Configuration
dotenv.config();

import sql from "sqlite3";
import { resolveContent } from "nodemailer/lib/shared";
const sqlite = sql.verbose();

export default function (app: express.Application, db: init) {
    app.use(express.static(__dirname));

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.get('/', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/index.html");
    });

    app.get('/auth', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/auth.html")
    })

    app.post('/api/tokenauth', async (req: express.Request, res: express.Response) => {
        console.log("ye")
        try {
            const val = (await axios.post('https://oauth2.googleapis.com/tokeninfo?id_token=' + req.body.data)).data;
            db.insertUser({ username: val["name"], id: val["sub"] })
            res.end(JSON.stringify(val));
        } catch (err) {
            throw err;
        }
    })

    app.listen(process.env.PORT, () => {
        console.log(`Running on http://localhost:${process.env.PORT}`)
    });
}