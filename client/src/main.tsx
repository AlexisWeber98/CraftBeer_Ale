import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
<<<<<<< HEAD
axios.defaults.baseURL = 'http://localhost:3001'
//axios.defaults.baseURL = 'https://craftbeer.up.railway.app/'
=======
// axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://craftbeer.up.railway.app/'
>>>>>>> c63d64163749f902f9280a4bf2068b23707322a4
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);