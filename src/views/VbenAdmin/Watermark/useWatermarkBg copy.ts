import { computed } from "vue";
import type { TProps } from "./types";

// 生成一个 canvas 背景图片
export const useWatermarkBg = (props: TProps) => {
  return computed(() => {
    const canvas = document.createElement("canvas");
    const devicePixelRatio = window.devicePixelRatio || 1;
    const fontSize = props.fontSize * devicePixelRatio;
    const font = fontSize + "px serif";
    const ctx = canvas.getContext("2d")!;

    // 获取文字高度
    ctx.font = font;
    const { width } = ctx.measureText(props.text);
    const canvasSize = Math.max(100, width) + props.gap * devicePixelRatio;

    canvas.width = canvasSize;
    canvas.height = canvasSize;

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((Math.PI / 100) * -25);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.font = font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(props.text, 0, 0);
    return {
      base64: canvas.toDataURL(),
      size: canvasSize, // 不建议使用
      styleSize: canvasSize / devicePixelRatio, // 建议使用次数值
    };
  });
};
