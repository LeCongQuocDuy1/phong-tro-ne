import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { InputForm, Button } from "../../components";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validate from "../../ultils/validate";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
    const [invalidFields, setInvalidFields] = useState([]);
    const [isRegister, setIsRegister] = useState(location.state?.flag);
    const [payload, setPayload] = useState({
        name: "",
        phone: "",
        password: "",
    });

    const hanldeSubmit = async () => {
        let finalPayload = isRegister
            ? validate(payload, setInvalidFields)
            : validate(
                  {
                      phone: payload.phone,
                      password: payload.password,
                  },
                  setInvalidFields
              );
        if (finalPayload === 0) {
            isRegister
                ? dispatch(actions.register(payload))
                : dispatch(actions.login(payload));
        }
    };

    useEffect(() => {
        setIsRegister(location.state?.flag);
    }, [location.state?.flag]);

    useEffect(() => {
        isLoggedIn && navigate("/");
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        msg && Swal.fire("Opps!", msg, "error");
    }, [msg, update]);

    return (
        <div className="flex items-center justify-center h-full py-[100px]">
            <div className="m-auto w-[550px] bg-white rounded-lg pt-5 pb-[60px] px-6 shadow">
                <p className="text-[26px] text-primary font-bold mb-3">
                    {isRegister ? "Tạo tài khoản mới" : "Đăng nhập"}
                </p>
                <div className="">
                    {isRegister && (
                        <div className="mb-3 w-full">
                            <p className="text-[16px] text-second mb-1">
                                Họ tên
                            </p>
                            <InputForm
                                setInvalidFields={setInvalidFields}
                                invalidFields={invalidFields}
                                type="text"
                                name={"name"}
                                value={payload.name}
                                setValue={setPayload}
                                placeholder="Nhập họ tên..."
                            />
                        </div>
                    )}
                    <div className="mb-3 w-full">
                        <p className="text-[16px] text-second mb-1">
                            Số điện thoại
                        </p>
                        <InputForm
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            type="text"
                            name={"phone"}
                            value={payload.phone}
                            setValue={setPayload}
                            placeholder="Nhập số điện thoại..."
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <p className="text-[16px] text-second mb-1">Mật khẩu</p>
                        <InputForm
                            setInvalidFields={setInvalidFields}
                            invalidFields={invalidFields}
                            type="password"
                            name={"password"}
                            value={payload.password}
                            setValue={setPayload}
                            placeholder="Nhập mật khẩu..."
                        />
                    </div>
                    <Button
                        backgroundColor="bg-primary"
                        content={isRegister ? "Đăng ký" : "Đăng nhập"}
                        width="w-full"
                        fontBold="font-bold"
                        marginBottom="mb-[20px]"
                        onClick={hanldeSubmit}
                    />
                    {isRegister ? (
                        <>
                            <p className="text-[14px] text-second mb-[10px]">
                                Bấm vào nút đăng ký tức là bạn đã đồng ý với
                                <span className="text-bg1 hover:text-bg2 ml-[5px]">
                                    quy định sử dụng
                                </span>
                                của chúng tôi
                            </p>
                            <p className="text-[14px] text-second">
                                Bạn đã có tài khoản?
                                <button
                                    className="text-[14px] text-bg1 hover:text-bg2 outline-none border-none ml-[5px]"
                                    onClick={() => {
                                        setIsRegister(!isRegister);
                                        setPayload({
                                            name: "",
                                            phone: "",
                                            password: "",
                                        });
                                        setInvalidFields([]);
                                    }}
                                >
                                    Đăng nhập ngay
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-between w-full">
                                <button className="text-[14px] text-bg1 hover:text-bg2 outline-none border-none">
                                    Bạn quên mật khẩu?
                                </button>
                                <button
                                    className="text-[14px] text-bg1 hover:text-bg2 outline-none border-none"
                                    onClick={() => {
                                        setIsRegister(!isRegister);
                                        setPayload({
                                            name: "",
                                            phone: "",
                                            password: "",
                                        });
                                        setInvalidFields([]);
                                    }}
                                >
                                    Tạo tài khoản mới
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
