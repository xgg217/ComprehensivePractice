import { randomInt, sampleSize } from "es-toolkit";
import { nameArr } from "./consts";
// import { randomInt } from "crypto";

// 百家姓
export const { setNameStr } = (() => {
  // 随机生成数组
  const randomArr = () => {
    const val = randomInt(2, 6);

    return sampleSize(nameArr, val).join("");
  };

  // 设置数值
  const setVal = (arr: string[]) => {
    return arr.map(item => {
      return {
        value: randomInt(100, 10000),
        name: item,
      };
    });
  };

  // 组合名字
  const setNameStr = () => {
    // 初始化
    const nameArr: string[] = Array.from({ length: 20 }, x => {
      return "";
    });

    // 组合后的名字集合
    const newArr = nameArr.forEach((_, index) => {
      // item = randomArr();
      // return randomArr();
      nameArr[index] = randomArr();
    });

    // 填上数值
    const nameValArr = setVal(nameArr);

    return {
      nameArr,
      nameValArr,
    };
  };

  // setNameStr();

  return {
    setNameStr,
  };
})();
