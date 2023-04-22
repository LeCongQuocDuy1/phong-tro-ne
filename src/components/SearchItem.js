import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";

const SearchItem = ({ icon, content, onClick, defaultText }) => {
    return (
        <div
            className="rounded-[5px] bg-white flex items-center px-[10px] py-[10px] hover:shadow-md cursor-pointer"
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={icon}
                className="text-[12px] mr-1 text-second"
            />
            <span
                className={`text-primary w-[170px] text-[12px] ellipsis ${
                    content ? "font-bold" : ""
                }`}
            >
                {content || defaultText}
            </span>
            <FontAwesomeIcon
                icon={icons.faChevronRight}
                className="text-[12px] text-second"
            />
        </div>
    );
};

export default SearchItem;
