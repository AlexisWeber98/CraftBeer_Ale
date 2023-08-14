const nodemailer = require("nodemailer");
import dotenv from "dotenv";
dotenv.config();
const { NODEMAILER_USER, NODEMAILER_PASS } = process.env;
import { UserPerson, Product } from "../../db";
import { UUID } from "crypto";

const postPurchaseConfirmation = async (
  date: Date,
  totalPrice: Number,
  userPersonId: UUID,
  newItems: []
) => {
    try {
        //busco el id del userpersonid
        const searchUserPersonId = await UserPerson.findByPk(userPersonId);
        // busco los datos del producto
        const searchProduct = await Promise.all(
            newItems.map(
                async (product: {
                    get: Function;
                    ProductId: UUID;
                    amount: Number;
                    totalPrice: Number;
                }) => {
                    const prodId = await Product.findByPk(product.ProductId);
                    return { ...product.get({ plain: true }), name: prodId.name };
                }
                )
                );
    // inicia la funcion de envío de mensaje
    let transporter = nodemailer.createTransport({
      //options -- define los datos de conexión
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: NODEMAILER_USER,
        pass: NODEMAILER_PASS,
      },
    });
    //defaults es un objeto que se fusionará en cada objeto de mensaje.
    let mailOptions = {
      from: "craftbeer514@gmail.com",
      to: searchUserPersonId.email,
      subject: `Gracias por tu compra ${searchUserPersonId.name}. `,
      html: `<html>
	<head>
        <body>
        </br><b style="color:#9E7842">Fecha:${date}</b></br>
        <h2>Gracias por tu compra, ${searchUserPersonId.name}🛍️. </h2>
        <p>Recibimos tu pago por un valor total de ${totalPrice} USD.<p>
        </br>
        <p>Craftbeer desea que tu experiencia con nuestros productos sea agradable 🍺 por esto tu compra se encuentra en proceso de despacho.</p>
        <br/>
        <h2>Datos de la compra 🍻</h2>
        <table >
        <tr>
          <td style="background-color: #9E7842" align='center' ><b>Producto</b></td>
          <td style="background-color: #9E7842" align='center' ><b>Cantidad</b></td>
          <td style="background-color: #9E7842" align='center' ><b>Subtotal</b></td>
          </tr>
        ${searchProduct.reduce((acc,item) => {
          return acc + `
          <tr>
          <td align='center' >${item.name}</td>
          <td align='center'>${item.amount}</td>
          <td align='center'>${item.totalPrice}</td>
          </tr>
          `
        },"")}
        <tr>
        <td style="background-color: #9E7842"><b> Total de la compra</b></td>
        <td style="background-color: #9E7842"></td>
        <td style="background-color: #9E7842"><b> ${totalPrice} USD</b></td>
        </tr>
        </table>
        <br/>
        <p>Si no has sido tú quien realizó esta compra, comunícate con atención al cliente:</p>
        <p>craftbeer514@gmail.com</p>
        <img src='https://i.postimg.cc/wjbRFfkV/Simple-October-Fest-Instagram-Post-6.png' width="60" height="60" lign="center"/>
		</body>
	</head>
</html>`
    };

    transporter.sendMail(mailOptions, (error: any, info: string) => {
      if (error) {
        console.log(error.message);
      } else {
        console.log("Message sent:" + info);
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unexpected error.");
    }
  }
};

export default postPurchaseConfirmation;
