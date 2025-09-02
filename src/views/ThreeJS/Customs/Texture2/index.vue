<script setup lang="ts">
import { Textures } from "./utils";

const texturesClass = ref<Textures>();

onMounted(() => {
  setTimeout(() => {
    texturesClass.value = new Textures();
  }, 1000);
});

onBeforeUnmount(() => {
  texturesClass.value?.destroy();
});
</script>

<template>
  <div class="box"></div>
</template>

<style scoped></style>
