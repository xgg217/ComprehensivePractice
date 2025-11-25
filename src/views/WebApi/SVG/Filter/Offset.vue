<script setup lang="ts"></script>

<template>
  <div>
    <p>滤镜 filter</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f1">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="r1" />
          <feOffset in="r1" dx="5" dy="5" result="r2" />

          <feMerge>
            <feMergeNode in="SourceGraphic"></feMergeNode>
            <feMergeNode in="r2"></feMergeNode>
          </feMerge>
        </filter>
      </defs>

      <rect x="10" y="10" width="50" height="50" fill="#f00" filter="url(#f1)"></rect>
    </svg>

    <p>双滤镜</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f2">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="r1" />
          <feOffset in="r1" dx="5" dy="5" result="r2" />

          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="r3" />
          <feOffset in="r3" dx="-5" dy="5" result="r4" />
          <feMerge>
            <feMergeNode in="r2"></feMergeNode>
            <feMergeNode in="r4"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>

      <rect x="10" y="10" width="50" height="50" fill="#f00" filter="url(#f2)"></rect>
    </svg>
  </div>
</template>

<style scoped>
.rect {
  filter: url(#f1);
}

svg {
  border: 1px solid red;
}
</style>
