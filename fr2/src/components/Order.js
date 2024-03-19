import React from "react";
// import { Footer, Navbar } from "../components";
// import { useSelector, useDispatch } from "react-redux";
// import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Order = () => {
    return(
    <>
  
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      
                     
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                       
                       
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span></span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        </li>

                    </ul>

                    <Link
                      to="/"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
              </>
           
      )
 

  
};

export default Order;

