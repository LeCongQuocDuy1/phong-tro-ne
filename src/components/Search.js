import React from "react";
import SearchItem from "./SearchItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";

const Search = () => {
    const handleDisplayModalList = () => {
        alert("modal list ne");
    };

    const handleDisplayModalProgress = () => {
        alert("modal progress ne");
    };

    return (
        <div className="">
            <div className="flex items-center justify-between mx-auto my-[10px] h-[60px] w-1100 p-[10px] rounded-[8px] bg-[#febb02]">
                <SearchItem
                    icon={icons.faHotel}
                    content="Phòng trọ, nhà trọ"
                    onClick={handleDisplayModalList}
                />
                <SearchItem
                    icon={icons.faMapMarkedAlt}
                    content="Toàn quốc"
                    onClick={handleDisplayModalList}
                />
                <SearchItem
                    icon={icons.faTag}
                    content="Chọn giá"
                    onClick={handleDisplayModalProgress}
                />
                <SearchItem
                    icon={icons.faVectorSquare}
                    content="Chọn diện tích"
                    onClick={handleDisplayModalProgress}
                />
                <div className="rounded-[5px] bg-primary flex items-center p-[10px] hover:shadow-md cursor-pointer">
                    <span className="text-center text-white text-[12px] w-[160px] font-bold ellipsis">
                        <FontAwesomeIcon
                            icon={icons.faSearch}
                            className="text-[12px] mr-1 text-white"
                        />
                        Tìm kiếm
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Search;
