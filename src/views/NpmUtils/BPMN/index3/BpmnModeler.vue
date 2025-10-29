<script setup lang="ts">
import Modeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/views/NpmUtils/BPMN/index2/xmlStr";

// 左边工具栏以及编辑节点的样式
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

const canvasRef = useTemplateRef("canvasRef");
let modeler: Modeler | null = null;

const loadXml = async (xml: string) => {
  if (!modeler) return;
  try {
    await modeler.importXML(xml);
  } catch (e) {
    console.error("importXML error:", e);
  }
};

onMounted(async () => {
  if (!canvasRef.value) return;

  modeler = new Modeler({
    container: canvasRef.value,
  });

  await loadXml(xmlStr);

  // 让画布适配
  const canvas = modeler.get("canvas") as any;
  canvas.zoom("fit-viewport");
});

onBeforeUnmount(() => {
  modeler?.destroy();
  modeler = null;
});
</script>

<template>
  <div class="containers">
    <div class="canvas" ref="canvasRef" />
  </div>
</template>

<style src="@/views/NpmUtils/BPMN/index2/style.css" scoped></style>
<style scoped>
.containers {
  position: relative;
  background-color: #ffffff;
  width: 100%;
  height: calc(100vh - 52px);
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>
