import { React } from "react";

const SelectAddress = ({ label, width, options, value, setValue, type }) => {
    return (
        <div className={`${width}`}>
            <label
                htmlFor="select-address"
                className="text-[13px] font-bold text-primary mb-[12px]"
            >
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="select-address"
                className="cursor-pointer w-full text-[13px] border-[1px] border-[#d3d3d3] px-[5px] py-[4px] rounded-[3px]"
            >
                <option value="">{`--- Chọn ${label} ---`}</option>
                {type === "province"
                    ? options.map((item) => (
                          <option
                              key={item?.province_id}
                              value={item?.province_id}
                          >
                              {item?.province_name}
                          </option>
                      ))
                    : type === "district"
                    ? options.map((item) => (
                          <option
                              key={item?.district_id}
                              value={item?.district_id}
                          >
                              {item?.district_name}
                          </option>
                      ))
                    : type === "categories"
                    ? options.map((item, index) => (
                          <option key={index} value={item?.code}>
                              {item?.value}
                          </option>
                      ))
                    : type === "targets"
                    ? options.map((item, index) => (
                          <option key={index} value={item?.code}>
                              {item?.value}
                          </option>
                      ))
                    : ""}
            </select>
        </div>
    );
};

export default SelectAddress;
