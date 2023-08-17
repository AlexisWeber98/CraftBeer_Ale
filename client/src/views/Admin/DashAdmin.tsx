import { Table, Button, Row, Col } from "react-bootstrap";
import "./DahsAdmin.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailBuyer from "../Admin/DetailBuyer"


const Administrador = () => {
const dispatch = useDispatch<any>()
  const [sellers, setSellers] = useState<any>([]);
  const [buyers, setBuyers] = useState<any>([]);
  const [type, setType] = useState("");

    interface User {
        address: string,
        city: string,
        country: string
        document: number,
        email: string,
        id: string,
        image: string,
        lastName: string,
        name: string
        password: string
        role: string,
        state: string
        status: boolean
    }

    interface Comapny {
        address: string,
        company: string,
        city: string,
        country: string
        document: number,
        email: string,
        id: string,
        image: string,
        lastName: string,
        name: string
        password: string
        role: string,
        state: string
        status: boolean
    }

  const handlerSeller = async () => {
    try {
      const response = await axios.get("/companies");
      setSellers(response.data);
      setType("seller");
      console.log(sellers);
      //console.log(type);
      toast.success("Data cargada satisfactoriamente");
    } catch (error) {
      toast.error("No ha sido posible cargar la data");
    }
  };

  const handlerBuyer = async () => {
    try {
      const response = await axios.get("/persons");
      setBuyers(response.data);
      setType("buyer");
      console.log(buyers);
      console.log(type);
      toast.success("Data cargada satisfactoriamente");
    } catch (error) {
      toast.error("No ha sido posible cargar la data");
    }
  };

  const handlerLink = (event)=> {
    if(type === "buyer"){
        const id:string = event.target.name
        console.log(id);
        DetailBuyer(id)
    } else {
        toast.error("No es posible acceder a la información")
    }
  }
  

  return (
    <div style={{ margin: "0.5%" }}>
      <Row>
        <Col>
          <Button className="botonNav" onClick={handlerBuyer} name="buyer">
            Compradores Registrados
          </Button>
        </Col>
        <Col>
          <Button className="botonNav" onClick={handlerSeller}>
            Vendedores Registrados
          </Button>
        </Col>
      </Row>
    {type === "buyer" ? 
(      <Table striped bordered hover variant="" responsive>
        <thead className="bordeTabla">
          <tr className="bordeTabla">
            <th className="anchoTable">Detalle</th>
            <th className="anchoTable">Correo electrónico</th>
            <th className="anchoTable">Nombre</th>
            <th className="anchoTable">Apellidos</th>
            <th className="anchoTable">Doc Identidad</th>
            <th className="anchoTable">País</th>
            <th className="anchoTable">Status</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((person:User) => {
            return (
              <tr>
                <td><Link  onClick={handlerLink} to={`/admin/buyer/${person.id}`}>
                    <Button name={person.id}>
                    Detalle User   
                    </Button>
                    </Link></td>
                <td>{person.email}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.document}</td>
                <td>{person.country}</td>
                <td>{person.status === true ? "Activo" : "Inactivo"}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>)
       :
(       <Table>
        <thead className="bordeTabla">
       <tr className="bordeTabla">
         <th className="anchoTable">ID</th>
         <th className="anchoTable">Nombre compañía</th>
         <th className="anchoTable">Correo electrónico</th>
         <th className="anchoTable">Nombre</th>
         <th className="anchoTable">Apellidos</th>
         <th className="anchoTable">Doc Identidad</th>
         <th className="anchoTable">País</th>
         <th className="anchoTable">Status</th>
       </tr>
     </thead>
     <tbody>
       {sellers?.map((cia:Comapny) => {
         return (
           <tr>
               <td><Link to={`/admin/seller/${cia.id}`}>
                    <Button name={cia.id} onClick={handlerLink}>
                    Detalle User   
                    </Button>
                    </Link></td>
             <td><strong>{cia.company}</strong></td>
             <td>{cia.email}</td>
             <td>{cia.name}</td>
             <td>{cia.lastName}</td>
             <td>{cia.document}</td>
             <td>{cia.country}</td>
             <td>{cia.status === true ? "Activo" : "Inactivo"}</td>
           </tr>
         );
       })}
     </tbody>
       </Table>) 
       }
    </div>
  );
};

export default Administrador;
