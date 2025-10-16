<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");
// const inputRef3 = useTemplateRef("canvasRef3");

const url = new URL("./images/02.png", import.meta.url).href;
// 94.8 * 106
const WIDTH = 94;
const HEIGHT = 106;

onMounted(() => {
  {
    const ctx = inputRef1.value?.getContext("2d")!;

    const img = new Image();

    img.src = url;
    img.onload = () => {
      move();
    };

    let i = 0;
    let timeout = 0;

    const move = () => {
      clearTimeout(timeout);
      ctx.beginPath();
      ctx.clearRect(0, 0, 400, 400);
      ctx.drawImage(img, i * WIDTH, 0, WIDTH, HEIGHT, 0, 0, WIDTH, HEIGHT);

      i++;

      if (i >= 5) {
        i = 0;
      }

      timeout = setTimeout(move, 200) as unknown as number;
    };
  }

  {
    const ctx = inputRef2.value?.getContext("2d")!;

    const img = new Image();

    img.src = url;
    img.onload = () => {
      move();
    };

    let i = 0;
    let x = 0;
    let timeout = 0;

    const move = () => {
      clearTimeout(timeout);
      ctx.beginPath();
      ctx.clearRect(0, 0, 400, 400);
      ctx.drawImage(img, i * WIDTH, 0, WIDTH, HEIGHT, x, 0, WIDTH, HEIGHT);

      i++;
      x += 5;

      if (i >= 5) {
        i = 0;
      }

      if (x >= 400) {
        x = 0;
      }

      timeout = setTimeout(move, 200) as unknown as number;
    };
  }
});
</script>

<template>
  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>原地运动</span>
      </div>
    </template>
    <canvas ref="canvasRef1" width="400" height="400"></canvas>
  </el-card>

  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>前进</span>
      </div>
    </template>
    <canvas ref="canvasRef2" width="400" height="400"></canvas>
  </el-card>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
