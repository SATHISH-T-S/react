import { Link } from "react-router-dom"

const Nav=()=>{
  // const nav=[{lin:"LOGIN"},{lin:"REGISTER"},{lin:"REVIEW"},{lin:"none"}]
  return(
    <>
  <div class="ndiv1">
     
        
       <div class="l1"> <Link to="/login">LOGIN</Link></div>
       <div class="l1"> <Link to="/register">REGISTER</Link>  </div>
        <div class="l1"><Link to="/review">REVIEW</Link></div>
        <div class="l1"><Link to="/none">NONE</Link></div>
      
      
  
        
      
    </div>
  
    </>
    )
    }      
    export default Nav