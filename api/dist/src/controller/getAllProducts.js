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
const db_1 = require("../../db");
const sequelize_1 = require("sequelize");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, price, IBU, ABV, qualification, order, pag, name, userCompanyId } = req.query;
        const options = {};
        if (type) {
            options.where = { type: { [sequelize_1.Op.eq]: type } };
        }
        if (price) {
            options.where = Object.assign(Object.assign({}, options.where), { price: { [sequelize_1.Op.lte]: price } });
        }
        if (IBU) {
            options.where = Object.assign(Object.assign({}, options.where), { IBU: { [sequelize_1.Op.lte]: IBU } });
        }
        if (ABV) {
            options.where = Object.assign(Object.assign({}, options.where), { ABV: { [sequelize_1.Op.lte]: ABV } });
        }
        if (qualification) {
            options.where = Object.assign(Object.assign({}, options.where), { qualification: { [sequelize_1.Op.lte]: qualification } });
        }
        if (name) {
            options.where = Object.assign(Object.assign({}, options.where), { name: {
                    [sequelize_1.Op.iLike]: `%${name}%`
                } });
        }
        if (userCompanyId) {
            options.where = Object.assign(Object.assign({}, options.where), { userCompanyId: { [sequelize_1.Op.eq]: userCompanyId } });
        }
        if (order && (order === 'OrderAscPrice' || order === 'OrderDesPrice')) {
            const columnToOrderBy = order === 'OrderAscPrice' ? 'price' : [['price', 'DESC']];
            options.order = [columnToOrderBy];
        }
        const itemsPerPage = 8;
        const currentPage = parseInt(pag) || 1;
        const offset = (currentPage - 1) * itemsPerPage;
        options.where = Object.assign(Object.assign({}, options.where), { status: true });
        const products = yield db_1.Product.findAll(Object.assign(Object.assign({}, options), { limit: itemsPerPage, offset: offset }));
        const totalCount = yield db_1.Product.count(options);
        const totalPages = Math.ceil(totalCount / itemsPerPage);
        const response = {
            products,
            totalPages,
        };
        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(500).send({ error });
    }
});
exports.default = getAllProducts;
//# sourceMappingURL=getAllProducts.js.map