import { React, useEffect } from "react";
import { Left, Right } from "../../components";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getPostsLimit } from "../../store/actions/post";

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        let params = [];
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamObject = {};
        params?.forEach((i) => {
            if (Object.keys(searchParamObject)?.some((item) => item === i[0])) {
                searchParamObject[i[0]] = [...searchParamObject[i[0]], i[1]];
            } else {
                searchParamObject = { ...searchParamObject, [i[0]]: [i[1]] };
            }
        });
        dispatch(getPostsLimit(searchParamObject));
    }, [dispatch, searchParams]);

    return (
        <div className="mx-auto w-1100 mt-[10px] mb-[80px]">
            <header className="my-[30px] w-full">
                <p className="text-[14px] text-primary">
                    Cho thuê phòng trọ Hồ Chí Minh Quận 4 Phường 1 Giá từ 7 - 10
                    triệu đồng, Diện tích từ 30m2 đến 50m2
                </p>
                <p className="text-[25px] text-primary font-bold mb-[5px]">
                    {location?.state?.titleSearch || "Ket qua tim kiem"}
                </p>
                <p className="text-[14px] text-primary">
                    {`${
                        location?.state?.titleSearch || "Ket qua tim kiem"
                    } , phòng mới xây, chính chủ gần chợ, trường học, siêu thị, cửa hàng tiện lợi, khu an ninh.`}
                </p>
            </header>

            <div className="flex items-start w-1100 gap-[15px]">
                <Left />
                <Right />
            </div>
        </div>
    );
};

export default SearchResult;
