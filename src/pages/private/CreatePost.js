import { React, useEffect, useState } from "react";
import { SelectAddress, InputForm2 } from "../../components";
import {
    apiGetPublicDistrict,
    apiGetPublicProvinces,
} from "../../services/app";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const targets = [
    {
        code: "Nam",
        value: "Nam",
    },
    {
        code: "Nữ",
        value: "Nữ",
    },
];

const CreatePost = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.app);
    const { currentData } = useSelector((state) => state.user);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [category, setCategory] = useState("");
    const [target, setTarget] = useState("");
    const [payload, setPayload] = useState({
        categoryCode: "",
        title: "",
        priceNumber: 0,
        areaNumber: 0,
        image: "",
        address: "",
        priceCode: "",
        areaCode: "",
        description: "",
        target: "",
        province: "",
    });

    useEffect(() => {
        const fetchGetPublicProvinces = async () => {
            const response = await apiGetPublicProvinces();
            if (response.status === 200) {
                setProvinces(response?.data?.results);
            }
        };

        fetchGetPublicProvinces();
    }, []);

    useEffect(() => {
        setDistrict("");
        const fetchGetPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province);
            if (response.status === 200) {
                setDistricts(response?.data?.results);
            }
        };

        province && fetchGetPublicDistrict(province);
        !province && setDistricts([]);
    }, [province]);

    useEffect(() => {
        setPayload((prev) => ({
            ...prev,
            address: `${
                district
                    ? `${
                          districts.find(
                              (item) => item.district_id === district
                          ).district_name
                      }, `
                    : ""
            }${
                province
                    ? `${
                          provinces.find(
                              (item) => item.province_id === province
                          ).province_name
                      }`
                    : ""
            }`,
            province: province
                ? `${
                      provinces.find((item) => item.province_id === province)
                          .province_name
                  }`
                : "",
            categoryCode: category,
            target: target,
        }));
    }, [province, district, districts, provinces, category, target]);

    useEffect(() => {
        dispatch(actions.getCategories());
    }, [dispatch]);

    console.log(payload);

    return (
        <div className="px-[30px] py-[10px] bg-white w-full">
            <div className="text-[30px] font-bold text-primary py-[10px] border-b-[1px] border-[#ccc]">
                Đăng tin mới
            </div>
            <div className="flex items-start gap-[15px] my-[10px]">
                <div className="w-[60%]">
                    <div className="text-[20px] font-bold text-primary mb-[15px]">
                        Địa chỉ cho thuê
                    </div>
                    <div className="w-full mb-[15px] flex items-center justify-between gap-[20px]">
                        <SelectAddress
                            value={province}
                            setValue={setProvince}
                            options={provinces}
                            label="Tỉnh/thành phố"
                            width="w-[50%]"
                            type="province"
                        />
                        <SelectAddress
                            value={district}
                            setValue={setDistrict}
                            label="Quận/huyện"
                            width="w-[50%]"
                            options={districts}
                            type="district"
                        />
                    </div>
                    <label
                        htmlFor="addres-correct"
                        className="text-[13px] font-bold text-primary mb-[12px]"
                    >
                        Địa chỉ chính xác
                    </label>
                    <input
                        id="addres-correct"
                        type="text"
                        className="text-[14px] px-[10px] py-[5px] w-full rounded-[3px] outline-none border-[1px] border-[#ccc] text-primary bg-[#d3d3d39d] mb-[30px]"
                        value={`${
                            district
                                ? `${
                                      districts.find(
                                          (item) =>
                                              item.district_id === district
                                      ).district_name
                                  }, `
                                : ""
                        }${
                            province
                                ? `${
                                      provinces.find(
                                          (item) =>
                                              item.province_id === province
                                      ).province_name
                                  }`
                                : ""
                        }`}
                        readOnly
                    />
                    <div className="text-[20px] font-bold text-primary mb-[15px]">
                        Thông tin mô tả
                    </div>
                    <div className="w-[50%] mb-[20px]">
                        <SelectAddress
                            value={category}
                            setValue={setCategory}
                            options={categories}
                            label="Loại chuyên mục"
                            type="categories"
                        />
                    </div>
                    <label
                        htmlFor="title"
                        className="text-[13px] font-bold text-primary mb-[12px]"
                    >
                        Tiêu đề
                    </label>
                    <input
                        value={payload.title}
                        onChange={(e) =>
                            setPayload((prev) => ({
                                ...prev,
                                title: e.target.value,
                            }))
                        }
                        id="title"
                        type="text"
                        className="text-[14px] px-[10px] py-[5px] w-full rounded-[3px] outline-none border-[1px] border-[#ccc] text-primary mb-[10px]"
                    />
                    <label
                        htmlFor="description"
                        className="text-[13px] font-bold text-primary mb-[12px]"
                    >
                        Nội dung mô tả
                    </label>
                    <textarea
                        value={payload.description}
                        onChange={(e) =>
                            setPayload((prev) => ({
                                ...prev,
                                description: e.target.value,
                            }))
                        }
                        id="description"
                        rows="10"
                        className="text-[14px] px-[10px] py-[5px] w-full rounded-[3px] outline-none border-[1px] border-[#ccc] text-primary mb-[10px]"
                    ></textarea>
                    <label
                        htmlFor="contact"
                        className="text-[13px] font-bold text-primary mb-[12px]"
                    >
                        Thông tin liên hệ
                    </label>
                    <input
                        id="contact"
                        type="text"
                        className="text-[14px] px-[10px] py-[5px] w-full rounded-[3px] outline-none border-[1px] border-[#ccc] text-primary bg-[#d3d3d39d] mb-[10px]"
                        value={currentData?.name || currentData?.username}
                        readOnly
                    />
                    <label
                        htmlFor="phone"
                        className="text-[13px] font-bold text-primary mb-[12px]"
                    >
                        Điện thoại
                    </label>
                    <input
                        id="phone"
                        type="text"
                        className="text-[14px] px-[10px] py-[5px] w-full rounded-[3px] outline-none border-[1px] border-[#ccc] text-primary bg-[#d3d3d39d] mb-[10px]"
                        value={currentData?.phone}
                        readOnly
                    />
                    <InputForm2
                        value={payload.priceNumber}
                        onChange={(e) =>
                            setPayload((prev) => ({
                                ...prev,
                                priceNumber: e.target.value,
                            }))
                        }
                        small="Hãy nhập đầy đủ số, ví dụ 1 triệu thì nhập là 1000000"
                        label="Giá cho thuê"
                        unit="đồng"
                    />
                    <InputForm2
                        value={payload.areaNumber}
                        onChange={(e) =>
                            setPayload((prev) => ({
                                ...prev,
                                areaNumber: e.target.value,
                            }))
                        }
                        label="Diện tích"
                        unit="m2"
                    />
                    <div className="w-[50%] mb-[20px]">
                        <SelectAddress
                            value={target}
                            setValue={setTarget}
                            options={targets}
                            label="Đối tượng cho thuê"
                            type="targets"
                        />
                    </div>
                    <div className="text-[20px] font-bold text-primary mb-[15px]">
                        Hình ảnh
                    </div>
                    <label
                        htmlFor="image"
                        className="block text-[13px] font-bold text-primary mb-[12px]"
                    >
                        Cập nhật hình ảnh rõ ràng sẽ cho thuê nhanh hơn
                    </label>
                    <div className="w-full">
                        <label
                            className="flex flex-col items-center justify-center w-full h-[200px] border-dashed border-[3px] border-[#ccc]"
                            htmlFor="image"
                        >
                            <img
                                src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-image-upload-icon-photo-upload-icon-png-image_5279794.jpg"
                                className="w-[100px] h-[100px] object-cover"
                                alt=""
                            />
                            <p>Thêm ảnh</p>
                        </label>
                        <input type="file" id="image" />
                    </div>
                </div>
                <div className="w-[40%]">
                    <div className="w-full h-[200px] bg-red-400"></div>
                    <div className="w-full text-yellow-500 bg-orange-100 p-[15px] mt-[15px]">
                        <div className="text-[18px] font-bold mb-[10px]">
                            Lưu ý khi đăng tin
                        </div>
                        <ul className="px-[15px]">
                            <li className="list-disc mb-[5px] text-[13px] font-bold">
                                Nội dung phải viết bằng tiếng Việt có dấu.
                            </li>
                            <li className="list-disc mb-[5px] text-[13px] font-bold">
                                Tiêu đề tin không dài quá 100 kí tự.
                            </li>
                            <li className="list-disc mb-[5px] text-[13px] font-bold">
                                Các bạn nên điền thông tin vào các mục đầy đủ để
                                tin đăng hiệu quả hơn.
                            </li>
                            <li className="list-disc mb-[5px] text-[13px] font-bold">
                                Để tin cậy và để tin đăng được nhiều người quan
                                tâm hơn, hãy sửa vị trí tin đăng tới đúng vị trí
                                của bạn trên bản đồ bằng cách kéo thả chuột trên
                                bản đồ.
                            </li>
                            <li className="list-disc mb-[5px] text-[13px] font-bold">
                                Tin đăng có hình ảnh đầy đủ và rõ ràng sẽ được
                                xem và gọi gấp nhiều lần so với tin đăng không
                                có hình ảnh. Hãy thêm ảnh để tin đăng được giao
                                dịch nhanh chóng.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
