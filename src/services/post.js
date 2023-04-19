import axiosConfig from "../axiosConfig";

export const apiGetAllPosts = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: "/api/v1/post/all",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllPostsLimit = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: `/api/v1/post/limit/`,
                params: query,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

    export const apiGetAllPostsLimitDate = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: `/api/v1/post/new-post`,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
