"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const defineModel = () => {
    return db_1.sequelize.define("Qualification", {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        rate: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        comment: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
            defaultValue: ""
        }
    });
};
exports.default = defineModel;
//# sourceMappingURL=Qualification.js.map