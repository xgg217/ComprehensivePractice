<script setup lang="ts"></script>

<template>
  <div>
    css 过渡之平移

    <div class="box1">
      <div class="box1-1"></div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  position: relative;
  top: 0;
  left: 0;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
}

.box1-1 {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
}
</style>
