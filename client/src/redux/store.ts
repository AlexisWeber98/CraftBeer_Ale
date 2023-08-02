import { createStore, applyMiddleware, compose}  from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'


const composeEnhacer = compose; // esta linea es para conectar don la extensnion del navegador => REDUX D

 export const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))); // Esta linea nos permite hacer peticiones a un servidor