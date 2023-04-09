import React from "react";
import { InputForm, Button } from "../../components";

const Login = () => {
    return (
        <div className="flex items-center justify-center h-full py-[100px]">
            <div className="m-auto w-[550px] bg-white rounded-lg pt-5 pb-[60px] px-6 shadow">
                <p className="text-[26px] text-primary font-bold mb-3">
                    Đăng nhập
                </p>
                <form className="">
                    <div className="mb-3 w-full">
                        <p className="text-[16px] text-second mb-1">
                            Tên đăng nhập
                        </p>
                        <InputForm
                            type="text"
                            name="username"
                            placeholder="Nhập tên đăng nhập..."
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <p className="text-[16px] text-second mb-1">Mật khẩu</p>
                        <InputForm
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu..."
                        />
                    </div>
                    <Button
                        backgroundColor="bg-primary"
                        content="Đăng nhập"
                        width="w-full"
                        fontBold="font-bold"
                        marginBottom="mb-[20px]"
                    />
                    <div className="flex items-center justify-between w-full">
                        <button className="text-[14px] text-bg1 hover:text-bg2 outline-none border-none">
                            Bạn quên mật khẩu?
                        </button>
                        <button className="text-[14px] text-bg1 hover:text-bg2 outline-none border-none">
                            Tạo tài khoản mới
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
