import React from "react";
// import { Footer, Navbar } from "../components";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Checkout = () => {
  // const state = useSelector((state) => state.handleCart);

  // const EmptyCart = () => {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-12 py-5 bg-light text-center">
  //           <h4 className="p-3 display-5">No item in Cart</h4>
  //           <Link to="/" className="btn btn-outline-dark mx-4">
  //             <i className="fa fa-arrow-left"></i> Continue Shopping
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // const ShowCheckout = () => {
  //   let subtotal = 0;
  //   let shipping = 30.0;
  //   let totalItems = 0;
  //   state.map((item) => {
  //     return (subtotal += item.price * item.qty);
  //   });

  //   state.map((item) => {
  //     return (totalItems += item.qty);
  //   });
    const [billingForm, setBillingForm] = useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      address2: "",
      TotalPrice:"",
      zip: "",
      nameoncard:"",
      creditcardnumber:"",
      expiration:"",
      cvv:""
    });
    let backend_api="http://localhost:9000/addfood"
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append('',billingForm.firstName,billingForm.lastName.title,billingForm.email,billingForm.address,billingForm.address2,billingForm.TotalPrice,billingForm.zip,billingForm.nameoncard,billingForm.creditcardnumber,billingForm.expiration,billingForm.cvv)
        Inputfields.append('firstName',billingForm.firstName)
        Inputfields.append('lastName',billingForm.lastName)
        Inputfields.append('email',billingForm.email)
        Inputfields.append('address',billingForm.address)
        Inputfields.append('address2',billingForm.address2)
        Inputfields.append('TotalPrice',billingForm.TotalPrice)
        Inputfields.append('zip',billingForm.zip)
        Inputfields.append('nameoncard',billingForm.nameoncard)
        Inputfields.append('creditcardnumber',billingForm.creditcardnumber)
        Inputfields.append('expiration',billingForm.expiration)
        Inputfields.append('cvv',billingForm.cvv)
        
        e.preventDefault();
        console.log(InputEvent)
        axios.post(backend_api,Inputfields).then((res)=>{
            console.log(res.body)
            if(res.status===200){
                alert("success")
            }
        })
        
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send billingForm data to the backend
      // axios.post('http://localhost:9000/addcheckout',{billingForm})
      // .then((res)=>{
      //   alert("success");
      // // console.log(res.data))
      // //   .catch((error) => {
      // //     // Handle errors
      // //     console.error(error);
      
      // });
      //   });
      
      
      axios.post('http://localhost:9000/addcheckout', { billingForm })
      .then((res) => {
        alert('successfully saved your address');
        window.location.href = '/';
      })
      .catch((error) => {
        // Handle registration error
        console.error('Registration failed:', error);
      });
    };

    return (
      <>
        {/* <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Billing address</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" novalidate onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,firstName:e.target.value})}/>
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,lastName:e.target.value})}/>
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="you@example.com"
                          required
                          onChange={(e)=>setBillingForm({...billingForm,email:e.target.value})}/>
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping
                          updates.
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Main St"
                          required
                          onChange={(e)=>setBillingForm({...billingForm,address:e.target.value})}/>
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Address 2{" "}
                          <span className="text-muted">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Apartment or suite"
                          onChange={(e)=>setBillingForm({...billingForm,address2:e.target.value})}/>
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>India</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          State
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Andhra Pradesh</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          Selected Food Item
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Chiken Freid Rice</option>
                          <option>Veg Freid Rice</option>
                          <option>Prawns Freid Rice</option>
                          <option>Chiken Biryani</option>
                          <option>Fish Biryani</option>
                          <option>Veg Biryani</option>
                          <option>Veg Burger</option>
                          <option>Chicken Burger</option>
                          <option>Chilli Panner</option>
                          <option>Paneer 65</option>
                          <option>Icecream</option>

                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid food.
                        </div>
                      </div>
                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Total Price
                          
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="TotalPrice"
                          placeholder="Apartment or suite"
                          onChange={(e)=>setBillingForm({...billingForm,TotalPrice:e.target.value})}/>
                      </div>


                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,zip:e.target.value})}/>
                        <div className="invalid-feedback">
                          Zip code required.
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Payment</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                          Name on card
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,nameoncard:e.target.value})}/>
                        <small className="text-muted">
                          Full name as displayed on card
                        </small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                          Credit card number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,creditcardnumber:e.target.value})}/>
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                          Expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,expiration:e.target.value})}/>
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                          onChange={(e)=>setBillingForm({...billingForm,cvv:e.target.value})}/>
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    {/* <button
                      // className="w-100 btn btn-primary "
                      // type="submit" disabled
                    > */}
                      <input type="submit" value="submit" style={{color:"white", backgroundColor:"red", borderColor:"red"}}/>
                    {/* </button> */}
                  </form>
                </div>
              </div>
            </div>
          {/* </div>
        </div> */}
      </>
    );
  };
  // return (
  //   <>
  //     <Navbar />
  //     <div className="container my-3 py-3">
  //       <h1 className="text-center">Checkout</h1>
  //       <hr />
  //       {state.length ? <ShowCheckout /> : <EmptyCart />}
  //     </div>
  //     <Footer />
  //   </>
  // );


export default Checkout;
