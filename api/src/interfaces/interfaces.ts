
import UserRole from "../emuns";

export interface ProductModelInterface {
  id: string;
  image: string;
  name: string;
  type: string;
  description: string;
  ABV: number;
  presentation: string;
  price: number;
  stock: number;
  IBU: number;
  qualification?: number;
  status: boolean;
};

export interface UserPersonModelInterface {
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
  role: UserRole;
};

export interface UserCompanyModelInterface {
    id: string;
    name: string;
    lastName: string;
    document: number;
    email: string;
    password: string;
    phone: number;
    country: string;
    city: string;
    state: string;
    company: string;
    status: boolean;
    address: string;
    image?: Text;
    role: UserRole;
};

export interface QualificationModelInterface {
    id:string;
    rate:number;
};

export interface ShoppingHistoryModelInterface {
    id:string;
    date:Date;
    totalPrice:number;
};

export interface ItemModelInterface {
    id:string;
    amount:number;
    totalPrice:number;
}

