import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { apiGetAllCategories } from "../services/category";

const Nav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchAllCategories = async () => {
            const response = await apiGetAllCategories();
            const allCategories = response?.data?.response;
            setCategories(allCategories);
        };
        fetchAllCategories();
    }, []);

    const formatVietnameseToEnglishString = (keyword) => {
        return keyword
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .split(" ")
            .join("-");
    };

    return (
        <div className="h-[40px] w-full bg-primary sticky top-0">
            <ul className="flex items-center w-1100 mx-auto">
                <li className="">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "hover:bg-second bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                                : "hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                        }
                    >
                        Trang chủ
                    </NavLink>
                </li>
                {categories?.length > 0 &&
                    categories.map((category, index) => {
                        return (
                            <li className="" key={index}>
                                <NavLink
                                    to={formatVietnameseToEnglishString(
                                        category.value
                                    )}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "hover:bg-second bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                                            : "hover:bg-second transition-all h-[40px] leading-[40px] block px-[12px] text-white text-[14px] font-bold"
                                    }
                                >
                                    {category.value}
                                </NavLink>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Nav;
