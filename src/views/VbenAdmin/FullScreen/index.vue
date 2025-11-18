<script setup lang="ts">
import { useFullscreen } from "./useFullscreen";

const { isFullscreen, enter, exit, toggle } = (() => {
  const { isFullscreen, enter, exit, toggle } = useFullscreen();

  return { isFullscreen, enter, exit, toggle };
})();

// 全局全屏
const { boxRef, isFullscreen1, enter1, exit1, toggle1 } = (() => {
  const boxRef = useTemplateRef("boxRef");
  console.log(boxRef.value);
  const {
    isFullscreen: isFullscreen1,
    enter: enter1,
    exit: exit1,
    toggle: toggle1,
  } = useFullscreen(boxRef);

  return { boxRef, isFullscreen1, enter1, exit1, toggle1 };
})();
</script>

<template>
  <div>全屏 https://www.vben.pro/#/demos/features/full-screen</div>

  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>全屏</span>
      </div>
    </template>
    {{ isFullscreen }}
    <el-button @click="enter">全屏</el-button>
    <el-button type="primary" @click="toggle">切换</el-button>
    <el-button type="primary" @click="exit">退出</el-button>
  </el-card>

  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>局部全屏</span>
      </div>
    </template>
    <div class="boxs" ref="boxRef">
      {{ isFullscreen1 }}
      <el-button @click="enter1">全屏</el-button>
      <el-button type="primary" @click="toggle1">切换</el-button>
      <el-button type="primary" @click="exit1">退出</el-button>
    </div>
  </el-card>
</template>

<style scoped>
.boxs {
  /*border: 1px solid red;*/
  background: red;
  padding: 10px;
}
</style>
