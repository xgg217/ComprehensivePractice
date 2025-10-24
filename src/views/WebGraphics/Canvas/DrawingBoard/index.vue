<script setup lang="ts">
import { Drawing, TYPE, type TType, type TOptions } from "./utils";

const inputRef1 = useTemplateRef("canvasRef1");
const drawingClass = ref<Drawing>();

const radio1 = ref<TType>(TYPE.LINE);
const color1 = ref("#000000"); // 颜色
const size = ref(8);

const onRadio1 = (e: TType) => {};

onMounted(() => {
  const options: TOptions = {
    color: color1.value,
    size: size.value,
  };

  drawingClass.value = new Drawing(inputRef1.value!, radio1.value, options);
});
</script>

<template>
  <div>
    参考 window 的画板功能（简化版）
    <div class="head">
      <el-radio-group v-model="radio1" size="large" @change="onRadio1">
        <el-radio-button label="线条" :value="TYPE.LINE" />
        <el-radio-button label="矩形" :value="TYPE.RECT" />
        <el-radio-button label="圆" :value="TYPE.ARC" />
        <el-radio-button label="填充" :value="TYPE.FILL" />
        <el-radio-button label="橡皮擦" :value="TYPE.CLEAR" />
      </el-radio-group>

      <!-- 粗细 -->
      <el-input-number
        v-model="size"
        :min="1"
        :max="20"
        :precision="0"
        :step="1"
      />

      <el-color-picker v-model="color1" />

      <el-button>清空</el-button>

      <el-button type="info" @click="() => drawingClass?.onDownload()"
        >另存为图片</el-button
      >
    </div>
    <div class="can">
      <canvas ref="canvasRef1" width="800" height="800" class="can1"></canvas>
    </div>
  </div>
</template>

<style scoped>
.head {
  width: 800px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.can {
  position: relative;
  top: 0;
  left: 0;
  width: 800px;
  height: 800px;

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    cursor: crosshair;
  }

  .can1 {
    border: 1px solid red;
  }
}
</style>
