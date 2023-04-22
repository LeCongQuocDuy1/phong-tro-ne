import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";

const Modal = ({
    content,
    text,
    title,
    setIsShowModal,
    handleSubmit,
    arrMinMax,
    queries,
}) => {
    const [persent1, setPersent1] = useState(
        text === "price" && arrMinMax?.priceArr
            ? arrMinMax?.priceArr[0]
            : text === "area" && arrMinMax?.priceArr
            ? arrMinMax?.areaArr[0]
            : 0
    );
    const [persent2, setPersent2] = useState(
        text === "price" && arrMinMax?.priceArr
            ? arrMinMax?.priceArr[1]
            : text === "area" && arrMinMax?.priceArr
            ? arrMinMax?.areaArr[1]
            : 100
    );

    const [active, setActive] = useState("");

    const handleClickTrack = (e) => {
        e.stopPropagation();
        const track = document.getElementById("track");
        const trackRect = track.getBoundingClientRect();
        let percent = Math.round(
            ((e.clientX - trackRect.left) * 100) / trackRect.width
        );
        if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
            setPersent1(percent);
        } else {
            setPersent2(percent);
        }
    };

    const handleClickItem = (code, value) => {
        setActive(code);
        let arrMaxMin;
        text === "price"
            ? (arrMaxMin = getNumbers(value))
            : (arrMaxMin = getNumbers2(value));
        if (arrMaxMin.length === 1) {
            if (+arrMaxMin[0] === 1 || +arrMaxMin[0] === 20) {
                setPersent1(0);
                setPersent2(
                    text === "price" ? convert15to100(1) : convert15to100(20)
                );
            }
            if (+arrMaxMin[0] === 15 || +arrMaxMin[0] === 90) {
                setPersent1(100);
                setPersent2(100);
            }
        }

        if (arrMaxMin.length === 2) {
            setPersent1(convert15to100(arrMaxMin[0]));
            setPersent2(convert15to100(arrMaxMin[1]));
        }
    };

    const handleBeforeSubmit = (e) => {
        let arrMinMax =
            persent1 <= persent2
                ? [convert100to15(persent1), convert100to15(persent2)]
                : [convert100to15(persent2), convert100to15(persent1)];
        handleSubmit(
            e,
            {
                [text]: `Từ ${arrMinMax[0]} - ${arrMinMax[1]} ${
                    text === "price" ? "triệu" : "m2"
                }`,
                [`${text}Number`]: arrMinMax,
            },
            {
                [`${text}Arr`]: [persent1, persent2],
            }
        );
    };

    const convert100to15 = (percent) => {
        if (text === "price") {
            return (Math.ceil(Math.round(percent * 1.5) / 5) * 5) / 10;
        } else if (text === "area") {
            return Math.ceil(Math.round(percent * 0.9) / 5) * 5;
        } else {
            return 0;
        }
    };
    const convert15to100 = (percent) => {
        let target = text === "price" ? 15 : text === "area" ? 90 : 1;
        return Math.floor((percent / target) * 100);
    };

    const getNumbers = (string) =>
        string
            .split(" ")
            .map((item) => +item)
            .filter((item) => !item === false);
    const getNumbers2 = (string) =>
        string
            .split("")
            .map((item) => +item * 10)
            .filter((item) => !item === false);

    useEffect(() => {
        if (text === "price" || text === "area") {
            const activeTrack = document.getElementById("track-active");
            if (persent2 <= persent1) {
                activeTrack.style.left = `${persent2}%`;
                activeTrack.style.right = `${100 - persent1}%`;
            } else {
                activeTrack.style.left = `${persent1}%`;
                activeTrack.style.right = `${100 - persent2}%`;
            }
        }
    }, [persent1, persent2, text]);
    return (
        <div
            onClick={() => setIsShowModal(false)}
            className="flex items-center fixed top-0 left-0 right-0 bottom-0 bg-overlay z-20"
        >
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setIsShowModal(true);
                }}
                className="m-auto w-[650px] h-[500px] bg-white rounded-lg"
            >
                <div className="flex items-center w-full border-b-[1px] border-[#ccc] px-[15px] py-[10px]">
                    <FontAwesomeIcon
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsShowModal(false);
                        }}
                        icon={icons.faArrowLeft}
                        className="text-[22px] text-primary mr-[39%] cursor-pointer"
                    />
                    <div className="text-primary text-[16px] font-bold">
                        {title}
                    </div>
                </div>
                {(text === "category" || text === "province") && (
                    <div className="px-[20px] py-[15px]">
                        <div className="flex items-center pb-[10px] mb-[10px] border-b-[1px] border-[#ccc] cursor-pointer hover:text-bg1">
                            <input
                                type="radio"
                                name={text}
                                id={text}
                                onClick={(e) =>
                                    handleSubmit(e, {
                                        [text]:
                                            text === "category"
                                                ? "Tất cả"
                                                : "Toàn quốc",
                                        [`${text}Code`]: null,
                                    })
                                }
                                className="text-[#ccc] mr-[8px] mt-[2px]"
                                defaultChecked={true}
                            />
                            <label className="text-primary text-[14px] cursor-pointer hover:text-bg1">
                                {text === "category" ? "Tất cả" : "Toàn quốc"}
                            </label>
                        </div>
                        {content?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex items-center pb-[10px] mb-[10px] border-b-[1px] border-[#ccc] cursor-pointer hover:text-bg1"
                                >
                                    <input
                                        type="radio"
                                        name={text}
                                        id={text}
                                        onClick={(e) =>
                                            handleSubmit(e, {
                                                [text]: item.value,
                                                [`${text}Code`]: item.code,
                                            })
                                        }
                                        defaultChecked={
                                            item.code === queries[`${text}Code`]
                                                ? true
                                                : false
                                        }
                                        className="text-[#ccc] mr-[8px] mt-[2px]"
                                    />
                                    <label className="text-primary text-[14px] cursor-pointer hover:text-bg1">
                                        {item.value}
                                    </label>
                                </div>
                            );
                        })}
                    </div>
                )}
                {(text === "price" || text === "area") && (
                    <>
                        <div className="px-[30px] py-[15px]">
                            <div className="flex-col items-center justify-center relative">
                                <div className="text-[20px] font-bold text-orange-500 text-center w-full mt-[10px] mb-[100px]">
                                    {persent1 === 100 && persent2 === 100
                                        ? `Trên ${convert100to15(persent1)} ${
                                              text === "price" ? "triệu+" : "m2"
                                          }`
                                        : `Từ ${
                                              persent1 <= persent2
                                                  ? convert100to15(persent1)
                                                  : convert100to15(persent2)
                                          } - ${
                                              persent2 >= persent1
                                                  ? convert100to15(persent2)
                                                  : convert100to15(persent1)
                                          } ${
                                              text === "price" ? "triệu" : "m2"
                                          }`}
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickTrack(e);
                                    }}
                                    id="track"
                                    className="w-full h-[4px] cursor-pointer bg-gray-300 rounded-lg absolute top-[70px] bottom-0"
                                ></div>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickTrack(e);
                                    }}
                                    id="track-active"
                                    className="h-[4px] cursor-pointer bg-orange-500 rounded-lg absolute top-[70px] left-0 right-0 bottom-0"
                                ></div>
                                <input
                                    type="range"
                                    max="100"
                                    min="0"
                                    step="1"
                                    className="w-full appearance-none pointer-events-none absolute top-[70px] bottom-0"
                                    value={persent1}
                                    onChange={(e) => {
                                        setPersent1(+e.target.value);
                                        active && setActive("");
                                    }}
                                />
                                <input
                                    type="range"
                                    max="100"
                                    min="0"
                                    step="1"
                                    className="w-full appearance-none pointer-events-none absolute top-[70px] bottom-0"
                                    value={persent2}
                                    onChange={(e) => {
                                        setPersent2(+e.target.value);
                                        active && setActive("");
                                    }}
                                />
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPersent1(0);
                                    }}
                                    className="cursor-pointer text-[14px] text-primary absolute top-[95px] left-0 bottom-0"
                                >
                                    0
                                </div>
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setPersent2(100);
                                    }}
                                    className="cursor-pointer text-[14px] text-primary absolute right-[-18px] top-[95px] bottom-0"
                                >
                                    {text === "price"
                                        ? "15 triệu+"
                                        : "trên 90 m2"}
                                </div>
                            </div>
                            <div className="text-left text-[14px] font-bold text-primary mb-[20px]">
                                Chọn nhanh
                            </div>
                            <div className="w-full flex flex-wrap items-center gap-[7px]">
                                {content?.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() =>
                                                handleClickItem(
                                                    item.code,
                                                    item.value
                                                )
                                            }
                                            className={`${
                                                item.code === active
                                                    ? "bg-blue-500 text-white"
                                                    : "bg-bg text-primary hover:bg-[#ccc]"
                                            } cursor-pointer w-[24%] rounded-[4px] text-center text-[14px] py-[4px] px-[10px]`}
                                        >
                                            {item.value}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div
                            onClick={handleBeforeSubmit}
                            className="mt-[136px] cursor-pointer hover:bg-orange-500 w-full bg-orange-400 text-center py-[10px] text-[16px] font-bold rounded-b-lg"
                        >
                            ÁP DỤNG
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
