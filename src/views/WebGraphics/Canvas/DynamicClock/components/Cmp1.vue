<script setup lang="ts">
import { R } from "./../consts";

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

let time = 0;

// 1. 表盘初始化
const dialInit = () => {
  const now = new Date();
  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();

  const ctx = context.value!;

  // 清空表盘
  ctx.clearRect(-200, -200, 400, 400);

  // 绘制表盘
  {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 200, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  // 表盘的数字
  {
    ctx.save();
    ctx.beginPath();
    // const R = 160;
    ctx.font = "bold 40px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // ctx.arc(0, 0, R, 0, Math.PI * 2);
    // ctx.stroke();
    // ctx.beginPath();

    const hd = (Math.PI * 2) / 12;
    for (let i = 0; i < 12; i++) {
      let text = i === 0 ? "12" : i + "";
      const x = Math.sin(hd * i) * R;
      const y = -Math.cos(hd * i) * R;
      ctx.strokeText(text, x, y);
    }

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
      ctx.rotate((Math.PI * 2) / 12); // 每次旋转30°
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

const move = () => {
  dialInit();
  setTimeout(() => {
    move();
  }, 1000);
};

onMounted(() => {
  context.value = canvasRef.value?.getContext("2d")!;

  // 移动原点
  context.value.translate(200, 200);
  move();
});
</script>

<template>
  <canvas width="400" height="400" ref="canvasRef"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
