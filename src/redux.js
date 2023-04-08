import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

const reduxStore = () => {
    // Tao ra store cua redux bang ham createStore, ham nay nhan 2 tham so
    // tham so dau tien la cac reducer, tham so thu hai la middleware.
    const store = createStore(rootReducer);

    // Tao ra persistStore cua redux-persist, no se dung de luu tru lai store cua Redux
    const persistor = persistStore(store);

    return { store, persistor };
};

export default reduxStore;
