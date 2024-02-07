import dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";
import fs from "fs";
import path from "path";
import { Dialect } from "sequelize";

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DATABASE_URL,
  ENVIRONMENT,
  FLY_POSTGRES_HOST,
  FLY_POSTGRES_PORT,
  FLY_POSTGRES_DB,
  FLY_POSTGRES_USER,
  FLY_POSTGRES_PASSWORD,
  CONN_STRING,
  FLY_DATABASE_URL
} = process.env;

const sequelize = new Sequelize(`${FLY_DATABASE_URL}`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners: Array<(sequelize: Sequelize) => void> = [];

fs.readdirSync(path.join(__dirname, "src/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "src/models", file));
    modelDefiners.push(modelDefiner.default);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

const upperCaseModels: Record<string, any> = {};
Object.entries(sequelize.models).forEach(([name, model]) => {
  const upperCaseName = name[0].toUpperCase() + name.slice(1);
  upperCaseModels[upperCaseName] = model;
});

// relacionamos
const {
  UserPerson,
  UserCompany,
  ShoppingHistory,
  Qualification,
  Product,
  Item,
  CodePassword,
} = upperCaseModels;

UserPerson.hasMany(ShoppingHistory);
UserPerson.hasMany(Qualification);

UserCompany.hasMany(Product);

Product.hasMany(Qualification);
Product.hasMany(Item);
Product.belongsToMany(UserPerson, { through: "Favorite" });
UserPerson.belongsToMany(Product, { through: "Favorite" });

ShoppingHistory.hasMany(Item);

export {
  UserPerson,
  UserCompany,
  ShoppingHistory,
  Qualification,
  Product,
  CodePassword,
  Item,
  sequelize,
};
