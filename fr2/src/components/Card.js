// import React from "react";

// export default function Card() {
//     const handleAddToCart =()=>{

//     }
//     return (
//         <div className="container">
//             <h1>Pizza</h1>
//         <div className="row">
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0="   alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">
//                         Mix Veg Pizza
//                         </h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>


//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://source.unsplash.com/random/900×700/?pizza" style={{height:"190px"}}  alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">
//                         Chicken Cheese Pizza
//                         </h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
            
//             </div>
//             <h1 className="Biryani">Biryani/Rice</h1>
//         <div className="row">
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "   alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Chicken Fried Rice</h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc="  alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Veg Fried Rice</h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
                

//             </div>
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Fish Biryani</h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Chicken Biryani</h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
            

//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Veg Biryani</h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Prawns Fried Rice</h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <h1>Starter</h1>
//         <div className="row">
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs="   alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">
//                         Chilli Paneer
//                         </h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y="   alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">
//                         Paneer 65
//                         </h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"   alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">
//                         Chicken Tikka
//                         </h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-3">
//                 <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                     <img src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU="   alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">
//                         Paneer Tikka
//                         </h5>
//                         {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
//                         <div className='container w-100'></div>
//                         <select className="m-2 h-100  bg-success">
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}>{i + 1}</option>
//                                 )
//                             })}
//                         </select>
//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="full">Full</option>
//                         </select>
//                         <div className="d-inline h-100 fs-5">Total Price</div>
                        
//             <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
//                     </div>
//                 </div>
//             </div>
            
//             </div>
//         </div>
//     )
// }
// import React, { useState,useEffect } from 'react';
// import axios from 'axios';

// const imagePaths = [
//   'https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=',
//   'https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg',
//   'https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=',
//   'https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg',
// ];

// const Card = () => {
//     const [cart, setCart] = useState([]);
//     const [totalCost, setTotalCost] = useState(0);
  
//     useEffect(() => {
//       // Fetch the cart items from the backend
//       axios.get('http://localhost:8340/cart')
//         .then((response) => {
//           setCart(response.data);
//         })
//         .catch((error) => {
//           console.error('Error fetching cart items:', error);
//         });
  
//       // Calculate the total cost from the backend
//       axios.get('http://localhost:8340/calculate-total')
//         .then((response) => {
//           setTotalCost(response.data.totalCost);
//         })
//         .catch((error) => {
//           console.error('Error calculating total cost:', error);
//         });
//     }, []);
  
//     const handleAddToCart = (index) => {
//       // Add an item to the cart
//       const newItem = { name: 'Product Name', price: 10, quantity: 1 };
//       axios.post('http://localhost:8340/add-to-cart', newItem)
//         .then(() => {
//           // Refresh the cart items after adding to the cart
//           axios.get('http://localhost:8340/cart')
//             .then((response) => {
//               setCart(response.data);
//             });
//         })
//         .catch((error) => {
//           console.error('Error adding item to the cart:', error);
//         });
//     };


//   return (
//     <div className="row">
//       {imagePaths.slice(0, 5).map((imagePath, index) => (
//         <div key={index} className="col-md-2">
//           <div className="card mt-2" style={{ width: '18rem', height: '400px' }}>
//             <img src={imagePath} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">Biryani</h5>
             
//               <div className='container w-100'></div>
//               <select className="m-3 h-40 bg-success">
//                 {Array.from(Array(6), (e, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>
//               <select className='m-2 h-40 bg-success rounded'>
//                 <option value="half">Half</option>
//                 <option value="full">Full</option>
//               </select>
//              <br/>
//               <button
//                 className="btn btn-primary mt-0"
//                 onClick={() => handleAddToCart(index)}>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="col-md-12 mt-3">
//         <h3>Cart:</h3>
//         <ul>
          
//          {cart.map((item, index) => (
//             <li key={index}>{item.name} - ${item.price} x {item.quantity}</li>
//           ))}
         
