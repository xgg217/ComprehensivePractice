export const TYPE = {
  NULL: "", // 空
  LINE: "line", // 线条
  RECT: "rect", // 矩形
  ARC: "arc", // 圆
  FILL: "fill", // 填充
  CLEAR: "clearRect", // 橡皮檫
} as const;

export type TType = (typeof TYPE)[keyof typeof TYPE];
// 点
type TPoints = {
  x: number;
  y: number;
};

// 配置
export type TOptions = {
  color: string;
  size: number;
  width: number;
  height: number;
};

// 图形类
export class Shape {
  private type: TType; // 当前事件类型
  x: TPoints["x"]; // 起点x
  y: TPoints["y"]; // 起点y
  ex: number; // 终点x
  ey: number; // 终点y
  // points: TPoints[]; // 线条 = 多个点组成
  ctx: CanvasRenderingContext2D;
  private options: TOptions;

  /**
   *
   * @param type
   * @param x
   * @param y
   * @param ctx 是那个画布
   */
  constructor(
    type: TType,
    x: TPoints["x"],
    y: TPoints["y"],
    ctx: CanvasRenderingContext2D,
    options: TOptions,
  ) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.ex = x;
    this.ey = y;
    this.ctx = ctx;
    // this.points = [];
    this.options = options;
  }

  // 绘制线
  drawLine(points: TPoints[]) {
    const { size, color } = this.options;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.x, this.y);
    points.forEach(item => {
      this.ctx.lineTo(item.x, item.y);
    });
    this.ctx.stroke();
    this.ctx.restore();
  }

  // 绘制矩形
  drawRect(x: number, y: number, width: number, height: number) {
    const { size, color } = this.options;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;

    // const width = ex - this.x;
    // const height = ey - this.y;
    // console.log(this.x, this.y, width, height);

    this.ctx.strokeRect(x, y, width, height);
    // this.ctx.stroke(); // 描边
    this.ctx.restore();
  }

  // 绘制圆
  drawArc(x: number, y: number, rx: number, ry: number) {
    const { size, color } = this.options;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;

    // const width = ex - this.x;
    // const height = ey - this.y;
    // console.log(this.x, this.y, width, height);

    this.ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    this.ctx.stroke(); // 描边
    this.ctx.restore();
  }

  // 填充
  onDrawFill() {
    // 获取当前点的rgb值
    const baseImageData = this.ctx.getImageData(this.x, this.y, 1, 1);
    // 获取是有点
    const imageData = this.ctx.getImageData(0, 0, this);
  }

  // 橡皮檫 开始
  onEraserStart() {
    const { size, color } = this.options;
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.moveTo(this.x, this.y);
    // this.ctx.strokeStyle = "#fff";
    // this.ctx.moveTo(this.x, this.y);
    // points.forEach(item => {
    //   this.ctx.lineTo(item.x, item.y);
    // });
    // this.ctx.stroke();
    // this.ctx.restore();
  }

  // 橡皮檫 划线
  onEraser(ex: number, ey: number) {
    // console.log(ex);
    this.ctx.globalCompositeOperation = "destination-out";
    this.ctx.lineTo(ex, ey);
    this.ctx.stroke();
  }

  // 橡皮檫 结束
  onEraserEnd() {
    this.ctx.restore();
  }
}

// 预绘制
export class ShapeB {
  private type: TType; // 当前事件类型
  x: TPoints["x"]; // 起点x
  y: TPoints["y"]; // 起点y
  ex: TPoints["x"]; // 终点x
  ey: TPoints["y"]; // 终点y
  points: TPoints[]; // 线条 = 多个点组成
  private ctx: CanvasRenderingContext2D;
  private options: TOptions;

  constructor(
    type: TType,
    x: number,
    y: number,
    ctx: CanvasRenderingContext2D,
    options: TOptions,
  ) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.ex = x;
    this.ey = y;
    this.ctx = ctx;
    this.points = [{ x, y }];
    this.options = options;
  }

  // 清空画布
  onClear() {
    const { width, height } = this.options;
    this.ctx.clearRect(0, 0, width, height);
  }

  // 画线开始
  lineStart() {
    const { size, color } = this.options;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.x, this.y);
  }

  /**
   * 画线过程
   * @param ex 终点 x
   * @param ey 终点 y
   */
  line(ex: number, ey: number) {
    this.ctx.lineTo(ex, ey);
    this.ctx.stroke();
    this.points.push({ x: ex, y: ey });
  }
  // 画线结束
  lineEnd() {
    this.onClear();
    this.ctx.restore();
  }

  // 矩形开始
  rectStart(ex: number, ey: number) {
    const { size, color, width, height } = this.options;
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.save();
    this.ctx.beginPath();
    const x = Math.min(this.x, ex);
    const y = Math.min(this.y, ey);
    const widthVal = Math.abs(this.x - ex);
    const heightVal = Math.abs(this.y - ey);

    // if (ex > this.x) {
    //   // 从左向右滑动
    //   x = this.x;
    //   // width = ex - this.x;
    // } else {
    //   // 从右向左滑动
    //   x = ex;
    //   // width = this.x - ex;
    // }

    // if (ey > this.y) {
    //   y = this.y;
    //   // height = ey - this.y;
    // } else {
    //   y = ey;
    //   // height = this.y - ey;
    // }

    this.ex = x + widthVal;
    this.ey = y + heightVal;
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    // console.log(x, y, width, height);
    this.points = [
      // 开始
      {
        x,
        y,
      },
      // 结束
      {
        x: x + widthVal,
        y: y + heightVal,
      },
    ];
    this.ctx.strokeRect(x, y, widthVal, heightVal);
    // this.ctx.stroke(); // 描边
    this.ctx.restore();
  }

  // 矩形结束
  rectEnd() {
    this.onClear();
  }

  // 圆开始
  arcStart(ex: number, ey: number) {
    const { size, color, width, height } = this.options;
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    // console.log(this);

    const rx = Math.abs(ex - this.x) / 2; // x轴半径
    const ry = Math.abs(ey - this.y) / 2; // x轴半径

    // 圆点坐标
    const x = Math.min(ex, this.x) + rx;
    const y = Math.min(ey, this.y) + ry;

    this.points = [
      // 开始
      {
        x,
        y,
      },
      // 结束
      {
        x: rx,
        y: ry,
      },
    ];

    this.ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    this.ctx.stroke(); // 描边
    this.ctx.restore();
  }

  // 圆结束
  arcEnd() {
    this.onClear();
  }

  // 橡皮檫 开始
  // clearRecStart() {
  //   const { size } = this.options;
  //   this.ctx.save();
  //   this.ctx.globalCompositeOperation = "destination-out";
  //   this.ctx.beginPath();
  //   this.ctx.lineWidth = size;
  //   this.ctx.strokeStyle = "red";
  //   this.ctx.moveTo(this.x, this.y);
  // }

  /**
   * 橡皮檫 画线过程
   * @param ex 终点 x
   * @param ey 终点 y
   */
  // clearRec(ex: number, ey: number) {
  //   this.ctx.lineTo(ex, ey);
  //   this.ctx.stroke();
  //   this.points.push({ x: ex, y: ey });
  // }
  // 橡皮檫 结束
  // clearRecEnd() {
  //   this.onClear();
  //   this.ctx.restore();
  // }
}
