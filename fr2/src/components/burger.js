

import React from "react";

export default function Burger() {
    const handleAddToCart =()=>{

    }
    return (
        <div className="container">
            <h1>Burger & Frenchfries</h1>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/free-photo/cheeseburger-with-french-fries-table_140725-8365.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais"height="200"   alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                        Burger
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>


            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637293.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" style={{height:"190px"}}  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                       veg Burger
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            
            
           
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/free-photo/burger-with-herbs-spicy-french-fries_140725-3341.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais " height="200"  alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/hamburger-soft-drink_672794-1405.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" height="200"  alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> </h5>
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
                

            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/group-hamburgers-glass-beer_81048-8242.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/junk-food-hd-8k-wallpaper-stock-photographic-image_853645-45927.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/free-photo/french-fries-portion-ai-generated-image_268835-5038.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" width="286" height="160"alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/hamburger-cup-mcdonald-s-with-fries-red-cup-soda_745528-2061.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" height="160"alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            </div>
        <h1>Starter</h1>
        <div className="row">
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/tasty-big-burger-set_854558-1699.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais" height="190"   alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/tray-scrumptious-foreign-fast-food-with-french-fries-soda_124507-143878.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais"   alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/premium-photo/burger-with-veal-cheese-vegetables-fast-food-wooden-background-top-view-free-space-your-text_187166-22955.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais"    alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src="https://img.freepik.com/free-photo/big-mac-burger-potatoes-sticks-dark-wooden-board_114579-2362.jpg?size=626&ext=jpg&uid=R111884587&ga=GA1.1.2017142575.1691211044&semt=ais"   alt="..." />
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
                        
            <button className={'btn btn-success justify-center ms-2'} onclick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            
            </div>
           
       
        </div>
        
       
        
    )
}