<script setup lang="ts">
const src = ref("");
const imgRef = useTemplateRef("imgRef")!;
const canvasRef = useTemplateRef("canvasRef")!;
const TempImg = new URL("./images/解析.png", import.meta.url).href;

// 1. 头像本地预览
const handleChange = (e: Event) => {
  // console.log(e);

  // @ts-ignore
  const file = e!.target.files[0] as File;

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e: ProgressEvent) => {
    console.log(e);

    // @ts-ignore
    src.value = e.target.result;
  };
};

// 2. 交互

// 3. 文件上传 canvas -> blob -> File

// 3.1 获取裁剪后的file对象
const cut = () => {
  const cutInfo = {
    x: 100, // 头像选择框在原图中距离上边的距离
    y: 100, // 头像选择框在原图中距离左边的距离
    oWidth: 50, // 头像选择框的宽度
    OHeight: 50, // 头像选择框的高度
    width: 80, // 在canvas中的宽度
    height: 80, // 在canvas中的高度
  };

  // const csv = document.createElement("canvas");
  const ctx = canvasRef.value!.getContext("2d")!;
  // csv.width = cutInfo.width;
  // csv.height = cutInfo.height;

  // 将图片绘制到canvas中
  ctx.drawImage(
    imgRef.value!,
    cutInfo.x,
    cutInfo.y,
    cutInfo.oWidth,
    cutInfo.OHeight,
    0,
    0,
    cutInfo.width,
    cutInfo.height,
  );

  // canvas -> blob
  canvasRef.value!.toBlob(blob => {
    // blob -> File
    const file = new File([blob!], "cut.png", {
      type: "image/png",
    });
    console.log(file);
  });
};
</script>

<template>
  <div>
    <!-- <img alt="解析" :src="TempImg" style="width: 200px" /> -->
    <el-image style="height: 400px" :src="TempImg" fit="fill" />

    <el-card>
      <input type="file" @change="handleChange" />
      <img alt="头像" ref="imgRef" :src="src" style="width: 200px" />
      <!-- <el-image ref="imgRef" style="height: 200px" :src="src" fit="fill" /> -->
      <el-button type="primary" @click="cut">确认</el-button>
      <canvas ref="canvasRef" width="80" height="80" v-show="false"></canvas>
    </el-card>
  </div>
</template>

<style scoped></style>
