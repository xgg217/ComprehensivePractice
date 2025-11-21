<script setup lang="ts">
import PQueue from "p-queue";
import axios from "axios";

const arr: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29,
];
const arrLen = ref(arr.length); // 所有数量
const idleVal = ref(0); // 完成的数量

const { start, pause, pausestart, stop, pauseCancel } = (() => {
  let abortArr: AbortController[] = []; // 取消集合
  const asyncApi = (index: number, signal: AbortSignal) => {
    console.log(signal);

    // 每隔3个 添加一个错误
    if (index % 3 === 0) {
      return axios.post("http://jsonplaceholder.typicode.com/posts44564564546", {
        data: { id: index },
        id: index,
        signal: signal,
      });
    }

    return axios.post("http://jsonplaceholder.typicode.com/posts", {
      data: { id: index },
      id: index,
      signal,
    });
  };

  const queue = new PQueue({
    concurrency: 3, // 同时执行的任务数，默认为1
  });

  queue.on("active", () => {
    idleVal.value += 1;
  });

  // 开始所有任务
  const start = () => {
    const controller = new AbortController();
    abortArr[0] = controller;
    arr.forEach(item => {
      return queue.add(
        async ({ signal }) => {
          const p = asyncApi(item, signal!);
          signal.addEventListener("abort", () => {
            p.cancel();
          });

          try {
            return await p;
          } catch (error) {
            console.log(error);

            // if (!(error instanceof CancelError)) {
            //   throw error;
            // }
          }
        },
        { signal: controller.signal },
      );
    });
  };

  // 暂停所有任务
  const pause = () => {
    queue.pause();
  };

  // 暂停后继续请求
  const pausestart = () => {
    queue.start();
  };

  // 暂停并且取消正在发送的请求
  const pauseCancel = () => {
    // queue.pause();
    // queue.clear();
    abortArr.forEach(item => item.abort());
    queue.pause();
  };

  // 停止所有任务
  const stop = () => {
    queue.clear();
  };

  return {
    start,
    pause,
    pausestart,
    stop,
    pauseCancel,
  };
})();
</script>

<template>
  <div>
    请求队列
    <p>总数 {{ arrLen }}</p>
    <p>完成的数量 {{ idleVal }}</p>
    <el-button type="success" @click="start">初始化开始</el-button>
    <el-button type="primary" @click="pause">暂停</el-button>
    <el-button type="primary" @click="pausestart">暂停后继续请求</el-button>
    <el-button type="primary" @click="pauseCancel">暂停并且取消正在发送的请求</el-button>
    <el-button type="primary" @click="stop">清空所有任务</el-button>
  </div>
</template>

<style scoped></style>
