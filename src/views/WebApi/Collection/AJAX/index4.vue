<script setup lang="ts">
import { Index4 } from "./index4";

const arr: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29,
];

const IndexClass = reactive(new Index4(arr));

// 开始
const start = () => {
  IndexClass.start();
};

// 暂停
const stop = () => {};

// 暂停后继续请求
const restart = () => {};
</script>

<template>
  <div>
    <p>全部数量：{{ IndexClass.len }}</p>
    <p>已完成的数量：{{ IndexClass.ind }}</p>
    <p>失败的数量：</p>
    <el-button type="success" @click="start">开始</el-button>
    <el-button type="primary" @click="stop">暂停</el-button>
    <el-button type="primary" @click="restart">暂停后继续请求</el-button>
  </div>
</template>

<style scoped></style>
