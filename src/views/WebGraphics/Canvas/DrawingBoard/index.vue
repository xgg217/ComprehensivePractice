<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");

onMounted(() => {
  // const ctr = inputRef.value?.getContext("2d");
  // console.log(ctr);
});

const radio1 = ref("");
const radio2 = ref("");
const color1 = ref("#000000"); // 颜色
const num = ref(8);

const onRadio1 = (e: string) => {
  radio2.value = "";
};

const onRadio2 = (e: string) => {
  radio1.value = "";
};
</script>

<template>
  <div>
    参考 window 的画板功能（简化版）
    <div class="head">
      <el-radio-group v-model="radio1" size="large" @change="onRadio1">
        <el-radio-button label="线条" value="LINE" />
        <el-radio-button label="矩形" value="RECT" />
        <el-radio-button label="圆" value="ARC" />
      </el-radio-group>

      <el-radio-group v-model="radio2" size="large" @change="onRadio2">
        <el-radio-button label="填充" value="LINE" />
        <el-radio-button label="橡皮擦" value="RECT" />
      </el-radio-group>

      <!-- 粗细 -->
      <el-input-number
        v-model="num"
        :min="1"
        :max="20"
        :precision="0"
        :step="1"
      />

      <el-color-picker v-model="color1" />

      <el-button>清空</el-button>

      <el-button type="info">另存为图片</el-button>
    </div>
    <canvas ref="canvasRef1" width="800" height="800"></canvas>
  </div>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}

.head {
  width: 800px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
