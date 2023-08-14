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
const db_2 = require("../../db");
const postPurchaseConfirmation_1 = __importDefault(require("./postPurchaseConfirmation"));
const postShoppingHistory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, totalPrice, userPersonId, items } = req.body;
        if (!date) {
            return res.status(404).send({ error: 'Date is required' });
        }
        ;
        if (!totalPrice) {
            return res.status(404).send({ error: 'TotalPrice is required' });
        }
        ;
        if (!userPersonId) {
            return res.status(404).send({ error: 'UserPersonId is required' });
        }
        ;
        const person = yield db_1.UserPerson.findByPk(userPersonId);
        if (!person) {
            return res.status(404).send({ error: 'UserPerson not found' });
        }
        ;
        const newShoppingHistory = yield db_1.ShoppingHistory.create({
            date,
            totalPrice,
            userPersonId,
        });
        let newItems;
        if (!items || items.length === 0) {
            return res.status(404).send({ error: 'No items found to upload' });
        }
        else {
            newItems = yield db_2.Item.bulkCreate(items.map((item) => (Object.assign(Object.assign({}, item), { ShoppingHistoryId: newShoppingHistory.id }))));
            yield newShoppingHistory.setItems(newItems);
        }
        if (newShoppingHistory) {
            return (0, postPurchaseConfirmation_1.default)(date, totalPrice, userPersonId, newItems);
        }
        return res.status(201).send(newShoppingHistory);
    }
    catch (error) {
        console.error('Error creating shoppingHistory:', error);
        return res.status(400).send({ error: 'Internal server error' });
    }
});
exports.default = postShoppingHistory;
//# sourceMappingURL=postShoppingHistory.js.map