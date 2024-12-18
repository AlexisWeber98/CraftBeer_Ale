"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const emuns_1 = __importDefault(require("../emuns"));
const defineUserModel = () => {
    return db_1.sequelize.define("userCompany", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: true,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        document: {
            type: sequelize_1.DataTypes.BIGINT,
            allowNull: true,
            unique: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        address: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        image: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        role: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: emuns_1.default.Company,
            validate: {
                isIn: [Object.values(emuns_1.default)],
            },
        },
    });
};
exports.default = defineUserModel;
//# sourceMappingURL=UserCompany.js.map