<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");

onMounted(() => {
  {
    const canvas = inputRef1.value!;
    const ctx = canvas.getContext("2d")!;

    // 填充红色的矩形
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);

    // 填充一个蓝色的圆
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.fill();

    // 绘制红色的矩形
    ctx.beginPath();
    // ctx.fillStyle = "red";
    ctx.restore();
    ctx.fillRect(300, 300, 100, 100);
  }

  {
    const canvas = inputRef2.value!;
    const ctx = canvas.getContext("2d")!;

    // 移动
    ctx.beginPath();
    ctx.save();
    ctx.translate(100, 100);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, 100, 100);

    ctx.beginPath();
    ctx.restore();
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 100, 100);
  }
});
</script>

<template>
  <canvas ref="canvasRef1" width="400" height="400"></canvas>
  <canvas ref="canvasRef2" width="400" height="400"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid #000;
}
</style>
