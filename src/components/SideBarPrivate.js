import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { menus2 } from "../ultils/menuOptions";
import { icons } from "../ultils/fontawesome";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const User = ({ currentData }) => {
    const dispatch = useDispatch();

    return (
        <div className="h-screen w-[20%] bg-bg pb-[40px] fixed top-[40px] left-[0] z-20">
            <div className="p-[20px]">
                <div className="flex items-center mb-[5px]">
                    <img
                        src={
                            currentData?.avatar ||
                            "https://phongtro123.com/images/default-user.png"
                        }
                        alt="default user"
                        className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="ml-[10px]">
                        <p className="text-[14px] text-primary font-bold">
                            {currentData?.name}
                        </p>
                        <p className="text-[14px] text-second">
                            {currentData?.phone}
                        </p>
                    </div>
                </div>
                <p className="text-[14px] text-primary">
                    Mã thành viên:{" "}
                    <span className="font-bold">
                        {currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}
                    </span>
                </p>
                <p className="text-[14px] text-primary mb-[10px]">
                    TK chính: <span className="font-bold">0 đ</span>
                </p>
                <div className="flex items-center gap-[10px]">
                    <Button
                        content="Nạp tiền"
                        borderRadius="rounded-[3px]"
                        backgroundColor="bg-yellow-400"
                        textColor="text-primary"
                        fontBold="font-bold"
                        width="w-[80px]"
                        height="h-[30px]"
                        cursorPointer="cursor-pointer"
                    />
                    <Button
                        content="Đăng tin"
                        borderRadius="rounded-[3px]"
                        backgroundColor="bg-red-400"
                        textColor="text-white"
                        fontBold="font-bold"
                        width="w-[80px]"
                        height="h-[30px]"
                        cursorPointer="cursor-pointer"
                    />
                </div>
            </div>
            <div className="">
                {menus2.map((item) => {
                    return (
                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                `${
                                    isActive ? "font-bold" : ""
                                } p-[20px] w-full h-[30px] hover:bg-[#ccc] text-primary flex items-center cursor-pointer`
                            }
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="text-[16px] mr-2"
                            />
                            <div className="text-[13px]">{item.text}</div>
                        </NavLink>
                    );
                })}
                <div
                    onClick={() => dispatch(actions.logout())}
                    className="p-[20px] w-full h-[30px] hover:bg-[#ccc] text-primary flex items-center cursor-pointer"
                >
                    <FontAwesomeIcon
                        icon={icons.faSignOut}
                        className="text-[16px] mr-2"
                    />
                    <div className="text-[13px]">Thoát</div>
                </div>
            </div>
        </div>
    );
};

export default User;
