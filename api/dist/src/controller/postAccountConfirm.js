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
const postAccountConfirm = (name, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
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
            to: email,
            subject: `¡Hola ${name} se creo satisfactoriamente tu cuenta!, `,
            html: `<html>
	<head>
        <body>
        <h2>¡Hola ${name}, bienvenido!🍻 </h2><img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png' width="70" height="70"/>
        <p>Tu cuenta ha sido creada satisfactoriamente en Craftbeer.</p>
        <p>Si no has sido tú quien realizó esta solicitud, comunícate con atención al cliente:</p>
        <p>craftbeer514@gmail.com</p>
		</body>
	</head>
</html>`,
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
exports.default = postAccountConfirm;
//# sourceMappingURL=postAccountConfirm.js.map