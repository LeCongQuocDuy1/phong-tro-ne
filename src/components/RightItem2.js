import { React } from "react";
import { useNavigate, useLocation, createSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";

const RightItem2 = ({ title, content, type }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleFilter = (code) => {
        navigate({
            pathname: location.pathname,
            search: createSearchParams({
                [type]: code,
            }).toString(),
        });
    };

    return (
        <div className="w-full bg-white rounded-[8px] px-[20px] pt-[15px] pb-[30px] mb-[20px] border border-[#ccc]">
            <div className="text-primary text-[20px] font-bold mb-[5px]">
                {title}
            </div>
            <div className="flex items-center flex-wrap w-[100%]">
                {content?.length > 0 &&
                    content.map((item, index) => {
                        return (
                            <div
                                onClick={() => handleFilter(item.code)}
                                key={index}
                                className="flex items-center w-[50%] border-b-[1px] py-[5px] border-[#ccc] border-dashed"
                            >
                                <FontAwesomeIcon
                                    icon={icons.faChevronRight}
                                    className="text-[10px] text-[#999] mr-2 pt-[2px]"
                                />
                                <p className="text-primary text-[14px] hover:text-bg2 cursor-pointer">
                                    {item.value}
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default RightItem2;
