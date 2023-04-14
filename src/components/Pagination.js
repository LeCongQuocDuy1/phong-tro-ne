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
    const [currentPage, setCurrentPage] = useState(+params.get("page") || 1);
    const [arrPage, setArrPage] = useState([]);

    let maxPage = Math.floor(count / posts.length);
    useEffect(() => {
        let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
        let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
        let temp = [];
        for (let i = start; i <= end; i++) {
            temp.push(i);
        }
        setArrPage(temp);
    }, [count, posts, currentPage, maxPage]);

    const handleClickChangePage = (item) => {
        setCurrentPage(item);
        navigate({
            pathname: "",
            search: createSearchParams({
                page: item,
            }).toString(),
        });
    };

    return (
        <div className="w-full flex items-center justify-center gap-[6px] mt-[20px]">
            {currentPage >= 3 ? (
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
            ) : (
                ""
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
