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

export class Drawing {
  dom: HTMLCanvasElement;
  private type: TType; // 当前事件类型
  width: number; // 画板宽度
  height: number; // 画板高度
  private ctx: CanvasRenderingContext2D;
  private options: TOptions;

  constructor(dom: HTMLCanvasElement, type: TType, options: TOptions) {
    this.dom = dom;
    this.type = type;
    this.width = dom.offsetWidth;
    this.height = dom.offsetHeight;
    this.options = options;

    this.ctx = dom.getContext("2d")!;

    // 鼠标按下
    // dom.addEventListener("mousedown", this.onDown);

    // 鼠标抬起 取消事件
    // dom.removeEventListener("mousedown", this.onDown);
  }

  // 鼠标按下事件
  private onDown(this: Drawing, e: MouseEvent) {
    // 当前
    if (this.type === TYPE.NULL) {
      return;
    }

    const x = e.offsetX;
    const y = e.offsetY;
    console.log(x, y);
    console.log(this);

    // 鼠标滑动事件处理
    const onMousemove = (e2: MouseEvent) => {
      console.log(e2);
      // 直线
      if (this.type === TYPE.LINE) {
      }
    };

    console.log(this);

    // 鼠标滑动
    // this.addEventListener("mousemove", onMousemove);

    // 鼠标抬起
  }

  // 画直线
  onLine(x: number, y: number) {}

  // 画矩形

  // 清空画布
  onClearRect() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  // 下载
  onDownload() {
    console.log(this.dom);
    const url = this.dom.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "canvas画布";
    a.click();
  }
}

// 图形类
export class Shape {
  private type: TType; // 当前事件类型
  x: TPoints["x"]; // 起点x
  y: TPoints["y"]; // 起点y
  ex: TPoints["x"]; // 终点x
  ey: TPoints["y"]; // 终点y
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
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, this.y);
  }
  // 画线过程
  line(x: number, y: number) {
    const { size, color } = this.options;
    this.ctx.save();
    this.ctx.lineWidth = size;
    this.ctx.strokeStyle = color;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.points.push({ x, y });
  }
  // 画线结束
  lineEnd() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
}
