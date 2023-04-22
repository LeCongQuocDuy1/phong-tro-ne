import { Routes, Route } from "react-router-dom";
import * as pages from "./pages/public/";
import { paths } from "./ultils/constants";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path={paths.LAYOUT} element={<pages.Layout />}>
                    <Route path={paths.LOGIN} element={<pages.Login />} />
                    <Route path={paths.STAR} element={<pages.Home />} />
                    <Route path={paths.HOME} element={<pages.Home />} />
                    <Route
                        path={paths.SEARCH_RESULT}
                        element={<pages.SearchResult />}
                    />
                    <Route
                        path={paths.DETAIL_POST__TITLE__POSTID}
                        element={<pages.DetailPost />}
                    />
                    <Route
                        path={paths.DETAIL_POST}
                        element={<pages.DetailPost />}
                    />
                    <Route
                        path={paths.CHO_THUE_PHONG_TRO}
                        element={<pages.Category />}
                    />
                    <Route
                        path={paths.NHA_CHO_THUE}
                        element={<pages.Category />}
                    />
                    <Route
                        path={paths.CHO_THUE_CAN_HO}
                        element={<pages.Category />}
                    />
                    <Route
                        path={paths.CHO_THUE_MAT_BANG}
                        element={<pages.Category />}
                    />
                    <Route
                        path={paths.TIM_NGUOI_O_GHEP}
                        element={<pages.Category />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
