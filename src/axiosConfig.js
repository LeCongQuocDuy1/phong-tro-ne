import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // gắn token vào header
        let token =
            window.localStorage.getItem("persist:auth") &&
            JSON.parse(
                window.localStorage.getItem("persist:auth")
            )?.token?.slice(1, -1);
        config.headers = {
            authorization: `Bearer ${token}`,
        };
        return config;
    },
    function (error) {
        // Do something with request error
        console.log(error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        // Do something with request error
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;
