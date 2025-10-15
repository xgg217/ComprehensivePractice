<script setup lang="ts">
const inputRef = useTemplateRef("canvasRef");
const inputRef2 = useTemplateRef("canvasRef2");
const inputRef3 = useTemplateRef("canvasRef3");

onMounted(() => {
  {
    const ctx = inputRef.value?.getContext("2d")!;
    ctx.fillRect(100, 100, 200, 100);
  }

  {
    const ctx = inputRef2.value?.getContext("2d")!;
    ctx.strokeRect(100, 100, 200, 100);
  }

  {
    const ctx = inputRef3.value?.getContext("2d")!;
    ctx.rect(100, 100, 200, 100);

    ctx.fillStyle = "red";
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 10; // 线条宽度

    ctx.stroke(); // 描边
    ctx.fill(); // 填充
  }
});
</script>

<template>
  <div>
    矩形

    <canvas ref="canvasRef" width="800" height="800"></canvas>
    <canvas ref="canvasRef2" width="800" height="800"></canvas>
    <canvas ref="canvasRef3" width="800" height="800"></canvas>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
