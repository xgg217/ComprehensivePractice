<script setup lang="ts">
import { WatermarkCanvas } from "./../utils";
import type { TProps } from "./../types";

const flag = ref(0); // 便于重新生成节点
// 生成一个 canvas 背景图片

const props = defineProps<TProps>();

const parentRef = useTemplateRef("parentRef");
const watermarkCanvas = new WatermarkCanvas(props);
const { base64, styleSize } = await watermarkCanvas.draw();
let div: HTMLDivElement;

watchEffect(() => {
  flag.value;

  // 没有内容
  if (!parentRef.value) {
    return;
  }

  // 如果之前的节点存在，则删除
  if (div) {
    div.remove();
  }

  div = document.createElement("div");
  div.style.backgroundImage = `url(${base64})`;
  div.style.backgroundSize = `${styleSize}px ${styleSize}px`;
  div.style.backgroundRepeat = "repeat";
  // div.style.width = "100%";
  // div.style.height = "100%";
  div.style.zIndex = "9999";
  div.style.position = "absolute";
  div.style.inset = "0";
  div.style.pointerEvents = "none";

  parentRef.value.appendChild(div);
});

let ob: MutationObserver;
onMounted(() => {
  ob = new MutationObserver(records => {
    for (const record of records) {
      // @ts-ignore 监控 删除水印
      for (const dom of record.removeNodes) {
        if (dom === div) {
          // 有删除操作
          console.log("删除了水印");
          flag.value++; // 触发watchEffect
          return;
        }
      }

      // 监控 修改属性
      if (record.target === div) {
        flag.value++; // 触发watchEffect
        return;
      }
    }
  });

  // 监听父元素
  ob.observe(parentRef.value!, {
    childList: true, // 监听元素内容是否变化
    attributes: true, // 监听自身的属性是否变化
    subtree: true, // 监听整个子树是否变化
  });
});

onUnmounted(() => {
  ob && ob.disconnect(); // 取消监听
  // @ts-ignore
  div = null;
});
</script>

<template>
  <div ref="parentRef" class="watermark-container">
    <slot></slot>

    <!-- 添加一个div，填充满整个区域，设置水印背景，重复 -->
  </div>
</template>

<style scoped>
.watermark-container {
  position: relative;
  top: 0;
  left: 0;
}
</style>
