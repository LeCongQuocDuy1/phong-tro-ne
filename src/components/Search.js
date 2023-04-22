import { React, useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { paths } from "../ultils/constants";
import * as actions from "../store/actions/";

const Search = () => {
    const [isShowModal, setIsShowModal] = useState(false);
    const [content, setContent] = useState([]);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [queries, setQueries] = useState([]);
    const [arrMinMax, setArrMinMax] = useState({});
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { provinces, prices, areas, categories } = useSelector(
        (state) => state.app
    );

    useEffect(() => {
        if (!location.pathname.includes(paths.SEARCH_RESULT)) {
            setArrMinMax({});
            setQueries({});
        }
    }, [location]);

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
    const handleSearch = () => {
        const queriesCodes = Object.entries(queries)
            .filter(
                (item) => item[0].includes("Code") || item[0].includes("Number")
            )
            .filter((item) => item[1]);
        let queriesCodeObj = {};
        queriesCodes.forEach((item) => {
            queriesCodeObj[item[0]] = item[1];
        });

        const queriesTexts = Object.entries(queries)
            .filter(
                (item) =>
                    !item[0].includes("Code") || !item[0].includes("Number")
            )
            .filter((item) => item[1]);
        let queriesTextObj = {};
        queriesTexts.forEach((item) => {
            queriesTextObj[item[0]] = item[1];
        });

        let titleSearch = `${
            queriesTextObj.category
                ? queriesTextObj.category
                : "Cho thuê tất cả"
        } ${queriesTextObj.province ? `tỉnh ${queriesTextObj.province}` : ""} ${
            queriesTextObj.price ? `giá ${queriesTextObj.price}` : ""
        } ${queriesTextObj.area ? `diện tích ${queriesTextObj.area}` : ""}`;

        navigate(
            {
                pathname: paths.SEARCH_RESULT,
                search: createSearchParams(queriesCodeObj).toString(),
            },
            { state: { titleSearch } }
        );
    };

    const handleSubmit = (e, query, arrMaxmin) => {
        e.stopPropagation();
        setQueries((prev) => ({ ...prev, ...query }));
        setIsShowModal(!isShowModal);
        arrMaxmin && setArrMinMax((prev) => ({ ...prev, ...arrMaxmin }));
    };

    return (
        <div className="">
            <div className="flex items-center justify-between mx-auto my-[10px] h-[60px] w-1100 p-[10px] rounded-[8px] bg-[#febb02]">
                <SearchItem
                    onClick={() =>
                        handleShowModal(
                            categories,
                            "category",
                            "Chọn loại bất động sản"
                        )
                    }
                    icon={icons.faHotel}
                    content={queries.category}
                    defaultText="Phòng trọ, nhà trọ"
                />
                <SearchItem
                    onClick={() =>
                        handleShowModal(
                            provinces,
                            "province",
                            "Chọn tỉnh thành"
                        )
                    }
                    icon={icons.faMapMarkedAlt}
                    content={queries.province}
                    defaultText="Toàn quốc"
                />
                <SearchItem
                    onClick={() =>
                        handleShowModal(prices, "price", "Chọn giá tiền")
                    }
                    icon={icons.faTag}
                    content={queries.price}
                    defaultText="Chọn giá tiền"
                />
                <SearchItem
                    onClick={() =>
                        handleShowModal(areas, "area", "Chọn diện tích")
                    }
                    icon={icons.faVectorSquare}
                    content={queries.area}
                    defaultText="Chọn diện tích"
                />
                <div
                    onClick={handleSearch}
                    className="rounded-[5px] bg-primary flex items-center p-[10px] hover:shadow-md cursor-pointer"
                >
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
                <Modal
                    content={content}
                    queries={queries}
                    text={text}
                    arrMinMax={arrMinMax}
                    title={title}
                    handleSubmit={handleSubmit}
                    setIsShowModal={setIsShowModal}
                />
            )}
        </div>
    );
};

export default Search;
