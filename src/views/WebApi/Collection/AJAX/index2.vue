<script setup lang="ts">
import { chunk, cloneDeep } from "es-toolkit";
import axios from "axios";

let arr: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29,
];
let cancelArr: number[] = []; // 取消后 所有未被执行的订单

let abortArr: AbortController[] = []; // 取消集合

const asyncApi = (index: number) => {
  const controller = new AbortController();
  abortArr.push(controller);
  return axios.get("http://jsonplaceholder.typicode.com/posts/", {
    data: {
      id: index,
    },
    signal: controller.signal,
  });
};

let isBool = true;

let i = 0;

const start = () => {
  asyncAll(arr);
};

const asyncAll = async (arr: number[]) => {
  console.log(arr);
  abortArr = [];
  cancelArr = [];
  const chunkList = chunk(arr, 3);
  const len = chunkList.length - 1;

  i = 0;

  for (const arr of chunkList) {
    // await axios
    abortArr = [];
    if (!isBool) {
      console.log(i, "被暂停了");
      break;
    }

    cancelArr = [];
    console.log(i, "index");
    console.log(arr);

    const pList = arr.map(item => asyncApi(item));
    await Promise.allSettled(pList)
      .then(res => {
        console.log(res);

        const resArr = res
          .filter(item => {
            // 获取失败的
            return item.status === "rejected";
          })
          .filter(item => {
            // 获取请求被终止的数据
            return item.reason.name === "CanceledError";
          })
          .map(item => {
            return JSON.parse(item.reason.config.data).id;
          });
        // 执行到了最后一条了
        if (i === len) {
          cancelArr = resArr;
        } else {
          // 取消 + 未执行到的数据

          const newList = [...resArr];
          const index = i + 1;
          chunkList.slice(index).forEach(item => {
            newList.push(...item);
          });
          cancelArr = newList;
        }
        console.log(cancelArr);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {});
    isBool && i++;
  }

  // 全部执行完成
  if (i >= len) {
    console.log("全部执行完成");
  }
};

const stop = () => {
  // controller.abort();
  abortArr.forEach(item => item.abort());
  isBool = false;
};

// 重新请求
const restart = () => {
  arr = cloneDeep(cancelArr);
  isBool = true;
  asyncAll(arr);
};
</script>

<template>
  <div>
    <el-button type="success" @click="start">开始</el-button>
    <el-button type="primary" @click="stop">暂停</el-button>
    <el-button type="primary" @click="restart">暂停后继续请求</el-button>
  </div>
</template>

<style scoped></style>
