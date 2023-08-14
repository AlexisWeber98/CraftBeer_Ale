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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
const postProductValidations_1 = __importDefault(require("../validations/postProductValidations"));
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, type, ABV, description, price, stock, IBU, presentation, userCompanyId, } = req.body;
        const errors = (0, postProductValidations_1.default)(name, image, type, ABV, description, price, stock, IBU, presentation, userCompanyId);
        if (errors)
            return res.status(400).json({ message: errors });
        const company = yield db_1.UserCompany.findByPk(userCompanyId);
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        const product = yield db_1.Product.create({
            name,
            image,
            type,
            ABV,
            description,
            price,
            stock,
            presentation,
            IBU,
            status: true,
            userCompanyId
        });
        company.addProduct(product);
        res.status(200).json(Object.assign(Object.assign({}, product.get({ plain: true })), { userCompanyId }));
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        }
        else {
            return res.status(500).send("Unexpected error");
        }
    }
});
exports.default = postProduct;
//# sourceMappingURL=postProduct.js.map