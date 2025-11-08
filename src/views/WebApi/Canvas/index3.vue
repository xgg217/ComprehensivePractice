<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");
const inputRef3 = useTemplateRef("canvasRef3");

onMounted(() => {
  // const ctr = inputRef.value?.getContext("2d");
});
</script>

<template>
  <canvas ref="canvasRef1"></canvas>
  <canvas ref="canvasRef2"></canvas>
  <canvas ref="canvasRef3"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
