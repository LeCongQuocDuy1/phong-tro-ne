import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

// Thunk sẽ giúp mình gọi api khi mình dispatch 1 action lên api
// Thay vì bình thường mình sẽ dispatch 1 object thì thunk sẽ giúp mình dispatch 1 cái hàm, rồi từ hàm đó mình có thể gọi api
import thunk from "redux-thunk";

const reduxStore = () => {
    // Tao ra store cua redux bang ham createStore, ham nay nhan 2 tham so
    // tham so dau tien la cac reducer, tham so thu hai la middleware.
    const store = createStore(rootReducer, applyMiddleware(thunk));

    // Tao ra persistStore cua redux-persist, no se dung de luu tru lai store cua Redux
    const persistor = persistStore(store);

    return { store, persistor };
};

export default reduxStore;