//         </ul>
//       </div>
//     </div>
    
//   );
// };

// export default Card;
import React from "react";
import data from "./data";

export default function Card() {
    const handleAddToCart =()=>{

    }
    return (
        <div className="container">
            <h1>Pizza</h1>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/chinese-food-veg-pizza-picture-id1341905237?k=20&m=1341905237&s=612x612&w=0&h=Lbuza1Ig5cC1PwQhqTsq-Uac8hg1W-V0Wx4d4lqDeB0="   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Mix Veg Pizza
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>


            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://source.unsplash.com/random/900×700/?pizza" style={{height:"190px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Chicken Cheese Pizza
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            
            </div>
            <h1>Biryani/Rice</h1>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Chicken Fried Rice</h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc="  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Veg Fried Rice</h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
                

            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/king-fish-biryani-with-raita-served-in-a-golden-dish-isolated-on-dark-picture-id1409942571?b=1&k=20&m=1409942571&s=170667a&w=0&h=ozlMJf5hsDmS2sSdEdBWnoSZOEITef4qGMeWeq2lyTc=" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Fish Biryani</h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://cdn.pixabay.com/photo/2019/11/04/12/16/rice-4601049__340.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Chicken Biryani</h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/veg-biryani-picture-id1363306527?b=1&k=20&m=1363306527&s=170667a&w=0&h=VCbro7CX8nq2kruynWOCO2GbMGCea2dDJy6O6ebCKD0=" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Veg Biryani</h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Prawns Fried Rice</h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
        </div>
        <h1>Starter</h1>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-in-picture-id697316634?b=1&k=20&m=697316634&s=170667a&w=0&h=bctfHdYTz9q2dJUnuxGRDUUwC9UBWjL_oQo5ECVVDAs="   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Chilli Paneer
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/paneer-tikka-kabab-in-red-sauce-is-an-indian-dish-made-from-chunks-of-picture-id1257507446?b=1&k=20&m=1257507446&s=170667a&w=0&h=Nd7QsslbvPqOcvwu1bY0rEPZXJqwoKTYCal3nty4X-Y="   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Paneer 65
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Chicken Tikka
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/photos/paneer-tikka-at-skewers-in-black-bowl-at-dark-slate-background-paneer-picture-id1186759790?k=20&m=1186759790&s=612x612&w=0&h=e9MlX_7cZtq9_-ORGLPNU27VNP6SvDz7s-iwTxrf7wU="   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Paneer Tikka
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            
            </div>
           
        <h1>Desert</h1>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://source.unsplash.com/random/900×700/?Icecream"  width="285" height="200" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                       Icecream
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/id/1256313433/photo/blueberry-ice-cream-popsicles.jpg?s=612x612&w=0&k=20&c=rEaF5SXlOdKzNbjyZQWnM-2OcEAM4FxcLTar0gQBoBs="  width="285"  // Set the width in pixels
            height="200"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                     Icecream
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/id/1153046270/photo/berry-refreshing-ice-cream-scoops-on-plate.jpg?s=612x612&w=0&k=20&c=8e-V31RMcbAFRAsdsHjrH317hXgc5_bXrlKqFzHxpD8="  width="285"  // Set the width in pixels
            height="200"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                       Blueberry Icecream
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://media.istockphoto.com/id/1058819342/photo/dessert-with-ice-cream-and-wild-strawberry.jpg?s=612x612&w=0&k=20&c=QHBc22ptPH2lV_QDPlISfyFo0m4oMND3keCQG0osQY0="  width="285"  // Set the width in pixels
            height="200"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                       strawberry Icecream
                        </h5>
                        {/* <p className="card-text">Made using Indian masalas and Basmati rice. Barbequed pieces of Paneer/Chicken/Mutton were added.</p> */}
                        <div className='container w-100'></div>
                        <select className="m-2 h-100  bg-success">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">Total Price</div>
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}></button>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        
    )
}