import React from "react";
import Itemcard from "./Itemcard";
import dataa from "./dataa";
// import axios from "axios";
// import { useCart } from "react-use-cart";
const Add=()=>{
    // const { addItem } = useCart();

    // const handleAddToCart = (item) => {
    //     axios.post("http://localhost:9000/add-to-cart", { itemData: item })
    //       .then(response => {
    //         console.log("Item added to cart:", response.data);
    //         addItem(item);
    //       })
    //       .catch(error => {
    //         console.error("Error adding item to cart:", error);
    //       });
    //   };
    console.warn(dataa.productData)
    return(
        <>
        <h1 className="text-center mt-3">All Items</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {dataa.productData.map((item, index)=>{
                    return(
                        <Itemcard 
                        img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item}
                        key={index}
                        // handleAddToCart={() => handleAddToCart(item)}
                        />

                    )
                })}
                

            </div>
        </section>

        </>
    )
}
export default Add;