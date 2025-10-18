<script setup lang="ts">
const canvasRef = useTemplateRef("canvasRef")!;
const ctx = ref<CanvasRenderingContext2D>();

onMounted(() => {
  const c = canvasRef.value?.getContext("2d")!;

  // const ctx = c;
  ctx.value = c;

  c.beginPath();
  c.fillStyle = "#ccc";
  c.fillRect(0, 0, 400, 400);

  c.globalCompositeOperation = "destination-out";

  c.beginPath();
  c.strokeStyle = "#fff";
  c.lineWidth = 20;
  c.lineCap = "round";
  c.lineJoin = "round";
});

const onMousedown = (e: MouseEvent) => {
  console.log("鼠标按下");
  ctx.value!.beginPath();
  ctx.value!.moveTo(e.offsetX, e.offsetY);

  // 鼠标在元素上移动时触发
  canvasRef.value?.addEventListener("mousemove", onMousemove);

  // 鼠标抬起
  canvasRef.value?.addEventListener("mouseup", onMouseup);
  // 鼠标进入
  canvasRef.value?.addEventListener("mouseover", onMouseup);
};

// 鼠标在元素上移动时触发
const onMousemove = (e: MouseEvent) => {
  console.log("鼠标在元素上移动时触发");
  ctx.value!.lineTo(e.offsetX, e.offsetY);
  ctx.value!.stroke();
};

// 鼠标抬起
const onMouseup = () => {
  console.log("鼠标抬起");
  canvasRef.value?.removeEventListener("mousemove", onMousemove);
  canvasRef.value?.removeEventListener("mouseup", onMouseup);
  canvasRef.value?.removeEventListener("mouseover", onMouseup);
};
</script>

<template>
  <div class="box">
    <canvas ref="canvasRef" width="400" height="400" @mousedown="onMousedown"></canvas>
    <div>一等奖</div>
  </div>
</template>

<style scoped>
.box {
  width: 400px;
  height: 400px;
  position: relative;
  top: 0;
  left: 0;
}

canvas {
  border: 1px solid #000;
  position: absolute;
  top: 0px;
  left: 0px;
}

div {
  width: 400px;
  height: 400px;
  text-align: center;
  line-height: 400px;
  font-size: 50px;
  border: 1px solid red;
  /* background-color: #000; */
}
</style>
