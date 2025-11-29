// type TProps = {
//   text: string; // 水印文字
//   fontSize: number; // 文字大小
//   gap: number; // 图片之间的间隙
//   parent: HTMLElement; // 父节点
// };
import type { TProps } from "./types";

type TCanvasItem = {
  base64: string;
  size: number; // 不建议使用
  styleSize: number; // 建议使用此数值
};

// 水印
export class Watermark {
  protected props: TProps;
  private isCreating: Boolean = false;
  watermarkCanvas: WatermarkCanvas;
  watermarkDom?: HTMLDivElement; // 子节点
  private parentElement?: Element; // 父元素
  observer?: MutationObserver;
  parentObserve?: MutationObserver;

  constructor(props: TProps) {
    this.props = props;
    // this.watermarkDom =
    // 绘制水印
    this.watermarkCanvas = new WatermarkCanvas(this.props);
  }

  // 创建
  async create() {
    console.log(this.props.parent);

    if (!this.props.parent) return;
    if (this.isCreating) return;

    this.isCreating = true;

    // 如果之前的节点存在，则删除
    if (this.watermarkDom) {
      this.watermarkDom.remove();
    }
    if (this.parentElement) {
      this.parentElement.remove();
    }

    const { base64, styleSize } = await this.watermarkCanvas.draw();

    const { parentElement, watermarkDom } = this.setElementAndStyle(base64, styleSize);
    this.parentElement = parentElement;
    this.watermarkDom = watermarkDom;

    // 父级
    // {
    //   const div = document.createElement("div");

    //   div.style.position = "relative";
    //   div.style.zIndex = "9999";

    //   this.parentElement = div;
    // }

    // // 子集 也就是水印层
    // {
    //   const div = document.createElement("div");

    //   div.style.position = "fixed";
    //   div.style.inset = "0";
    //   div.style.backgroundImage = `url(${base64})`;
    //   div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
    //   div.style.backgroundRepeat = "repeat";
    //   div.style.pointerEvents = "none";

    //   this.watermarkDom = div;
    //   // this.watermarkDom.appendChild(div);
    // }

    // this.parentElement?.appendChild(this.watermarkDom);
    this.props.parent.appendChild(this.parentElement);

    this.bindMutationObserve();

    this.isCreating = false;
  }

  // 创建水印元素和 设置水印元素样式
  setElementAndStyle(base64: string, styleSize: number) {
    let parentElement: HTMLDivElement;
    let watermarkDom: HTMLDivElement;
    // 父级
    {
      const div = document.createElement("div");

      div.style.position = "relative";
      div.style.zIndex = "9999";

      // this.parentElement = div;
      parentElement = div;
    }

    // 子集 也就是水印层
    {
      const div = document.createElement("div");

      // if (this.props.isFull) {
      // 全屏
      div.style.position = "fixed";
      // } else {
      //   div.style.position = "absolute";
      //   div.style.top = "0";
      //   div.style.left = "0";
      // }

      div.style.inset = "0";
      div.style.backgroundImage = `url(${base64})`;
      div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
      div.style.backgroundRepeat = "repeat";
      div.style.pointerEvents = "none";

      // this.watermarkDom = div;
      // this.watermarkDom.appendChild(div);
      watermarkDom = div;
    }
    parentElement.appendChild(watermarkDom);

    return {
      parentElement,
      watermarkDom,
    };
  }

  // 更新参数
  // changeOptions(props: TProps) {
  //   this.props = props;
  //   this.watermarkCanvas = new WatermarkCanvas(props);
  //   //  this.remove()
  //   //   await this.create()
  // }

  // 监听节点
  bindMutationObserve() {
    if (!this.watermarkDom) {
      return;
    }

    this.observer = new MutationObserver(async (mutationsList: MutationRecord[]) => {
      if (mutationsList.length > 0) {
        this.remove();
        await this.create();
      }
    });

    this.observer.observe(this.watermarkDom, {
      attributes: true, // 属性的变动
      childList: true, // 子节点的变动（指新增，删除或者更改）
      subtree: true, // 布尔值，表示是否将该观察器应用于该节点的所有后代节点。
      characterData: true, // 节点内容或节点文本的变动。
    });

    // 父节点监听
    {
      const parentElement = this.parentElement;

      this.parentObserve = new MutationObserver(async (mutationsList: MutationRecord[]) => {
        for (const item of mutationsList) {
          if (
            item?.target === this.watermarkDom ||
            item?.removedNodes?.[0] === this.watermarkDom ||
            (item.type === "childList" &&
              item.target === parentElement &&
              item.target.lastChild !== this.watermarkDom)
          ) {
            this.remove();
            await this.create();
          }
        }
      });

      this.parentObserve.observe(parentElement!, {
        attributes: true, // 属性的变动
        childList: true, // 子节点的变动（指新增，删除或者更改）
        subtree: true, // 布尔值，表示是否将该观察器应用于该节点的所有后代节点。
        characterData: true, // 节点内容或节点文本的变动。
      });
    }
  }

  remove() {
    this.observer?.disconnect();
    this.parentObserve?.disconnect();
    if (this.watermarkDom) {
      this.watermarkDom.remove();
    }
  }

  // 销毁
  destroy() {
    this.remove();
    this.watermarkDom = undefined;
  }
}

// 创建水印Canvas
export class WatermarkCanvas {
  props: TProps;
  canvas: HTMLCanvasElement;
  devicePixelRatio: number; // 放大系数

  constructor(props: TProps) {
    this.props = props;
    this.devicePixelRatio = window.devicePixelRatio || 1;
    this.canvas = this.createCanvas();
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    const { width } = ctx.measureText(this.props.text);
    const canvasSize = Math.max(100, width) + this.props.gap * this.devicePixelRatio;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    return canvas;
  }

  // 创建画布
  draw(): Promise<TCanvasItem> {
    const canvas = this.canvas;
    const props = this.props;
    const ctx = canvas.getContext("2d")!;
    const fontSize = props.fontSize * this.devicePixelRatio;
    const font = fontSize + "px serif";
    // const ctx = canvas.getContext("2d")!;

    // 获取文字高度
    ctx.font = font;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((Math.PI / 100) * -25);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.props.text, 0, 0);

    return new Promise(resolve => {
      const obj: TCanvasItem = {
        base64: canvas.toDataURL(),
        size: canvas.width, // 不建议使用
        styleSize: canvas.width / this.devicePixelRatio, // 建议使用此数值
      };
      resolve(obj);
    });
  }

  // 清除画布
  clear() {
    const canvas = this.canvas;
    const ctx = canvas.getContext("2d");
    if (ctx === null) {
      throw new Error("没有生成画布");
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
