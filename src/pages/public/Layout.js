import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Nav, Footer, Search } from "../../components";

const Layout = () => {
    return (
        <div className="app bg-bg">
            <Header />
            <Nav />
            <Search />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
