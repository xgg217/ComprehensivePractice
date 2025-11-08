<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");
const inputRef3 = useTemplateRef("canvasRef3");

onMounted(() => {
  // const ctr = inputRef.value?.getContext("2d");
  // console.log(ctr);
  {
    const ctx = inputRef1.value?.getContext("2d")!;

    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(100, 10);
    ctx.lineTo(200, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
  }
});
</script>

<template>
  <canvas ref="canvasRef1" width="800" height="800"></canvas>
  <canvas ref="canvasRef2" width="800" height="800"></canvas>
  <canvas ref="canvasRef3" width="800" height="800"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
