import { React, useEffect } from "react";
import NewPostItem from "./NewPostItem";
import { getPostsLimitDate } from "../store/actions/post";
import { useDispatch, useSelector } from "react-redux";

const NewPost = ({ title }) => {
    const dispatch = useDispatch();

    const { newPosts } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch(getPostsLimitDate());
    }, [dispatch]);

    return (
        <div className="w-full bg-white rounded-[8px] px-[20px] pt-[15px] pb-[30px] mb-[20px] border border-[#ccc]">
            <div className="text-primary text-[20px] font-bold mb-[10px]">
                {title}
            </div>
            {newPosts?.length > 0 &&
                newPosts.map((newPost) => {
                    return <NewPostItem key={newPost.id} newPost={newPost} />;
                })}
        </div>
    );
};

export default NewPost;
