//.....

import { Col, Container, Row } from "react-bootstrap";
import CardShop from "../../components/CardShop/CardShop";
import Filters from "../../components/Filters/Filters";
import style from "./Shop.module.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderFilters } from "../../redux/actions/actions";
import { AppState } from "../../redux/reducer";

// SHOP

const Shop = () => {

  const dispatch = useDispatch()

  const filters = useSelector((state: AppState) => state.beerFilters)

  // estado para controlar el input search
  const [input, setInput] = useState("")
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  // estado para controlar el paginado 
  interface CustomEventTarget extends EventTarget {
    name: string;
  }
  const [numberPage, setNumberPage] = useState(1)
  const handlerPage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.target as CustomEventTarget;
    if (target.name === "<") {
      setNumberPage(numberPage - 1)
    } else { setNumberPage(numberPage + 1) }
  }


  //si se aplican filtros se redirige a la pagina 1
  useEffect(() => {
    setNumberPage(1);
  }, [filters.IBU, filters.order, filters.AVB, filters.price, filters.qualification, filters.type])

  // controla el estado del paginado en la propiedad pag
  useEffect(() => {
    dispatch(orderFilters({ ...filters, pag: numberPage }));
  }, [numberPage])


  //controlar el disable para navegar en paginas 
  const disableBoton = {
    adv: false,
    back: false,
    search: true,
  };
  if (numberPage < 2) disableBoton.back = true
  if (input.length > 2) disableBoton.search = false

  // cargar el estado filter con el nombre que ingresa en el input 
  const handlerClick = () => {
    setInput("")
    dispatch(orderFilters({ name: input }))
  }

  return (
    <Container >
      <div className={style.search}>
        <input type="text"
          className={style.input_Search}
          placeholder="Buscar....."
          onChange={handlerChange}
          value={input}
        />
        <button className={style.button} disabled={disableBoton.search} onClick={handlerClick}>🔍</button>
        <button className={style.button} onClick={handlerClick}>All</button>
      </div>
   
      <Row>
        <Col xs={12} md={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button className={style.button_Pagechange} onClick={handlerPage} name="<" disabled={disableBoton.back}>{"<"} </button>
            <button className={style.button_Pagelateral}>{numberPage - 1} </button>
            <button className={style.button_Page}> {numberPage} </button>
            <button className={style.button_Pagelateral}>{numberPage + 1} </button>
            <button className={style.button_Pagechange} onClick={handlerPage} name=">">{">"} </button>
          </div>
          <Filters />
        </Col>
        <Col xs={12} md={9}>
          <div className="d-flex flex-column">
            <CardShop />
          </div>
        </Col>
      </Row>
    </Container>

  )
};

export default Shop;