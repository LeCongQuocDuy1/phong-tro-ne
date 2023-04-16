import userReducer from "./userReducer";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import appReducer from "./appReducer";
import { combineReducers } from "redux"; // gop cac reducer lai

// dung redux persist de luu giu lai cac state va du lieu duoi
// localstorage giup cho du lieu khong bi mat khi refresh lai trang web
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer } from "redux-persist";

// cau hinh cho persist
const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
};

// cau hinh cho authReducer
const authConfig = {
    ...commonConfig,
    key: "auth",
    whitelist: ["isLoggedIn", "token", "msg", "update"],
};

// whitelist de chon ra nhung state nao cua reducer duoc luu o localstorage
// blacklist de chon ra nhung state nao cua reducer khong luu o localstorage
// Neu trong config khong co whitelist hay blacklist thi mac dinh no se luu het
// state cua reducer do vao localstorage luon

// cai gi muon persist thi se cho no vao ham persistReducer
// ham persistReducer chua 2 tham so, 1 la config 2 la reducer muon persist
const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
    post: postReducer,
    app: appReducer,
});

export default rootReducer;
