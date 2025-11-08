<script setup lang="ts">
const divRef = useTemplateRef("divRef")!;

onMounted(() => {
  // const ctr = inputRef.value?.getContext("2d");

  const canvas = document.createElement("canvas");
  divRef.value?.append(canvas);
});
</script>

<template>
  <!-- <canvas ref="canvasRef"></canvas> -->
  <div ref="divRef"></div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
  border: 1px solid #000;

  canvas {
    border: 1px solid red;
  }
}
</style>
