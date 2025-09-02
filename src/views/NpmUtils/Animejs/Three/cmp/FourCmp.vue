<template>
  <div class="box4">
    <h3>4创建和作时间轴</h3>
    <ul>
      <li class="blue"></li>
      <li class="red"></li>
      <li class="blue"></li>
      <li class="red"></li>
      <li class="blue"></li>
    </ul>
    <div class="but">
      <el-button type="primary" @click="onOne">方式1</el-button>
      <el-button type="primary" @click="onTwo">方式2</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createTimeline, type Timeline } from "animejs";
import type { TAnimeInstance } from "@/views/NpmUtils/Animejs/types";

// const animeRow: TAnimeInstance = {
//   one: null,
//   two: null,
// };
let animeRowOne: Timeline;
let animeRowTwo: Timeline;

const init = () => {
  // 第一个按钮
  {
    const basicTimeline = createTimeline({
      // direction: "alternate",
      alternate: true,
      loop: 2,
      autoplay: false,
    });

    basicTimeline
      .add(".box4 ul li", {
        // targets:
        translateY: 200,
      })
      .add(".box4 ul .red", {
        // targets:
        translateY: 100,
      })
      .add(".box4 ul .blue", {
        // targets:
        translateY: 0,
      });

    animeRowOne = basicTimeline;
  }

  {
    const offsetTimeline = createTimeline({
      // direction: "alternate",
      alternate: true,
      loop: 2,
      autoplay: false,
    });

    offsetTimeline
      .add(".box4 ul li", {
        // targets:
        translateY: 200,
      })
      .add(".box4 ul .red", {
        // targets:
        offset: "+=1000",
        translateY: 100,
      })
      .add(".box4 ul .blue", {
        // targets:
        offset: "*=2",
        translateY: 0,
      });

    // animeRow.two = offsetTimeline;
    animeRowTwo = offsetTimeline;
  }

  // animeRow.one = anime({
  //   targets: ".box3 ul li",
  //   translateY: obj.translateY,
  //   autoplay: false,
  // });

  // animeRow.two = anime({
  //   targets: ".box3 ul li",
  //   scale: obj.scale,
  //   autoplay: false,
  // });
};

// 延迟升序
const onOne = () => {
  animeRowOne.restart();
};

// 延迟降序
const onTwo = () => {
  animeRowTwo.restart();
};

// 重置
const onReset = () => {
  // Object.values(animeRow).forEach(item => item?.seek(0));
  animeRowOne.seek(0);
  animeRowTwo.seek(0);
};

onMounted(() => {
  init();
});
</script>

<style scoped src="@/views/NpmUtils/Animejs/style.css"></style>
<style scoped>
.box4 {
  position: relative;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  padding: 50px 0 0 50px;
  box-sizing: border-box;
  border: 1px solid #000;

  ul {
    position: absolute;
    top: 100px;
    left: 50px;
    /* border: 1px solid #000; */
    display: flex;

    li {
      width: 80px;
      height: 80px;
      background-color: black;
      margin-right: 10px;
    }

    .blue {
      background-color: blue;
    }
    .red {
      background-color: red;
    }
  }
}
</style>
