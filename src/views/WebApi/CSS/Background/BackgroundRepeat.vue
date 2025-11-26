<script setup lang="ts"></script>

<template>
  <div class="warpp">
    background-repeat repeat
    <div class="item1"></div>

    background-repeat round
    <div class="item3"></div>

    background-repeat space
    <div class="item2"></div>

    <div class="item4"></div>
  </div>
</template>

<style scoped>
.warpp > div {
  width: 600px;
  height: 200px;
  background-image: url(@/assets/路飞.png);
  background-size: 90px;

  border: 1px solid red;
}

.item2 {
  background-repeat: space;
}
.item3 {
  background-repeat: round;
}
</style>
