"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
const port = process.env.PORT || 3001;
const baseDeDatos_1 = __importDefault(require("./helpers/baseDeDatos"));
dotenv_1.default.config();
db_1.sequelize.sync({ force: true }).then(() => {
    (0, baseDeDatos_1.default)();
    app_1.default.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
//# sourceMappingURL=index.js.map