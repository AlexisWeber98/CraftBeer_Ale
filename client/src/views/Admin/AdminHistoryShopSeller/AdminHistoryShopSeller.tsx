import { useSelector } from "react-redux";
import { AppState } from "../../../redux/reducer";
import { useEffect, useState } from "react";
import axios from "axios";

import style from "./AdminHistoryShopSeller.module.css";
import { useNavigate } from "react-router-dom";
import MyShop from "../../MyShop/MyShop";

const AdminHistoryShopSeller = () => {
  const navigate = useNavigate();

  const id = useSelector((state: AppState) => state.idSeller);
  const [infoUser, setInfoUser] = useState<any>({});


  useEffect(() => {
    const solicitud = async () => {
      const response = await axios.get(`/company/admin/${id}`);
      setInfoUser(response.data);
    };
    solicitud();
  }, [id]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          className={style.button}
          onClick={() => navigate(`/admin/seller/${id}`)}
        >
          Volver
        </button>
        <h3 style={{ marginTop: "20px", marginLeft: "100px" }}>
          Historial de ventas de {infoUser.name}
        </h3>
      </div>
      <MyShop idCompanyAdmin={id} />
    </div>
  );
};

export default AdminHistoryShopSeller;

