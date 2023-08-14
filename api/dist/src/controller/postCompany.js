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
const postAccountConfirm_1 = __importDefault(require("./postAccountConfirm"));
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,30}$/;
const postCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, document, email, password, phone, country, state, city, company, address, image, } = req.body;
        if (!name)
            return res.status(400).json({ message: "Name is required." });
        if (/\d/.test(name))
            return res.status(400).json({ message: "Name cannot include a number." });
        if (name.length > 30)
            return res
                .status(400)
                .json({ message: "Name cannot exceed 30 characters." });
        if (!lastName)
            return res.status(400).json({ message: "Name is required." });
        if (/\d/.test(lastName))
            return res.status(400).json({ message: "Name cannot include a number." });
        if (lastName.length > 30)
            return res
                .status(400)
                .json({ message: "Last Name cannot exceed 30 characters." });
        if (!company)
            return res.status(400).json({ message: "Last name is required." });
        if (/\d/.test(company))
            return res
                .status(400)
                .json({ message: "Company cannot include a number." });
        if (company.length > 30)
            return res
                .status(400)
                .json({ message: "Company cannot exceed 30 characters." });
        if (!address)
            return res.status(400).json({ message: "Address is required" });
        if (!country)
            return res.status(400).json({ message: "Country is required" });
        if (!state)
            return res.status(400).json({ message: "State is required" });
        if (!city)
            return res.status(400).json({ message: "City is required" });
        if (!document)
            return res.status(400).json({ message: "Document is required." });
        if (isNaN(document))
            return res
                .status(400)
                .json({ message: "Document must be a valid number." });
        if (!phone)
            return res.status(400).json({ message: "Phone is required." });
        if (isNaN(phone))
            return res.status(400).json({ message: "Phone must be a valid number." });
        if (!email)
            return res.status(400).json({ message: "Email is required." });
        if (!emailRegex.test(email))
            return res.status(400).json({ message: "Invalid email address" });
        if (!password)
            return res.status(400).json({ message: "Password is required." });
        if (!passwordRegex.test(password))
            return res.status(400).json({
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one digit. (6 - 30 char)",
            });
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
            (0, postAccountConfirm_1.default)(company, email);
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