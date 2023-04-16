import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/";
import RightItem from "./RightItem";
import RightItem2 from "./RightItem2";

const Right = () => {
    const { prices, areas } = useSelector((state) => state.app);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getPrices());
        dispatch(actions.getAreas());
    }, [dispatch]);

    return (
        <div className="w-[30%]">
            <RightItem title="Danh mục cho thuê" />
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
        </div>
    );
};

export default Right;
