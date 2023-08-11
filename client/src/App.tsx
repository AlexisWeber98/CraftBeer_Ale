/// IMPORTS
import { Routes, Route, useLocation } from 'react-router-dom';  
// VIEWS
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home'
import Shop from './views/Shop/Shop';
import Detail from './views/Detail/Detail';
import User from './views/User/User';
import ChooseSingUp from './views/chooseSingUp/ChooseSingUp';
import BuyerSingUp from './views/buyerSingUp/BuyerSingUp';
import SellerSingUp from './views/sellerSingUp/SellerSingUp';
import Login from "./views/Login/Login";
import Cart from './views/Cart/Cart';
import AboutUs from './views/aboutUs/AboutUs';
import Contact from './views/Contact/Contact';
import Creation from './views/Creation/Creation';
import { Toaster } from 'react-hot-toast'
import Pay from './views/Pay/Pay';
// COMPONENTS
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/footer/Footer"
// STYLES
import './App.css';
import SuccessPay from './views/Pay/succesPay';

// APP



function App() {

  const location = useLocation();

  return (
    <div>
      <div><Toaster/></div>
      <div>
        {
        location.pathname !== "/" && 
        <NavBar/>
        }
      </div>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Landing />} />
          <Route path='/home' element={ <Home />} />
          <Route path='/shop' element={ <Shop />} />
          <Route path='/detail/:id' element={ <Detail />} />
          <Route path='/user/:id' element={ <User />} />
          <Route path='/cart' element={ <Cart />} />
          <Route path='/chooseSignUp' element={ <ChooseSingUp />} />
          <Route path='/buyerSignUp' element={ <BuyerSingUp />} />
          <Route path='/sellerSignUp' element={ <SellerSingUp />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/aboutUs' element={ <AboutUs />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/post' element={ <Creation />} />

          {/* ---------- pay ------*/}
          <Route path='/pay' element={<Pay/>}/>
          <Route path='/succes' element={<SuccessPay/>}/>


          {/* Otras rutas pueden definirse aquí */}
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
