<script setup lang="ts">
import { Semaphore, delay } from "es-toolkit";
import { arr } from "./consts";
// const data = {
//   status: "0",
//   dictType: "Brand",
//   dictCode: "Alexander McQueen",
//   dictValuePt: "Alexander McQueen",
//   dictValueEn: "Alexander McQueen",
//   dictValueCn: "Alexander McQueen",
// };

const add = async () => {
  // fetch("https://adminhom.brtfk.com/admin/system/dicData/add", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     batoken: "b3368a3e-4237-4e16-bb62-24873a1b5b1a",
  //     "content-type": "application/json",
  //   },
  // });
  const semaphore = new Semaphore(3);

  for (const item of arr) {
    // await semaphore.acquire();
    // const data = {
    //   status: "0",
    //   dictType: "Brand",
    //   dictCode: item,
    //   dictValuePt: item,
    //   dictValueEn: item,
    //   dictValueCn: item,
    // };
    // console.log(item);
    // try {
    //   await fetch("https://adminhom.brtfk.com/admin/system/dicData/add", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       batoken: "b3368a3e-4237-4e16-bb62-24873a1b5b1a",
    //       "content-type": "application/json",
    //     },
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
  }
};

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const semaphore = new Semaphore(3);
const init = () => {
  const api = (item: number) => {
    return delay(item * 1000);
  };

  Promise.all(
    list.map(async item => {
      await semaphore.acquire();
      try {
        console.log(item);
        return await api(item);
      } finally {
        semaphore.release();
      }
    }),
  );
};

init();
</script>

<template>
  <div>
    <button type="button" @click="add">请求</button>
  </div>
</template>

<style scoped></style>
