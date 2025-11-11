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

const del = () => {
  const arr = [];
  for (let i = 303; i < 432; i++) {
    arr.push(i);
    //    fetch("https://adminhom.brtfk.com/admin/system/dicData/del", {
    //   method: "DELETE",
    //   body: JSON.stringify(data),
    //   headers: {
    //     batoken: "b3368a3e-4237-4e16-bb62-24873a1b5b1a",
    //     "content-type": "application/json",
    //   },
    // });
  }
  fetch("https://adminhom.brtfk.com/admin/system/dicData/del", {
    method: "DELETE",
    body: JSON.stringify({ ids: arr }),
    headers: {
      batoken: "5acd4bab-622f-42dc-9798-a53d9a757d09",
      "content-type": "application/json",
    },
  });
};

const add = async () => {
  // fetch("https://adminhom.brtfk.com/admin/system/dicData/add", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     batoken: "b3368a3e-4237-4e16-bb62-24873a1b5b1a",
  //     "content-type": "application/json",
  //   },
  // });
  const semaphore = new Semaphore(5);

  const data = {
    status: "0",
    dictType: "brand_name",
    dictCode: 0,
    dictValuePt: "",
    dictValueEn: "",
    dictValueCn: "",
  };

  // Promise.all(
  //   arr.map(async (item, index) => {
  //     await semaphore.acquire();
  //     try {
  //       data.dictCode = index + 3;
  //       data.dictValuePt = item;
  //       data.dictValueEn = item;
  //       data.dictValueCn = item;

  //       return await fetch(
  //         // "https://adminhom.brtfk.com/admin/system/dicData/add",
  //         "https://admin.brtfk.com/admin/system/dicData/add",
  //         {
  //           method: "POST",
  //           body: JSON.stringify(data),
  //           headers: {
  //             batoken: "ccb3acd3-6824-4934-8de7-fb41f52bf807",
  //             "content-type": "application/json",
  //           },
  //         },
  //       );
  //     } finally {
  //       semaphore.release();
  //     }
  //   }),
  // );

  // for (const item of arr) {
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
  // }
};

// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const semaphore = new Semaphore(3);
// const init = () => {
//   const api = (item: number) => {
//     return delay(item * 1000);
//   };

//   Promise.all(
//     list.map(async item => {
//       await semaphore.acquire();
//       try {
//         console.log(item);
//         return await api(item);
//       } finally {
//         semaphore.release();
//       }
//     }),
//   );
// };

// init();
</script>

<template>
  <div>
    <button type="button" @click="add">请求</button>
  </div>
</template>

<style scoped></style>
