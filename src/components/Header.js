import { React, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import logo from "../assets/logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { paths } from "../ultils/constants";
import Button from "./Button";

const Header = () => {
    const navigate = useNavigate();

    const handleGotoLogin = useCallback(() => {
        navigate(paths.LOGIN);
    }, [navigate]);

    const handleGotoHome = useCallback(() => {
        navigate(paths.HOME);
    }, [navigate]);

    return (
        <div className="h-[70px] w-1100 flex items-center justify-between mx-auto">
            <button onClick={handleGotoHome} className="">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[240px] h-full bg-contain"
                />
            </button>
            <div className="flex items-center">
                <ul className="flex items-center">
                    <li className="mr-5">
                        <button className="hover:underline text-[14px] text-primary">
                            <FontAwesomeIcon
                                icon={icons.faHeart}
                                className="text-[16px] mr-1"
                            />
                            Yêu thích
                        </button>
                    </li>
                    <li className="mr-5">
                        <button
                            className="hover:underline text-[14px] text-primary"
                            onClick={handleGotoLogin}
                        >
                            <FontAwesomeIcon
                                icon={icons.faUserPlus}
                                className="text-[16px] mr-1"
                            />
                            Đăng ký
                        </button>
                    </li>
                    <li className="mr-5">
                        <button
                            className="hover:underline text-[14px] text-primary"
                            onClick={handleGotoLogin}
                        >
                            <FontAwesomeIcon
                                icon={icons.faSignIn}
                                className="text-[16px] mr-1"
                            />
                            Đăng nhập
                        </button>
                    </li>
                </ul>
                <Button
                    backgroundColor="bg-second"
                    width="w-[130px]"
                    content="Đăng tin mới"
                    icon={
                        <FontAwesomeIcon
                            icon={icons.faPlusCircle}
                            className="text-[16px] ml-1"
                        />
                    }
                />
            </div>
        </div>
    );
};

export default Header;
