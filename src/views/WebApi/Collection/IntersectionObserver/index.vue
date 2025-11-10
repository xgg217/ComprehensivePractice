<script setup lang="ts">
const contentRef = useTemplateRef("contentRef");
const boxRef = useTemplateRef("boxRef");

onMounted(() => {
  var ob = new IntersectionObserver(
    entries => {
      console.log("触发", entries);

      entries.forEach(entry => {
        // 当前是否交叉
        if (entry.isIntersecting) {
          // ob.unobserve(entry.target);
          console.log("满足交叉条件");
        } else {
          console.log("不满足交叉条件");
        }
      });
    },
    {
      root: contentRef.value,
      rootMargin: "20px",
      threshold: 1,
    },
  );

  ob.observe(boxRef.value!);
});
</script>

<template>
  <div class="content" ref="contentRef">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div class="box" ref="boxRef">box</div>
  </div>
</template>

<style scoped>
.content {
  width: 100px;
  height: 150px;
  overflow-y: scroll;
  border: 2px solid #fac;
}

.content div {
  background-color: red;
  /* width: 100px; */
  height: 100px;
}

.content .box {
  background-color: blue;
}
</style>
