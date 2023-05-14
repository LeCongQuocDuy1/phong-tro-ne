import React from "react";

const InputForm2 = ({
    label,
    unit,
    small,
    onChange,
    type,
    value,
    name,
    invalidFields,
    setInvalidFields,
}) => {
    return (
        <div className="">
            <label
                htmlFor={`${unit}`}
                className="text-[13px] font-bold text-primary mb-[12px]"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    value={value || 0}
                    onChange={onChange}
                    onFocus={() => setInvalidFields([])}
                    id={`${unit}`}
                    type={type}
                    className=" text-[14px] px-[10px] py-[5px] w-full rounded-[3px] outline-none border-[1px] border-[#ccc] text-primary mb-[2px]"
                />
                <span className="absolute right-0 text-[14px] px-[10px] py-[5px] bg-[#ccc] rounded-r-[3px] border-[1px] border-[#ccc] text-primary">
                    {unit}
                </span>
            </div>
            <small className="mb-[10px]">{small}</small>
            <p className="text-[12px] text-red-500 mb-[10px]">
                {invalidFields?.some((item) => item.name === name) &&
                    invalidFields?.find((item) => item.name === name).message}
            </p>
        </div>
    );
};

export default InputForm2;
