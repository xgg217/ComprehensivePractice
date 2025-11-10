<script setup lang="ts">
import ImageCmp from "./components/ImageCmp.vue";

const cardListRef = ref<HTMLDivElement>();
const list = ref<string[]>([]);

const row: string[] = [];
for (let i = 1; i <= 100; i++) {
  row.push(`https://picsum.photos/400/600?r=${i}`);
}
list.value.push(...row);
</script>

<template>
  <!-- 图片懒加载 -->
  <div class="card-list" ref="cardListRef">
    <template v-for="item of list" :key="item">
      <ImageCmp :src="item" :root="cardListRef!" />
    </template>
  </div>
</template>

<style scoped>
.card-list {
  width: 80%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  border: 1px solid #000;
}
</style>
