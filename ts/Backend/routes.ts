import express from "express";
import path from "path";

const __dirname = path.resolve();

import dotenv from "dotenv"; //Env Configuration
dotenv.config();

export default function (app: any) {
    app.use(express.static(__dirname));

    app.get('/', (req: express.Request, res: express.Response) => {
        res.sendFile(__dirname + "/public/html/index.html");
    })

    app.listen(process.env.PORT, () => {
        console.log(`Running on http://localhost:${process.env.PORT}`)
    })
}