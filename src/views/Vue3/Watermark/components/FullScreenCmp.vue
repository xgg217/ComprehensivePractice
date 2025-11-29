<script setup lang="ts">
import { Watermark } from "./../utils";
import type { TProps } from "./../types";

const parent = document.querySelector("body")!;

const op: TProps = {
  text: "水印",
  fontSize: 40,
  gap: 80,
  parent,
  isFull: true,
};

let WatermarkClass = new Watermark(op);

// 创建水印
const onCreate = () => {
  // watermarkRef.value?.onCreate();
  WatermarkClass.create();
};

// const str = ref("水印");

// 更新水印
const onUpdate = () => {
  // str.value = str.value + 1;
  op.text = op.text + 1;

  WatermarkClass.destroy();
  // WatermarkClass.create();
  WatermarkClass = new Watermark(op);
  WatermarkClass.create();
};

// 移除水印
const onDel = () => {
  // watermarkRef.value?.onDel();
  WatermarkClass.destroy();
};
</script>

<template>
  <el-card style="max-width: 480px">
    <template #header>
      <div class="card-header">
        <span>全屏设置水印</span>
      </div>
    </template>
    <el-button @click="onCreate">创建水印</el-button>
    <el-button type="primary" @click="onUpdate">更新水印</el-button>
    <el-button type="danger" @click="onDel">移除水印</el-button>
  </el-card>
</template>

<style scoped></style>
