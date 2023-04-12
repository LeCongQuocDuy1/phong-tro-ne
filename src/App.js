import { Routes, Route } from "react-router-dom";
import * as pages from "./pages/public/";
import { paths } from "./ultils/constants";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path={paths.LAYOUT} element={<pages.Layout />}>
                    <Route path={paths.HOME} element={<pages.Home />} />
                    <Route path={paths.LOGIN} element={<pages.Login />} />
                    <Route
                        path={paths.CHO_THUE_PHONG_TRO}
                        element={<pages.ChoThuePhongTro />}
                    />
                    <Route
                        path={paths.NHA_CHO_THUE}
                        element={<pages.NhaChoThue />}
                    />
                    <Route
                        path={paths.CHO_THUE_CAN_HO}
                        element={<pages.ChoThueCanHo />}
                    />
                    <Route
                        path={paths.CHO_THUE_MAT_BANG}
                        element={<pages.ChoThueMatBang />}
                    />
                    <Route
                        path={paths.TIM_NGUOI_O_GHEP}
                        element={<pages.TimNguoiOGhep />}
                    />

                    <Route path={paths.STAR} element={<pages.Home />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
