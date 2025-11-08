<script setup lang="ts">
const inputRef = useTemplateRef("canvasRef");

onMounted(() => {
  const ctr = inputRef.value?.getContext("2d");
});
</script>

<template>
  <canvas ref="canvasRef"></canvas>
</template>

<style scoped></style>
