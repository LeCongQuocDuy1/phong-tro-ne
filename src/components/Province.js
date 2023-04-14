import React from "react";
import { location } from "../ultils/constants";

const Province = () => {
    return (
        <div className="h-[155px] w-1100 flex items-center justify-center gap-[20px] mb-[30px]">
            {location.map((item, index) => {
                return (
                    <div
                        className="w-[190px] rounded-[10px] shadow-md hover:shadow-lg text-bg1 hover:text-bg2 cursor-pointer"
                        key={index}
                    >
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-[110px] object-cover rounded-t-[10px] "
                        />
                        <div className="bg-white p-[10px] text-center rounded-b-[10px]">
                            <p className="text-[14px] font-bold">{item.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Province;
