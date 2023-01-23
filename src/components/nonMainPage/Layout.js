import React, {Fragment} from "react";
import { Outlet } from "react-router-dom";
import NavSt from "./navSt";
import SideBar from "./sideBar";


function Layout() {
    return (
        <>
            <NavSt></NavSt>
            
            <main>
                <Outlet />
            </main>
        </>
    );
}
export default Layout;