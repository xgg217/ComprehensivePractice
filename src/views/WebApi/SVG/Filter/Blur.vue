<script setup lang="ts"></script>

<template>
  <div>
    <p>SourceGraphic</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f1">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      <image xlink:href="./Blur.png" x="0" y="0" height="100" width="100" filter="url(#f1)"></image>
    </svg>

    <p>SourceAlpha</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f2">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        </filter>
      </defs>

      <image xlink:href="./Blur.png" x="0" y="0" height="100" width="100" filter="url(#f2)"></image>
    </svg>

    <p>对部分做模糊处理 x y width height</p>
    <svg width="400" height="400" view-box="0 0 100 100">
      <defs>
        <filter id="f3">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            x="100"
            y="0"
            width="200"
            height="200"
            result="r3"
          />

          <feMerge>
            <feMergeNode in="SourceGraphic"></feMergeNode>
            <feMergeNode in="r3"></feMergeNode>
          </feMerge>
        </filter>
      </defs>

      <image xlink:href="./牛马.png" x="0" y="0" height="400" width="400" filter="url(#f3)"></image>
    </svg>
  </div>
</template>

<style scoped>
svg {
  border: 1px solid red;
}
.rect {
  filter: url(#f1);
}
</style>
