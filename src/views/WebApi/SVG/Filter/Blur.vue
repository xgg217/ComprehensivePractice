<script setup lang="ts"></script>

<template>
  <p>滤镜 filter</p>
  <svg width="400" height="400" view-box="0 0 100 100">
    <defs>
      <filter id="f1">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
    </defs>

    <rect x="10" y="10" width="50" height="50" fill="#f00"></rect>
    <rect x="10" y="100" width="50" height="50" fill="#f00" filter="url(#f1)"></rect>
  </svg>
</template>

<style scoped>
.rect {
  filter: url(#f1);
}
</style>
