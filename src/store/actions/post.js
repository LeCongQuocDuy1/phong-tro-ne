import actionTypes from "./actionTypes";
import {
    apiGetAllPosts,
    apiGetAllPostsLimit,
    apiGetAllPostsLimitDate,
    apiGetAllPostsLimitAdmin,
} from "../../services/post";

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetAllPosts();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS,
                posts: response?.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS,
                msg: response?.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS,
            posts: null,
        });
    }
};

export const getPostsLimit = (query) => async (dispatch) => {
    try {
        const response = await apiGetAllPostsLimit(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT,
                msg: response?.data.msg,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT,
            posts: null,
        });
    }
};

export const getPostsLimitDate = () => async (dispatch) => {
    try {
        const response = await apiGetAllPostsLimitDate();
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT_DATE,
                newPosts: response.data.response,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT_DATE,
                msg: response?.data.msg,
                newPosts: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT_DATE,
            newPosts: null,
        });
    }
};

export const getPostsLimitAdmin = (query) => async (dispatch) => {
    try {
        const response = await apiGetAllPostsLimitAdmin(query);
        if (response?.data.err === 0) {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT_ADMIN,
                posts: response.data.response?.rows,
                count: response.data.response?.count,
            });
        } else {
            dispatch({
                type: actionTypes.GET_POSTS_LIMIT_ADMIN,
                msg: response?.data.msg,
                posts: null,
            });
        }
    } catch (error) {
        dispatch({
            type: actionTypes.GET_POSTS_LIMIT_ADMIN,
            posts: null,
        });
    }
};
