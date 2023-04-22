import { React } from "react";
import { Province, Left, Right } from "../../components";

const Home = () => {
    return (
        <div className="mx-auto w-1100 mt-[10px] mb-[80px]">
            <header className="mb-[10px] w-full">
                <p className="text-[25px] text-primary font-bold mb-[5px]">
                    Kênh thông tin Phòng Trọ số 1 Việt Nam
                </p>
                <p className="text-[14px] text-primary">
                    Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin
                    cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh,
                    hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi
                    tháng.
                </p>
            </header>
            <Province />
            <div className="flex items-start w-1100 gap-[15px]">
                <Left />
                <Right />
            </div>
        </div>
    );
};

export default Home;
