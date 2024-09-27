import React from "react";
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Navbar from "../user/Navbar";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Flight from "../Booking/Flight";
import Support from "../support/Support";
import MyAccount from "../account/MyAccount";
import Country from "../country/Country";
import SignUp from "../Pages/SignUp";
import CancelBooking from "../cancel/CancelBooking";
import MainPage from "../MainPage";


const NavRoutes = () =>{
    return(
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}> 
                <Route index element={<MainPage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>    
                <Route path='/register' element={<Register/>}></Route>
                <Route  path='/flight' element={<Flight/>}/>  
                <Route  path='/support' element={<Support/>}/> 
                <Route path='/signup' element={<SignUp/>}></Route> 
                <Route path='/account' element={<MyAccount/>}/> 
                <Route path='/cancelbooking' element={<CancelBooking/>}/> 
                <Route path='/country' element={<Country/>}/>
                </Route>
                 
            </Routes>
            
         </BrowserRouter>
    );
}

export default NavRoutes;