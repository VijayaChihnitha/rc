import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Add from "../components/add";
import Cart from "../components/cart";
import Itemcard from "../components/Itemcard";
import { CartProvider } from "react-use-cart";
import {Link} from "react-router-dom"
import Offer from "../components/offer";

    
export default function Home() {
    useEffect(()=>{
        if(!localStorage.getItem('userdata_email')){
            alert("login first")
            window.location.href='/log'
        }
    },[])
    return (
        <div >
            <div><Navbar /></div>
            <div><menu/></div>
            <div><Carousel/></div>
            <div className='m-3'>
            <CartProvider>
        
        <Add/>
        <Offer/>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </li> */}
       
      </CartProvider>
               
                

            </div>
            <div><Footer /></div>
            {/* <div>Body</div> */}
        </div>

    )
}
