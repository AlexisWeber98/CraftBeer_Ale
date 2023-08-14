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
const db_2 = require("../../db");
const getShoppingHistories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userPersonId } = req.query;
        if (!userPersonId) {
            return res.status(404).json({ error: 'Parameter userPersonId not found.' });
        }
        const shoppingHistories = yield db_1.ShoppingHistory.findAll({
            where: { userPersonId },
            include: [{ model: db_2.Item }],
        });
        return res.status(200).json(shoppingHistories);
    }
    catch (error) {
        console.error('Error getting shoppingHistories:', error);
        return res.status(500).json({ error: 'Internal server error.' });
    }
});
exports.default = getShoppingHistories;
//# sourceMappingURL=getShoppingHistories.js.map