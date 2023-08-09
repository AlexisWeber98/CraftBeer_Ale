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
const putUserCompany = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = req.body;
        const updateUserCompany = yield db_1.UserCompany.update(company, {
            where: { id: company.id },
        });
        if (updateUserCompany[0] === 0) {
            return res.status(400).send("Update failed");
        }
        else {
            return res.status(200).json("was successfully updated");
        }
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
exports.default = putUserCompany;
//# sourceMappingURL=putUserCompany.js.map