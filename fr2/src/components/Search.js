import React from "react";
import Itemcard from "./Itemcard";
import { useState } from "react";

import data from './data';

const Search =()=>{
    const[filter,setFilter]=useState('')
    const searchText=(event)=>{
        setFilter(event.target.value);

    }
    let dataSearch=data.productData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    console.warn(filter)
    return(
        <section className="py-4 container">

            <div className="row justify-content-center">
                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto">
                        <label className="from-label h4">Search</label>
                        <input type="text" className="from-control" value={filter} onChange={searchText.bind(this)}/>
                    </div>
                </div>


            
                {dataSearch.map((item,index)=>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                    <div className="card p-0 overflow-hidden-h-100 shadow">
                        <img src={item.img} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text"> {item.desc}</p>
                            <div className='container w-100'></div>
                      
{/*                         
                        <div className="d-inline h-100 fs-5">Total Price</div> 
     <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>  */}
                            
                        </div>
                    </div>
                </div>
                


                    )
                
                })}
                
                
         
            </div>
        </section>
                )
        }


export default Search