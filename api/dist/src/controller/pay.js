"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mercadopago_1 = __importDefault(require("mercadopago"));
const { TEST_ACCES_TOKEN } = process.env;
const createOrder = (req, res) => {
    const { user, product } = req.body;
    mercadopago_1.default.configure({
        access_token: `${TEST_ACCES_TOKEN}`,
    });
    let preference = {
        binary_mode: true,
        items: [
            {
                title: `${product.name} - nombre del producto`,
                description: `${product.description} - descripcion del producto`,
                picture_url: `${product.image} - imagen del producto`,
                quantity: 1,
                currency_id: "USD",
                unit_price: product.price,
            },
        ],
        payer: {
            name: user.name,
            surname: user.lastName,
            email: user.email,
        },
        back_urls: {
            success: "http://succes",
            pending: "http://pending",
            failure: "http://failure",
        },
        auto_return: "approved",
    };
    mercadopago_1.default.preferences
        .create(preference)
        .then(function (response) {
        return res.status(200).json(response);
    })
        .catch(function (error) {
        console.log(error);
    });
};
exports.createOrder = createOrder;
//# sourceMappingURL=pay.js.map