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
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idProduct } = req.params;
        const beer = yield db_1.Product.findOne({
            where: {
                id: idProduct,
                status: true,
            },
            include: {
                model: db_1.Qualification,
                attributes: ["rate", "comment", "userPersonId", "id"],
            },
        });
        if (!beer) {
            return res.status(404).send("This beer does not exist");
        }
        const productQualification = yield Promise.all(beer.Qualifications.map((prod) => __awaiter(void 0, void 0, void 0, function* () {
            let person = yield db_1.UserPerson.findByPk(prod.userPersonId);
            return Object.assign(Object.assign({}, prod.get({ plain: true })), { person: person.name + " " + person.lastName });
        })));
        return res.status(200).json(Object.assign(Object.assign({}, beer.get({ plain: true })), { Qualifications: productQualification }));
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({ error });
    }
});
exports.default = getProductById;
//# sourceMappingURL=getProductById.js.map