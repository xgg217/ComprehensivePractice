<template>
  <div class="box">
    <!-- <BoxListCmp :arr="myComponentsList"></BoxListCmp> -->
    <ArrayCmp></ArrayCmp>
    <CSSSelectorCmp></CSSSelectorCmp>
    <DomAndNodeListCmp></DomAndNodeListCmp>
    <ObjectCmp></ObjectCmp>
  </div>
</template>

<script setup lang="ts">
import ArrayCmp from "./cmp/ArrayCmp.vue";
import CSSSelectorCmp from "./cmp/CSSSelectorCmp.vue";
import DomAndNodeListCmp from "./cmp/DomAndNodeListCmp.vue";
import ObjectCmp from "./cmp/ObjectCmp.vue";
</script>

<style scoped></style>
