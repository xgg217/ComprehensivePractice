<script setup lang="ts">
const canvasRef1 = useTemplateRef("canvasRef1");

onMounted(() => {
  const canvas = canvasRef1.value!;
  const ctx = canvas.getContext("2d")!;

  ctx.translate(100, 100);
  ctx.scale(2, 1);
  ctx.rect(0, 0, 100, 100);
  ctx.fill();

  // 绘制坐标轴
  {
    ctx.beginPath();
    ctx.moveTo(-400, 0);
    ctx.lineTo(400, 0);
    ctx.moveTo(0, -400);
    ctx.lineTo(0, 400);
    ctx.stroke();

    // 绘制原点
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();

    // 横轴刻度
    for (let i = -400; i <= 400; i += 10) {
      ctx.beginPath();
      ctx.moveTo(i, -5);
      ctx.lineTo(i, 5);
      ctx.stroke();
    }

    // 纵轴刻度
    for (let i = -400; i <= 400; i += 10) {
      ctx.beginPath();
      ctx.moveTo(-5, i);
      ctx.lineTo(5, i);
      ctx.stroke();
    }
  }
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
