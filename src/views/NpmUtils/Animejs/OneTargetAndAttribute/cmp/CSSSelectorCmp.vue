<template>
  <div class="box1">
    <h3>CSS选择器</h3>

    <ul>
      <!-- <li v-for="i in 9" :key="i" :class="'a' + i"></li> -->
      <li class="a1"></li>
      <li class="a2"></li>
      <li class="a3"></li>
      <li class="a4"></li>
      <li class="a5"></li>
      <li class="a6"></li>
      <li class="a7"></li>
      <li class="a8"></li>
      <li class="a9"></li>
    </ul>

    <div class="but">
      <el-button type="primary" @click="onBlue">蓝色下落</el-button>
      <el-button type="primary" @click="onBlueRed">蓝色红色下落</el-button>
      <el-button type="primary" @click="onEven">偶数行下落</el-button>
      <el-button type="primary" @click="onNotRed">非红下落</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate, JSAnimation } from "animejs";

let blue: JSAnimation;
let blueRed: JSAnimation;
let even: JSAnimation;
let notRed: JSAnimation;

const init = () => {
  blue = animate(".box1 li.a1", {
    // targets:
    translateY: 400,
    autoplay: false,
  });

  blueRed = animate(
    [".box1 li.a1", ".box1 li.a2", ".box1 li.a4", ".box1 li.a5", ".box1 li.a7", ".box1 li.a8"],
    {
      // targets:
      translateY: 400,
      autoplay: false,
    },
  );

  even = animate(".box1 li:nth-child(even)", {
    // targets:
    translateY: 400,
    autoplay: false,
  });

  notRed = animate(".box1 li:not(.box1 li:nth-child(3n + 2))", {
    // targets:
    translateY: 400,
    autoplay: false,
  });
};

// 蓝色下落
const onBlue = () => {
  blue?.restart();
};

// 蓝色红色下落
const onBlueRed = () => {
  blueRed?.restart();
};

// 偶数行下落
const onEven = () => {
  even?.restart();
};

// 非红色
const onNotRed = () => {
  notRed?.restart();
};

// 重置
const onReset = () => {
  Object.values([blue, blueRed, even, notRed]).forEach(item => item.seek(0));
};

onMounted(() => {
  init();
});
</script>

<style scoped src="@/views/NpmUtils/Animejs/style.css"></style>
<style scoped>
.box1 {
  border: 1px solid red;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
}
.box1 ul {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    width: 50px;
    height: 50px;
    /* border: 1px solid #000; */
    margin-right: 10px;
  }

  li:nth-child(3n + 1) {
    background: blue;
  }

  li:nth-child(3n + 2) {
    background: red;
  }

  li:nth-child(3n + 3) {
    background: black;
  }
}

.box1 .a1 {
  border: 1px solid red;
}

.box1 .but {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
