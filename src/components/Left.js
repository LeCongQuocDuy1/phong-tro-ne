import { React, useEffect } from "react";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import { getPostsLimit } from "../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Left = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    const { posts } = useSelector((state) => state.post);

    useEffect(() => {
        let params = [];
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamObject = {};
        params?.map(
            (i) => (searchParamObject = { ...searchParamObject, [i[0]]: i[1] })
        );
        console.log(searchParamObject);
        dispatch(getPostsLimit(searchParamObject));
    }, [dispatch, searchParams]);
    return (
        <div className="w-[70%]">
            <div className="w-full bg-white rounded-[8px] pt-[15px] pb-[20px] border border-[#ccc]">
                <p className="text-primary font-bold text-[18px] mb-[15px] px-[20px]">
                    Danh sách tin đăng
                </p>
                <div className="flex items-center text-[14px] mb-[10px] px-[20px]">
                    Sắp xếp:
                    <div className="font-bold underline px-[6px] ml-[10px] py-[3px] text-[12px] rounded-[4px] hover:bg-slate-300 cursor-pointer bg-bg mr-[5px]">
                        Mặc định
                    </div>
                    <div className="px-[6px] py-[3px] text-[12px] rounded-[4px] hover:bg-slate-300 cursor-pointer bg-bg mr-[5px]">
                        Mới nhất
                    </div>
                    <div className="px-[6px] py-[3px] text-[12px] rounded-[4px] hover:bg-slate-300 cursor-pointer bg-bg mr-[5px]">
                        Có video
                    </div>
                </div>
                <div className="">
                    {posts?.length > 0 &&
                        posts.map((post) => {
                            return <PostItem key={post.id} post={post} />;
                        })}
                </div>
            </div>
            <Pagination />
        </div>
    );
};

export default Left;
