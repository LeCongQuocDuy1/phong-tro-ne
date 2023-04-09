import { Routes, Route } from "react-router-dom";
import { Layout, Home, Login } from "./pages/public/";
import { paths } from "./ultils/constants";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path={paths.LAYOUT} element={<Layout />}>
                    <Route path={paths.HOME} element={<Home />} />
                    <Route path={paths.LOGIN} element={<Login />} />

                    <Route path={paths.STAR} element={<Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
