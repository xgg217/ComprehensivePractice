<script setup lang="ts">
// const runTask = (task: any) => {};

// const delay = () => {
//   const duration = 5;
//   const start = Date.now();
//   while (Date.now() - start < duration) {}
// };

// const n = 1000;
// const tasks = new Array(n).fill(delay);

// const onclick = () => {
//   console.group("开始执行");

//   const start = Date.now();
//   // Promise.all(tasks.map(t) => runTask)
// };
</script>

<template>
  <div>
    <ul>
      <li>运行一个耗时任务</li>
      <li>如果要异步执行任务，请返回promise</li>
      <li>要尽快完成任务，同时不要让页面产生卡顿</li>
      <li></li>
    </ul>

    <!-- <el-button>运行</el-button> -->

    <div class="boxs">
      <div class="q"></div>
    </div>
  </div>
</template>

<style scoped>
.boxs {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
}

.boxs div {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  animation: 4s linear 0s mymove infinite;
}

@keyframes mymove {
  0% {
    /* transform: translate(0px, 0px);  */
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(450px, 0px);
  }
  50% {
    transform: translate(450px, 450px);
  }
  75% {
    transform: translate(0px, 450px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
</style>
