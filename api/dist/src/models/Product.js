"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const defineModel = () => {
    return db_1.sequelize.define("Product", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        image: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        ABV: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        presentation: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
        },
        stock: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        qualification: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
        },
        IBU: {
            type: sequelize_1.DataTypes.FLOAT,
        },
        status: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        userCompanyId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
        },
    });
};
exports.default = defineModel;
//# sourceMappingURL=Product.js.map