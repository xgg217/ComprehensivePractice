<script setup lang="ts">
import Modeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/views/NpmUtils/BPMN/index2/xmlStr";

// 左边工具栏以及编辑节点的样式
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

import type ElementRegistry from "diagram-js/lib/core/ElementRegistry";
import type EventBus from "diagram-js/lib/core/EventBus";

const canvasRef = useTemplateRef("canvasRef");
let modeler: Modeler | null = null;

const loadXml = (xml: string) => {
  if (!modeler) return Promise.resolve();
  return modeler.importXML(xml);
  // try {
  //   await modeler.importXML(xml);
  // } catch (e) {
  //   console.error("importXML error:", e);
  // }
};

onMounted(async () => {
  if (!canvasRef.value) return;

  modeler = new Modeler({
    container: canvasRef.value,
  });

  loadXml(xmlStr)
    .then(() => {
      modelerListener();

      // 让画布适配
      const canvas = modeler!.get("canvas") as any;
      canvas.zoom("fit-viewport");
    })
    .catch(err => {
      console.error(err);
    });
  // eventBusListener();
});

onBeforeUnmount(() => {
  modeler?.destroy();
  modeler = null;
});

function modelerListener() {
  if (!modeler) return;

  const events = ["shape.added", "shape.removed", "element.move.end"];

  events.forEach(function (event) {
    modeler?.on(event, function (e: any) {
      const elementRegistry = modeler?.get<ElementRegistry>("elementRegistry");
      const shape = e.element ? elementRegistry?.get(e.element.id) : e.element;
      console.log(shape);
      if (event === "element.move.end") {
        console.log("元素移动结束", shape);
      } else if (event === "shape.added") {
        console.log("元素添加", shape);
      } else if (event === "shape.removed") {
        console.log("元素删除", shape);
      }
    });
  });
}

function eventBusListener() {
  if (!modeler) return;
  const eventBus = modeler.get<EventBus>("eventBus");

  const eventTypes = ["element.click", "element.changed"];

  eventTypes.forEach(eventType => {
    eventBus.on(eventType, function (e: any) {
      if (!e || e.element.type === "bpmn:Process") return;
      // console.log("元素被点击", e);

      const elementRegistry = modeler?.get<ElementRegistry>("elementRegistry");
      const shape = e.element ? elementRegistry?.get(e.element.id) : e.element;
    });
  });
}
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
