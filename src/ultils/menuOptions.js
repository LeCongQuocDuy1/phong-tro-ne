import { icons } from "./fontawesome";
import { paths } from "./constants";

export const menus = [
    {
        id: 1,
        icon: icons.faPlusCircle,
        text: "Đăng tin cho thuê",
        path: `/he-thong/${paths.DANG_TIN_CHO_THUE}`,
    },
    {
        id: 2,
        icon: icons.faClipboardList,
        text: "Quản lý tin đăng",
        path: `/he-thong/${paths.QUAN_LY_TIN_DANG}`,
    },
    {
        id: 3,
        icon: icons.faWallet,
        text: "Nạp tiền",
        path: `/he-thong/${paths.NAP_TIEN}`,
    },
    {
        id: 4,
        icon: icons.faCreditCard,
        text: "Lịch sử nạp tiền",
        path: `/he-thong/${paths.LICH_SU_NAP_TIEN}`,
    },
    {
        id: 5,
        icon: icons.faUserCircle,
        text: "Thông tin cá nhân",
        path: `/he-thong/${paths.THONG_TIN_CA_NHAN}`,
    },
    {
        id: 6,
        icon: icons.faHeart,
        text: "Tin đã lưu",
        path: `/he-thong/${paths.TIN_DA_LUU}`,
    },
];

export const menus2 = [
    {
        id: 1,
        icon: icons.faPlusCircle,
        text: "Đăng tin cho thuê",
        path: `/he-thong/${paths.DANG_TIN_CHO_THUE}`,
    },
    {
        id: 2,
        icon: icons.faFile,
        text: "Quản lý tin đăng",
        path: `/he-thong/${paths.QUAN_LY_TIN_DANG}`,
    },
    {
        id: 3,
        icon: icons.faEdit,
        text: "Sửa thông tin cá nhân",
        path: `/he-thong/${paths.THONG_TIN_CA_NHAN}`,
    },
    {
        id: 4,
        icon: icons.faDollarSign,
        text: "Nạp tiền",
        path: `/he-thong/${paths.NAP_TIEN}`,
    },
    {
        id: 5,
        icon: icons.faClock,
        text: "Lịch sử nạp tiền",
        path: `/he-thong/${paths.LICH_SU_NAP_TIEN}`,
    },
    {
        id: 6,
        icon: icons.faCalendar,
        text: "Lịch sử thanh toán",
        path: `/he-thong/${paths.LICH_SU_THANH_TOAN}`,
    },
    {
        id: 7,
        icon: icons.faClipboard,
        text: "Bảng giá dịch vụ",
        path: `/he-thong/${paths.BANG_GIA_DICH_VU}`,
    },
    {
        id: 8,
        icon: icons.faComment,
        text: "Liên hệ",
        path: `/he-thong/${paths.LIEN_HE}`,
    },
];
