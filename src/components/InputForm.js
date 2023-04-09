import React from "react";

const InputForm = ({ type, name, placeholder }) => {
    return (
        <input
            className="h-[45px] w-full bg-inputBg px-[10px] rounded-md text-[16px] text-primary font-bold outline-none border-none"
            type={type}
            name={name}
            placeholder={placeholder}
            required
        />
    );
};

export default InputForm;
