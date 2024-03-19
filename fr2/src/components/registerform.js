// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import css from "./Home.module.css";
// const RegisterForm=()=>{
//     const[registerforms,setRegisterforms]=useState({
//         'username':'',
//         'email':'',
//         'password':'',
//         'location':''
        
        
//     })
//     const handlesubmit=(e)=>{
//         e.preventDefault();
        
//         if (registerform.username === '' || registerform.email === '' || registerform.password === '') {
//             alert('Please fill');
//           } else {
//             // Handle form submission or further actions here
//             alert('Thank you for register ');
//           }
//         console.log(registerform)
//         axios.post('http://localhost:9000/adduser',{registerform})
//         .then((res)=>
//         console.log(res.data))
//         alert("success")
//         window.location.href='/'
//     }
//     // const handlesubmit = (e) => {
//     //     e.preventDefault();
      
//     //     if (registerforms.username === '' || registerforms.email === '' || registerforms.password === '') {
//     //       alert('Please fill');
//     //     } else {
//     //       // Send a request to the server to check if the user already exists
//     //       axios
//     //         .post('http://localhost:9000/checkUser', registerforms) // Adjust the server endpoint
//     //         .then((res) => {
//     //           if (res.data.exists) {
//     //             // User already exists, display an alert
//     //             alert('User with the same email or username already exists.');
//     //           } else {
//     //             // User doesn't exist, proceed with registration
//     //             axios.post('http://localhost:9000/adduser', { registerforms })
//     //               .then((res) => {
//     //                 alert('Thank you for registering.');
//     //                 window.location.href = '/';
//     //               })
//     //               .catch((error) => {
//     //                 // Handle registration error
//     //                 console.error('Registration failed:', error);
//     //               });
//     //           }
//     //         })
//     //         .catch((error) => {
//     //           // Handle server error
//     //           console.error('Server error:', error);
//     //         });
//     //     }
//     //   };
      
//     // let backend_api="https://localhost:5000/adduser"
//     return(
      
//        <center>
//         <div className={css.bg}>
            
//             <form  onSubmit={handlesubmit}>
                
//             <br/><br/>
//                <i><label style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}> username:</label></i>
//                 <input type="text" name="username" onChange={(e)=>setRegisterforms({...registerforms,username:e.target.value})}/>
//                 <br/><br/><br/>
//                 <i><label style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}> Gmail:</label></i>
//                 <input type="email" name="email" onChange={(e)=>setRegisterforms({...registerforms,email:e.target.value})}/>
//                 <br/><br/><br/>
//                 <i><lable style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}>password:</lable></i>
//                 <input type="password" name="password" onChange={(e)=>setRegisterforms({...registerforms,password:e.target.value})}/>
//                 <br/><br/><br/>
//                 <i><label style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}> location:</label></i>
//                 <input type="text" name="username" onChange={(e)=>setRegisterforms({...registerforms,location:e.target.value})}/>
//                 <br/><br/><br/>
//                 {/* <label> date</label>
//                 <input type="number" name="date" onChange={(e)=>setRegisterforms({...registerforms,date:e.target.value})}/>
//                 <br/>
//                  */}
//                  <div className="my-3">
//                                  <p style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}>Already has an account?<button style={{borderRadius:"15px",boxShadow:"5px 5px 5px wheat",borderColor:"lightblue"}}><Link to="/log" className="text-decoration-underline text-info">Login</Link></button> </p>                             </div>
//                 <input type="submit" value="submit" style={{color:"white", backgroundColor:"red", borderColor:"red"}}/>

//             </form>
//         </div>
//         </center>
        
        
//     )
// }
// export default RegisterForm;