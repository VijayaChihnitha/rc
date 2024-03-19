// import React from "react";
// import {Link} from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// export default function Navbar(){
//     return(
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//   <div className="container-fluid">
//     <Link className="navbar-brand fs-1 fst-italic" to="/">Zomato</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/log">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/Registerform">Register</Link>
//         </li>
//         <li className="nav-item" style={{textAlign:"left", marginLeft: "900px", borderRadius:"14px"}}>
//         <Link className="nav-link" to="/Search"><button  className="btn-outline-light text-success bg-light">
//         <FontAwesomeIcon icon={faMagnifyingGlass} style={{ height: "35px", width: "30px" }} />
//           </button></Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/AnotherPage">Cart</Link>
//         </li>

//         <li className="nav-item">
//          <Link className="nav-link" to="/logout">Logout</Link>
//         </li> 
//         <li className="nav-item">
//           {localStorage.getItem('userdata_email')}
//         </li> 
//         {/* <li className="nav-item">
//          <Link className="nav-link" to="/logout">Logout</Link>
//         </li> 
//         */}
        
//       </ul>
//     </div>
//   </div>
// </nav>
//         </div>
//     )
// }



import React from "react";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark " id="tru">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/" ><span class="ku">Delight</span><i class="fa-solid fa-star" id="w"></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button  className="t"><Link className="nav-link active" aria-current="page" to="/"><span class="a">Home</span></Link></button>
        </li>
        <li className="nav-item">
        <button className="s"><Link className="nav-link" to="/log"><span class="a">Login</span></Link></button>
        </li>
        {/* <li className="nav-item">
        <button className="s"><Link className="nav-link" to="/Registerform"><span class="a">Register</span></Link></button>
        </li> */}
        <li className="nav-item" style={{textAlign:"left", marginLeft: "350px", borderRadius:"14px"}}>
        <button className="s"><i class="fa-solid fa-magnifying-glass"></i><Link  style={{textDecoration:"none"}} to="/Search"><span class="c">search</span>
          </Link></button>
        </li>
        <li className="nav-item">
          <button className="s"><i class="fa-solid fa-cart-shopping"></i>   <Link style={{textDecoration:"none"}} to="/AnotherPage"><span class="c">Cart</span></Link></button>
        </li>
        <li className="nav-item">
          {localStorage.getItem('userdata_email')}
        </li> 
        <li className="nav-item">
         <Link className="nav-link" to="/logout">Logout</Link>
        </li> 
        <li className="nav-item">
          <button className="sri"><Link to="/Profile"><i class="fa-solid fa-user"></i></Link></button>
        </li>
        < li className="nav-item">
         <Link className="nav-link" to="/Admin">Admin Login</Link>
      </li>

       
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}