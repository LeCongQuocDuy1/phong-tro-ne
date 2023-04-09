import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icons } from "../ultils/fontawesome";
// import logo from "../assets/logo-removebg-preview.png";

const Nav = () => {
    return (
        <div className="h-[40px] w-full bg-primary sticky top-0">
            <ul className="flex items-center w-1100 mx-auto">
                <li className="">
                    <a
                        href="/"
                        className="hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                    >
                        Trang chủ
                    </a>
                </li>
                <li className="">
                    <a
                        href="/"
                        className="hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                    >
                        Cho thuê phòng trọ
                    </a>
                </li>
                <li className="">
                    <a
                        href="/"
                        className="hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                    >
                        Nhà cho thuê
                    </a>
                </li>
                <li className="">
                    <a
                        href="/"
                        className="hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                    >
                        Cho thuê căn hộ
                    </a>
                </li>
                <li className="">
                    <a
                        href="/"
                        className="hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                    >
                        Cho thuê mặt bằng
                    </a>
                </li>
                <li className="">
                    <a
                        href="/"
                        className="hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                    >
                        Tìm người ở ghép
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
