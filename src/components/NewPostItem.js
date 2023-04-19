import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/vi";

const NewPostItem = ({ newPost }) => {
    const formatVietnameseToEnglishString = (keyword) => {
        return keyword
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")
            .join("-");
    };
    const imagePosts = JSON.parse(newPost.images.image);
    const createaAtFormatDate = (string) => {
        return moment(string).fromNow();
    };

    return (
        <div className="flex items-center justify-between w-full pt-[10px] border-b-[1px] border-[#ccc] border-solid">
            <div className="h-[70px] w-full bg-[#fff] flex items-start gap-[10px]">
                <Link
                    to={`/chitiet/${formatVietnameseToEnglishString(
                        newPost.title
                    )}/${newPost.id}`}
                    className="w-[65px] h-[60px] rounded-sm overflow-hidden cursor-pointer relative"
                >
                    <img
                        src={imagePosts[0]}
                        alt=""
                        className="rounded-md w-full h-full object-cover bg-center"
                    />
                </Link>
                <div className="flex-1 overflow-hidden h-full">
                    <Link
                        to={`/chitiet/${formatVietnameseToEnglishString(
                            newPost.title
                        )}/${newPost.id}`}
                        className="text-bg1 hover:underline cursor-pointer uppercase font-bold text-[12px] line-clamp-2 text-ellipsis overflow-hidden mb-[6px]"
                    >
                        {newPost.title}
                    </Link>
                    <div className="flex items-center justify-between">
                        <div className="text-[13px] font-bold text-[#16c784] whitespace-nowrap">
                            {newPost.attributes.price}
                        </div>
                        <div className="text-[13px] text-second whitespace-nowrap">
                            {createaAtFormatDate(newPost.createdAt)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPostItem;
