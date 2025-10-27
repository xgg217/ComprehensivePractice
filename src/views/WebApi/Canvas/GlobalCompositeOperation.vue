<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");
const inputRef3 = useTemplateRef("canvasRef3");
const inputRef4 = useTemplateRef("canvasRef4");
const inputRef5 = useTemplateRef("canvasRef5");
const inputRef6 = useTemplateRef("canvasRef6");
const inputRef7 = useTemplateRef("canvasRef7");
const inputRef8 = useTemplateRef("canvasRef8");
const inputRef9 = useTemplateRef("canvasRef9");
const inputRef10 = useTemplateRef("canvasRef10");

onMounted(() => {
  {
    const canvas = inputRef1.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "source-over";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }
  {
    const canvas = inputRef2.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "source-in";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef3.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "source-out";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef4.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "source-atop";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef5.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "destination-over";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef6.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "destination-in";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef7.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "destination-out";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef8.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "destination-atop";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef9.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "copy";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }

  {
    const canvas = inputRef10.value!;
    const ctx = canvas.getContext("2d")!;

    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(50, 50, 200, 200);

    ctx.globalCompositeOperation = "xor";

    ctx.beginPath();
    ctx.fillStyle = "#0f0";
    ctx.fillRect(150, 150, 200, 200);
  }
});
</script>

<template>
  <div class="warpp">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 source-over</div>
      </template>
      <canvas ref="canvasRef1" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 source-in</div>
      </template>
      <canvas ref="canvasRef2" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 source-out</div>
      </template>
      <canvas ref="canvasRef3" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 source-atop</div>
      </template>
      <canvas ref="canvasRef4" width="400" height="400"></canvas>
    </el-card>
  </div>

  <el-divider />

  <div class="warpp">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 destination-over</div>
      </template>
      <canvas ref="canvasRef5" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 destination-in</div>
      </template>
      <canvas ref="canvasRef6" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 destination-out</div>
      </template>
      <canvas ref="canvasRef7" width="400" height="400"></canvas>
    </el-card>

    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 destination-atop</div>
      </template>
      <canvas ref="canvasRef8" width="400" height="400"></canvas>
    </el-card>
  </div>

  <el-divider />

  <div class="warpp">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 copy</div>
      </template>
      <canvas ref="canvasRef9" width="400" height="400"></canvas>
    </el-card>
  </div>

  <el-divider />

  <div class="warpp">
    <el-card style="max-width: 480px">
      <template #header>
        <div class="card-header">路径合成 xor</div>
      </template>
      <canvas ref="canvasRef10" width="400" height="400"></canvas>
    </el-card>
  </div>
</template>

<style scoped>
.warpp {
  display: flex;
  flex-wrap: wrap;
}
</style>
