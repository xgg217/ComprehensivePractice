<template>
  <div class="box2">
    <h3>2指定属性值</h3>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div class="but">
      <el-button type="primary" @click="onOne">阶梯下落</el-button>
      <el-button type="primary" @click="onTwo">有序放大缩小随机</el-button>
      <el-button type="primary" @click="onThree">随机旋转</el-button>
      <el-button type="primary" @click="onFour">变圆角</el-button>
      <el-button type="primary" @click="onAll">all</el-button>
      <el-button type="primary" @click="onReset">重置</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { animate, utils } from "animejs";
import type { TAnimeInstance } from "@/views/NpmUtils/Animejs/types";

const animeRow: TAnimeInstance = {
  one: null,
  two: null,
  three: null,
  four: null,
  all: null,
};

const init = () => {
  animeRow.one = animate(".box2 ul li", {
    // @ts-ignore
    translateY: (_, i) => {
      return 50 + i * 50;
    },
    autoplay: false,
  });

  animeRow.two = animate(".box2 ul li", {
    // targets:
    // @ts-ignore
    scale: (_, i) => {
      return Math.random() * 0.8 + i / 10;
    },
    autoplay: false,
  });

  animeRow.three = animate(".box2 ul li", {
    // // @ts-ignore
    rotate: () => {
      return utils.random(-180, 180);
    },
    autoplay: false,
  });

  animeRow.four = animate(".box2 ul li", {
    // @ts-ignore
    borderRadius: el => {
      return 20 + (Math.random() * el.offsetWidth) / 4;
    },
    autoplay: false,
  });
  animeRow.all = animate(".box2 ul li", {
    // @ts-ignore
    translateY: (_, i) => {
      return 50 + i * 50;
    },

    // @ts-ignore
    scale: (_, i) => {
      return Math.random() * 0.8 + i / 10;
    },

    // @ts-ignore
    rotate: (_, i) => {
      return utils.random(-180, 180);
    },

    // @ts-ignore
    borderRadius: el => {
      return 20 + (Math.random() * el.offsetWidth) / 4;
    },
    autoplay: false,
  });
};

// 延迟升序
const onOne = () => {
  animeRow.one?.restart();
};

// 延迟降序
const onTwo = () => {
  animeRow.two?.restart();
};

// 运动时间升序
const onThree = () => {
  animeRow.three?.restart();
};

// 运动时间降序
const onFour = () => {
  animeRow.four?.restart();
};

// 运动时间降序
const onAll = () => {
  animeRow.all?.restart();
};

// 重置
const onReset = () => {
  Object.values(animeRow).forEach(item => item?.seek(0));
};

onMounted(() => {
  init();
});
</script>

<style scoped src="@/views/NpmUtils/Animejs/style.css"></style>
<style scoped>
.box2 {
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
      border: 8px solid orange;
    }
  }
}
</style>
