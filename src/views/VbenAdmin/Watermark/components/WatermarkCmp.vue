<script setup lang="ts">
import { type TProps, DEFAULT_PROPS } from "../types";
import { useWatermarkBg } from "./../useWatermarkBg";

const props = defineProps<TProps>();

const flag = ref(0); // 便于重新生成节点
// 生成一个 canvas 背景图片
const bg = useWatermarkBg(props);
// const { base64, styleSize } = bg.value;
let isStart = false;

const parentRef = useTemplateRef("parentRef");

// 父元素
const parent = computed(() => {
  // 如果传递了父元素则使用传递的父元素
  if (props.parent) {
    return props.parent;
  }
  return parentRef.value;
});

let ob: MutationObserver;
let div: HTMLDivElement;

const { stop, pause, resume } = watchEffect(() => {
  flag.value;
  console.log(1);
  if (!isStart) {
    return;
  }
  console.log(2);

  // 没有内容
  if (!parent.value) {
    return;
  }

  console.log(3);

  // 如果之前的节点存在，则删除
  if (div) {
    div.remove();
  }

  div = document.createElement("div");
  div.style.backgroundImage = `url(${bg.value.base64})`;
  div.style.backgroundSize = `${bg.value.styleSize}px ${bg.value.styleSize}px`;
  div.style.backgroundRepeat = "repeat";
  // div.style.width = "100%";
  // div.style.height = "100%";
  div.style.zIndex = -1;
  div.style.position = "absolute";
  div.style.inset = 0;

  parent.value.appendChild(div);
});

// 不需要立即启动
pause();

// 生成水印
const createWatermark = () => {
  resume();
  isStart = true;
  console.log(1);
  flag.value++;
  console.log(ob);

  ob = new MutationObserver(records => {
    console.log("records", records);
    for (const record of records) {
      console.log(record);
      // 监控 删除水印
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

  ob.observe(parent.value!, {
    childList: true,
    attributes: true,
    subtree: true,
  });
};

// 移除水印
const onDel = () => {
  // 停止
  stop();
  if (ob) {
    ob.disconnect(); // 取消监听
    // @ts-ignore
    ob = null;
  }

  // div = null;
  if (div) {
    div.remove();
    // @ts-ignore
    div = null;
  }
};

onUnmounted(() => {
  onDel();
});

defineExpose({
  onCreate: createWatermark,
  onDel,
});
</script>

<template>
  <div class="watermark-container" ref="parentRef">
    <slot></slot>

    <!-- 添加一个div，填充满整个区域，设置水印背景，重复 -->
  </div>
</template>

<style scoped></style>
