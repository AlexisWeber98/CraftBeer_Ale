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
exports.createOrder = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mercadopago_1 = __importDefault(require("mercadopago"));
const { TEST_ACCES_TOKEN } = process.env;
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, products } = req.body;
        const item = [];
        for (const product of products) {
            item.push({
                title: `${product.name}`,
                description: `${product.describe}`,
                picture_url: `${product.image}`,
                quantity: product.quantity,
                currency_id: "USD",
                unit_price: product.price,
            });
        }
        mercadopago_1.default.configure({
            access_token: `${TEST_ACCES_TOKEN}`,
        });
        const results = yield mercadopago_1.default.preferences.create({
            items: item,
            payer: {
                name: user.name,
                surname: user.lastName,
                email: user.email,
            },
            back_urls: {
                success: "http://localhost:5173/succes",
                pending: "http://localhost:5173/pending",
                failure: "http://localhost:5173/failure",
            },
            auto_return: "approved",
        });
        console.log(item);
        console.log(results);
        res.status(200).json({ results });
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
exports.createOrder = createOrder;
//# sourceMappingURL=create-order.js.map