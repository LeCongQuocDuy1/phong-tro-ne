import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import { NavLink } from "react-router-dom";

const RightItem = ({ title, categories }) => {
    const formatVietnameseToEnglishString = (keyword) => {
        return keyword
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")
            .join("-");
    };

    return (
        <div className="w-full bg-white rounded-[8px] px-[20px] pt-[15px] pb-[30px] mb-[20px] border border-[#ccc]">
            <div className="text-primary text-[20px] font-bold mb-[5px]">
                {title}
            </div>

            {categories?.length > 0 &&
                categories.map((category, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center justify-between w-full py-[5px] border-b-[1px] border-[#ccc] border-dashed"
                        >
                            <div className="flex items-center">
                                <FontAwesomeIcon
                                    icon={icons.faChevronRight}
                                    className="text-[10px] text-[#999] mr-2 pt-[2px]"
                                />
                                <NavLink
                                    to={formatVietnameseToEnglishString(
                                        category.value
                                    )}
                                    className="text-primary text-[14px] hover:text-bg2 cursor-pointer"
                                >
                                    {category.value}
                                </NavLink>
                            </div>
                            <div className="text-[#999] text-[13px]">
                                (49.124)
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default RightItem;
