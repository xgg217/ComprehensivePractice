<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
</script>

<template>
  <ElConfigProvider>
    <transition name="el-zoom-in-center">
      <RouterView />
    </transition>
  </ElConfigProvider>
</template>

<style scoped></style>
