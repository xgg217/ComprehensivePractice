<script setup lang="ts">
/**
 * 粒子烟花
 *   部分1 烟花升空
 *    1.由多个小球组成一个烟花升空拖尾的效果
 *    2. 每个小球的半径依次减小
 *    3. 每个小球的透明度依次变化，上升过程中，透明度整体还会变化
 *        例如：第一瞬间 10个小球的透明度分别是 1、0.99、0.98
 *        例如：第二瞬间 10个小球的透明度分别是 0.5、0.49、0.48
 *   部分2 烟花爆炸
 */

// const canvasRef = useTemplateRef("canvasRef")!;
// const context = ref<CanvasRenderingContext2D>();
</script>

<template>
  <div class="box">
    <!-- <canvas width="100%" height="400" ref="canvasRef"></canvas> -->
  </div>
</template>

<style scoped>
.box {
  border: 1px solid red;
}
</style>
