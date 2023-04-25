import axiosConfig from "../axiosConfig";
import axios from "axios";

export const apiGetPrices = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: "/api/v1/price/all",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetAreas = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: "/api/v1/area/all",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axiosConfig({
                method: "GET",
                url: "/api/v1/province/all",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPublicProvinces = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://vapi.vnappmob.com/api/province",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetPublicDistrict = (id) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                method: "GET",
                url: `https://vapi.vnappmob.com/api/province/district/${id}`,
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
