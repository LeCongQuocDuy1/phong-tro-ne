import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reduxStore from "./redux";
import { BrowserRouter } from "react-router-dom";

// giup cho react delay viec render UI cho toi khi store duoc updated
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux"; // giup minh them store cua Redux vao app
const { store, persistor } = reduxStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
