import { React, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../ultils/fontawesome";
import { useSelector } from "react-redux";
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom";

const active =
    "rounded-[3px] cursor-pointer px-[20px] py-[10px] bg-[#e13427] text-white";
const not_active =
    "rounded-[3px] cursor-pointer hover:bg-[#d3d3d3] px-[20px] py-[10px] bg-white text-primary";

const Pagination = () => {
    // count -> tong so item, posts.length -> so luong item trong 1 trang
    const { count, posts } = useSelector((state) => state.post);
    const navigate = useNavigate();
    const [params] = useSearchParams();
    let entries = params.entries();
    const [currentPage, setCurrentPage] = useState(1);
    const [arrPage, setArrPage] = useState([]);

    useEffect(() => {
        let page = params.get("page");
        page && +page !== currentPage && setCurrentPage(+page);
        !page && setCurrentPage(1);
    }, [currentPage, params]);

    let maxPage = Math.ceil(count / process.env.REACT_APP_LIMIT);
    useEffect(() => {
        let end = currentPage + 2 > maxPage ? maxPage : currentPage + 2;
        let start = currentPage - 2 <= 0 ? 1 : currentPage - 2;
        let temp = [];
        for (let i = start; i <= end; i++) {
            temp.push(i);
        }
        setArrPage(temp);
    }, [count, posts, currentPage, maxPage]);

    const handleClickChangePage = (item) => {
        const append = (entries) => {
            let paramSearchs = [];
            params.append("page", item);
            for (let entry of entries) {
                paramSearchs.push(entry);
            }
            let searchParamObject = {};
            paramSearchs?.forEach((i) => {
                if (
                    Object.keys(searchParamObject)?.some(
                        (item) => item === i[0] && item !== "page"
                    )
                ) {
                    searchParamObject[i[0]] = [
                        ...searchParamObject[i[0]],
                        i[1],
                    ];
                } else {
                    searchParamObject = {
                        ...searchParamObject,
                        [i[0]]: [i[1]],
                    };
                }
            });
            return searchParamObject;
        };
        setCurrentPage(item);
        navigate({
            pathname: "",
            search: createSearchParams(append(entries)).toString(),
        });
    };

    return (
        <div className="w-full flex items-center justify-center gap-[6px] mt-[20px]">
            {currentPage >= 4 ? (
                <>
                    <span
                        className="rounded-[3px] cursor-pointer hover:bg-[#d3d3d3] px-[20px] py-[10px] bg-white text-primary"
                        onClick={() => handleClickChangePage(1)}
                    >
                        <FontAwesomeIcon icon={icons.faAngleDoubleLeft} />
                    </span>
                    <span className="rounded-[3px] hover:bg-[#d3d3d3] px-[20px] py-[10px] bg-white text-primary">
                        ...
                    </span>
                </>
            ) : currentPage < 4 ? (
                ""
            ) : (
                <>
                    <span
                        className="rounded-[3px] cursor-pointer hover:bg-[#d3d3d3] px-[20px] py-[10px] bg-white text-primary"
                        onClick={() => handleClickChangePage(1)}
                    >
                        1
                    </span>
                </>
            )}
            {arrPage.length > 0 &&
                arrPage.map((item) => {
                    return (
                        <span
                            key={item}
                            className={
                                item === currentPage ? active : not_active
                            }
                            onClick={() => handleClickChangePage(item)}
                        >
                            {item}
                        </span>
                    );
                })}
            {currentPage === maxPage ? (
                ""
            ) : (
                <>
                    <span className="rounded-[3px] hover:bg-[#d3d3d3] px-[20px] py-[10px] bg-white text-primary">
                        ...
                    </span>
                    <span
                        className="rounded-[3px] cursor-pointer hover:bg-[#d3d3d3] px-[20px] py-[10px] bg-white text-primary"
                        onClick={() => handleClickChangePage(maxPage)}
                    >
                        <FontAwesomeIcon icon={icons.faAngleDoubleRight} />
                    </span>
                </>
            )}
        </div>
    );
};

export default Pagination;
