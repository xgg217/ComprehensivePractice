<template>
  <div class="box2">
    <h3>CSS 转换</h3>
    <div class="square"></div>

    <div class="but">
      <el-button type="primary" @click="onScale">缩小</el-button>
      <el-button type="primary" @click="onTranslateX">向右移动</el-button>
      <el-button type="primary" @click="onRotate">旋转</el-button>
      <el-button type="primary" @click="onAll">缩小+向右移动+旋转</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate } from "animejs";
import type { TAnimeInstance } from "@/views/NpmUtils/Animejs/types";

const animeRow: TAnimeInstance = {
  scale: null,
  translateX: null,
  rotate: null,
  all: null,
};

const row = {
  scale: 0.8,
  translateX: 400,
  // rotate: "1turn", // 旋转360度
  rotate: "650deg", // 650度
};

const init = () => {
  animeRow.scale = animate(".box2 .square", {
    // targets:
    scale: row.scale,
    autoplay: false,
  });

  animeRow.translateX = animate(".box2 .square", {
    // targets:
    translateX: row.translateX,
    autoplay: false,
  });

  animeRow.rotate = animate(".box2 .square", {
    // targets:
    rotate: row.rotate,
    autoplay: false,
  });

  animeRow.all = animate(".box2 .square", {
    // targets: "
    ...row,
    autoplay: false,
  });
};

// 缩小
const onScale = () => {
  animeRow.scale?.restart();
};

// 向右移动
const onTranslateX = () => {
  animeRow.translateX?.restart();
};

// 旋转
const onRotate = () => {
  animeRow.rotate?.restart();
};

// 缩小+向右移动+旋转
const onAll = () => {
  animeRow.all?.restart();
};

// 重置
const onReset = () => {
  Object.values(animeRow).forEach(item => item?.seek(0));
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.box2 {
  border: 1px solid #000;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 0 0 50px;
  box-sizing: border-box;
}
.box2 .square {
  width: 150px;
  height: 150px;
  background-color: blue;
}

.box2 .but {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
