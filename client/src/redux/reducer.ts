import { ActionWithPayload } from "./actions/actions";
import {
  getAllBeer,
  orderFiltersReducer,
  productCreated,
  postCompany,
  userCreated,
  saveLocalStorageCart,
  login,
  totalPagesShop,
  loginVerification,
  logout,
  urlImage,
  hasNavigatedTrue,
  deleteStorageCart,
} from "./reducerFunctions";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
  CREATED_COMPANY,
  CREATED_USER,
  LOCAL_STORAGE,
  LOGIN,
  TOTAL_PAGES,
  LOGIN_VERIFICATION,
  LOGOUT,
  URL_IMAGE,
  HAS_NAVIGATED,
  DELETE_CARTSTORAGE,
} from "../redux/actions/actionsTypes";
import { SaveDataLS } from "../components/LocalStorage/LocalStorage";

/* import { Action } from 'redux';
 */
export interface AccessLogin {
  access: boolean;
  id: string;
  role: string;
  cart?: typeof localStorage;
}
export interface beers {
  ABV: number;
  IBU: number;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  presentation: string;
  price: number;
  qualification?: null;
  status: boolean;
  stock: number;
  type: string;
  updatedAt: string;
  userCompanyId: string;
}
export interface AppState {
  allBeer: beers[];
  beerFilters: BeerFilters;
  localStorageCart: SaveDataLS[];
  totalPages: number;
  allCompany: object[];
  accessLogin: AccessLogin;
  urlImage: string;
  hasNavigated: boolean;
}
export interface BeerFilters {
  IBU?: number; // El signo de interrogación indica que la propiedad es opcional
  AVB?: number;
  name?: String;
  pag?: Number;
  price?: number;
  qualification?: String;
  type?: String;
  order?: String;
}

//hidratar el estado localStorageCart desde la storage 
const dataStorage = Object.keys(localStorage).map((key) =>   JSON.parse(localStorage[key]));
console.log("fadfsf",dataStorage);

export const initialState: AppState = {
  allBeer: [],
  beerFilters: {},
  localStorageCart: dataStorage,
  totalPages: 0,
  allCompany: [],
  accessLogin: {
    access: false,
    id: "",
    role: "",
    cart: { ...localStorage },
  },
  urlImage: "",
  hasNavigated: false,
};

const rootReducer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  switch (action.type) {
    case ADD_ALL_BEER: {
      return getAllBeer(state, action);
    }
    case ORDER_FILTERS: {
      return orderFiltersReducer(state, action);
    }
    case CREATED_PRODUCT: {
      return productCreated(state);
    }
    case CREATED_COMPANY: {
      return postCompany(state);
    }
    case CREATED_USER: {
      return userCreated(state);
    }
    case LOCAL_STORAGE: {
      return saveLocalStorageCart(state, action);
    }
    case DELETE_CARTSTORAGE :{
      return deleteStorageCart(state)
    }
    case DELETE_CARTSTORAGE :{
      return deleteStorageCart(state)
    }
    case LOGIN: {
      return login(state, action);
    }
    case LOGOUT: {
      return logout(state);
    }
    case TOTAL_PAGES: {
      return totalPagesShop(state, action);
    }
    case LOGIN_VERIFICATION: {
      return loginVerification(state, action);
    }
    case URL_IMAGE: {
      return urlImage(state, action);
    }
    case HAS_NAVIGATED: {
      return hasNavigatedTrue(state)
    }
    default:
      return state;
  }
};

export default rootReducer;
