<script setup lang="ts">
import Modeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/views/NpmUtils/BPMN/index2/xmlStr";

// 左边工具栏以及编辑节点的样式
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

// @ts-ignore 控制面板
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from "bpmn-js-properties-panel";

// 加入属性控制面板的样式
import "@bpmn-io/properties-panel/assets/properties-panel.css";

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
    //添加控制板
    propertiesPanel: {
      parent: "#js-properties-panel",
    },
    additionalModules: [BpmnPropertiesPanelModule, BpmnPropertiesProviderModule],
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
    <div class="panel" id="js-properties-panel"></div>
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
.panel {
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
}
button {
  padding: 6px 10px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #f6f6f6;
}
</style>
