<script setup lang="ts">
import { chunk } from "lodash-es";
import axios from "axios";

let arr: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
];

// https://adminhom.brtfk.com/admin/order/order/index

// {"search":[{"field":"createTime","val":"2025-11-06 00:00:00,2025-11-13 00:00:00","operator":"RANGE","render":"datetime"}],"page":2}

const asyncApi = (index: number) => {
  // const obj = {
  //   search: [
  //     {
  //       field: "createTime",
  //       val: "2025-11-06 00:00:00,2025-11-13 00:00:00",
  //       operator: "RANGE",
  //       render: "datetime",
  //     },
  //   ],
  //   page: index,
  // };
  // return createAxios({
  //   url: "/admin/auth/rule/index",
  //   method: "post",
  //   data: obj,
  // });
  return axios.get("http://jsonplaceholder.typicode.com/posts/" + index);
};

let newArr = [];

const start = async () => {
  let list = chunk(arr, 2);

  for (const arr of list) {
    // await axios
    const list = arr.map(item => asyncApi(item));
    await axios.all(list).then(
      axios.spread((acct, perms) => {
        // 两个请求都完成后
        console.log("两个请求都完成后");
      }),
    );
  }
};
</script>

<template>
  <div>
    <el-button type="success" @click="start">开始</el-button>
    <el-button type="primary">暂停</el-button>
  </div>
</template>

<style scoped></style>
