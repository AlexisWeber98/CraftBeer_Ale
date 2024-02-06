"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const defineModel = () => {
    return db_1.sequelize.define("Item", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        amount: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        unitPrice: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        totalPrice: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        summary: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
    });
};
exports.default = defineModel;
//# sourceMappingURL=Item.js.map