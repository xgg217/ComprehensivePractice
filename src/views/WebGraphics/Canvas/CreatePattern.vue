<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1")!;
const inputRef2 = useTemplateRef("canvasRef2")!;
const inputRef3 = useTemplateRef("canvasRef3")!;

onMounted(() => {
  // 绘制一个菱形
  {
    const ctx = inputRef1.value!.getContext("2d")!;

    // 绘制一个菱形
    ctx.moveTo(0, 25);
    ctx.lineTo(25, 0);
    ctx.lineTo(50, 25);
    ctx.lineTo(25, 50);
    ctx.closePath();
    ctx.fill();
  }

  const ctx = inputRef2.value!.getContext("2d")!;

  // 填充
  {
    // console.log(ctx);
    const ctx = inputRef2.value!.getContext("2d")!;
    const pattern2 = ctx.createPattern(inputRef1.value!, null);
    ctx.fillStyle = pattern2!;
    ctx.rect(100, 100, 200, 200);
    ctx.stroke();
    ctx.fill();
  }

  // 图片
  {
    const ctx = inputRef3.value!.getContext("2d")!;
    const img = new Image();
    img.src = new URL("./images/03.png", import.meta.url).href;
    img.onload = () => {
      const pattern = ctx.createPattern(img, "repeat");
      const pattern2 = ctx.createPattern(inputRef1.value!, null);
      ctx.fillStyle = pattern!;
      ctx.lineWidth = 50;
      ctx.strokeStyle = pattern2!;
      ctx.rect(30, 30, 300, 300);
      ctx.stroke();
      ctx.fill();
    };
  }
});
</script>

<template>
  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>菱形</span>
      </div>
    </template>
    <canvas ref="canvasRef1" width="50" height="50"></canvas>
  </el-card>

  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>填充背景</span>
      </div>
    </template>
    <canvas ref="canvasRef2" width="400" height="400"></canvas>
  </el-card>

  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>图片</span>
      </div>
    </template>
    <canvas ref="canvasRef3" width="400" height="400"></canvas>
  </el-card>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
