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
const postUserPerson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, document, email, password, address, image, role, country, city, state } = req.body;
        if (!name)
            return res.status(400).json({ message: "name is required" });
        if (!lastName)
            return res.status(400).json({ message: "lastName is require" });
        if (!document)
            return res.status(400).json({ message: "document is required" });
        if (!email)
            return res.status(400).json({ message: "email is equired" });
        if (!password)
            return res.status(400).json({ message: "password is required" });
        const userPerson = yield db_1.UserPerson.create({
            name,
            lastName,
            document,
            email,
            password,
            country,
            city,
            state,
            address,
            image,
            status: true,
            role: "Person"
        });
        return res.status(200).json(userPerson);
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