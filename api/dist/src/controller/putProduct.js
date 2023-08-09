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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../db");
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const _a = req.body, { companyId } = _a, updatedData = __rest(_a, ["companyId"]);
    try {
        const product = yield db_1.Product.findByPk(productId);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        if (companyId !== product.companyId) {
            return res.status(403).send({ message: "You do not have permission to modify this product" });
        }
        yield product.update(updatedData, { fields: Object.keys(updatedData) });
        return res.status(200).send({ message: "Product updated successfully" });
    }
    catch (error) {
        console.error("Error updating the product:", error);
        return res.status(500).send({ message: "Internal server error" });
    }
});
exports.default = putProduct;
//# sourceMappingURL=putProduct.js.map