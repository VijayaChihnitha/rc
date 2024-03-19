import { useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
const Food=()=>{
    const[formdata,setFormdata]=useState({
      
        profilepic:'',
        title:'',
        price:'',
        
    })
    console.log(formdata);
    let backend_api="http://localhost:9000/addfood"
    const handlesubmit=(e)=>{
        const Inputfields=new FormData()
        Inputfields.append('myfile',formdata.profilepic,formdata.profilepic.title)
        Inputfields.append('title',formdata.title)
        Inputfields.append('price',formdata.price)
        
        e.preventDefault();
        console.log(InputEvent)
        axios.post(backend_api,Inputfields).then((res)=>{
            console.log(res.body)
            if(res.status===200){
                alert("success")
            }
        })
        
    }
    // const handlesubmit=(e)=>{
    //     e.preventDefault();
        
       
    //     console.log(formdata)
    //     axios.post('http://localhost:9000/addfood',{formdata})
    //     .then((res)=>
    //     console.log(res.data))
    //     // alert("success"))
    // }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handlesubmit}>
            <label>Upload: </label>
                <input type="file"  name="myfile"   onChange={(e)=>setFormdata({...formdata,profilepic:e.target.files[0]})}/>
                <br/>
               
                <lable>title</lable>
                <input type="text" name="title" onChange={(e)=>setFormdata({...formdata,title:e.target.value})}/>
                <br/>
                <lable>Price</lable>
                <input type="text" name="number" onChange={(e)=>setFormdata({...formdata,price:e.target.value})}/>
                <br/>
                

                <input type="submit" value="submit"/>

            </form>
        </div>
    )
}
export default Food