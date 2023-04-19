import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import { Link } from "react-router-dom";

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
                                <Link
                                    to={formatVietnameseToEnglishString(
                                        category.value
                                    )}
                                    className="text-primary text-[14px] hover:text-bg2 cursor-pointer"
                                >
                                    {category.value}
                                </Link>
                            </div>
                            <div className="text-[#999] text-[13px]">
                                (49.124)
                            </div>
                        </div>
                    );
                })}
            {/* <div className="flex items-center justify-between w-full py-[5px] border-b-[1px] border-[#ccc] border-dashed">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={icons.faChevronRight}
                        className="text-[10px] text-[#999] mr-2 pt-[2px]"
                    />
                    <p className="text-primary text-[14px] hover:text-bg2 cursor-pointer">
                        Cho thuê phòng trọ
                    </p>
                </div>
                <div className="text-[#999] text-[13px]">(49.124)</div>
            </div>
            <div className="flex items-center justify-between w-full py-[5px] border-b-[1px] border-[#ccc] border-dashed">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={icons.faChevronRight}
                        className="text-[10px] text-[#999] mr-2 pt-[2px]"
                    />
                    <p className="text-primary text-[14px] hover:text-bg2 cursor-pointer">
                        Cho thuê nhà nguyên căn
                    </p>
                </div>
                <div className="text-[#999] text-[13px]">(49.124)</div>
            </div>
            <div className="flex items-center justify-between w-full py-[5px] border-b-[1px] border-[#ccc] border-dashed">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={icons.faChevronRight}
                        className="text-[10px] text-[#999] mr-2 pt-[2px]"
                    />
                    <p className="text-primary text-[14px] hover:text-bg2 cursor-pointer">
                        Cho thuê căn hộ
                    </p>
                </div>
                <div className="text-[#999] text-[13px]">(49.124)</div>
            </div>
            <div className="ml-[15px] flex items-center justify-between py-[5px] border-b-[1px] border-[#ccc] border-dashed">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={icons.faChevronRight}
                        className="text-[10px] text-[#999] mr-2 pt-[2px]"
                    />
                    <p className="text-primary text-[14px] hover:text-bg2 cursor-pointer">
                        Cho thuê căn hộ mini
                    </p>
                </div>
            </div>
            <div className="ml-[15px] flex items-center justify-between py-[5px] border-b-[1px] border-[#ccc] border-dashed">
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={icons.faChevronRight}
                        className="text-[10px] text-[#999] mr-2 pt-[2px]"
                    />
                    <p className="text-primary text-[14px] hover:text-bg2 cursor-pointer">
                        Cho thuê căn hộ dịch vụ
                    </p>
                </div>
            </div> */}
        </div>
    );
};

export default RightItem;
