export const TYPE = {
  NULL: "", // 空
  LINE: "line", // 线条
  RECT: "rect", // 矩形
  ARC: "arc", // 圆
  FILL: "fill", // 填充
  CLEAR: "clearRect", // 橡皮檫
} as const;

export type TType = (typeof TYPE)[keyof typeof TYPE];

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
