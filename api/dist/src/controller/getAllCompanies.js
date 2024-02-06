"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = require("../../db");
const getAllCompanies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        let companies;
        const includeOptions = [
            {
                model: db_1.Product,
                as: 'Products',
            },
        ];
        if (name) {
            companies = yield db_1.UserCompany.findAll({
                where: {
                    company: {
                        [sequelize_1.Op.iLike]: `%${name}%`
                    }
                },
                include: includeOptions,
            });
        }
        else {
            companies = yield db_1.UserCompany.findAll({
                include: includeOptions,
            });
        }
        return res.status(200).send(companies);
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.default = getAllCompanies;
//# sourceMappingURL=getAllCompanies.js.map