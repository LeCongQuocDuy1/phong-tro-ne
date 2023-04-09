import React from "react";

const Button = ({
    backgroundColor = "bg-primary",
    textColor = "text-white",
    fontSize = "text-[14px]",
    fontBold = "",
    width = "",
    height = "h-[40px]",
    marginBottom = "",
    content,
    icon,
}) => {
    return (
        <button
            className={`hover:underline ${height} ${width} ${fontSize} ${fontBold} ${textColor} ${backgroundColor} ${marginBottom} rounded-md`}
        >
            {content || null}
            {icon || null}
        </button>
    );
};

export default Button;
