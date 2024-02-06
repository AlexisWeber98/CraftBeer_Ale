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
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email, email_verified } = req.query;
        const verified = email_verified === null || email_verified === void 0 ? void 0 : email_verified.toString();
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (verified === "true") {
            null;
        }
        else if (!password) {
            return res.status(401).json({ message: "Password is required" });
        }
        const findUser = yield db_1.UserPerson.findOne({ where: { email } });
        const findCompany = yield db_1.UserCompany.findOne({ where: { email } });
        if (!findUser && !findCompany) {
            return res.status(404).json({ message: "User not found" });
        }
        if (findUser) {
            if (findUser.dataValues.status === false) {
                return res.status(404).json({ message: "Disabled user" });
            }
            else {
                if (verified === "true")
                    return res.status(200).json({ access: true, user: findUser });
                else {
                    if (findUser.password === password) {
                        return res.status(200).json({ access: true, user: findUser });
                    }
                    else {
                        return res.status(405).json({ message: "invalid password" });
                    }
                }
            }
        }
        else if (findCompany) {
            if (findCompany.dataValues.status === false) {
                return res.status(404).json({ message: "Disabled user" });
            }
            else {
                if (verified === "true")
                    return res.status(200).json({ access: true, user: findCompany });
                else {
                    if (findCompany.password === password) {
                        return res.status(200).json({ access: true, user: findCompany });
                    }
                    else {
                        return res.status(405).json({ message: "invalid password" });
                    }
                }
            }
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});
exports.default = logIn;
//# sourceMappingURL=logIn.js.map