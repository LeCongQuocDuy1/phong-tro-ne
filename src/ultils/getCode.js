import { getNumberPrice, getNumberArea } from "./getNumbers";

export const getCodePrice = (values) => {
    let arr = [];
    return values.map((item) => {
        let arrMaxMin = getNumberPrice(item.value); // [1, 2]
        if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
        let sorterArr = arr.sort();
        return {
            ...item,
            min: sorterArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max:
                sorterArr.indexOf(arrMaxMin[0]) === 0
                    ? arrMaxMin[0]
                    : sorterArr.indexOf(arrMaxMin[0]) === 1
                    ? 99999999
                    : arrMaxMin[1],
        };
    });
};

export const getCodeArea = (values) => {
    let arr = [];
    return values.map((item) => {
        let arrMaxMin = getNumberArea(item.value); // [1, 2]
        if (arrMaxMin.length === 1) arr.push(arrMaxMin[0]);
        let sorterArr = arr.sort();
        return {
            ...item,
            min: sorterArr.indexOf(arrMaxMin[0]) === 0 ? 0 : arrMaxMin[0],
            max:
                sorterArr.indexOf(arrMaxMin[0]) === 0
                    ? arrMaxMin[0]
                    : sorterArr.indexOf(arrMaxMin[0]) === 1
                    ? 99999999
                    : arrMaxMin[1],
        };
    });
};

export const getCodesPrice = (arrMinMax, prices) => {
    const priceWithMinMax = getCodePrice(prices);
    return priceWithMinMax.filter(
        (item) =>
            (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
            (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
    );
};

export const getCodesArea = (arrMinMax, areas) => {
    const areaWithMinMax = getCodeArea(areas);
    return areaWithMinMax.filter(
        (item) =>
            (item.min >= arrMinMax[0] && item.min <= arrMinMax[1]) ||
            (item.max >= arrMinMax[0] && item.max <= arrMinMax[1])
    );
};
