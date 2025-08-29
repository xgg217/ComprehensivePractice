<template>
  <div class="box">
    <OneCmp></OneCmp>
    <TwoCmp></TwoCmp>
    <ThreeCmp></ThreeCmp>
    <FourCmp></FourCmp>
    <FiveCmp></FiveCmp>
  </div>
</template>

<script setup lang="ts">
import OneCmp from "./cmp/OneCmp.vue";
import TwoCmp from "./cmp/TwoCmp.vue";
import ThreeCmp from "./cmp/ThreeCmp.vue";
import FourCmp from "./cmp/FourCmp.vue";
import FiveCmp from "./cmp/FiveCmp.vue";
</script>

<style scoped>
.box {
  border: 1px solid #000;
  /* flex-direction: column; */
  flex-wrap: wrap;
}
</style>
