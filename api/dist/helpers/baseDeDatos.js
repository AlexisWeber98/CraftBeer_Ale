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
            email: "Alber.beer@company.com",
            password: "12345678ABC",
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
            password: "12345678AB",
            phone: 3152486655,
            country: "Colombia",
            city: "Villavicencio",
            state: "Meta",
            company: "Bogotá beer company",
            address: "AV esperanza # 48 - 50",
            image: "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1455767993/content-items/001/545/117/bogota-beer-company-logo-original.jpg?1455767993",
        },
        {
            name: "Mateo",
            lastName: "Florido",
            document: 28548954,
            email: "GrupoCarlsberg@Carlsberg.com",
            password: "12345678A",
            phone: 3168526652,
            country: "Colombia",
            city: "Villavicencio",
            state: "Meta",
            company: "El Grupo Carlsberg",
            address: "Av 40 , 03 - 22",
            image: "https://www.computing.es/wp-content/uploads/2014/09/67810_19.jpg",
        },
    ];
    const company = yield db_1.UserCompany.bulkCreate(companies);
    let product = [
        {
            userCompanyId: company[0].id,
            name: "Blanca",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/blanca.png",
            type: "Wheat beer",
            ABV: 4.6,
            description: "Suave, fresca, notas ﬂorales tenues, sin sensación de amargo,contenido de 330 ml.",
            price: 3,
            stock: 100,
            presentation: "Botella",
            IBU: 15,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Mona",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/mona.png",
            type: "Ale",
            ABV: 3.9,
            description: " Refrescante y ligera, con suaves notas cítricas,contenido de 330 ml",
            price: 3,
            stock: 100,
            presentation: "Botella",
            IBU: 20,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Mestiza",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/mestiza.png",
            type: "Amber Ale",
            ABV: 4.8,
            description: "Cítrica en aroma y sabor, amargo pronunciado y ﬁnal seco,contenido de 330 ml",
            price: 3,
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
            description: "Maltosa, con toques acaramelados y ﬁnal amaderado, contenido de 330 ml.",
            price: 3,
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
            description: "Carácter fuerte, con aroma y sabor a chocolate y café,contenido de 330 ml.",
            price: 3,
            stock: 3,
            presentation: "Botella",
            IBU: 25,
            status: true,
        },
        {
            userCompanyId: company[0].id,
            name: "Rosada",
            image: "https://3cordilleras.com/wp-content/uploads/2020/01/rosada.png",
            type: "Saison",
            ABV: 3.8,
            description: "Suave, balance perfecto entre dulzura y frutos rojos,contenido de 330 ml.",
            price: 3,
            stock: 44,
            presentation: "Botella",
            IBU: 15,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Cajica Miel x4",
            image: "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/caja%20rubia%20final.png",
            type: "Ale",
            ABV: 3.8,
            description: "Suave y  dulce, contenido 330 ml por botella, x4 unidades, ",
            price: 8,
            stock: 44,
            presentation: "Botella",
            IBU: 15,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Cajica Miel Lata x4",
            image: "https://dislicoresqa.vtexassets.com/arquivos/ids/326309/371096-CERVEZA_BBC_CAJICA_LATA_FOUR_PACK_269ML.png?v=638077995538270000",
            type: "Ale",
            ABV: 3.8,
            description: "para disfrutar en buena compañia, contenido 269 ml por lata, x4 unidades",
            price: 4,
            stock: 50,
            presentation: "Lata",
            IBU: 15,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Lager x6",
            image: "https://dislicoresqa.vtexassets.com/arquivos/ids/326295/371001-BBC-LAGER-SIXPACK-BOT-330ML.png?v=638077995458370000",
            type: "Lager",
            ABV: 3,
            description: "para disfrutar en buena compañia,contenido 330 ml por lata, x6 unidades",
            price: 10,
            stock: 50,
            presentation: "Botella",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Cotidiana",
            image: "https://lalicorera.com/img/products/bbc-la-cotidiana.png",
            type: "Stout",
            ABV: 4,
            description: "para disfrutar en buena compañia,contenido 269 ml por lata",
            price: 1,
            stock: 10,
            presentation: "Lata",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Cotidiana x4",
            image: "https://dislicoresqa.vtexassets.com/arquivos/ids/326310/371092-LA-COTIDIANA-269-x4.png?v=638077995543270000",
            type: "Stout",
            ABV: 4,
            description: "para disfrutar en buena compañia,contenido 269 ml por lata, x4 unidades",
            price: 4,
            stock: 60,
            presentation: "Lata",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Cotidiana x12",
            image: "https://dislicoresqa.vtexassets.com/arquivos/ids/326310/371092-LA-COTIDIANA-269-x4.png?v=638077995543270000",
            type: "Stout",
            ABV: 4,
            description: "para disfrutar en buena compañia,contenido 269 ml por lata, x12 unidades",
            price: 12,
            stock: 60,
            presentation: "Lata",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Cotidiana x24",
            image: "https://licoresmiprimershot.com.co/wp-content/uploads/2021/01/Four-Pack-BBC-La-Cotidiana-x269ml.png",
            type: "Stout",
            ABV: 4,
            description: "para disfrutar en buena compañia,contenido 269 ml por lata, x24 unidades",
            price: 24,
            stock: 80,
            presentation: "Lata",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Monserrate",
            image: "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/MONSERRATE.png",
            type: "Ale",
            ABV: 4,
            description: "para disfrutar en buena compañia,contenido 330 ml",
            price: 1.5,
            stock: 60,
            presentation: "Botella",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Monserrate x4",
            image: "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/caja%20roja%20final.png",
            type: "Porter",
            ABV: 4,
            description: "para disfrutar en buena compañia,contenido 330 ml por botella, x4 unidades",
            price: 6,
            stock: 60,
            presentation: "Botella",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Chapinero x4",
            image: "https://dislicoresqa.vtexassets.com/arquivos/ids/342411/371011-CERVEZABBCFOURPACK-CHAPINEROPORTER330.png?v=638138475213200000",
            type: "Porter",
            ABV: 6,
            description: "para disfrutar en buena compañia,contenido 330 ml por botella, x4 unidades",
            price: 6,
            stock: 60,
            presentation: "Botella",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[1].id,
            name: "BBC Chapinero",
            image: "https://www.bbccerveceria.com/sites/g/files/seuoyk221/files/2022-06/CHAPINERO_0.png",
            type: "Ale",
            ABV: 6,
            description: "para disfrutar en buena compañia,contenido 330 ml",
            price: 1.5,
            stock: 10,
            presentation: "Botella",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[2].id,
            name: "Birrificio Angelo",
            image: "https://s3.amazonaws.com/images.ecwid.com/images/16242262/3063887751.jpg",
            type: "Ale",
            ABV: 6,
            description: "Original es generosamente lupulada y extraordinariamente equilibrada,contenido 330 ml",
            price: 3,
            stock: 10,
            presentation: "Botella",
            IBU: 18,
            status: true,
        },
        {
            userCompanyId: company[2].id,
            name: "Carlsberg",
            image: "https://i.pinimg.com/originals/ff/b9/5f/ffb95f7f5fd3f9772f9fdfa37add99be.png",
            type: "Pilsner",
            ABV: 0,
            description: "ahora podemos disfrutar de una cerveza de gran sabor en cualquier momento,contenido 330 ml",
            price: 2,
            stock: 120,
            presentation: "Botella",
            IBU: 6,
            status: true,
        },
        {
            userCompanyId: company[2].id,
            name: "Carlsberg x6",
            image: "https://jumbo.vtexassets.com/arquivos/ids/342058/376543PAK1-42586.jpg?v=637280082554300000",
            type: "Pilsner",
            ABV: 0,
            description: "ahora podemos disfrutar de una cerveza de gran sabor en cualquier momento,contenido 330 ml, x4 unidades",
            price: 2,
            stock: 120,
            presentation: "Botella",
            IBU: 6,
            status: true,
        },
    ];
    const productSaved = yield db_1.Product.bulkCreate(product);
    let person = [
        {
            name: "Diego",
            lastName: "Beta",
            document: 25485662,
            image: "https://i.pinimg.com/564x/b1/2c/72/b12c72bbaee30c0b5df7cc2ae33df1e8.jpg",
            email: "DiegoBeta@gmail.com",
            password: "12345678De",
            country: "Argentina",
            city: "Cordoba",
            state: "Cordoba",
            address: "rosas 50",
        },
        {
            name: "gloria",
            lastName: "perez",
            document: 2548845562,
            image: "https://i.pinimg.com/236x/fb/45/dc/fb45dcd7f0da4dfc2272f48c4983d94b.jpg",
            email: "gloria@gmail.com",
            password: "12384659fE",
            country: "Argentina",
            city: "Cordoba",
            state: "Cordoba",
            address: "rosas 15",
        },
        {
            name: "maria",
            lastName: "Beta",
            document: 25484442,
            image: "https://i.pinimg.com/236x/79/bd/44/79bd4499f1fb63ab07bacd4957056aba.jpg",
            email: "maria@gmail.com",
            password: "1gH4548569",
            country: "Argentina",
            city: "Cordoba",
            state: "Cordoba",
            address: "rosas 2",
        },
        {
            name: "facundo",
            lastName: "fance",
            document: 212254555662,
            image: "https://i.pinimg.com/236x/c2/7f/03/c27f03231d50be1cf024c55f59e63cd4.jpg",
            email: "facu25@gmail.com",
            password: "1235849561Fa",
            country: "Argentina",
            city: "Cordoba",
            state: "Cordoba",
            address: "rosas 50",
        },
        {
            name: "antoni",
            lastName: "bernal",
            document: 2548959612,
            image: "https://i.pinimg.com/236x/76/7c/49/767c49fad577f51b1f0cf90cacdab075.jpg",
            email: "antoni@gmail.com",
            password: "159561526Anto",
            country: "Argentina",
            city: "Cordoba",
            state: "Cordoba",
            address: "rosas 15",
        },
        { name: "Luis",
            lastName: "Lopez",
            document: 254856845,
            image: "https://i.pinimg.com/564x/8f/0b/2e/8f0b2ec5e74f39b4f7fbc791e7420f3e.jpg",
            email: "luisL@gmail.com",
            password: "12345678De",
            country: "Argentina",
            city: "mendoza",
            state: "mendoza",
            address: "orquidea 100",
        },
        {
            name: "Antonia",
            lastName: "Gamma",
            document: 25895621,
            image: "https://i.pinimg.com/564x/d6/ba/0a/d6ba0a3dc473dac577f7caa080ed0266.jpg",
            email: "AntoGama@gmail.com",
            password: "12345678FG",
            country: "Argentina",
            city: "Cordoba",
            state: "Cordoba",
            address: "independencia 250",
        },
        {
            name: "Edgar",
            lastName: "Gamma",
            image: "https://i.pinimg.com/236x/03/05/46/0305465cf973fc68347bd1d83a8c7aba.jpg",
            document: 12345678,
            email: "craftbeer515@gmail.com",
            password: "12345678FG",
            country: "Argentina",
            city: "buenos aires",
            state: "provincia de buenos aires",
            address: "paula 25",
        },
        {
            name: "admin",
            lastName: "admin",
            document: 111111,
            email: "craftbeer514@gmail.com",
            password: "craftbeer2023",
            country: "Argentina",
            city: "Cordoba",
            state: "cordoba",
            address: "rondeau 358",
            role: "Admin",
            image: "https://i.postimg.cc/mDYMdsVF/Simple-October-Fest-Instagram-Post-3.png"
        },
        {
            name: "Amigos",
            lastName: "Front",
            document: 98765432,
            email: "amigosfront@gmail.com",
            password: "Amigos1234",
            country: "Sudamerica",
            city: "Todas",
            state: "Felices",
            company: "PF Henry",
            address: "Cerca de lograrlo",
            role: "Admin",
            image: "https://i.pinimg.com/564x/ea/97/86/ea9786de800cb317fe5b2575ddd4e6b0.jpg",
        },
    ];
    const personSaved = yield db_1.UserPerson.bulkCreate(person);
    personSaved[0].addProduct(productSaved[0]);
    let qualification = [
        {
            rate: 1,
            userPersonId: personSaved[0].id,
            ProductId: productSaved[0].id,
            comment: "no era lo que esperaba"
        },
        {
            rate: 1,
            userPersonId: personSaved[1].id,
            ProductId: productSaved[1].id,
            comment: "es muy amarga para mi gusto"
        },
        {
            rate: 2,
            userPersonId: personSaved[2].id,
            ProductId: productSaved[2].id,
            comment: "no es de calidad"
        },
        {
            rate: 2,
            userPersonId: personSaved[3].id,
            ProductId: productSaved[3].id,
            comment: "es muy amarga para mi gusto"
        },
        {
            rate: 3,
            userPersonId: personSaved[4].id,
            ProductId: productSaved[4].id,
            comment: "no era lo que esperaba"
        },
        {
            rate: 3,
            userPersonId: personSaved[5].id,
            ProductId: productSaved[5].id,
            comment: "es buena pero no lleno mis expectativas"
        },
        {
            rate: 4,
            userPersonId: personSaved[6].id,
            ProductId: productSaved[6].id,
            comment: "una cerveza llena de magia"
        },
        {
            rate: 4,
            userPersonId: personSaved[7].id,
            ProductId: productSaved[7].id,
            comment: "excelente producto"
        },
        {
            rate: 4,
            userPersonId: personSaved[8].id,
            ProductId: productSaved[8].id,
            comment: "inigualable 10/10"
        },
        {
            rate: 4,
            userPersonId: personSaved[9].id,
            ProductId: productSaved[9].id,
            comment: "excelente producto"
        },
        {
            rate: 4,
            userPersonId: personSaved[0].id,
            ProductId: productSaved[10].id,
            comment: "una cerveza llena de magia"
        },
        {
            rate: 4,
            userPersonId: personSaved[0].id,
            ProductId: productSaved[11].id,
            comment: "excelente producto"
        },
        {
            rate: 4,
            userPersonId: personSaved[1].id,
            ProductId: productSaved[12].id,
            comment: "excelente producto"
        },
        {
            rate: 4,
            userPersonId: personSaved[2].id,
            ProductId: productSaved[13].id,
            comment: "excelente producto"
        },
        {
            rate: 4,
            userPersonId: personSaved[3].id,
            ProductId: productSaved[14].id,
            comment: "excelente producto"
        },
        {
            rate: 5,
            userPersonId: personSaved[4].id,
            ProductId: productSaved[15].id,
            comment: "excelente producto"
        },
        {
            rate: 5,
            userPersonId: personSaved[5].id,
            ProductId: productSaved[16].id,
            comment: "inigualable 10/10"
        },
        {
            rate: 5,
            userPersonId: personSaved[6].id,
            ProductId: productSaved[17].id,
            comment: "me encanto su sabor"
        },
        {
            rate: 5,
            userPersonId: personSaved[7].id,
            ProductId: productSaved[18].id,
            comment: "una cerveza llena de magia"
        }, {
            rate: 5,
            userPersonId: personSaved[8].id,
            ProductId: productSaved[19].id,
            comment: "me encanto su sabor"
        },
    ];
    const qualificationSaved = yield db_1.Qualification.bulkCreate(qualification);
    qualificationSaved.forEach((arg) => __awaiter(void 0, void 0, void 0, function* () {
        const productById = yield db_1.Product.findByPk(arg.ProductId);
        productById.addQualification(arg);
        let rating = yield db_1.Qualification.findAll({
            where: { ProductId: arg.ProductId },
            attributes: ["rate"],
        });
        let qualifications = rating.reduce((acc, rate) => {
            acc = rate.rate + acc;
            return acc;
        }, 0);
        const average = (qualifications / rating.length).toFixed(2);
        const updateProductQualification = yield db_1.Product.update({ qualification: average }, {
            where: { id: arg.ProductId },
        });
    }));
    const shoppingHistories = [
        {
            date: new Date(),
            totalPrice: productSaved[12].price * 2 + productSaved[10].price * 2,
            userPersonId: personSaved[0].id,
            items: [
                {
                    ProductId: productSaved[10].id,
                    name: productSaved[10].name,
                    image: productSaved[10].image,
                    unitPrice: productSaved[10].price,
                    summary: productSaved[10].description,
                    amount: 2,
                    totalPrice: productSaved[10].price * 2,
                },
                {
                    ProductId: productSaved[12].id,
                    name: productSaved[12].name,
                    image: productSaved[12].image,
                    unitPrice: productSaved[12].price,
                    summary: productSaved[12].description,
                    amount: 2,
                    totalPrice: productSaved[12].price * 2,
                },
            ],
        },
        {
            date: new Date(),
            totalPrice: productSaved[5].price * 5,
            userPersonId: personSaved[1].id,
            items: [
                {
                    ProductId: productSaved[5].id,
                    name: productSaved[5].name,
                    image: productSaved[5].image,
                    unitPrice: productSaved[5].price,
                    summary: productSaved[5].description,
                    amount: 5,
                    totalPrice: productSaved[5].price * 5,
                },
            ],
        },
        {
            date: new Date(),
            totalPrice: productSaved[18].price * 8 + productSaved[9].price * 2 + productSaved[3].price * 5,
            userPersonId: personSaved[1].id,
            items: [
                {
                    ProductId: productSaved[18].id,
                    name: productSaved[18].name,
                    image: productSaved[18].image,
                    unitPrice: productSaved[18].price,
                    summary: productSaved[18].description,
                    amount: 8,
                    totalPrice: productSaved[18].price * 8,
                },
                {
                    ProductId: productSaved[9].id,
                    name: productSaved[9].name,
                    image: productSaved[9].image,
                    unitPrice: productSaved[9].price,
                    summary: productSaved[9].description,
                    amount: 2,
                    totalPrice: productSaved[9].price * 2,
                },
                {
                    ProductId: productSaved[3].id,
                    name: productSaved[3].name,
                    image: productSaved[3].image,
                    unitPrice: productSaved[3].price,
                    summary: productSaved[3].description,
                    amount: 5,
                    totalPrice: productSaved[3].price * 5,
                },
            ],
        },
    ];
    const shoppingHistoriesSaved = yield Promise.all(shoppingHistories.map((shoppingHistory) => __awaiter(void 0, void 0, void 0, function* () {
        const { date, totalPrice, userPersonId, items } = shoppingHistory;
        const person = yield db_1.UserPerson.findByPk(userPersonId);
        if (!person) {
            console.warn(`UserPerson with ID ${userPersonId} not found.`);
            return null;
        }
        const newShoppingHistory = yield db_1.ShoppingHistory.create({
            date,
            totalPrice,
            userPersonId,
        });
        person.addShoppingHistory(newShoppingHistory);
        const createdItems = yield Promise.all(items.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const { ProductId, name, image, amount, unitPrice, summary, totalPrice: itemTotalPrice, } = item;
            const product = yield db_1.Product.findByPk(ProductId);
            if (!product) {
                console.warn(`Product with ID ${ProductId} not found.`);
                return null;
            }
            if (product.stock < amount) {
                console.warn(`Not enough stock for product with ID ${ProductId}.`);
                return null;
            }
            const createdItem = yield db_1.Item.create({
                ProductId,
                name,
                image,
                amount,
                unitPrice,
                summary,
                totalPrice: itemTotalPrice,
            });
            yield newShoppingHistory.addItems(createdItem);
            const newStock = product.stock - amount;
            yield db_1.Product.update({ stock: newStock }, { where: { id: ProductId } });
            return createdItem;
        })));
        const newItems = createdItems.filter((item) => item !== null);
        if (newShoppingHistory) {
        }
        return newShoppingHistory;
    })));
});
exports.default = dataBase;
//# sourceMappingURL=baseDeDatos.js.map