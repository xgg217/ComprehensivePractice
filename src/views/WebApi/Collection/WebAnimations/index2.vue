<script setup lang="ts">
const cardRef = useTemplateRef("cardRef");

let animate: Animation;

const val = ref(0);

// 开始
const onStart = () => {
  animate.play();
};

const onPause = () => {
  animate.pause();
};

// 取消
const onCancel = () => {
  animate.cancel();
};

// 立即完成
const onFinish = () => {
  animate.finish();
};

// 反向播放
const onReverse = () => {
  animate.reverse();
};

// 时间线
const onTimeChange = (e: Event) => {
  console.log(e);
  // @ts-ignore
  animate.currentTime = e.target!.value;
};

onMounted(() => {
  animate = cardRef.value!.animate(
    [
      { transform: "translateX(0px)" },
      { backgroundColor: "red" },
      { borderRadius: "100%", transform: "translateX(500px)", backgroundColor: "green" },
    ],
    {
      duration: 3000,
      fill: "forwards",
    },
  );
});
</script>

<template>
  <button class="start" @click="onStart">开始</button>
  <button class="pause" @click="onPause">暂停</button>
  <button class="cancel" @click="onCancel">取消</button>
  <button class="finish" @click="onFinish">立即完成</button>
  <button class="reverse" @click="onReverse">反向播放</button>
  <input type="range" value="0" class="timeChange" min="0" max="3000" @change="onTimeChange" />

  <div class="card" ref="cardRef"></div>
</template>

<style scoped>
.card {
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
