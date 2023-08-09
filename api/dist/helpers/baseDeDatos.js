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
const db_1 = require("../db");
const dataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    let companies = [
        {
            name: "Alberto",
            lastName: "Mendez",
            document: 40556481,
            email: "cumplimiento@3cordilleras.com",
            password: "12345678",
            phone: 3158183233,
            country: "Colombia",
            city: "Medellin",
            state: "Antioquia",
            company: "Artesanos de cervezas",
            address: "Calle 30 No. 44 - 176",
            image: "https://birrapedia.com/img/modulos/empresas/481/3-cordilleras_14654681684523_t.jpg",
        },
        {
            name: "Maria",
            lastName: "Oviedo",
            document: 28549852,
            email: "Bogotabeer@company.com",
            password: "12345678",
            phone: 3152486655,
            country: "Colombia",
            city: "Villavicencio",
            state: "Meta",
            company: "Bogotá beer company",
            address: "AV esperanza # 48 - 50",
            image: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1455767993/content-items/001/545/117/bogota-beer-company-logo-original.jpg?1455767993",
        },
    ];
    const company = yield db_1.UserCompany.bulkCreate(companies);
    let product = [
        {
            userCompanyId: company[0].id,
            name: "Blanca",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/blanca.png",
            type: "Wheat Ale",
            ABV: 4.6,
            description: "Suave, fresca, notas ﬂorales tenues, sin sensación de amargo.",
            price: 30,
            stock: 100,
            presentation: "Botella",
            IBU: 15,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Mona",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/mona.png",
            type: "Blonde Ale",
            ABV: 3.9,
            description: " Refrescante y ligera, con suaves notas cítricas",
            price: 12,
            stock: 100,
            presentation: "Botella",
            IBU: 20,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Mestiza",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/mestiza.png",
            type: "Pale Ale",
            ABV: 4.8,
            description: "Cítrica en aroma y sabor, amargo pronunciado y ﬁnal seco",
            price: 33,
            stock: 100,
            presentation: "Botella",
            IBU: 29,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Mulata",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/mulata.png",
            type: "Amber Ale",
            ABV: 5.2,
            description: "Maltosa, con toques acaramelados y ﬁnal amaderado.",
            price: 19.95,
            stock: 100,
            presentation: "Botella",
            IBU: 27,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Negra",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/negra.png",
            type: "Stout",
            ABV: 6.4,
            description: "Carácter fuerte, con aroma y sabor a chocolate y café.",
            price: 182.33,
            stock: 3,
            presentation: "Botella",
            IBU: 25,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Rosada",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/rosada.png",
            type: "Rosé",
            ABV: 3.8,
            description: "Suave, balance perfecto entre dulzura y frutos rojos.",
            price: 142,
            stock: 44,
            presentation: "Botella",
            IBU: 15,
            status: true,
        },
    ];
    const productSaved = yield db_1.Product.bulkCreate(product);
    let person = [
        {
            name: "Diego",
            lastName: "Beta",
            document: 25485662,
            email: "DiegoBeta@gmail.com",
            password: "12345678",
            country: "Colombia",
            city: "Bogotá",
            state: "Cundinamarca",
            address: "calle 25 N° 15 20"
        }
    ];
    const personSaved = yield db_1.UserPerson.bulkCreate(person);
});
exports.default = dataBase;
//# sourceMappingURL=baseDeDatos.js.map