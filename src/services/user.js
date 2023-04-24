import axiosConfig from "../axiosConfig";

export const apiGetCurrent = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: "/api/v1/user/get-current",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
