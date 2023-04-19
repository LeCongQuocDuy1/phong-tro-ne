import actionTypes from "./actionTypes";
import { apiGetAllCategories } from "../../services/category";
import { apiGetPrices, apiGetAreas, apiGetProvinces } from "../../services/app";

export const getCategories = () => async (dispatch) => {
    try {
        const response = await apiGetAllCategories();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                categories: response?.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_CATEGORIES,
                msg: response?.data.msg,
                categories: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_CATEGORIES,
            categories: null,
        });
    }
};

export const getPrices = () => async (dispatch) => {
    try {
        const response = await apiGetPrices();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PRICES,
                prices: response?.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PRICES,
                msg: response?.data.msg,
                prices: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRICES,
            prices: null,
        });
    }
};

export const getAreas = () => async (dispatch) => {
    try {
        const response = await apiGetAreas();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_AREAS,
                areas: response?.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_AREAS,
                msg: response?.data.msg,
                areas: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_AREAS,
            areas: null,
        });
    }
};

export const getProvinces = () => async (dispatch) => {
    try {
        const response = await apiGetProvinces();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_PROVINCES,
                provinces: response?.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_PROVINCES,
                msg: response?.data.msg,
                provinces: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PROVINCES,
            provinces: null,
        });
    }
};
