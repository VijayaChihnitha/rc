import { useEffect } from "react"

const Logout = () =>{
    useEffect(()=>{
        localStorage.removeItem('userdata_email');
        alert("session cleared")
        window.location.href='/log'
    },[])
    return(
        <div>
            Logout Page
        </div>
    )
}
export default Logout