import { DataTypes, Model, ModelCtor } from "sequelize";
import { sequelize } from "../../db";

interface UserAttributes {
  id: string;
  name: string;
  lastName: string;
  document: number;
  email: string;
  password: string;
  status: boolean;
  country: string;
  city: string;
  state: string;
  address: string;
  image?: Text;
}

type UserModel = Model<UserAttributes> & {
  new (): UserAttributes;
};

const defineUserModel = (): ModelCtor<UserModel> => {
  return sequelize.define("userPerson", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    document: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique:true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }) as ModelCtor<UserModel>;
};

export default defineUserModel;
