<script setup lang="ts">
const url = new URL("./page.jpeg", import.meta.url).href;
const previewSrcList = computed(() => [url]);
</script>

<template>
  <div class="bo">
    <el-image
      style="width: 200px; height: 400px"
      :src="url"
      fit="contain"
      :preview-src-list="previewSrcList"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      show-progress
    />
  </div>
</template>

<style scoped></style>
