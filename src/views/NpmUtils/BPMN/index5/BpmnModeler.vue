<script setup lang="ts">
import Modeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/views/NpmUtils/BPMN/index2/xmlStr";

// 左边工具栏以及编辑节点的样式
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import { download } from "@/utils/index";

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

// 新建：使用一份空白流程的模板
const handleNew = () => {
  const empty = `<?xml version="1.0" encoding="UTF-8"?>
  <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                    xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                    xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                    targetNamespace="http://bpmn.io/schema/bpmn">
    <bpmn:process id="Process_1" isExecutable="false"/>
    <bpmndi:BPMNDiagram id="BPMNDiagram_1">
      <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"/>
    </bpmndi:BPMNDiagram>
  </bpmn:definitions>`;
  // await loadXml(empty);
  // const canvas = modeler!.get<Canvas>("canvas");
  // canvas.zoom("fit-viewport");
  loadXml(empty).then(res => {
    const canvas = modeler!.get("canvas") as any;
    canvas.zoom("fit-viewport");
  });
};

// 导入 xml
const handleImport = async (e: Event) => {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;
  const text = await file.text();
  await loadXml(text);
  const canvas = modeler!.get("canvas") as any;
  canvas.zoom("fit-viewport");
  input.value = "";
};

// 导出 XML
const handleExportXML = (pretty = true) => {
  if (!modeler) return;
  // const { xml } = await modeler.saveXML({ format: pretty });
  // download("diagram.bpmn", xml as string, "application/xml");

  modeler
    .saveXML({ format: pretty })
    .then(res => {
      const { xml } = res;

      // console.log(res);
      download("diagram.bpmn", xml as string, "application/xml");
    })
    .catch(err => {
      console.error(err);
    });
};

// 导出 SVG
const handleExportSVG = () => {
  if (!modeler) return;
  // const { svg } = await modeler.saveSVG();

  // download("diagram.svg", svg, "image/svg+xml");

  modeler
    .saveSVG()
    .then(res => {
      const { svg } = res;
      download("diagram.svg", svg, "image/svg+xml");
    })
    .catch(err => {
      console.error(err);
    });
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
  <div>
    <el-button type="primary" @click="handleNew">新建</el-button>
    <el-button type="success">导入 XML</el-button>
    <!-- <input type="file" accept=".bpmn,.xml" style="display: none" @change="handleImport" /> -->
    <label style="display: inline-block">
      <span
        style="
          padding: 6px 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
        "
      >
        导入 XML
      </span>
      <input type="file" accept=".bpmn,.xml" style="display: none" @change="handleImport" />
    </label>

    <el-button type="primary" @click="() => handleExportXML(true)">导出 XML</el-button>
    <el-button type="primary" @click="handleExportSVG">导出 SVG</el-button>

    <div class="containers">
      <div class="canvas" ref="canvasRef" />
      <div class="panel" id="js-properties-panel"></div>
    </div>
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
</style>
