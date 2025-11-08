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

// 16进制转rgba
const hex2rgb = (str: string) => {
  // #aabbcc -> aabbcc -> [aa,bb,cc]

  // #aabbcc - aabbcc
  const str1 = str.split("#")[1];

  // aabbcc -> [aa,bb,cc]
  const arr = str1.split("");
  const arr2 = [arr[0] + arr[1], arr[2] + arr[3], arr[4] + arr[5]];

  // 将16进制转成10进制
  const arr3 = arr2.map(item => {
    return parseInt(item, 16);
  });

  return arr3;
};

console.log(hex2rgb("#ff0404"));

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
    const { width, height, color } = this.options;
    // 获取当前点的rgb值，1个像素有4个颜色值rgba
    const baseImageData = this.ctx.getImageData(this.x, this.y, 1, 1);
    // 获取像素点
    const imageData = this.ctx.getImageData(0, 0, width, height);

    // 在操作图形像素时，根据坐标点获取其r通道值的索引
    const point2Index = (x: number, y: number) => {
      return imageData.width * 4 * y + x * 4;
    };

    // 容易造成内存溢出-递归
    // const change = (x: number, y: number) => {
    //   // 获得要改变这个点的原始颜色（如何根据坐标点获得其 imageData 中的显色位置）
    //   const i = point2Index(x, y);

    //   // 判断这个原始和基准颜色是否相同，相同就改，不相同就结束
    //   {
    //     const r = baseImageData.data[0] === imageData.data[i];
    //     const g = baseImageData.data[1] === imageData.data[i + 1];
    //     const b = baseImageData.data[2] === imageData.data[i + 2];
    //     const a = baseImageData.data[3] === imageData.data[i + 3];

    //     if (r && g && b && a) {
    //       // 相等 这个位置颜色可以改变
    //       imageData.data[i] = 255;
    //       imageData.data[i + 1] = 0;
    //       imageData.data[i + 2] = 0;
    //       imageData.data[i + 3] = 255;

    //       // 继续发散，再检查其四周
    //       change(x - 1, y); // 左边
    //       change(x + 1, y); // 右边
    //       change(x, y - 1); // 上边
    //       change(x, y + 1); // 下边
    //     } else {
    //       return;
    //     }
    //   }
    // };

    // 循环
    const change = (x: number, y: number) => {
      const stack: [number, number][] = [[x, y]];

      // 循环 处理stack中的每一个点，判断是否需要填充
      while (stack.length > 0) {
        // 本次循环，处理stack中的每一个点
        const [x, y] = stack.shift()!;
        if (x < 0 || y < 0 || x > width || y > height) {
          continue;
        }
        // 代码至此，说明这个点存在

        // 判断这点是否需要填充
        const i = point2Index(x, y);
        {
          const r = baseImageData.data[0] === imageData.data[i];
          const g = baseImageData.data[1] === imageData.data[i + 1];
          const b = baseImageData.data[2] === imageData.data[i + 2];
          const a = baseImageData.data[3] === imageData.data[i + 3];

          if (r && g && b && a) {
            // 相等 这个位置颜色可以改变

            // 将颜色转成10进制
            const arr = hex2rgb(color);

            imageData.data[i] = arr[0];
            imageData.data[i + 1] = arr[1];
            imageData.data[i + 2] = arr[2];
            imageData.data[i + 3] = 255;

            // 继续发散，再检查其四周
            stack.push([x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]);
            // change(x - 1, y); // 左边
            // change(x + 1, y); // 右边
            // change(x, y - 1); // 上边
            // change(x, y + 1); // 下边
          } else {
            // 不相等，到达边界
            continue;
          }
        }
      }
    };

    change(this.x, this.y);

    this.ctx.putImageData(imageData, 0, 0);
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
