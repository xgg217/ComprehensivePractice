<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");

onMounted(() => {
  {
    const ctx = inputRef1.value?.getContext("2d")!;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = " bold italic 80px sans-serif";
    // ctx.fillText("aaaa", 100, 100);
    ctx.strokeText("aaaa", 200, 200, 500);
    // ctx.fill();
  }
});
</script>

<template>
  <el-card style="width: 680px">
    <template #header>
      <div class="card-header">
        <span>ctx.fillText 绘制填充文本</span>
      </div>
    </template>
    <canvas ref="canvasRef1" width="600" height="600"></canvas>
  </el-card>
</template>

<style scoped></style>
