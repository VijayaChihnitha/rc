import { useState } from "react";
import axios from "axios";
import css from "./Home.module.css";
import { Link } from "react-router-dom";
const Log=()=>{
    const[loginform,setLoginform]=useState({
        
        'email':'',
        'password':''
        
        
        
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        
        // if (registerforms.username === '' || registerforms.email === '' || registerforms.password === '') {
        //     alert('Please fill');
        //   } else {
        //     // Handle form submission or further actions here
        //     alert('Thank you for register ');
        //   }
        // console.log(registerforms)
        axios.post('http://localhost:9000/addlogin',{loginform})
        .then((res)=>{
            if(res.status ===200){
                alert("success")
                console.log(res.data.email)
                localStorage.setItem('userdata_email',res.data.email)
                window.location.href='/'
            }
        })
        
    }
    // let backend_api="https://localhost:5000/adduser"
    // onSubmit={handlesubmit}
    return(
       <center>
        <div className={css.bg}>
            
            <form onSubmit={handlesubmit} >
                
            <br/><br/>
                
                <br/><br/><br/>
                <i><label style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}> Gmail:</label></i>
                <input type="email" name="email" onChange={(e)=>setLoginform({...loginform,email:e.target.value})}/>
                <br/><br/><br/>
                <i><lable style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}>password:</lable></i>
                <input type="password" name="password" onChange={(e)=>setLoginform({...loginform,password:e.target.value})}/>
                <br/><br/>
                <div className="my-3">
                                 <p style={{fontSize:"30px" ,color:"white", textShadow:"5px 5px 5px wheat"}}>New Here <button style={{borderRadius:"15px",boxShadow:"5px 5px 5px wheat",borderColor:"lightblue"}}><Link to="/registerform" className="text-decoration-underline text-info">signup</Link></button> </p>                      </div>
                
                <input type="submit" value="Login" style={{color:"white", backgroundColor:"red", borderColor:"red"}}/>

            </form>
        </div>
        </center>
        
    )
}
export default Log