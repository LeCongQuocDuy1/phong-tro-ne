import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components";
import background from "../../assets/background.png";
import { NavLink } from "react-router-dom";
import { paths } from "../../ultils/constants";
import * as actions from "../../store/actions";

const ManagePost = () => {
    const dispatch = useDispatch();
    const { postOfCurrent } = useSelector((state) => state.post);

    // Kiểm tra ngày hết hạn của bài đăng, nếu thời hạn của bài đăng lớn hơn ngày hiện tại thì vẫn còn hạn
    const checkStatus = (datetime) => {
        let todayInSeconds = new Date().getTime();
        let expiredDayInSeconds = datetime.getTime();

        return todayInSeconds <= expiredDayInSeconds
            ? "Đang hoạt động"
            : "Đã hết hạn";
    };

    useEffect(() => {
        dispatch(actions.getPostsLimitAdmin());
    }, [dispatch]);
    return (
        <div className="px-[30px] py-[10px] bg-white w-full">
            <div className="flex items-center justify-between w-full py-[10px] border-b-[1px] border-[#ccc]">
                <div className="text-[30px] font-bold text-primary">
                    Quản lý tin đăng
                </div>
                <div className="flex items-center">
                    <select
                        name=""
                        id=""
                        placeholder="Lọc theo trạng thái"
                        className="mx-[5px] px-[5px] py-[6px] border-[2px] border-[#000] rounded-[6px] outline-none cursor-pointer font-bold"
                    >
                        <option value="0">Tin đang hiển thị</option>
                        <option value="1">Tin hết hạn</option>
                        <option value="2">Tin đang ẩn</option>
                    </select>
                    <Button
                        content="Đăng tin mới"
                        borderRadius="rounded-[3px]"
                        backgroundColor="bg-green-500"
                        textColor="text-white"
                        fontBold="font-bold"
                        width="w-[100px]"
                        height="h-[40px]"
                        cursorPointer="cursor-pointer"
                    />
                </div>
            </div>
            <table className="my-[15px] w-full border-[1px] border-[#ccc]">
                <thead>
                    <tr className="">
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Mã tin
                        </th>
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Ảnh đại diện
                        </th>
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Tiêu đề
                        </th>
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Giá
                        </th>
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Ngày bắt đầu
                        </th>
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Ngày hết hạn
                        </th>
                        <th className="border-[1px] border-[#ccc] text-[16px] font-bold text-primary py-[5px] px-[8px] text-left">
                            Trạng thái
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {postOfCurrent.length !== 0 && (
                        <tr>
                            <td
                                colSpan={"7"}
                                className="border-[1px] border-[#ccc] text-[15px] text-primary py-[5px] px-[8px] text-left"
                            >
                                Bạn chưa có tin đăng nào cả.{" "}
                                <NavLink
                                    to={`/he-thong/${paths.DANG_TIN_CHO_THUE}`}
                                    className="text-blue-500"
                                >
                                    Bấm vào đây
                                </NavLink>{" "}
                                để bắt đầu đăng tin.
                            </td>
                        </tr>
                    )} */}
                    {postOfCurrent.length === 0 ? (
                        <tr>
                            <td
                                colSpan={"7"}
                                className="border-[1px] border-[#ccc] text-[15px] text-primary py-[5px] px-[8px] text-left"
                            >
                                Bạn chưa có tin đăng nào cả.{" "}
                                <NavLink
                                    to={`/he-thong/${paths.DANG_TIN_CHO_THUE}`}
                                    className="text-blue-500"
                                >
                                    Bấm vào đây
                                </NavLink>{" "}
                                để bắt đầu đăng tin.
                            </td>
                        </tr>
                    ) : (
                        postOfCurrent?.map((item) => {
                            return (
                                <tr key={item?.id}>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        {item?.overviews.code}
                                    </td>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        <img
                                            src={
                                                JSON.parse(
                                                    item?.images?.image
                                                )[0]
                                            }
                                            alt=""
                                            className="w-full h-10 object-cover"
                                        />
                                    </td>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        {item?.title}
                                    </td>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        {item?.attributes?.price}
                                    </td>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        {item?.overviews?.created}
                                    </td>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        {item?.overviews?.expired}
                                    </td>
                                    <td className="border-[1px] border-[#ccc] text-[14px] text-primary py-[5px] px-[8px] text-center">
                                        {checkStatus(
                                            new Date(
                                                item?.overviews?.expired?.split(
                                                    " "
                                                )[3]
                                            )
                                        )}
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
            <div className="mt-[100px] py-[25px] flex flex-col items-center w-full border-dashed border-[8px] border-[#d3d3d3] rounded-[30px]">
                <img
                    src={background}
                    alt=""
                    className="p-[20px] m-auto w-[400px] h-[200px]"
                />
                <p className="w-full text-[16px] text-primary font-semibold py-[10px] text-center mb-[20px]">
                    Liên hệ với chúng tôi nếu bạn cần hỗ trợ:
                </p>
                <div className="flex items-center justify-center w-full">
                    <div className="w-[33%] text-center">
                        <div className="text-[14px] font-bold text-orange-500 uppercase mb-[10px]">
                            Hỗ trợ thanh toán
                        </div>
                        <div className="text-[16px] font-bold text-primary mb-[5px]">
                            Điện thoại: 0865350416
                        </div>
                        <div className="text-[16px] font-bold text-primary mb-[5px]">
                            Zalo: 0865350416
                        </div>
                    </div>
                    <div className="w-[33%] text-center">
                        <div className="text-[14px] font-bold text-orange-500 uppercase mb-[10px]">
                            Hỗ trợ thanh toán
                        </div>
                        <div className="text-[16px] font-bold text-primary mb-[10px]">
                            Điện thoại: 0865350416
                        </div>
                        <div className="text-[16px] font-bold text-primary mb-[10px]">
                            Zalo: 0865350416
                        </div>
                    </div>
                    <div className="w-[33%] text-center">
                        <div className="text-[14px] font-bold text-orange-500 uppercase mb-[10px]">
                            Hỗ trợ thanh toán
                        </div>
                        <div className="text-[16px] font-bold text-primary mb-[10px]">
                            Điện thoại: 0865350416
                        </div>
                        <div className="text-[16px] font-bold text-primary mb-[10px]">
                            Zalo: 0865350416
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePost;
