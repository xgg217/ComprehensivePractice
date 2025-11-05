<script setup lang="ts">
import ReceiptCmp from "./components/ReceiptCmp.vue";
import SignatureCmp from "./components/SignatureCmp.vue";

const url = ref("");
const submit = (data: string) => {
  // console.log(data);
  url.value = data;
};
</script>

<template>
  <div class="box">
    <!-- 主画板 -->
    <ReceiptCmp :url="url" />

    <!-- 前面绘制浮层画板 -->

    <!-- 签名画板 -->
    <SignatureCmp @submit="submit"></SignatureCmp>
  </div>
</template>

<style scoped></style>
