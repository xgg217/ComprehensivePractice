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

  // 时针
  {
    ctx.save();

    // 先旋转秒针
    //ctx.rotate(((Math.PI * 2) / 12) * h); // 方式1：每过60分钟才跳动一下
    ctx.rotate(((Math.PI * 2) / (60 * 60 * 12)) * (h * 3600 + m * 60 + s)); // 方式2：更加精细，会随着当前分针的位置，动态变化
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, 5);
    ctx.lineTo(0, -110);
    ctx.stroke();
    // ctx.rotate((Math.PI * 2) / 3); // 每次旋转30°
    ctx.restore();
  }

  // 分针
  {
    ctx.save();

    // 先旋转分针
    // ctx.rotate(((Math.PI * 2) / 60) * m); // 方式1：每过一分钟才跳动一下

    ctx.rotate(((Math.PI * 2) / 3600) * (m * 60 + s)); // 方式2：更加精细，会随着当前秒针的位置，动态变化

    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 6;

    ctx.beginPath();
    ctx.moveTo(0, 20);
    ctx.lineTo(0, -170);
    ctx.stroke();
    // ctx.rotate((Math.PI * 2) / 12); // 每次旋转30°
    ctx.restore();
  }

  // 秒针
  {
    ctx.save();

    // 先旋转秒针
    ctx.rotate(((Math.PI * 2) / 60) * s);

    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 30);
    ctx.lineTo(0, -190);
    ctx.stroke();
    // ctx.rotate((Math.PI * 2) / 12); // 每次旋转30°
    ctx.restore();
  }

  // 圆心点
  {
    ctx.save();

    ctx.beginPath();
    ctx.arc(0, 0, 6, 0, Math.PI * 2);
    ctx.fill();
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
