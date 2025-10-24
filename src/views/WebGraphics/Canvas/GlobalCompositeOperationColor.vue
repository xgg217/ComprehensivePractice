<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");
const inputRef3 = useTemplateRef("canvasRef3");
const inputRef4 = useTemplateRef("canvasRef4");
const inputRef5 = useTemplateRef("canvasRef5");
const inputRef6 = useTemplateRef("canvasRef6");

const img1Url = new URL("./images/04.png", import.meta.url).href;
const img2Url = new URL("./images/05.png", import.meta.url).href;

onMounted(() => {
  {
    const canvas = inputRef1.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "lighter";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef2.value!;
    const ctx = canvas.getContext("2d")!;

    //前(原)图形
    const img1 = new Image();
    img1.src = img1Url;
    img1.onload = () => {
      ctx.drawImage(img1, 200 - img1.width / 2, 200 - img1.height / 2);
      ctx.globalCompositeOperation = "lighter";
    };

    //后(新)图形
    const img2 = new Image();
    img2.src = img2Url;
    img2.onload = () => {
      ctx.drawImage(img2, 200 - img2.width / 2, 200 - img2.height / 2);
    };
  }

  {
    const canvas = inputRef3.value!;
    const ctx = canvas.getContext("2d")!;

    const img1 = new Image();
    img1.src = img1Url;
    img1.onload = () => {
      ctx.drawImage(img1, 200 - img1.width / 2, 200 - img1.height / 2);
      ctx.globalCompositeOperation = "multiply";
    };

    //后(新)图形
    const img2 = new Image();
    img2.src = img2Url;
    img2.onload = () => {
      ctx.drawImage(img2, 200 - img2.width / 2, 200 - img2.height / 2);
    };
  }

  {
    const canvas = inputRef4.value!;
    const ctx = canvas.getContext("2d")!;

    const img1 = new Image();
    img1.src = img1Url;
    img1.onload = () => {
      ctx.drawImage(img1, 200 - img1.width / 2, 200 - img1.height / 2);
      ctx.globalCompositeOperation = "screen";
    };

    //后(新)图形
    const img2 = new Image();
    img2.src = img2Url;
    img2.onload = () => {
      ctx.drawImage(img2, 200 - img2.width / 2, 200 - img2.height / 2);
    };
  }

  {
    const canvas = inputRef5.value!;
    const ctx = canvas.getContext("2d")!;

    const img1 = new Image();
    img1.src = img1Url;
    img1.onload = () => {
      ctx.drawImage(img1, 200 - img1.width / 2, 200 - img1.height / 2);
      ctx.globalCompositeOperation = "screen";
    };

    //后(新)图形
    const img2 = new Image();
    img2.src = img2Url;
    img2.onload = () => {
      ctx.drawImage(img2, 200 - img2.width / 2, 200 - img2.height / 2);
    };
  }

  {
    const canvas = inputRef6.value!;
    const ctx = canvas.getContext("2d")!;

    const img1 = new Image();
    img1.src = img1Url;
    img1.onload = () => {
      ctx.drawImage(img1, 200 - img1.width / 2, 200 - img1.height / 2);
      ctx.globalCompositeOperation = "screen";
    };

    //后(新)图形
    const img2 = new Image();
    img2.src = img2Url;
    img2.onload = () => {
      ctx.drawImage(img2, 200 - img2.width / 2, 200 - img2.height / 2);
    };
  }
});
</script>

<template>
  <div class="warpp">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">颜色合成 lighter</div>
      </template>
      <canvas ref="canvasRef1" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">颜色合成 lighter</div>
      </template>
      <canvas ref="canvasRef2" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">颜色合成 multiply</div>
      </template>
      <canvas ref="canvasRef3" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">颜色合成 screen</div>
      </template>
      <canvas ref="canvasRef4" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">颜色合成 darken</div>
      </template>
      <canvas ref="canvasRef5" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">颜色合成 lighten</div>
      </template>
      <canvas ref="canvasRef6" width="400" height="400"></canvas>
    </el-card>
  </div>

  <el-divider />
</template>

<style scoped>
.warpp {
  display: flex;
  flex-wrap: wrap;
}
</style>
