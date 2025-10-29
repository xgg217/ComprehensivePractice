<script setup lang="ts">
import BpmnViewer from "bpmn-js/lib/Viewer";
import { xmlStr } from "./xmlStr";

const bpmnRef = useTemplateRef("bpmnRef");

let viewer: BpmnViewer | null;

onMounted(() => {
  viewer = new BpmnViewer({ container: bpmnRef.value! });

  viewer.importXML(xmlStr);
  const canvas = viewer.get("canvas") as any;
  canvas.zoom("fit-viewport");
});

onBeforeUnmount(() => {
  if (viewer) {
    viewer.destroy();
    viewer = null;
  }
});
</script>

<template>
  <div ref="bpmnRef" class="box"></div>
</template>

<style src="./style.css" scoped></style>
<style scoped></style>
