//Modules
import express from "express"
import routes from "./Backend/routes.js"
import init from "./Database/sqliteInit.js"

//Express Setup
const app = express();
routes(app); //Configure Routes

//Database Setup
const db = init(); //GLOBAL VARIABLE