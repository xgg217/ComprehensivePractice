<script setup lang="ts">
const cardRef = useTemplateRef("cardRef");

let animate: Animation;

const onClick = () => {
  animate.play();
};

onMounted(() => {
  animate = cardRef.value!.animate(
    [
      { backgroundColor: "#0ff", offset: 0.5 },
      { backgroundColor: "#0f0", offset: 1 },
    ],
    {
      duration: 2000,
    },
  );
});
</script>

<template>
  <button @click="onClick">点击触发</button>
  <div class="card" ref="cardRef"></div>
</template>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
