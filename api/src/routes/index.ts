import { Router } from "express";
import postUserPerson from "../controller/postUserPerson";
import postCompany from "../controller/postCompany";
import getAllCompanies from '../controller/getAllCompanies';
import postProduct from '../controller/postProduct';
import getProductById from '../controller/getProductById';
import getAllProducts from '../controller/getAllProducts';
import putUserPerson from "../controller/putUserPerson"
import logIn from '../controller/logIn';
import putProduct from '../controller/putProduct';
import putUserCompany from '../controller/putUserCompany';
import getAllUserPersons from '../controller/getAllUserPersons';
import postQualification from "../controller/postQualification"
import {createOrder} from "../controller/payment/create-order"
import postShoppingHistory from '../controller/postShoppingHistory';
import getShoppingHistories from '../controller/getShoppingHistories';
import recibeWebHook from '../controller/payment/Webhook';
import getPersonById from '../controller/getPersonById';
import postContactMe from "../controller/postContactMe";
import getAllFavoritesPerson from "../controller/getAllFavoritesPerson";
const router = Router();

//-------- post routes -----//
router.post("/user", postUserPerson);
router.post("/company", postCompany);
router.post("/product", postProduct);
router.post("/qualification", postQualification);
router.post("/shoppingHistory", postShoppingHistory);
router.post("/contactme", postContactMe)

// ------- get routes ------- //
router.get("/companies", getAllCompanies);
router.get("/product/:idProduct", getProductById);
router.get("/product", getAllProducts);
router.get("/login", logIn);
router.get("/persons", getAllUserPersons);
router.get("/shoppingHistories", getShoppingHistories);
router.get("/persons/:idPerson", getPersonById);
router.get("/favorite/:idperson", getAllFavoritesPerson)
// ------- update routes-------//
router.put("/user", putUserPerson);
router.put("/company", putUserCompany);
router.put("/product/:productId", putProduct);

// ------- payment routes ----//

router.post("/create-order", createOrder)

module.exports = router;
