import express from "express";
import routes from "./Backend/routes.js";
import init from "./Database/sqliteInit.js";
const db = new init();
const app = express();
routes(app, db);
//# sourceMappingURL=index.js.map