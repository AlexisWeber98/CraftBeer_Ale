import { ActionWithPayload } from "./actions/actions";
import {
  getAllBeer,
  orderFiltersReducer,
  productCreated,
} from "./reducerFunctions";
import {
  CREATED_PRODUCT,
  ADD_ALL_BEER,
  ORDER_FILTERS,
} from "../redux/actions/actionsTypes";

/* import { Action } from 'redux';
 */
export interface AppState {
  allBeer: object[];
  beerFilters: BeerFilters;
}
export interface BeerFilters {
  IBU?: number,  // El signo de interrogación indica que la propiedad es opcional
  AVB?: number,
  pag?:Number,
  price?: number;
  qualification?:String,
  type?:String,
  order?:String
}
export const initialState: AppState = {
  allBeer: [],
  beerFilters: {},
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

    default:
      return state;
  }
};

export default rootReducer;
