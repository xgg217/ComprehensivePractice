<script setup lang="ts">
const worker = new Worker(new URL("./test.ts", import.meta.url).href, {
  type: "module",
  name: "测试",
});

console.log(worker);

worker.postMessage(10);

worker.onmessage = e => {
  console.log(e);
};
</script>

<template>
  <div>3</div>
</template>

<style scoped></style>
