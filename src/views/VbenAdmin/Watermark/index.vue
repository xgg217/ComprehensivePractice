<script setup lang="ts">
import FullScreenCmp from "./components/FullScreenCmp.vue";
import LocalCmp from "./components/LocalCmp.vue";
</script>

<template>
  参考 https://www.vben.pro/#/demos/features/watermark
  <!-- 全局水印 -->
  <FullScreenCmp />

  <!-- 局部水印 -->
  <LocalCmp />
</template>

<style scoped></style>
