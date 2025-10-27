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
};

// 图形类
export class Shape {
  private type: TType; // 当前事件类型
  x: TPoints["x"]; // 起点x
  y: TPoints["y"]; // 起点y
  ex: number; // 终点x
  ey: number; // 终点y
  // points: TPoints[]; // 线条 = 多个点组成
  private ctx: CanvasRenderingContext2D;
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

  // 绘制
  draw() {
    // 线条
    if (this.type === TYPE.LINE) {
      this.drawLine();
      return;
    }

    // 矩形
    if (this.type === TYPE.RECT) {
      this.drawRect();
      return;
    }

    // 圆
    if (this.type === TYPE.ARC) {
      this.drawArc();
      return;
    }

    // 填充
    if (this.type === TYPE.FILL) {
      this.drawFill();
      return;
    }

    // 橡皮檫
    if (this.type === TYPE.CLEAR) {
      this.drawClearReact();
      return;
    }
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
  private drawRect(x: number, y: number, width: number, height: number) {
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
  private drawArc() {}

  // 填充
  private drawFill() {}

  // 橡皮檫
  private drawClearReact() {}
}

// 预绘制
export class ShapeB {
  private type: TType; // 当前事件类型
  x: TPoints["x"]; // 起点x
  y: TPoints["y"]; // 起点y
  ex: TPoints["x"]; // 终点x
  ey: TPoints["y"]; // 终点y
  private width: number;
  private height: number;
  points: TPoints[]; // 线条 = 多个点组成
  private ctx: CanvasRenderingContext2D;
  private options: TOptions;

  constructor(
    type: TType,
    x: number,
    y: number,
    width: number,
    height: number,
    ctx: CanvasRenderingContext2D,
    options: TOptions,
  ) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.ex = x;
    this.ey = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.points = [{ x, y }];
    this.options = options;
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
  // 画线过程
  /**
   *
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
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }

  // 矩形开始
  rectStart(ex: number, ey: number) {
    const { size, color } = this.options;
    // this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.save();
    this.ctx.beginPath();
    let x = 0;
    let y = 0;
    let width = 0;
    let height = 0;

    if (ex > this.x) {
      // 从左向右滑动
      x = this.x;
      width = ex - this.x;
    } else {
      // 从右向左滑动
      x = ex;
      width = this.x - ex;
    }

    if (ey > this.y) {
      y = this.y;
      height = ey - this.y;
    } else {
      y = ey;
      height = this.y - ey;
    }

    // this.x = x;
    // this.y = y;
    this.ex = x + width;
    this.ey = y + height;
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    console.log(x, y, width, height);

    this.ctx.strokeRect(x, y, width, height);
    // this.ctx.stroke(); // 描边
    this.ctx.restore();
  }

  // 矩形结束
  rectEnd() {
    // this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
