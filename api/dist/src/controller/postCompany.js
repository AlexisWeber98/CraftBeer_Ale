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
const accountConfirm_1 = __importDefault(require("./notifications/accountConfirm"));
const postCompanyValidation_1 = __importDefault(require("../validations/postCompanyValidation"));
const postCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, document, email, password, phone, country, state, city, company, address, image, } = req.body;
        const errors = postCompanyValidation_1.default;
        if (email) {
            const EmailUnique = yield db_1.UserPerson.findOne({ where: { email: email } });
            if (EmailUnique)
                return res.status(400).send("This email is already registered");
        }
        const userCompany = yield db_1.UserCompany.create({
            name,
            lastName,
            document,
            company,
            country,
            state,
            city,
            address,
            email,
            phone,
            password,
            image,
            status: true,
            role: "Company",
        });
        if (userCompany) {
            (0, accountConfirm_1.default)(company, email);
        }
        return res.status(200).json(userCompany);
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
exports.default = postCompany;
//# sourceMappingURL=postCompany.js.map