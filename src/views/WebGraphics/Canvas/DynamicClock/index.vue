<script setup lang="ts">
/**
 * 动态时钟需要实现的功能
 * 1.表盘：刻度（大刻度、小刻度）
 * 2.表针（时针、分针、秒针）
 * 3.表针需要不停的变动
 *    1.动画绘制
 *    2.表针的角度变化
 */

const canvasRef = useTemplateRef("canvasRef")!;
const context = ref<CanvasRenderingContext2D>();

// 1. 表盘初始化
const dialInit = () => {
  const ctx = context.value!;
  // 移动原点
  ctx.translate(200, 200);

  // 绘制圆盘
  {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  // 绘制大刻度
  {
    ctx.save();
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 8;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(0, -200);
      ctx.lineTo(0, -180);
      ctx.stroke();
      ctx.rotate((Math.PI * 2) / 12);
    }
    ctx.restore();
  }

  // 绘制小刻度
  {
    ctx.save();
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 4;
    for (let i = 0; i < 60; i++) {
      ctx.beginPath();
      if (i % 5 !== 0) {
        ctx.moveTo(0, -200);
        ctx.lineTo(0, -190);
        ctx.stroke();
      }
      ctx.rotate((Math.PI * 2) / 60);
    }
    ctx.restore();
  }
};

onMounted(() => {
  context.value = canvasRef.value?.getContext("2d")!;
  dialInit();
});
</script>

<template>
  <canvas width="400" height="400" ref="canvasRef"></canvas>
</template>

<style scoped></style>
