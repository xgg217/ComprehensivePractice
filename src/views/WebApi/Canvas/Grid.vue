<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");

// 设置网格线的间隔
const gridSpacing = 10;

onMounted(() => {
  // const ctr = inputRef.value?.getContext("2d");
  {
    const canvas = inputRef1.value!;
    const ctx = canvas.getContext("2d")!;

    // 绘制网格线
    for (let x = 0; x < canvas.width; x += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y < canvas.height; y += gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }
});
</script>

<template>
  <canvas ref="canvasRef1" width="800" height="800"></canvas>
</template>

<style scoped></style>
