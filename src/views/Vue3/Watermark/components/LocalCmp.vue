<script setup lang="ts">
import WatermarkCmp from "./WatermarkCmp.vue";
import type { TProps } from "./../types";

const op: TProps = {
  text: "水印",
  fontSize: 40,
  gap: 80,
  // @ts-ignore
  parent: "",
  isFull: true,
};
</script>

<template>
  <WatermarkCmp v-bind="op">
    <div class="boxs">121265546456</div>
  </WatermarkCmp>
</template>

<style scoped>
.boxs {
  border: 1px solid #000;
  height: 500px;
}
</style>
