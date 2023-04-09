import { React, useCallback } from "react";
import payments from "../assets/payments.jpg";
import logo from "../assets/logo-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { paths } from "../ultils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import Button from "./Button";

const Footer = () => {
    const navigate = useNavigate();
    const handleGotoHome = useCallback(() => {
        navigate(paths.HOME);
    }, [navigate]);

    return (
        <div className="bg-white rounded-lg shadow w-full pt-[40px] px-[60px]">
            <div className="w-1100 text-center mb-10">
                <p className="text-[20px] font-bold text-primary mb-[15px]">
                    Tại sao lại chọn PhongTroNe.com?
                </p>
                <p className="text-[14px] text-second w-[800px] mx-auto mb-[15px] leading-5">
                    Chúng tôi biết bạn có rất nhiều lựa chọn, nhưng
                    Phongtro123.com tự hào là trang web đứng top google về các
                    từ khóa:{" "}
                    <a href="/" className="text-bg1 font-bold hover:text-bg2">
                        cho thuê phòng trọ
                    </a>
                    ,{" "}
                    <a href="/" className="text-bg1 font-bold hover:text-bg2">
                        nhà trọ
                    </a>
                    ,{" "}
                    <a href="/" className="text-bg1 font-bold hover:text-bg2">
                        thuê nhà nguyên căn
                    </a>
                    ,
                    <a href="/" className="text-bg1 font-bold hover:text-bg2">
                        cho thuê căn hộ
                    </a>
                    ,{" "}
                    <a href="/" className="text-bg1 font-bold hover:text-bg2">
                        tìm người ở ghép
                    </a>
                    ,{" "}
                    <a href="/" className="text-bg1 font-bold hover:text-bg2">
                        cho thuê mặt bằng
                    </a>
                    ...Vì vậy tin của bạn đăng trên website sẽ tiếp cận được với
                    nhiều khách hàng hơn, do đó giao dịch nhanh hơn, tiết kiệm
                    chi phí hơn
                </p>
                <div className="flex items-center justify-center mb-[20px] gap-20">
                    <div className="">
                        <p className="text-[24px] font-bold text-primary">
                            116.998+
                        </p>
                        <p className="text-[14px] text-second">Thành viên</p>
                    </div>
                    <div className="">
                        <p className="text-[24px] font-bold text-primary">
                            103.348+
                        </p>
                        <p className="text-[14px] text-second">Tin đăng</p>
                    </div>
                    <div className="">
                        <p className="text-[24px] font-bold text-primary">
                            300.000+
                        </p>
                        <p className="text-[14px] text-second">
                            Lượt truy cập/tháng
                        </p>
                    </div>
                    <div className="">
                        <p className="text-[24px] font-bold text-primary">
                            2.500.000+
                        </p>
                        <p className="text-[14px] text-second">
                            Lượt xem/tháng
                        </p>
                    </div>
                </div>
                <p className="text-[20px] font-bold text-primary mb-[10px]">
                    Chi phí thấp, hiệu quả tối đa
                </p>
                <div className="flex items-center justify-center gap-1">
                    <FontAwesomeIcon
                        icon={icons.faStar}
                        className="text-[16px] mr-1 text-yellow-400 mb-[10px]"
                    />
                    <FontAwesomeIcon
                        icon={icons.faStar}
                        className="text-[16px] mr-1 text-yellow-400 mb-[10px]"
                    />
                    <FontAwesomeIcon
                        icon={icons.faStar}
                        className="text-[16px] mr-1 text-yellow-400 mb-[10px]"
                    />
                    <FontAwesomeIcon
                        icon={icons.faStar}
                        className="text-[16px] mr-1 text-yellow-400 mb-[10px]"
                    />
                    <FontAwesomeIcon
                        icon={icons.faStar}
                        className="text-[16px] mr-1 text-yellow-400 mb-[10px]"
                    />
                </div>
                <p className="text-[14px] text-second italic w-[800px] mx-auto mb-[15px] leading-5">
                    "Trước khi biết website phongtro123, mình phải tốn nhiều
                    công sức và chi phí cho việc đăng tin cho thuê: từ việc phát
                    tờ rơi, dán giấy, và đăng lên các website khác nhưng hiệu
                    quả không cao. Từ khi biết website phongtro123.com, mình đã
                    thử đăng tin lên và đánh giá hiệu quả khá cao trong khi chi
                    phí khá thấp, không còn tình trạng phòng trống kéo dài."
                </p>
                <p className="text-[14px] text-second italic w-[800px] mx-auto mb-[15px] leading-5">
                    Anh Duy (chủ hệ thống phòng trọ tại Tp.HCM)
                </p>
                <p className="text-[20px] font-bold text-primary mb-[15px]">
                    Bạn đang có phòng trọ / căn hộ cho thuê?
                </p>
                <p className="text-[14px] text-second w-[800px] mx-auto mb-[15px] leading-5">
                    Không phải lo tìm người cho thuê, phòng trống kéo dài
                </p>
                <Button
                    backgroundColor="bg-second"
                    content="Đăng tin ngay"
                    width="w-[130px]"
                    fontBold="font-bold"
                />
            </div>
            <div className="border-t w-1100 py-10 flex items-start">
                <div className="mr-5 w-[400px]">
                    <button onClick={handleGotoHome} className="">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[240px] h-full bg-contain"
                        />
                    </button>
                    <p className="text-[14px] text-second mt-[20px]">
                        Phongtro123.com tự hào có lượng dữ liệu bài đăng lớn
                        nhất trong lĩnh vực cho thuê phòng trọ.
                    </p>
                </div>
                <div className="flex items-start justify-between flex-1">
                    <ul className="">
                        <p className="text-[14px] font-bold text-primary mb-[5px]">
                            Về PHONGTRONE.COM
                        </p>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Trang chủ
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Giới thiệu
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Tin tức
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Quy chế hoạt động
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Chính sách bảo mật
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                    <ul className="">
                        <p className="text-[14px] font-bold text-primary mb-[5px]">
                            Hỗ trợ khách hàng
                        </p>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Câu hỏi thường gặp
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Hướng dẫn đăng tin
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Bảng giá dịch vụ
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Quy định đăng tin
                            </a>
                        </li>
                        <li className="mb-[5px]">
                            <a
                                href="/"
                                className="text-[14px] text-second hover:underline w-full"
                            >
                                Giải quyết khiếu nại
                            </a>
                        </li>
                    </ul>
                    <div className="">
                        <p className="text-[14px] font-bold text-primary mb-[7px]">
                            Liên hệ với chúng tôi
                        </p>
                        <div className="flex items-center gap-2 mb-[10px]">
                            <a
                                href="/"
                                className="rounded-full px-3 py-[7px] bg-primary"
                            >
                                <FontAwesomeIcon
                                    icon={icons.faSms}
                                    className="text-[16px] text-white"
                                />
                            </a>
                            <a
                                href="/"
                                className="rounded-full px-3 py-[7px] bg-second"
                            >
                                <FontAwesomeIcon
                                    icon={icons.faEnvelope}
                                    className="text-[16px] text-white"
                                />
                            </a>
                            <a
                                href="/"
                                className="rounded-full px-3 py-[7px] bg-green-500"
                            >
                                <FontAwesomeIcon
                                    icon={icons.faPhoneAlt}
                                    className="text-[16px] text-white"
                                />
                            </a>
                        </div>
                        <p className="text-[14px] font-bold text-primary mb-[8px]">
                            Phương thức thanh toán
                        </p>
                        <img
                            src={payments}
                            alt="Method Payments"
                            className="w-[200px] h-[30px] bg-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
