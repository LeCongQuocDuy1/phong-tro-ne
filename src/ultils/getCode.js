import { getNumberPrice, getNumberArea } from "./getNumbers";

export const getCodePrice = (prices, min, max) => {
    return prices?.map((item) => {
        let arrMaxMin = getNumberPrice(item.value); // [1, 2]
        return {
            ...item,
            min:
                arrMaxMin.length === 2
                    ? arrMaxMin[0]
                    : arrMaxMin[0] === min
                    ? 0
                    : arrMaxMin[0],
            max:
                arrMaxMin.length === 2
                    ? arrMaxMin[1]
                    : arrMaxMin[0] === max
                    ? 999999999
                    : arrMaxMin[0],
        };
    });
};

export const getCodeArea = (areas, min, max) => {
    return areas?.map((item) => {
        let arrMaxMin = getNumberArea(item.value); // [20, 30]
        return {
            ...item,
            min:
                arrMaxMin.length === 2
                    ? arrMaxMin[0]
                    : arrMaxMin[0] === min
                    ? 0
                    : arrMaxMin[0],
            max:
                arrMaxMin.length === 2
                    ? arrMaxMin[1]
                    : arrMaxMin[0] === max
                    ? 999999999
                    : arrMaxMin[0],
        };
    });
};

export const getCodesPrice = (entry, prices, min, max) => {
    const priceWithMinMax = getCodePrice(prices, min, max);
    return priceWithMinMax.filter(
        (item) => item.min <= entry && entry < item.max
    );
};

export const getCodesArea = (entry, areas, min, max) => {
    const areaWithMinMax = getCodeArea(areas, min, max);
    return areaWithMinMax.filter(
        (item) => item.min <= entry && entry < item.max
    );
};
