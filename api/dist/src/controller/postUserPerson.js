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
const postUserValidations_1 = __importDefault(require("../validations/postUserValidations"));
const postAccountConfirm_1 = __importDefault(require("../controller/postAccountConfirm"));
const postUserPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, document, email, password, address, image, country, city, state } = req.body;
        const errors = (0, postUserValidations_1.default)(name, lastName, document, email, password, address, image, country, city, state);
        if (errors)
            return res.status(400).json({ message: errors });
        if (email) {
            const EmailUnique = yield db_1.UserCompany.findOne({ where: { email: email } });
            if (EmailUnique)
                return res.status(400).json({ message: "This email is already registered" });
        }
        const userPerson = yield db_1.UserPerson.create({
            name,
            lastName,
            document,
            email,
            password,
            address,
            image,
            status: true,
            country,
            city,
            state,
            role: "Person",
        });
        if (userPerson) {
            (0, postAccountConfirm_1.default)(name, email);
        }
        console.log("creacion exitosa");
        return res.status(200).send("usuario creado exitosamente");
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).send(error.message);
        }
        else {
            return res.status(500).send("Unexpected error.");
        }
    }
});
exports.default = postUserPerson;
//# sourceMappingURL=postUserPerson.js.map