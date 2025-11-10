<script setup lang="ts">
const cardRef = useTemplateRef("box");

onMounted(() => {
  const mob = new MutationObserver(e => {
    console.log(e);
  });

  mob.observe(cardRef.value!, {
    attributes: true,
    childList: true,
    characterData: true,
  });
});
</script>

<template>
  <div class="warpp" ref="box">
    <div class="son"></div>
  </div>
</template>

<style scoped></style>
