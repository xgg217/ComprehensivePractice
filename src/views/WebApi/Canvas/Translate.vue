<script setup lang="ts">
const canvasRef1 = useTemplateRef("canvasRef1");

onMounted(() => {
  const canvas = canvasRef1.value!;
  const ctx = canvas.getContext("2d")!;

  ctx.translate(100, 100);
  ctx.rect(100, 100, 200, 200);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2);
  ctx.fill();
});
</script>

<template>
  <div>
    <canvas ref="canvasRef1" width="400" height="400"></canvas>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
