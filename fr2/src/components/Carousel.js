import React from "react";
// import { useState } from "react";
// import data from "./data";
// import Card from "./Card";
// const handleAddToCart =()=>{

// }

export default function Carousel(){
//   const[filter,setFilter]=useState('')
//     const searchText=(event)=>{
//         setFilter(event.target.value);

//     }
//     let dataSearch=data.cardData.filter(item=>{
//       return Object.keys(item).some(key=>
//           item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
//   });
  
  
    return(
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectfit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"4"}}>
    <form class="d-flex">
      {/* <input className="form-control me-2" type="search" placeholder="Search" value={filter} onChange={searchText.bind(this)} aria-label="Search"/> */}
      {/* <button className="btn btn-outline-success  text-white bg-success" type="submit" >Search</button> */}
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{filter:"brightness(80%)" }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{filter:"brightness(80%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{filter:"brightness(80%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  {/* <section className="py-4 container">

<div className="row justify-content-center">
  
  {dataSearch.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                    <div className="card p-0 overflow-hidden-h-100 shadow">
                        <img src={item.img} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text"> {item.desc}</p>
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
                        <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                            
                        </div>
                    </div>
                </div>

                    )
                
                })}
                </div>
                </section> */}
                
</div>
        </div>
    )
}
