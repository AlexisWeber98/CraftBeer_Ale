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
const nodemailer = require("nodemailer");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;
const db_1 = require("../../db");
const postPurchaseConfirmation = (date, totalPrice, userPersonId, newItems) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchUserPersonId = yield db_1.UserPerson.findByPk(userPersonId);
        const searchProduct = yield Promise.all(newItems.map((product) => __awaiter(void 0, void 0, void 0, function* () {
            const prodId = yield db_1.Product.findByPk(product.ProductId);
            return Object.assign(Object.assign({}, product.get({ plain: true })), { name: prodId.name });
        })));
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: NODEMAILER_USER,
                pass: NODEMAILER_PASS,
            },
        });
        let mailOptions = {
            from: "craftbeer514@gmail.com",
            to: searchUserPersonId.email,
            subject: `Gracias por tu compra ${searchUserPersonId.name}. `,
            html: `<html>
	<head>
        <body>
        </br><b style="color:#9E7842">Fecha:${date}</b></br>
        <h2>Gracias por tu compra, ${searchUserPersonId.name}🛍️. </h2>
        <p>Recibimos tu pago por un valor total de ${totalPrice} USD.<p>
        </br>
        <p>Craftbeer desea que tu experiencia con nuestros productos sea agradable 🍺 por esto tu compra se encuentra en proceso de despacho.</p>
        <br/>
        <h2>Datos de la compra 🍻</h2>
        <table >
        <tr>
          <td style="background-color: #9E7842" align='center' ><b>Producto</b></td>
          <td style="background-color: #9E7842" align='center' ><b>Cantidad</b></td>
          <td style="background-color: #9E7842" align='center' ><b>Subtotal</b></td>
          </tr>
        ${searchProduct.reduce((acc, item) => {
                return acc + `
          <tr>
          <td align='center' >${item.name}</td>
          <td align='center'>${item.amount}</td>
          <td align='center'>${item.totalPrice}</td>
          </tr>
          `;
            }, "")}
        <tr>
        <td style="background-color: #9E7842"><b> Total de la compra</b></td>
        <td style="background-color: #9E7842"></td>
        <td style="background-color: #9E7842"><b> ${totalPrice} USD</b></td>
        </tr>
        </table>
        <br/>
        <p>Si no has sido tú quien realizó esta compra, comunícate con atención al cliente:</p>
        <p>craftbeer514@gmail.com</p>
        <img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png' width="60" height="60" lign="center"/>
		</body>
	</head>
</html>`
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error.message);
            }
            else {
                console.log("Message sent:" + info);
            }
        });
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log("Unexpected error.");
        }
    }
});
exports.default = postPurchaseConfirmation;
//# sourceMappingURL=postPurchaseConfirmation.js.map