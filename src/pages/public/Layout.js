import { React } from "react";
import { Outlet } from "react-router-dom";
import { Header, Nav, Footer, Search } from "../../components";
import { useSelector } from "react-redux";

const Layout = () => {
    const { currentData } = useSelector((state) => state.user);
    const { isLoggedIn } = useSelector((state) => state.auth)

    return (
        <div className="app bg-bg">
            <Header currentData={currentData} />
            <Nav />
            {isLoggedIn && <Search />}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
