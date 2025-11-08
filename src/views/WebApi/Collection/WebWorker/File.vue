<script setup lang="ts">
// const CHUNK_SIZE = 1024 * 1024 * 1; // 每块1M
const CHUNK_SIZE = 1024; // 每块1kb

const fileChange = (e: any) => {
  const file = e.target.files[0];
  // console.log(file);

  const chunklength = Math.ceil(file.size / CHUNK_SIZE);
  const rusule = [];
  for (let i = 0; i < chunklength; i++) {
    const chunk = getChunk(file, CHUNK_SIZE, i);
    rusule.push(chunk);
  }
};

const getChunk = (file: File, size: number, index: number) => {
  const start = index * size;
  const end = Math.min(start + size, file.size);
  return file.slice(start, end);

  // const start = index * chunkSize;
  // const end = Math.min(start + chunkSize, file.size);
  // return file.slice(start, end);
};
</script>

<template>
  <div>
    <input type="file" @change="fileChange" />
  </div>
</template>

<style scoped></style>
