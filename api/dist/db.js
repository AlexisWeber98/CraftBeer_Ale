"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = exports.Item = exports.CodePassword = exports.Product = exports.Qualification = exports.ShoppingHistory = exports.UserCompany = exports.UserPerson = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_1 = require("sequelize");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_LOCAL_URL, ENVIRONMENT, DATABASE_URL, } = process.env;
const sequelize = new sequelize_1.Sequelize(`${DATABASE_URL}`, {
    logging: false,
    native: false,
});
exports.sequelize = sequelize;
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
fs_1.default.readdirSync(path_1.default.join(__dirname, "/src/models"))
    .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
    .forEach((file) => {
    const modelDefiner = require(path_1.default.join(__dirname, "/src/models", file));
    modelDefiners.push(modelDefiner.default);
});
modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));
const upperCaseModels = {};
Object.entries(sequelize.models).forEach(([name, model]) => {
    const upperCaseName = name[0].toUpperCase() + name.slice(1);
    upperCaseModels[upperCaseName] = model;
});
const { UserPerson, UserCompany, ShoppingHistory, Qualification, Product, Item, CodePassword, } = upperCaseModels;
exports.UserPerson = UserPerson;
exports.UserCompany = UserCompany;
exports.ShoppingHistory = ShoppingHistory;
exports.Qualification = Qualification;
exports.Product = Product;
exports.Item = Item;
exports.CodePassword = CodePassword;
UserPerson.hasMany(ShoppingHistory);
UserPerson.hasMany(Qualification);
UserCompany.hasMany(Product);
Product.hasMany(Qualification);
Product.hasMany(Item);
Product.belongsToMany(UserPerson, { through: "Favorite" });
UserPerson.belongsToMany(Product, { through: "Favorite" });
ShoppingHistory.hasMany(Item);
//# sourceMappingURL=db.js.map