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
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, type, ABV, description, price, stock, IBU, presentation, UserCompanyId, } = req.body;
        if (!name)
            return res.status(400).json({ message: "name is required" });
        if (!image)
            return res.status(400).json({ message: "image is required" });
        if (!type)
            return res.status(400).json({ message: "type is required" });
        if (!ABV)
            return res.status(400).json({ message: "ABV is required" });
        if (!description)
            return res.status(400).json({ message: "description is required" });
        if (!price)
            return res.status(400).json({ message: "price is required" });
        if (!stock)
            return res.status(400).json({ message: "stock is required" });
        if (!presentation)
            return res.status(400).json({ message: "presentation is required" });
        const company = yield db_1.UserCompany.findByPk(UserCompanyId);
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
            UserCompanyId
        });
        res.status(200).json(product);
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