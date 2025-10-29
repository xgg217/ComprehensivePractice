<script setup lang="ts">
/**
 * 分析
 *  1.线条绘制
 *      多个点的连接
 *      鼠标按下是起始点
 *      鼠标移动，产生过程点
 *      鼠标抬起，绘制结束
 *  2.矩形绘制
 *      需要的数据：起始点，宽高
 *      鼠标按下，获得起始点
 *      鼠标移动，产生过程点
 *      通过两点，可以计算宽高
 *      矩形在绘制过程中，没有抬起鼠标，则还处于选择阶段，矩形还没有确定，有一个拖拽的视觉效果。实际上是一个不断绘制的过程。此时存在一个问题
 *        由于矩形会与其他图像产生覆盖，如果删除之前绘制的矩形，也会将之前图像覆盖的部分也删除
 *        为了提高性能，考虑使用2个画布。第一个画布绘制当前的这个图像，抬起鼠标后，图像确定再将其绘制到第二个画布上
 *  3.圆型
 *      需要的数据：圆心点、半径
 *      鼠标按下获得起始点
 *      鼠标移动，产生过程点
 *      起始点与过程点，计算半径和圆心点
 *      可能是正圆、也有可能是椭圆
 *      原的拖拽绘制与矩形相同
 *  4.填充
 *      不是对某个图形进行填充，而是对一块合围区域填充
 *      合围区域可能是有多个图像部分合围而成
 *      难点：如果确定这个合围区域（可以通过像素操作来实现）
 *        以触发填充操作的那个点为基准，获得那个点的rgba的值
 *        然后四周扩散，一次找到周围所有的点，与这个rgba比较
 *            完全相等，就实现颜色的变化
 *            不相等，则说明已经到了边界，就不在继续扩散了
 *  5. 橡皮檫
 *    本质还是画线条
 *    只不过与原图形的合成关系发生了变化
 *  6.
 *
 * 结论
 *   需要2个画布，一个体现绘制过程，一个用来展示绘制结果
 *   许愿哦图形对象，包括多种类型（线条、矩形、圆状、橡皮檫）
 */

import { TYPE, type TType, type TOptions, Shape, ShapeB } from "./utils";

const canvasRef1 = useTemplateRef("canvasRef1");
const canvasRef2 = useTemplateRef("canvasRef2");
let ctx1: CanvasRenderingContext2D;
let ctx2: CanvasRenderingContext2D;

const radio1 = ref<TType>(TYPE.ARC);
const color1 = ref("#000000"); // 颜色
const size = ref(2);

let shapeClass: Shape;
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
    width: canvasRef2.value!.width,
    height: canvasRef2.value!.height,
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
    shapeClass.onDrawFill();
    return;
  }

  const ref2 = canvasRef2.value!;

  //
  shapeClass = new Shape(TYPE.FILL, x, y, ctx1, options.value);
  shapeBClass = new ShapeB(radio1.value, x, y, ctx2, options.value);

  // 直线
  if (radio1.value === TYPE.LINE) {
    shapeBClass.lineStart();
  }

  // 橡皮檫
  if (radio1.value === TYPE.CLEAR) {
    // shapeBClass.clearRecStart();
    // 直接在原图上操作3
    // console.log(1111);
    // shapeClass = new Shape(TYPE.CLEAR, x, y, ctx1, options.value);
    // shapeClass.ctx = ctx1;
    shapeClass.onEraserStart();
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
  // console.log(ex, radioVal);

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
    shapeBClass.rectStart(ex, ey);
    return;
  }

  // 圆
  if (radioVal === TYPE.ARC) {
    // this.drawArc();
    shapeBClass.arcStart(ex, ey);
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
    // console.log(11);
    shapeClass.onEraser(ex, ey);
    return;
  }
};

// 鼠标抬起
const onMouseup = () => {
  console.log("鼠标抬起");
  const ref2 = canvasRef2.value!;

  const radioVal = radio1.value;
  // console.log(shapeBClass);

  // const shapeClass = new Shape(
  //   radio1.value,
  //   startRow.x,
  //   startRow.y,
  //   ctx1,
  //   options.value,
  // );

  // 线条
  if (radioVal === TYPE.LINE) {
    shapeBClass.lineEnd();

    // 将数据绘制到画布1
    // shapeClass.points = shapeBClass.points;

    shapeClass.drawLine(shapeBClass.points);
  }

  // 矩形
  if (radioVal === TYPE.RECT) {
    const { points } = shapeBClass;

    const x = points[0].x;
    const y = points[0].y;
    const widht = points[1].x - x;
    const height = points[1].y - y;
    // console.log("实际", shapeBClass.points);

    shapeClass.drawRect(x, y, widht, height);
    shapeBClass.rectEnd();
  }

  // 圆
  if (radioVal === TYPE.ARC) {
    const { points } = shapeBClass;

    const x = points[0].x;
    const y = points[0].y;
    const rx = points[1].x;
    const ry = points[1].y;
    // console.log("实际", shapeBClass.points);

    shapeClass.drawArc(x, y, rx, ry);
    shapeBClass.rectEnd();
  }

  // 橡皮檫
  if (radioVal === TYPE.CLEAR) {
    shapeClass.onEraserEnd();
    // shapeClass.ctx = ctx1;
    // this.ctx.restore();
    // shapeClass.onEraserEnd(ex, ey);
    // shapeBClass.clearRecEnd();
    // 将数据绘制到画布1
    // shapeClass.points = shapeBClass.points;
    // shapeClass.drawClearReact(shapeBClass.points);
  }

  ref2.removeEventListener("mousemove", onMousemove);
  ref2.removeEventListener("mouseup", onMouseup);
  ref2.removeEventListener("mouseover", onMouseup);
  ref2.removeEventListener("mouseout", onMouseup);
};

// 清空
const onClear = () => {
  const ref1 = canvasRef1.value!;
  const ref2 = canvasRef2.value!;
  ctx1.clearRect(0, 0, ref1.width, ref1.height);
  ctx2.clearRect(0, 0, ref2.width, ref2.height);
};

// 下载
const onDownload = () => {
  const url = canvasRef1.value!.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "canvas画布";
  a.click();
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

      <el-button type="info" @click="onDownload">另存为图片</el-button>
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
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
