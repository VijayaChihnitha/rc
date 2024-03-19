
import './App.css';
import Home from './screens/Home';
// import Menu from './components/menu';
import Login from './screens/Login';
// import Menu from './components/menu';
import Food from './components/food';
import Log from './components/log';
import Search from './components/Search.js';
// import Addtocart from './components/add to cart.js';

// import SignupForm from '../components/signupform';
import RegisterForm from './components/registerform';
import Burger from './components/burger.js';

import Card from './components/Card';
import Cart from './components/cart.js';
import Add from './components/add.js';
import {CartProvider} from "react-use-cart"
import Checkout from './components/Checkout.js';
import AnotherPage from './components/Anotherpage.js';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logout from './components/logout.js';
import Pro from './components/pro.js';
import Shopnew from './components/Shop.js';
import Shop from './components/Shop.js';
import Admin from './components/Admin.js';
import Data from './components/product.js';

// import Cart from './components/cart.js';


function App(){
  return (
    <Router>
      <div>
      
      {/* <Menu /> */}
       {/* <CartProvider>
        <Add/>
        <Cart/>
      </CartProvider>  */}
    <Routes>
    <Route path="/"element={<Home />} />
    <Route path="/Login"element={<Login />} />
    {/* <Route path="/menu"element={<Menu />} /> */}
    <Route path='/registerform' element={<RegisterForm />}/>
    <Route path='/log'element={<Log />}/>
    <Route path='/food'element={<Food />}/>
    <Route path='/Card'element={<Card/>}/>
    <Route path='/Search'element={<Search/>}/>
    <Route path='/cart'element={<Cart/>}/>
    <Route path='/Checkout'element={<Checkout/>}/>
    <Route path='/Anotherpage'element={<AnotherPage/>}/>
    <Route path='/logout'element={<Logout/>}/>
    <Route path='/pro'element={<Pro/>}/>
    <Route path='/burger'element={<Burger/>}/>
    <Route path='/Shop'element={<Shop/>}/>
    <Route path='/Admin'element={<Admin/>}/>
    <Route path='/product'element={<Data/>}/>


    {/* <Route path='/Addtocard'element={<Addtocard/>}/> */}
   


    {/* <Route path='/signupform'element={<SignupForm />}/> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
