<script setup lang="ts">
// const isBool = ref(false);
//
const dialogRef = useTemplateRef("dialogRef");
const isBool = defineModel();

const handleDocumentClick = (e: Event) => {
  // console.log(e.target);
  const target = e.target!;

  // 点击的是否是自己
  // console.log(dialogRef.value === target);
  const isSelf = dialogRef.value === target;
  // if(isBool.value && dialogRef.value!.contains(target))
  // 是否是子元素
  // console.log(dialogRef.value!.contains(target));
  const isChild = dialogRef.value!.contains(target);

  console.log("是否是内部元素", isSelf || isChild);
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
});
</script>

<template>
  <div class="dialog" ref="dialogRef">
    <p>212122</p>
  </div>
</template>

<style scoped>
.dialog {
  width: 500px;
  height: 300px;
  background-color: red;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.dialog p {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  border: 2px solid black;
}
</style>
