<script setup lang="ts"></script>

<template>
  <p>滤镜 filter</p>
  <svg width="400" height="400" view-box="0 0 100 100">
    <defs>
      <filter id="f1">
        <feDropShadow dx="2" dy="4" stdDeviation="2" />
      </filter>
    </defs>

    <circle cx="50" cy="50%" r="50" style="fill: pink; filter: url(#f1)" />
  </svg>

  <p>阴影颜色</p>
  <svg width="400" height="400" view-box="0 0 100 100">
    <defs>
      <filter id="f2">
        <feDropShadow dx="-8" dy="-8" stdDeviation="0" flood-color="pink" flood-opacity="0.5" />
      </filter>
    </defs>
    <circle cx="60" cy="50%" r="50" style="fill: pink; filter: url(#f2)" />
  </svg>
</template>

<style scoped></style>
