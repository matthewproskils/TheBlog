import express from "express";
import routes from "./Backend/routes.js";
import init from "./Database/sqliteInit.js";
const app = express();
routes(app);
const db = init();
//# sourceMappingURL=index.js.map