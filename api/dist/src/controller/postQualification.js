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
const postQualification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rate, userPersonId, productId, comment = "" } = req.body;
        console.log(req.body);
        if (!rate || !userPersonId || !productId) {
            return res.status(400).send("Required information");
        }
        const product = yield db_1.Product.findByPk(productId);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        const person = yield db_1.UserPerson.findByPk(userPersonId);
        if (!person) {
            return res.status(404).send("id User person not found");
        }
        const creatingRating = yield db_1.Qualification.create({
            rate,
            comment,
        });
        yield product.addQualification(creatingRating);
        yield person.addQualification(creatingRating);
        let rating = yield db_1.Qualification.findAll({
            where: { ProductId: productId },
            attributes: ["rate"],
        });
        let qualifications = rating.reduce((acc, rate) => {
            acc = rate.rate + acc;
            return acc;
        }, 0);
        const average = (qualifications / rating.length).toFixed(2);
        const updateProductQualification = yield db_1.Product.update({ qualification: average }, {
            where: { id: productId },
        });
        if (updateProductQualification[0] === 0) {
            return res.status(400).send("Failed to update rating");
        }
        else {
            return res.status(200).send("it was successfully updated");
        }
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
exports.default = postQualification;
//# sourceMappingURL=postQualification.js.map