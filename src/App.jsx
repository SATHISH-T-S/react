import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Nav from "./components/Nav"
import Register from "./Register"
import Review from "./Review"
import None from "./None"

const App=()=>{
  return(
    <>
    <header> <Nav/></header>
  <main>  
<Routes>
<Route path="/login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
<Route path="review" element={<Review/>}/>
<Route path="/none" element={<None/>}/>

</Routes>

  </main>
    </>
  )
}
export default App;