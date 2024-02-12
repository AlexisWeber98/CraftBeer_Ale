import {
  ActionWithPayload,
  loginAction,
  salesSumAction,
  salesDetailAction,
} from "./actions/actions";
import { AppState, initialState } from "./reducer";

export const getAllBeer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    allBeer: action.payload.products,
  };
};

//ALMACENAR FILTROS
export const orderFiltersReducer = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    beerFilters: action.payload,
  };
};
//CREAR PRODUCTOS

export const productCreated = (state = initialState) => {
  return {
    ...state,
  };
};

//Crear usuario de compañía
export const postCompany = (state = initialState) => {
  return {
    ...state,
  };
};
//Crear usuario persona
export const userCreated = (state = initialState) => {
  return {
    ...state,
  };
};

//ALMACENAR LOCAL STORAGE
export const saveLocalStorageCart = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  const existingItemIndex = state.localStorageCart.findIndex(
    (item) => item.id === action.payload.id
  );

  if (action.payload.quantity === 0) {
    const updatedCart = state.localStorageCart.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      localStorageCart: updatedCart,
    };
  } else if (existingItemIndex !== -1) {
    const updatedCart = state.localStorageCart.map((item, index) => {
      if (index === existingItemIndex) {
        return action.payload;
      } else {
        return item;
      }
    });
    return {
      ...state,
      localStorageCart: updatedCart,
    };
  } else {
    return {
      ...state,
      localStorageCart: [...state.localStorageCart, action.payload],
    };
  }
};

// borrar el cart cuando se aprueba el pago
export const deleteStorageCart = (state: AppState) => {
  const storageCart = [];
  for (let i = 0; i < state.localStorageCart.length; i++) {
    if ("user" in state.localStorageCart[i])
      storageCart.push(state.localStorageCart[i]);
  }

  return {
    ...state,
    localStorageCart: storageCart,
  };
};

// LOGIN
export const login = (state = initialState, action: loginAction) => {
  const user: string | null = localStorage.getItem(action.payload.user.id);

  let accessLogin;
  if (user === null) {
    accessLogin = {
      acces: action.payload.access,
      id: action.payload.user.id,
      role: action.payload.user.role,
    };
  } else {
    const json = JSON.parse(user);
    accessLogin = {
      access: json.access,
      id: json.user.id,
      role: json.user.role,
    };
  }
  return {
    ...state,
    accessLogin: accessLogin,
  };
};
// LOGOUT
export const logout = (state = initialState) => {
  localStorage.removeItem("user");
  return {
    ...state,
    accessLogin: {
      access: false,
      id: "",
      role: "",
      cart: null,
    },
  };
};

export const loginVerification = (
  state = initialState,
  action: loginAction
) => {
  return {
    ...state,
    accessLogin: {
      access: action.payload.access,
      id: action.payload.user.id,
      role: action.payload.user.role,
    },
  };
};
//ALMACENAR numero de paginas para el shop
export const totalPagesShop = (
  state = initialState,
  action: ActionWithPayload<string, number>
) => {
  return {
    ...state,
    totalPages: action.payload,
  };
};

export const urlImage = (
  state = initialState,
  action: ActionWithPayload<string, number>
) => {
  return {
    ...state,
    urlImage: action.payload,
  };
};

export const hasNavigatedTrue = (state = initialState) => {
  const userValue: string | null = localStorage.getItem("user");

  if (userValue) {
    const userObject = JSON.parse(userValue);

    userObject.hasNavigated = true;

    const updatedUserValue = JSON.stringify(userObject);

    localStorage.setItem("user", updatedUserValue);
  }

  return {
    ...state,
    hasNavigated: true,
  };
};

export const buyerId = (
  state = initialState,
  action: ActionWithPayload<string, number>
) => {
  return {
    ...state,
    idBuyer: action.payload,
  };
};

export const sellerId = (
  state = initialState,
  action: ActionWithPayload<string, number>
) => {
  return {
    ...state,
    idSeller: action.payload,
  };
};

export const userCompanySalesSummary = (
  state = initialState,
  action: salesSumAction
) => {
  return {
    ...state,
    companySalesSum: action.payload,
  };
};
export const userCompanySalesDetail = (
  state = initialState,
  action: salesDetailAction
) => {
  return {
    ...state,
    companySalesDetail: action.payload,
  };
};
export const getTopRated = (
  state = initialState,
  action: ActionWithPayload<string, any>
) => {
  return {
    ...state,
    topProducts: action.payload,
  };
};
