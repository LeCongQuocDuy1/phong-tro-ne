import { React, useEffect, useState } from "react";
import { getPostsLimit } from "../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import * as actions from "../store/actions/";
import RightItem from "./RightItem";
import RightItem2 from "./RightItem2";
import NewPost from "./NewPost";

const Right = () => {
    const { categories, prices, areas } = useSelector((state) => state.app);
    const [categoryCode, setCategoryCode] = useState("");
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();

    const formatVietnameseToEnglishString = (keyword) => {
        return keyword
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")
            .join("-");
    };

    useEffect(() => {
        let params = [];
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamObject = {};
        params?.map(
            (i) => (searchParamObject = { ...searchParamObject, [i[0]]: i[1] })
        );
        dispatch(getPostsLimit(searchParamObject));
    }, [dispatch, searchParams]);

    useEffect(() => {
        const category = categories?.find(
            (item) =>
                `/${formatVietnameseToEnglishString(item.value)}` ===
                location.pathname
        );
        if (category) {
            setCategoryCode(category.code);
        }
    }, [categories, categoryCode, location.pathname]);

    useEffect(() => {
        dispatch(actions.getCategories());
    }, [dispatch]);

    return (
        <div className="w-[30%]">
            <RightItem title="Danh mục cho thuê" categories={categories} />
            <RightItem2
                title="Xem theo giá"
                type={"priceCode"}
                content={prices}
            />
            <RightItem2
                title="Xem theo diện tích"
                type={"areaCode"}
                content={areas}
            />
            <NewPost title="Tin mới đăng" />
        </div>
    );
};

export default Right;
