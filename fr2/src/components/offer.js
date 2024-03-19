// import './food.css';
// import img1 from './p1.jpg'
// import Burger from './burger';
// import React from "react";
// import {Link} from "react-router-dom"
// function Offer(){
   
    
//     return(
//       <>
//       <hr/>
//                <h1 class="kittu">Offer</h1>
//                <br/>
               
//         <div className="row">
//             <div className="col-md-6 jk">
//                 <h1 id="k1">Get Rs.100 off On<br />
//                      your First Zomato order
//                     of Rs.300 
//                 </h1>
                    
                    
//                 </div>
//                 <div className="col-md-6 j1">
//                 <Link  aria-current="page" to="/burger"> <img src={img1} width="700" height="700"class="responsive" alt="..." id="a1" /></Link>
                
                
               
//                 </div>
             
//         </div>
//         </>
        
//     )
// }
// export default Offer;
import  React from 'react';
import img1 from './offerProduct.png'
import {Link} from "react-router-dom"
import './food.css';

//import Image from "image";

import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh] row">
      {/* TEXT CONTAINER */}
      <div className=" justify-center  text-center col-md-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">Delicious Burger & French Fry</h1>
        <p className=" jk2">
        Get Rs.100 off On<br />
                      your First Zomato order
                    of Rs.300 
           
        </p><br/>
        <CountDown/>
        <br/>
        <br/>
        <Link  aria-current="page" to="/burger"> <button className="jk3">Order Now</button></Link>
      </div>
      {/* IMAGE CONTAINER */}
      <div className=" relative col-md-6 ">
      <img src={img1} alt=""  height="500" width="700"fill className="object-contain" class="responsive" />
      </div>
    </div>
  );
};

export default Offer;




