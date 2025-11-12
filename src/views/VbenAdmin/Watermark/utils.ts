type TProps = {
  text: string; // 水印文字
  fontSize: number; // 文字大小
  gap: number; // 图片之间的间隙
  parent: HTMLElement; // 父节点
};

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
  watermarkDom?: HTMLDivElement;
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
    if (!this.props.parent) return;
    if (this.isCreating) return;

    this.isCreating = true;

    // 如果之前的节点存在，则删除
    if (this.watermarkDom) {
      this.watermarkDom.remove();
    }

    const { base64, styleSize } = await this.watermarkCanvas.draw();

    {
      const div = document.createElement("div");
      this.watermarkDom = div;
      div.style.backgroundImage = `url(${base64})`;
      div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
      div.style.backgroundRepeat = "repeat";
      // div.style.width = "100%";
      // div.style.height = "100%";
      div.style.zIndex = 9999;
      div.style.position = "absolute";
      div.style.inset = 0;
    }

    this.props.parent.appendChild(this.watermarkDom);

    this.bindMutationObserve();

    this.isCreating = false;
  }

  // 监听节点
  bindMutationObserve() {
    if (!this.watermarkDom) {
      return;
    }

    this.observer = new MutationObserver(
      async (mutationsList: MutationRecord[]) => {
        if (mutationsList.length > 0) {
          this.remove();
          await this.create();
        }
      },
    );

    this.observer.observe(this.watermarkDom, {
      attributes: true, // 属性的变动
      childList: true, // 子节点的变动（指新增，删除或者更改）
      subtree: true, // 布尔值，表示是否将该观察器应用于该节点的所有后代节点。
      characterData: true, // 节点内容或节点文本的变动。
    });

    // 父节点监听
    {
      const parent = this.props.parent;

      this.parentObserve = new MutationObserver(
        async (mutationsList: MutationRecord[]) => {
          for (const item of mutationsList) {
            if (
              item?.target === this.watermarkDom ||
              item?.removedNodes?.[0] === this.watermarkDom ||
              (item.type === "childList" &&
                item.target === parent &&
                item.target.lastChild !== this.watermarkDom)
            ) {
              this.remove();
              await this.create();
            }
          }
        },
      );

      this.parentObserve.observe(parent, {
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
class WatermarkCanvas {
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
    const canvasSize =
      Math.max(100, width) + this.props.gap * this.devicePixelRatio;
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
