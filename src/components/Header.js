import { React, useCallback, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import logo from "../assets/logo-removebg-preview.png";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { paths } from "../ultils/constants";
import Button from "./Button";

const Header = () => {
    const listRef = useRef();
    const [params] = useSearchParams();
    const page = +params.get("page");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state.auth);

    const handleGotoLogin = useCallback(
        (flag) => {
            navigate(paths.LOGIN, { state: { flag } });
        },
        [navigate]
    );

    useEffect(() => {
        listRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, [dispatch, page]);

    const handleGotoHome = useCallback(() => {
        navigate(paths.HOME);
    }, [navigate]);

    return (
        <div
            ref={listRef}
            className="h-[70px] w-1100 flex items-center justify-between mx-auto"
        >
            <button onClick={handleGotoHome} className="">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-[240px] h-full bg-contain"
                />
            </button>
            <div className="flex items-center">
                {isLoggedIn && (
                    <div className="flex items-center mr-[20px]">
                        <img
                            src="https://phongtro123.com/images/default-user.png"
                            alt="default user"
                            className="w-[40px] h-[40px] rounded-full"
                        />
                        <div className="ml-[5px]">
                            <p className="text-[14px]">
                                Xin chào,{" "}
                                <span className="font-bold">
                                    Lê Công Quốc Duy
                                </span>
                            </p>
                            <p className="text-[14px]">
                                Mã tài khoản:
                                <span className="font-bold">129775</span>. TK
                                Chính:
                                <span className="font-bold">0 VNĐ</span>
                            </p>
                        </div>
                    </div>
                )}
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
                    {!isLoggedIn && (
                        <>
                            <li className="mr-5">
                                <button
                                    className="hover:underline text-[14px] text-primary"
                                    onClick={() => handleGotoLogin(true)}
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
                                    onClick={() => handleGotoLogin(false)}
                                >
                                    <FontAwesomeIcon
                                        icon={icons.faSignIn}
                                        className="text-[16px] mr-1"
                                    />
                                    Đăng nhập
                                </button>
                            </li>
                        </>
                    )}
                </ul>
                {isLoggedIn && (
                    <>
                        <Button
                            marginRight="mr-[10px]"
                            backgroundColor="bg-primary"
                            width="w-[160px]"
                            content="Quản lý tài khoản"
                            icon={
                                <FontAwesomeIcon
                                    icon={icons.faHouseUser}
                                    className="text-[16px] ml-1"
                                />
                            }
                        />
                        <Button
                            marginRight="mr-[10px]"
                            backgroundColor="bg-second"
                            width="w-[100px]"
                            content="Đăng xuất"
                            icon={
                                <FontAwesomeIcon
                                    icon={icons.faSignOut}
                                    className="text-[16px] ml-1"
                                />
                            }
                            onClick={() => dispatch(actions.logout())}
                        />
                    </>
                )}
                <Button
                    backgroundColor="bg-success"
                    width="w-[120px]"
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
