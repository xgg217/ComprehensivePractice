<script setup lang="ts">
import DialogCmp from "./components/DialogCmp.vue";

const isBool = ref(false);

const open = () => {
  isBool.value = true;
};
</script>

<template>
  <div>
    点击外部关闭弹出
    <el-button type="primary">打开弹出</el-button>

    <DialogCmp v-model="visible" />
  </div>
</template>

<style scoped></style>
