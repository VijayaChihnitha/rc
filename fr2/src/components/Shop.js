import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Shop(){
    const [data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:9000/getfood').then((res)=>{
        setData(res.data)
      })
    })
    
    return(
        <>
            <h1>New Products</h1>
         
            <div className="products-list">
            {
              data.map((ele,i)=>{
                return (
                  <div className="card" key={i}>
                    <img src={`http://localhost:9000/images/${ele.profilepic}`}   alt="" style={{height:"200px" ,width:"300px"}} />
                    <b>{ele.title}</b>
                    <b>{ele.price}</b>
                    <td><Link to={`/editform/${ele._id}`}><button >Edit</button></Link></td>
                    
                  </div>
                  
                )
            })
          }
          </div>
         
          </>
         
    )
}
export default Shop