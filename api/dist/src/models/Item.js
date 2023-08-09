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
        amount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        totalPrice: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    });
};
exports.default = defineModel;
//# sourceMappingURL=Item.js.map