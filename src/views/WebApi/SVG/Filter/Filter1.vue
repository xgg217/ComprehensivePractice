<script setup lang="ts"></script>

<template>
  <div>
    <p>滤镜 filter</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f1" filter-units="objectBoudingBox" primitive-units="">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect x="10" y="10" width="50" height="50" fill="#f00" filter="url(#f1)"></rect>
    </svg>

    <p>css生效方式</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f2" filter-units="objectBoudingBox" primitive-units="">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <rect class="rect" x="10" y="10" width="50" height="50" fill="#f00" filter="url(#f2)"></rect>
    </svg>
  </div>
</template>

<style scoped>
.rect {
  filter: url(#f1);
}
</style>
