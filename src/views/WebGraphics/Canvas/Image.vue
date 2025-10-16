<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");
const inputRef3 = useTemplateRef("canvasRef3");

const url = new URL("./images/路飞悬赏令.jpeg", import.meta.url).href;

onMounted(() => {
  {
    const ctx = inputRef1.value?.getContext("2d")!;

    const img = new Image();

    img.src = url;
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  }

  {
    const canvas = inputRef2.value!;
    const ctx = canvas.getContext("2d")!;

    const img = new Image();

    img.src = url;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }

  {
    const canvas = inputRef3.value!;
    const ctx = canvas.getContext("2d")!;

    const img = new Image();

    img.src = url;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 200, 200, 0, 0, canvas.width, canvas.height);
    };
  }
});
</script>

<template>
  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>图片 ctx.drawImage(imgSource, x, y)</span>
      </div>
    </template>
    <canvas ref="canvasRef1" width="400" height="400"></canvas>
  </el-card>

  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>图片 ctx.drawImage(imgSource, x, y, width, height)</span>
      </div>
    </template>
    <canvas ref="canvasRef2" width="400" height="400"></canvas>
  </el-card>

  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>图片 ctx.drawImage(imgSource, x1, y1, w1, h1, x2, y2, w2, h2)</span>
      </div>
    </template>
    <canvas ref="canvasRef3" width="400" height="400"></canvas>
  </el-card>
</template>

<style scoped></style>
