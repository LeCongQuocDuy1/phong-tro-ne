import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { icons } from "../ultils/fontawesome";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
    const formatVietnameseToEnglishString = (keyword) => {
        return keyword
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")
            .join("-");
    };
    const imagePosts = JSON.parse(post.images.image);
    const descriptionPost = JSON.parse(post.description);
    const addressPost = post.address.split(",");
    const addressReal = `${addressPost[addressPost.length - 2]}, ${
        addressPost[addressPost.length - 1]
    }`;
    const [liked, setLiked] = useState(false);

    const handleStar = (star) => {
        let stars = [];
        for (let i = 1; i <= star; i++) {
            stars.push(
                <FontAwesomeIcon
                    icon={icons.faStar}
                    className="text-[14px] mr-[2px] text-yellow-400"
                />
            );
        }
        return stars;
    };
    return (
        <div className="">
            <div className="w-full h-[1px] bg-bg2"></div>
            <div className="h-[250px] w-full p-[15px] bg-[#fff9f3] flex items-start gap-[10px]">
                <Link
                    to={`/chitiet/${formatVietnameseToEnglishString(
                        post.title
                    )}/${post.id}`}
                    className="w-[280px] h-full rounded-sm overflow-hidden cursor-pointer relative"
                >
                    <img
                        src={imagePosts[0]}
                        alt=""
                        className="rounded-md w-full h-full object-cover bg-center"
                    />
                    <div className="flex items-center justify-between w-full absolute bottom-[10px] px-[10px]">
                        <span className="text-[14px] text-white px-[5px] py-[0px] rounded-[3px] bg-[rgba(0,0,0,.5)]">
                            {`${imagePosts.length} ảnh`}
                        </span>
                        <FontAwesomeIcon
                            icon={icons.faHeart}
                            className={
                                liked
                                    ? "text-bg2 text-[24px] hover:text-bg2 text-[rgba(231,231,231,0.67)]"
                                    : "text-[24px] hover:text-bg2 text-[rgba(231,231,231,0.67)]"
                            }
                            onClick={() => setLiked(!liked)}
                        />
                    </div>
                </Link>
                <div className="flex-1 overflow-hidden h-full">
                    <Link
                        to={`/chitiet/${formatVietnameseToEnglishString(
                            post.title
                        )}/${post.id}`}
                        className="text-bg2 hover:underline cursor-pointer uppercase font-bold text-[14px] line-clamp-2 text-ellipsis overflow-hidden mb-[6px]"
                    >
                        <div className="inline-block">
                            {handleStar(parseInt(post.star)).length > 0 &&
                                handleStar(parseInt(post.star)).map(
                                    (item, index) => {
                                        return (
                                            <div
                                                className="inline-block"
                                                key={index}
                                            >
                                                {item}
                                            </div>
                                        );
                                    }
                                )}
                        </div>
                        {post.title}
                    </Link>
                    <div className="flex items-center justify-between gap-[15px] mb-[10px]">
                        <div className="text-[16px] font-bold text-[#16c784] whitespace-nowrap">
                            {post.attributes.price}
                        </div>
                        <div className="text-[14px] whitespace-nowrap">
                            {post.attributes.acreage}
                        </div>
                        <div className="text-[14px] hover:underline cursor-pointer text-ellipsis overflow-hidden line-clamp-1">
                            {addressReal}
                        </div>
                        <div className="text-[13px] text-second whitespace-nowrap">
                            {post.attributes.published}
                        </div>
                    </div>
                    <div className="text-[14px] line-clamp-3 text-ellipsis overflow-hidden mb-[10px]">
                        {descriptionPost}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                src="https://phongtro123.com/images/default-user.png"
                                alt="Avatar"
                                className="w-[30px] h-[30px] rounded-full mr-[6px]"
                            />
                            <div className="text-[14px] text-second">
                                {post.users.name}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="px-[6px] py-[3px] text-[13px] rounded-[4px] cursor-pointer text-white bg-bg1 mr-[5px]">
                                Gọi {post.users.phone}
                            </div>
                            <div className="px-[6px] py-[3px] text-[12px] rounded-[4px] hover:bg-bg1 hover:text-white border-[1px] border-bg1 cursor-pointer text-bg1 bg-white">
                                Nhắn Zalo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;
