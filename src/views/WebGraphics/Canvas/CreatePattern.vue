<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1")!;
const inputRef2 = useTemplateRef("canvasRef2");

onMounted(() => {
  // 绘制一个菱形
  {
    const ctx = inputRef1.value.getContext("2d")!;

    // 绘制一个菱形
    ctx.moveTo(0, 25);
    ctx.lineTo(25, 0);
    ctx.lineTo(50, 25);
    ctx.lineTo(25, 50);
    ctx.closePath();
    ctx.fill();
  }

  // 填充
  {
    const ctx = inputRef2.value?.getContext("2d")!;
    const pattern = ctx.createPattern(inputRef1.value!, null);
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
    <canvas ref="canvasRef2" width="50" height="50"></canvas>
  </el-card>
</template>

<style scoped></style>
