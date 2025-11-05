<script setup lang="ts">
const emit = defineEmits<{
  submit: [url: string];
}>();

const canvasRef = useTemplateRef("canvasRef");

const { onMousedown, onMousemove, onMouseup, onClose, onSubmit } = (() => {
  // 位置
  const offsetRow = {
    x: 0,
    y: 0,
  };
  let isMouseDown = false;

  // 鼠标按下
  const onMousedown = (e: MouseEvent) => {
    const x = e.offsetX;
    const y = e.offsetY;
    offsetRow.x = x;
    offsetRow.y = y;

    isMouseDown = true;

    const ctx = canvasRef.value!.getContext("2d")!;

    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.moveTo(x, y);
  };

  // 鼠标移动
  const onMousemove = (e: MouseEvent) => {
    if (!isMouseDown) {
      return;
    }

    const ctx = canvasRef.value!.getContext("2d")!;

    const ex = e.offsetX;
    const ey = e.offsetY;

    ctx.lineTo(ex, ey);
    ctx.stroke();
  };

  // 鼠标抬起
  const onMouseup = () => {
    console.log("鼠标抬起");
    isMouseDown = false;
    const ctx = canvasRef.value!.getContext("2d")!;
    ctx.restore();
  };

  // 清空
  const onClose = () => {
    const ctx = canvasRef.value!.getContext("2d")!;
    ctx.clearRect(0, 0, canvasRef.value!.width, canvasRef.value!.height);

    emit("submit", "");
  };

  // 提交
  const onSubmit = () => {
    const ctx = canvasRef.value!.getContext("2d")!;
    console.log("提交");

    const url = canvasRef.value!.toDataURL();
    emit("submit", url);
  };

  return { onMousedown, onMousemove, onMouseup, onClose, onSubmit };
})();
</script>

<template>
  <div>
    <!-- 签名画板 -->
    <canvas
      width="400"
      height="400"
      ref="canvasRef"
      @mousedown="onMousedown"
      @mousemove="onMousemove"
      @mouseup="onMouseup"
    />

    <el-button @click="onClose">清空</el-button>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid red;
  cursor: pointer;
}
</style>
