import React from "react";

const InputForm = ({
    invalidFields,
    setInvalidFields,
    type,
    name,
    value,
    setValue,
    placeholder,
}) => {
    return (
        <>
            <input
                className="h-[45px] w-full bg-inputBg px-[10px] rounded-md text-[16px] text-primary font-bold outline-none border-none"
                type={type}
                value={value}
                onChange={(e) =>
                    setValue((prev) => ({ ...prev, [name]: e.target.value }))
                }
                onFocus={() => {
                    setInvalidFields([]);
                }}
                placeholder={placeholder}
                required
            />
            {invalidFields.length > 0 &&
                invalidFields.some((i) => i.name === name) && (
                    <small className="text-red-500 italic text-[13px]">
                        {invalidFields.find((i) => i.name === name)?.message}
                    </small>
                )}
        </>
    );
};

export default InputForm;
