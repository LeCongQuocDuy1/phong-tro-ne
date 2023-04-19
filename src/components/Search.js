import { React, useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import ModalList from "./ModalList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/";

const Search = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [content, setContent] = useState([]);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();
    const { provinces, prices, areas, categories } = useSelector(
        (state) => state.app
    );

    useEffect(() => {
        dispatch(actions.getCategories());
        dispatch(actions.getPrices());
        dispatch(actions.getAreas());
        dispatch(actions.getProvinces());
    }, [dispatch]);

    const handleShowModal = (content, text, title) => {
        setIsShowModal(!isShowModal);
        setContent(content);
        setText(text);
        setTitle(title);
    };

    return (
        <div className="">
            <div className="flex items-center justify-between mx-auto my-[10px] h-[60px] w-1100 p-[10px] rounded-[8px] bg-[#febb02]">
                <SearchItem
                    onClick={() =>
                        handleShowModal(
                            categories,
                            "categories",
                            "Chọn loại bất động sản"
                        )
                    }
                    icon={icons.faHotel}
                    content="Phòng trọ, nhà trọ"
                />
                <SearchItem
                    onClick={() =>
                        handleShowModal(
                            provinces,
                            "provinces",
                            "Chọn tỉnh thành"
                        )
                    }
                    icon={icons.faMapMarkedAlt}
                    content="Toàn quốc"
                />
                <SearchItem
                    onClick={() =>
                        handleShowModal(prices, "prices", "Chọn giá tiền")
                    }
                    icon={icons.faTag}
                    content="Chọn giá"
                />
                <SearchItem
                    onClick={() =>
                        handleShowModal(areas, "areas", "Chọn diện tích")
                    }
                    icon={icons.faVectorSquare}
                    content="Chọn diện tích"
                />
                <div className="rounded-[5px] bg-primary flex items-center p-[10px] hover:shadow-md cursor-pointer">
                    <span className="text-center text-white text-[12px] w-[160px] font-bold ellipsis">
                        <FontAwesomeIcon
                            icon={icons.faSearch}
                            className="text-[12px] mr-1 text-white"
                        />
                        Tìm kiếm
                    </span>
                </div>
            </div>
            {isShowModal && (
                <ModalList
                    content={content}
                    text={text}
                    title={title}
                    setIsShowModal={setIsShowModal}
                />
            )}
        </div>
    );
};

export default Search;
