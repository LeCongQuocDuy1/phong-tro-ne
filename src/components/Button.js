import React from "react";

const Button = ({
    cursorPointer = "",
    borderRadius = "",
    backgroundColor = "bg-primary",
    textColor = "text-white",
    fontSize = "text-[14px]",
    fontBold = "",
    width = "",
    height = "h-[40px]",
    marginBottom = "",
    marginRight = "",
    content,
    icon,
    onClick,
}) => {
    return (
        <button
            className={`hover:underline ${cursorPointer} ${borderRadius} ${height} ${width} ${fontSize} ${fontBold} ${textColor} ${backgroundColor} ${marginBottom} ${marginRight} rounded-md`}
            onClick={onClick}
        >
            {content || null}
            {icon || null}
        </button>
    );
};

export default Button;
