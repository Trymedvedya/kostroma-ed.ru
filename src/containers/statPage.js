import              React from "react";
import              { Outlet } from "react-router-dom";
import              '../App.css';
import              SideBar from "../components/nonMainPage/sideBar";



 function StatPage() {
   

    return (
        <div className='stat_page_main'>
            <SideBar></SideBar>
            <Outlet></Outlet>
        </div>
    )
}
export default StatPage;