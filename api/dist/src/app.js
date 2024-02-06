"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = require("express");
const cors = require("cors");
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const server = express();
const routes = require("./routes/index.ts");
server.use(express.json());
server.use(cors());
server.use(body_parser_1.default.urlencoded({ extended: true, limit: "50mb" }));
server.use(body_parser_1.default.json());
server.use((0, cookie_parser_1.default)());
server.use((0, morgan_1.default)("dev"));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use("/", routes);
module.exports = server;
//# sourceMappingURL=app.js.map