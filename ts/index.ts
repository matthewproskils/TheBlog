//Modules
import express from "express"
import routes from "./Backend/routes.js"
import init from "./Database/sqliteInit.js"

//Database Setup
const db: init = new init(); //GLOBAL VARIABLE

//Express Setup
const app = express();
routes(app, db); //Configure Routes