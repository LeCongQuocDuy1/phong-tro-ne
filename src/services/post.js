import axiosConfig from "../axiosConfig";
import axios from "axios";

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

export const apiUploadImages = (images) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "POST",
                url: `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
                data: images,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiCreatePost = (payload) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "POST",
                url: `/api/v1/post/create-post`,
                data: payload,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAllPostsLimitAdmin = (query) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: `/api/v1/post/limit-admin/`,
                params: query,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
