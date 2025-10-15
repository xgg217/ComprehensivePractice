<script setup lang="ts">
const inputRef = useTemplateRef("canvasRef");

onMounted(() => {
  const ctr = inputRef.value?.getContext("2d");
  console.log(ctr);
});
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style scoped></style>
