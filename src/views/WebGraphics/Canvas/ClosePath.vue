<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");

onMounted(() => {
  {
    const ctx = inputRef1.value?.getContext("2d")!;

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 200);
    ctx.lineTo(200, 200);
    ctx.closePath();
    ctx.stroke();
    // ctx.fill();
  }
});
</script>

<template>
  <canvas ref="canvasRef1" width="600" height="600"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
