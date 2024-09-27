import React from "react";
import TravellerDetails from "./flight_details/TravellerDetails";
import ModifySearchDetails from "./Booking/ModifySearchDetails";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { MdOutlineFlightLand } from "react-icons/md";
import FlightSearchResult from "./Booking/FlightSearchResult";
import Footer from "./footer/Footer"
import NavRoutes from "./user/NavRoutes"
import ImageSlider from "./slider/ImageSlider";
import Offer from "./homedata/Offer"
import Travelstories from "./homedata/TravelStories";


const MainPage =() =>{
return(

   <>
   <ImageSlider></ImageSlider>
   <Offer></Offer>
   <Travelstories></Travelstories>
   </>
   




)



}
export default MainPage;