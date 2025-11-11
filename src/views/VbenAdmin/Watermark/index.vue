<script setup lang="ts">
// 创建水印
const onCreate = () => {};

// 更新水印
const onUpdate = () => {};

// 移除水印
const onDel = () => {};
</script>

<template>
  <div>
    <el-button @click="onCreate">创建水印</el-button>
    <el-button type="primary" @click="onUpdate">更新水印</el-button>
    <el-button type="danger" @click="onDel">移除水印</el-button>
  </div>
</template>

<style scoped></style>
