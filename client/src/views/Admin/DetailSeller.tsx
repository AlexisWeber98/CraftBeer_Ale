import {
  Card,
  Row,
  Col,
  Button,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "./DahsAdmin.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const DetailSeller = () => {
  const id = useSelector((state: AppState) => state.idSeller);
  const [infoUser, setInfoUser] = useState<any>({});

  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/${id}`);
      console.log(response.data);

      setInfoUser(response.data);
    };
    solicitud();
  }, [id]);

  const handlerActive = async () => {
    try {
      const activar = await axios.put("/company", {
        id: infoUser.id,
        status: "true",
      });
      toast.success("El usuario a sido activado");
    } catch (error) {
      toast.error("No fue posible activar el usuario");
    }
  };

  const handlerInactive = async () => {
    try {
      const inactivar = await axios.put("/company", {
        id: infoUser.id,
        status: "false",
      });
      toast.success("El usuario a sido desactivado");
    } catch (error) {
      toast.error("No fue posible inactivar el usuario");
    }
  };

  return (
    <div className="bodyBuyer">
      <Card
        style={{
          width: "70%",
          height: "auto",
          margin: "1%",
          border: "solid black",
        }}
      >
        <div
          style={{
            textAlign: "center",
            borderBottom: "solid black 5px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <NavbarBrand>
            <h2>{infoUser.company}</h2>
          </NavbarBrand>
          <NavDropdown title="Otras opciones" menuVariant="dark">
            <NavDropdown.Item>Historial de compras</NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/admin/seller/products">Productos en venta</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>Modificar usuario</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Nombre
            <input type="text" className="inputBuyer" value={infoUser.name} />
          </Col>
          <Col>
            Apellido
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.lastName}
            />
          </Col>
          <Col>
            Dirección de la compañía
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.address}
            />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Estado/Región/Provincia
            <input type="text" className="inputBuyer" value={infoUser.state} />
          </Col>
          <Col>
            País
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.country}
            />
          </Col>
          <Col>
            Teléfono móvil
            <input type="text" className="inputBuyer" value={infoUser.phone} />
          </Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "auto" }}>
            Documento de identidad
            <input
              type="text"
              className="inputBuyer"
              value={infoUser.document}
            />
          </Col>
          <Col>
            Tipo de usuario
            <input type="text" className="inputBuyer" value={infoUser.role} />
          </Col>
          <Col></Col>
        </Row>
        <Row style={{ height: "100%", width: "100%", margin: "0.5%" }}>
          <Col style={{ width: "50%", height: "100%" }}>
            Ciudad
            <input type="text" className="inputBuyer" value={infoUser.city} />
          </Col>
          <Col>
            Direccion de correo
            <input type="text" className="inputBuyer" value={infoUser.email} />
          </Col>
          <Col></Col>
        </Row>
        <div className="botonesBuyer">
          <Link to="/admin" style={{ width: "30%" }}>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#A37D34",
                border: "none",
              }}
            >
              Volver al Panel
            </Button>
          </Link>
          <Button
            onClick={handlerActive}
            style={{ width: "15%", backgroundColor: "black", border: "none" }}
          >
            Activar Usuario
          </Button>
          <Button
            onClick={handlerInactive}
            style={{
              width: "15%",
              height: "auto",
              backgroundColor: "black",
              border: "none",
            }}
          >
            Inactivar Usuario
          </Button>
        </div>
      </Card>
      <div className="bodyImage">
        <Card
          style={{
            height: "50%",
            width: "90%",
            margin: "1%",
            border: "solid black 3px",
          }}
        >
          {infoUser.image === null ? (
            "Imagen no disponible"
          ) : (
            <img
              src={infoUser.image}
              alt={infoUser.name}
              style={{ height: "100%", width: "100%" }}
            />
          )}
        </Card>
        <Card
          style={{
            border: "solid black 3px",
            height: "50%",
            width: "90%",
            margin: "1%",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Estatus de usuario</h4>
          {infoUser.status === "true" ? (
            <h6 className="inactiveUser">Inactivo 🚫</h6>
          ) : (
            <h2 className="activoUser">Activo ✅</h2>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DetailSeller;
