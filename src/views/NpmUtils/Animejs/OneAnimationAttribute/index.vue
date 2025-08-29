<template>
  <div class="box">
    <!-- <BoxListCmp :arr="myComponentsList"></BoxListCmp> -->
    <CSSSelectorCmp></CSSSelectorCmp>
    <CSSTransformationCmp></CSSTransformationCmp>
    <DOMAttributeCmp></DOMAttributeCmp>
    <DynamicElementSelectionCmp></DynamicElementSelectionCmp>
  </div>
</template>

<script setup lang="ts">
// import BoxListCmp from "@/views/NpmUtils/Animejs/cmp/BoxListCmp.vue";
import CSSSelectorCmp from "./cmp/CSSSelectorCmp.vue";
import CSSTransformationCmp from "./cmp/CSSTransformationCmp.vue";
import DOMAttributeCmp from "./cmp/DOMAttributeCmp.vue";
import DynamicElementSelectionCmp from "./cmp/DynamicElementSelectionCmp.vue";
</script>

<style scoped></style>
