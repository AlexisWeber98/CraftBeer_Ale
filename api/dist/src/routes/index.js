"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postUserPerson_1 = __importDefault(require("../controller/postUserPerson"));
const postCompany_1 = __importDefault(require("../controller/postCompany"));
const getAllCompanies_1 = __importDefault(require("../controller/getAllCompanies"));
const postProduct_1 = __importDefault(require("../controller/postProduct"));
const getProductById_1 = __importDefault(require("../controller/getProductById"));
const getAllProducts_1 = __importDefault(require("../controller/getAllProducts"));
const putUserPerson_1 = __importDefault(require("../controller/putUserPerson"));
const putProduct_1 = __importDefault(require("../controller/putProduct"));
const putUserCompany_1 = __importDefault(require("../controller/putUserCompany"));
const getAllUserPersons_1 = __importDefault(require("../controller/getAllUserPersons"));
const postQualification_1 = __importDefault(require("../controller/postQualification"));
const create_order_1 = require("../controller/payment/create-order");
const postShoppingHistory_1 = __importDefault(require("../controller/postShoppingHistory"));
const getShoppingHistories_1 = __importDefault(require("../controller/getShoppingHistories"));
const getPersonById_1 = __importDefault(require("../controller/getPersonById"));
const postContactMe_1 = __importDefault(require("../controller/notifications/postContactMe"));
const FavoriteHandler_1 = __importDefault(require("../controller/FavoriteHandler"));
const Webhook_1 = __importDefault(require("../controller/payment/Webhook"));
const getAllFavoritesPerson_1 = __importDefault(require("../controller/getAllFavoritesPerson"));
const getUserCompanySalesDetail_1 = __importDefault(require("../controller/getUserCompanySalesDetail"));
const getCompanyById_1 = __importDefault(require("../controller/getCompanyById"));
const getUserCompanySalesSummary_1 = __importDefault(require("../controller/getUserCompanySalesSummary"));
const putQualification_1 = __importDefault(require("../controller/putQualification"));
const getPersonAdmin_1 = __importDefault(require("../controller/getPersonAdmin"));
const getCompanyAdmin_1 = __importDefault(require("../controller/getCompanyAdmin"));
const getProductAdmin_1 = __importDefault(require("../controller/getProductAdmin"));
const getTopRated_1 = __importDefault(require("../controller/getTopRated"));
const checkEmail_1 = __importDefault(require("../controller/checkEmail"));
const logIn_1 = __importDefault(require("../controller/logIn"));
const postForgetPassword_1 = __importDefault(require("../controller/notifications/postForgetPassword"));
const putNewPassword_1 = __importDefault(require("../controller/notifications/putNewPassword"));
const router = (0, express_1.Router)();
router.post("/user", postUserPerson_1.default);
router.post("/company", postCompany_1.default);
router.post("/product", postProduct_1.default);
router.post("/qualification", postQualification_1.default);
router.post("/shoppingHistory", postShoppingHistory_1.default);
router.post("/contactme", postContactMe_1.default);
router.post("/favorite", FavoriteHandler_1.default);
router.post("/forgetpassword", postForgetPassword_1.default);
router.get("/companies", getAllCompanies_1.default);
router.get("/product/:idProduct", getProductById_1.default);
router.get("/product", getAllProducts_1.default);
router.get("/persons", getAllUserPersons_1.default);
router.get("/shoppingHistories", getShoppingHistories_1.default);
router.get("/persons/:idPerson", getPersonById_1.default);
router.get("/favorite/:idperson", getAllFavoritesPerson_1.default);
router.get("/usercompanysales/:userCompanyId", getUserCompanySalesDetail_1.default);
router.get("/company/:idCompany", getCompanyById_1.default);
router.get("/usercompanysalessummary/:userCompanyId", getUserCompanySalesSummary_1.default);
router.get("/persons/admin/:idPerson", getPersonAdmin_1.default);
router.get("/company/admin/:idCompany", getCompanyAdmin_1.default);
router.get("/product/admin/:idProduct", getProductAdmin_1.default);
router.get("/toprated", getTopRated_1.default);
router.get("/check", checkEmail_1.default);
router.get("/login", logIn_1.default);
router.put("/user", putUserPerson_1.default);
router.put("/company", putUserCompany_1.default);
router.put("/product/:productId", putProduct_1.default);
router.put("/qualification", putQualification_1.default);
router.put("/newpassword", putNewPassword_1.default);
router.post("/create-order", create_order_1.createOrder);
router.post("webhook", Webhook_1.default);
module.exports = router;
//# sourceMappingURL=index.js.map