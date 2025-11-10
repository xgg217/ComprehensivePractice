<script setup lang="ts">
const props = defineProps<{
  root: HTMLDivElement;
  src: string; // 图片地址
}>();

const boxRef = useTemplateRef("boxRef");

const defaultUrl = new URL("./default.png", import.meta.url).href;

const url = ref(defaultUrl);
let IO: IntersectionObserver;
// const url = props.src;

// 回调函数
const IOCallback = entries => {
  console.log("11");

  // 循环所有观察元素
  entries.forEach(item => {
    // 如果出现在可视区内，则替换 src
    if (item.isIntersecting) {
      // console.info("出现在可视区内");
      // item.target.src = item.target.dataset.src; // 替换 src
      url.value = props.src;
      IO.unobserve(item.target); // 停止观察当前元素 避免不可见时候再次调用 callback 函数
    }
  });
};

onMounted(() => {
  IO = new IntersectionObserver(IOCallback, {
    root: props.root,
  });
  IO.observe(boxRef.value!);
});
</script>

<template>
  <div class="item" ref="boxRef">
    <img :src="url" alt="" />
    <!-- <img :src="props.src" alt="" loading="lazy" /> -->
  </div>
</template>

<style scoped>
.item {
  overflow: hidden;
}
.item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
</style>
