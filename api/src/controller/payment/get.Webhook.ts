import { Request, Response } from "express"

const recibeWebHook = (req: Request, res:Response) => {
const {id, type}  = req.query

console.log("lo que sigue es es la respuesta luego de la efectizacion de la orden de pago");


console.log(req.query);

res.send(req.query)

}

export default recibeWebHook