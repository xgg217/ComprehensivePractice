<script setup lang="ts">
import { saveAs } from "file-saver";

const props = defineProps<{
  url: string;
}>();

const canvasRef = useTemplateRef("canvasRef");
const imgRef = useTemplateRef("imgRef");
const url = new URL("./收据.png", import.meta.url).href;

const topVal = ref(0);
const leftVal = ref(0);
const isCardShow = ref(true);

// 拖拽处理
const { onDragstart, onDragover, onDrop } = (() => {
  let xVal = 0;
  let yVal = 0;
  // 开始被拖拽了
  const onDragstart = () => {
    // isCardShow.value = false;
  };

  // 在目标元素中拖拽
  const onDragover = (e: DragEvent) => {
    // 阻止默认事件 才会触发drop事件
    e.preventDefault();
    // console.log("在目标元素上移动", e.offsetX, e.offsetY);

    // 设置位置
    {
      const x = e.offsetX;
      const y = e.offsetY;
      const maxX = 700 - 200;
      const maxY = 400 - 100;

      const newX = Math.min(x, maxX);
      const newY = Math.min(y, maxY);

      // leftVal.value = newX;
      xVal = newX;
      yVal = newY;
      // console.log(newX, newY);
    }
  };
  // 放开
  const onDrop = (e: DragEvent) => {
    leftVal.value = xVal;
    topVal.value = yVal;
    // isCardShow.value = true;
  };

  return {
    onDragstart,
    onDragover,
    onDrop,
  };
})();

// 取消
const onClose = () => {};

// 保存
// const onSave = () => {
//   const ctx = canvasRef.value?.getContext("2d")!;
//   ctx.drawImage(imgRef.value!, leftVal.value, topVal.value, 200, 100);

//   const url = canvasRef.value!.toDataURL();

//   // download("signature.png", url, "image/png");
//   saveAs(url, "收集签名.png");
//   // ctx.save();
//   // ctx.beginPath();
// };

// 创建一个中间画布
const onSave = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 700;
  canvas.height = 400;
  const ctx = canvas.getContext("2d")!;
  //  ctx.drawImage(url, 0, 0, canvas.width, canvas.height);

  const img = new Image();

  img.src = url;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 700, 400);

    ctx.drawImage(imgRef.value!, leftVal.value, topVal.value, 200, 100);

    const url = canvas.toDataURL();
    saveAs(url, "收集签名.png");
  };
};

onMounted(() => {
  const ctx = canvasRef.value?.getContext("2d")!;

  const img = new Image();

  img.src = url;
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 700, 400);
  };
});
</script>

<template>
  <div class="receipt" @dragover="onDragover" @drop="onDrop">
    <canvas width="700" height="400" ref="canvasRef" />

    <el-button @click="onClose">取消</el-button>
    <el-button type="primary" @click="onSave">保存</el-button>

    <!-- 签名悬浮框 -->
    <div
      class="card"
      draggable="true"
      v-show="isCardShow"
      @dragstart="onDragstart"
      :style="{
        top: topVal + 'px',
        left: leftVal + 'px',
      }"
    >
      <img :src="props.url" ref="imgRef" alt="" />
    </div>
  </div>
</template>

<style scoped>
.receipt {
  position: relative;
  top: 0;
  left: 0;
  width: 700px;
  height: 400px;
}

canvas {
  border: 1px solid #000;
  cursor: pointer;
}

.card {
  position: absolute;
  /* top: 0;
  left: 0; */
  width: 200px;
  height: 100px;
  border: 1px solid red;
  box-sizing: border-box;
  /* background: rgba(0, 0, 0, 0.5); */
  z-index: 999;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
