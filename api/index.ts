import { sequelize } from "./db"; 
import server from "./src/app";
import dotenv from "dotenv";
const port = process.env.PORT || 3000;
import dataBase from "./helpers/baseDeDatos";

dotenv.config();

// Sincronizar la base de datos y levantar el servidor
sequelize
  .sync({ force: f })
  .then(() => {
   dataBase();
    console.log("Database synchronized");
    server.listen(3000, '0.0.0.0', () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Error synchronizing database:", error);
  });
