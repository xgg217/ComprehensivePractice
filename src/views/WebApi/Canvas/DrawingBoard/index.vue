<script setup lang="ts">
import { TYPE, type TType, type TOptions, Shape, ShapeB } from "./utils";

const canvasRef1 = useTemplateRef("canvasRef1");
const canvasRef2 = useTemplateRef("canvasRef2");
let ctx1: CanvasRenderingContext2D;
let ctx2: CanvasRenderingContext2D;

const radio1 = ref<TType>(TYPE.LINE);
const color1 = ref("#000000"); // 颜色
const size = ref(8);

let shapeBClass: ShapeB;

const startRow = {
  x: 0,
  y: 0,
};

const onRadio1 = (e: TType) => {};

const options = computed(() => {
  const obj: TOptions = {
    color: color1.value,
    size: size.value,
  };
  return obj;
});

// 开始绘制
//    在画布中，按下鼠标，开始绘制动作
const onMousedown = (e: MouseEvent) => {
  // 当前
  if (radio1.value === TYPE.NULL) {
    return;
  }
  const x = e.offsetX;
  const y = e.offsetY;
  // console.log(x, y);
  startRow.x = x;
  startRow.y = y;

  // 填充：直接在画布1上操作，也不需要移动鼠标
  if (radio1.value === TYPE.FILL) {
    const shapeClass = new Shape(TYPE.FILL, x, y, ctx1, options.value);
    shapeClass.draw();
    return;
  }

  const ref2 = canvasRef2.value!;

  //

  // 直线
  if (radio1.value === TYPE.LINE) {
    shapeBClass = new ShapeB(
      radio1.value,
      x,
      y,
      ref2.width,
      ref2.height,
      ctx2,
      options.value,
    );

    shapeBClass.lineStart();
  }

  // 鼠标在元素上移动时触发
  ref2.addEventListener("mousemove", onMousemove);

  // 鼠标抬起
  ref2.addEventListener("mouseup", onMouseup);

  // 鼠标进入
  ref2.addEventListener("mouseover", onMouseup);

  // 鼠标划出
  ref2.addEventListener("mouseout", onMouseup);
};

// 鼠标在元素上移动时触发
const onMousemove = (e: MouseEvent) => {
  // console.log("鼠标在元素上移动时触发");
  // ctx.value!.lineTo(e.offsetX, e.offsetY);
  // ctx.value!.stroke();
  const ex = e.offsetX;
  const ey = e.offsetY;
  // console.log(ex, ey);
  const radioVal = radio1.value;

  // ctx2.save();
  // ctx2.lineWidth = size.value; // 线宽
  // ctx2.strokeStyle = color1.value; // 颜色

  // 线条
  if (radioVal === TYPE.LINE) {
    shapeBClass.line(ex, ey);
    // ctx2.lineTo(ex, ey);
    // ctx2.stroke();
    // shapeClass.points.push({
    //   x: ex,
    //   y: ey,
    // });
    return;
  }

  // 矩形
  if (radioVal === TYPE.RECT) {
    // this.drawRect();
    return;
  }

  // 圆
  if (radioVal === TYPE.ARC) {
    // this.drawArc();
    return;
  }

  // 填充
  if (radioVal === TYPE.FILL) {
    // this.drawFill();
    return;
  }

  // 橡皮檫
  if (radioVal === TYPE.CLEAR) {
    // this.drawClearReact();
    return;
  }
};

// 鼠标抬起
const onMouseup = () => {
  console.log("鼠标抬起");
  const ref2 = canvasRef2.value!;
  ref2.removeEventListener("mousemove", onMousemove);
  ref2.removeEventListener("mouseup", onMouseup);
  ref2.removeEventListener("mouseover", onMouseup);
  ref2.removeEventListener("mouseout", onMouseup);

  shapeBClass.lineEnd();
  // console.log(shapeBClass);

  // 将数据绘制到画布1
  const shapeClass = new Shape(
    radio1.value,
    startRow.x,
    startRow.y,
    ctx1,
    options.value,
  );
  shapeClass.points = shapeBClass.points;
  shapeClass.draw();
  // ctx2.clearRect(0, 0, ref2.width, ref2.height);

  // // 恢复状态
  // ctx2.restore();
};

// 清空
const onClear = () => {
  const ref1 = canvasRef1.value!;
  const ref2 = canvasRef2.value!;
  ctx1.clearRect(0, 0, ref1.width, ref1.height);
  ctx2.clearRect(0, 0, ref2.width, ref2.height);
};

onMounted(() => {
  ctx1 = canvasRef1.value!.getContext("2d")!;
  ctx2 = canvasRef2.value!.getContext("2d")!;
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

      <el-button @click="onClear">清空</el-button>

      <el-button type="info" @click="">另存为图片</el-button>
    </div>
    <div class="can">
      <!-- 画布1：将画布2放置到画布1上，显示画布2的内容 -->
      <canvas ref="canvasRef1" width="400" height="400" class="can1" />

      <!-- 画布2：画笔真正绘制的画布 -->
      <canvas
        ref="canvasRef2"
        width="400"
        height="400"
        class="can1"
        @mousedown="onMousedown"
      />
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
    /*position: absolute;
    top: 0;
    left: 0;*/
    cursor: crosshair;
  }

  .can1 {
    border: 1px solid red;
  }
}
</style>
