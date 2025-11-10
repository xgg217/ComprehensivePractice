<script setup lang="ts">
const cloudRef = useTemplateRef("cloudRef");

// let animate: Animation;

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function getRandomAlpha() {
  // 0-9, a-z;
  // 传统：0-9,a-z 加入数组，随机位置返回
  // @ts-ignore 取巧：36 0~35 转换成36进制
  return parseInt(getRandom(0, 36)).toString(36);
}

function getRandomChinese() {
  // @ts-ignore
  return String.fromCharCode(parseInt(getRandom(0x4e00, 0x9fff)));
}

const run = () => {
  // 生成元素
  const textEle = document.createElement("div");
  textEle.className = "t";
  textEle.style.position = "absolute";
  textEle.style.top = "40px";
  textEle.style.height = "20px";
  textEle.style.lineHeight = "20px";
  textEle.style.textTransform = "uppercase";
  textEle.style.color = "#fff";
  textEle.style.textShadow = `
    0 0 5px var(--primary-color),
    0 0 15px var(--primary-color),
    0 0 30px var(--primary-color);`;
  textEle.style.transformOrigin = "bottom";

  cloudRef.value!.appendChild(textEle);

  // 生成随机的文字呢（汉语）
  textEle.innerText = getRandomChinese();

  // 元素初始水平偏移位置
  const dx = getRandom(0, 310);

  // 完成动画
  const animate = textEle.animate(
    [
      { transform: `translateX(${dx}px)`, offset: 0 },
      { transform: `translate(${dx}px, 290px)`, offset: 0.7 },
      { transform: `translate(${dx}px, 290px)`, offset: 1 },
    ],
    {
      duration: getRandom(1600, 3000),
      easing: "linear",
      fill: "forwards",
    },
  );

  animate.onfinish = function () {
    textEle.remove();
  };

  requestAnimationFrame(run);
};

onMounted(() => {
  setTimeout(() => {
    run();
  }, 1000);
});
</script>

<template>
  <div class="warpp">
    <div class="container">
      <div class="cloud" ref="cloudRef"></div>
    </div>
  </div>
</template>

<style scoped>
/*google-fonts*/
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

.warpp {
  --body-color: #181c1f;
  --primary-color: #ffffff;

  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--body-color);
  box-sizing: border-box;
}

.container {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, transparent, transparent, transparent, #0005);
}

.cloud {
  position: relative;
  top: 50px;
  z-index: 100;
  /* border: 1px solid red; */

  /* 横向云朵 */
  width: 320px;
  height: 100px;
  background-color: var(--primary-color);
  border-radius: 100px;

  filter: drop-shadow(0 0 30px var(--primary-color));
}
.cloud::before {
  content: "";
  width: 110px;
  height: 110px;
  background-color: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: 40px;

  box-shadow: 90px 0 0 30px var(--primary-color);
}

.t {
  position: absolute;
  top: 40px;
  height: 20px;
  line-height: 20px;

  text-transform: uppercase;
  color: var(--primary-color);
  text-shadow:
    0 0 5px var(--primary-color),
    0 0 15px var(--primary-color),
    0 0 30px var(--primary-color);
  transform-origin: bottom;
}
</style>
