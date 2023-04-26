import { Routes, Route } from "react-router-dom";
import * as pages from "./pages/public/";
import * as privates from "./pages/private/";
import { paths } from "./ultils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "./store/actions";
function App() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        setTimeout(() => {
            isLoggedIn && dispatch(actions.getCurrents());
        }, 2000);
    }, [dispatch, isLoggedIn]);

    useEffect(() => {
        dispatch(actions.getCategories());
        dispatch(actions.getPrices());
        dispatch(actions.getAreas());
    }, [dispatch]);

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
                <Route path={paths.PRIVATE} element={<privates.Layout />}>
                    <Route
                        path={paths.DANG_TIN_CHO_THUE}
                        element={<privates.CreatePost />}
                    />
                    <Route
                        path={paths.QUAN_LY_TIN_DANG}
                        element={<privates.ManagePost />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
