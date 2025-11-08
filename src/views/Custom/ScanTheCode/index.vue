<script setup lang="ts">
import { scan } from "qr-scanner-wechat";

const wrapper = useTemplateRef("wrapper");
const imgWrapper = useTemplateRef("imgWrapper");
const imgEl = useTemplateRef("imgEl");
const src = ref("");
const resultMap = new Map();
async function getImageFromLocal(e: Event) {
  const inputEl = e.target as HTMLInputElement;
  if (!inputEl) return;
  if (!inputEl.files?.length) return;
  const image = inputEl.files[0];
  const url = URL.createObjectURL(image);
  src.value = url;

  const temCanvas = document.createElement("canvas");
  temCanvas.width = 300;
  temCanvas.height = 300;
  const ctx = temCanvas.getContext("2d", { willReadFrequently: true });

  if (!imgEl.value) return;
  imgEl.value.onload = async () => {
    if (!ctx) return;
    ctx.drawImage(imgEl.value!, 0, 0, 300, 300);
    wrapper.value?.appendChild(temCanvas);

    ctx.fillStyle = "black";
    for (let i = 0; i < 5; i++) {
      const result = await scan(temCanvas);
      if (!result?.rect || !result.text) continue;
      resultMap.set(result.text, result.rect);
      const { x, y, height, width } = result.rect;
      ctx.fillRect(x, y, width, height);
    }
    draw();
  };
}

function draw() {
  resultMap.forEach((rect, link) => {
    if (!imgWrapper.value) return;
    const dom = document.createElement("div");
    const { x, y, width, height } = rect;
    const _x = (x || 0) + width / 2 - 20;
    const _y = (y || 0) + height / 2 - 20;
    dom.className = "blue-chunk";
    dom.style.width = "40px";
    dom.style.height = "40px";
    dom.style.background = "#2ec1cc";
    dom.style.position = "absolute";
    dom.style.zIndex = "9999999";
    dom.style.top = _y + "px";
    dom.style.left = _x + "px";
    dom.style.color = "#fff";
    dom.style.textAlign = "center";
    dom.style.borderRadius = "100px";
    dom.style.borderBlockColor = "#fff";
    dom.style.borderColor = "unset";
    dom.style.borderRightStyle = "solid";
    dom.style.borderWidth = "3px";
    dom.style.animation = "scale-animation 2s infinite";
    dom.addEventListener("click", () => {});
    imgWrapper.value.appendChild(dom);
  });
}
</script>

<template>
  <div ref="wrapper" class="w-full h-full bg-red flex flex-col items-center">
    <div ref="imgWrapper" class="relative">
      <img
        ref="imgEl"
        :src="src"
        alt="qrcode"
        style="width: 300px; height: 300px"
        class="object-contain"
      />
    </div>

    <div>
      <input @change="getImageFromLocal" type="file" accept="image/*" />
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
  top: 0;
  left: 0;
}
</style>
