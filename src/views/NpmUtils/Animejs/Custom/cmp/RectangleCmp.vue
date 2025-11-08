<template>
  <div class="box3">
    <h3>沿着矩形轨迹运动</h3>
    <div class="box">
      <div
        class="sphere3"
        :style="{ transform: `translateX(${row.x}px) translateY(${row.y}px)` }"
      ></div>
    </div>

    <div class="but">
      <el-button type="primary" @click="onStart">开始</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import anime from "animejs";
import { createTimeline, Timeline } from "animejs";

let timeline: Timeline;

// const animeRow: TAnimeInstance = {
//   start: null,
// };

const row = reactive({
  x: 0,
  y: 0,
  // angle: [0, ]
});

const init = () => {
  timeline = createTimeline({
    // targets: row,
    autoplay: false,
    defaults: {
      ease: "inOutExpo",
      //   delay: 0,
      //   duration: 1000,
      //   // round: 1,
      //   // direction: "alternate",
      // loop: true,
      // },
      // update: function () {
      //   x.value = row.x;
      //   y.value = row.y;
    },
  })
    .add(row, {
      x: 0,
      y: 0,
    })
    .add(row, {
      x: 100,
      y: 0,
    })
    .add(row, {
      x: 100,
      y: 100,
    })
    .add(row, {
      x: 0,
      y: 100,
    })
    .add(row, {
      x: 0,
      y: 0,
    });

  // animeRow.start.update = function (anim) {

  //   // update.value++;
  //   // progress.value = Math.round(anim.progress)
  // };
};

// 开始
const onStart = () => {
  timeline?.restart();
};

// 重置
const onReset = () => {
  // Object.values(timeline).forEach(item => item?.seek(0));
  timeline.seek(0);
};

onMounted(() => {
  init();
});
</script>

<style scoped src="@/views/NpmUtils/Animejs/style.css"></style>
<style scoped>
.box3 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 0 0 50px;
  box-sizing: border-box;
  border: 1px solid red;

  .box {
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    position: relative;
    top: 0;
    left: 0;
    margin: 100px auto 0 auto;
    /* border-radius: 50%; */

    .sphere3 {
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: red;
      border-radius: 50%;
      top: 50px;
      left: 50px;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
