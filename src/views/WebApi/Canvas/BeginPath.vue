<script setup lang="ts">
const inputRef = useTemplateRef("canvasRef");

onMounted(() => {
  const ctx = inputRef.value?.getContext("2d")!;

  ctx.strokeStyle = "blue";
  ctx.lineWidth = 10;
  ctx.rect(20, 20, 100, 100);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.rect(20, 200, 100, 100);
  ctx.fill();

  ctx.beginPath();
});
</script>

<template>
  beginPath
  <canvas ref="canvasRef" width="800" height="800"></canvas>
</template>

<style scoped></style>
