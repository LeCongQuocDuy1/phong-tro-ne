import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Nav, Footer } from "../../components";

const Layout = () => {
    return (
        <div className="app bg-bg">
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
