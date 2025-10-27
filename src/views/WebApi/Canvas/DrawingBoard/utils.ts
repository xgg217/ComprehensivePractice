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
  points: TPoints[]; // 线条 = 多个点组成
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
    this.points = [];
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
  private drawLine() {
    const { size, color } = this.options;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    this.ctx.moveTo(this.x, this.y);
    this.points.forEach(item => {
      this.ctx.lineTo(item.x, item.y);
    });
    this.ctx.stroke();
    this.ctx.restore();
  }

  // 绘制矩形
  private drawRect() {}

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
  width: number;
  height: number;
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
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.points = [];
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
  line(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.points.push({ x, y });
  }
  // 画线结束
  lineEnd() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.restore();
  }
}
