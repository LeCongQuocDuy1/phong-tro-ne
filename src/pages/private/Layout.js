import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { paths } from "../../ultils/constants";
import { Nav, SideBarPrivate } from "../../components";

const Layout = () => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { currentData } = useSelector((state) => state.user);

    if (!isLoggedIn) return <Navigate to={`/${paths.LOGIN}`} replace={true} />;

    return (
        <div>
            <Nav />
            <div className="flex items-start w-full">
                <div className="w-[20%] h-screen bg-bg">
                    <SideBarPrivate currentData={currentData} />
                </div>
                <div className="w-[80%] bg-blue-300 px-[30px] py-[20px]">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
