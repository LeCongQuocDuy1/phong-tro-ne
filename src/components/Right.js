import { React } from "react";

import RightItem from "./RightItem";
import RightItem2 from "./RightItem2";
import NewPost from "./NewPost";

const Right = ({ prices, areas, categories }) => {
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
