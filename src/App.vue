<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
</script>

<template>
  <ElConfigProvider>
    <RouterView v-slot="{ Component }">
      <Transition name="el-zoom-in-center" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </ElConfigProvider>
</template>

<style scoped></style>
