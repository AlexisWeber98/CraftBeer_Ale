
import { Container } from "react-bootstrap"
import style from "./Succes.module.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { AppState } from "../../redux/reducer"
import axios from "axios"

const Succes = () => {

    let navigate = useNavigate()


    // borrar el storage si se ejecuta la compra 
    const dataStorage = Object.keys(localStorage).filter(key => key !== "user")
    dataStorage.forEach(key => {
        localStorage.removeItem(key);
    })


    // Redirigir automáticamente después de 4 segundos
    useEffect(() => {
        const redirectTimeout = setTimeout(() => {
            navigate("/myShop");
        }, 6000);
        // Limpieza del timeout en la desaparición del componente
        return () => {
            clearTimeout(redirectTimeout);
        };
    }, []);


    // carga de datos para el enviar al historial de compras 
    const currentDate = new Date();
    let userPersonId = useSelector((state: AppState) => state.accessLogin.id)

    //cargar los datos de items comprados 
    let cart = useSelector((state: AppState) => state.localStorageCart)
    let cartFilter = cart.filter(el => !el.hasOwnProperty("user"))
    let dataCartItems = cartFilter.map((item) => ({
        ProductId: item.id,
        amount: item.quantity,
        subTotalPrice: item.quantity * item.price
    }))
    let totalPrice = 0
    for (let i = 0; i < dataCartItems.length; i++) {
        totalPrice = totalPrice + dataCartItems[i].subTotalPrice
    }

    // cargar informacion de compra en el servidor 
    const dataPay = {
        date: currentDate,
        totalPrice: totalPrice,
        userPersonId: userPersonId,
        items: dataCartItems
    }
    console.log(dataPay);
    

    // peticion  post al servidor 
    const postHistoryShop = async () => {
        const endpoint = "/shoppingHistory";
        try {
            console.log(dataPay);
            
           const response = await axios.post(endpoint, dataPay);
           console.log(response);
           
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        postHistoryShop()
    }, [])
    
    postHistoryShop()

    return (
        <>
            <Container>
                <div className={style.container}>
                    <div className={style.messageBuy}>
                        <h1>Tu Pago fue aprobado con exito !! </h1>
                        <p>Recibiras un correo con los detalles de tu compra.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Succes