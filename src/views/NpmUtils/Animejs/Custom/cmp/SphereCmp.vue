<template>
  <div class="box2">
    <h3>纯CSS</h3>
    <div class="sphere"></div>
    <div class="tips"></div>

    <div class="but">
      <el-button type="primary" @click="onStart">开始</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import anime from "animejs";
import { createTimeline, Timeline } from "animejs";
import type { TAnimeInstance } from "@/views/NpmUtils/Animejs/types";

// const animeRow: TAnimeInstance = {
//   sphere: null,
// };

let timeline: Timeline;

// 中心点
const centerX = ref(0);
const centerY = ref(0);

const init = () => {
  // 定义旋转中心点（页面绝对坐标）
  // const centerX = 391 + 150;
  // const centerY = ;

  const box2 = document.querySelector(".box2")! as HTMLElement;

  // 获取矩形中心点
  {
    centerX.value = box2.offsetLeft + box2.clientWidth / 2;
    centerY.value = box2.offsetTop + box2.clientHeight / 2;
  }

  const sphereDom = document.querySelector(".sphere")! as HTMLElement;
  const tipsDom = document.querySelector(".tips")! as HTMLElement;

  // 获取元素位置
  const rect = sphereDom.getBoundingClientRect();
  const elementLeft = rect.left - box2.offsetLeft;
  const elementTop = rect.top;
};

// 开始
const onStart = () => {
  // animeRow.sphere?.restart();
};

// 重置
const onReset = () => {
  // Object.values(animeRow).forEach(item => item?.seek(0));
};
</script>

<style scoped src="@/views/NpmUtils/Animejs/style.css"></style>
<style scoped>
.box2 {
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;

  .sphere,
  .tips {
    position: absolute;
  }

  .sphere {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    top: 100px;
    left: 100px;
    transform: translate(-50%, -50%);
    /* transform-origin: -50% -50%; */
  }

  .tips {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #000;
  }
}
</style>
