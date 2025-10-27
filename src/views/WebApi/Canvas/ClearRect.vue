<script setup lang="ts">
const inputRef1 = useTemplateRef("canvasRef1");
const inputRef2 = useTemplateRef("canvasRef2");

onMounted(() => {
  // const ctr = inputRef.value?.getContext("2d");
  // console.log(ctr);
  {
    const ctx = inputRef1.value?.getContext("2d")!;

    ctx.beginPath();
    ctx.moveTo(50, 100);
    ctx.lineTo(50, 200);
    ctx.moveTo(250, 100);
    ctx.lineTo(250, 200);
    ctx.stroke();

    // ctx.clearRect(0, 0, 400, 400);

    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "blue";
    ctx.setLineDash([200]);
    ctx.lineDashOffset = 200;

    console.log(ctx.lineDashOffset);

    let i = 0;
    const move = () => {
      ctx.clearRect(51, 145, 198, 20);

      ctx.beginPath();
      // ctx.lineDashOffset = 200;

      if (ctx.lineDashOffset === -200) {
        ctx.lineDashOffset = 200;
      } else {
        ctx.lineDashOffset -= 1;
      }

      ctx.moveTo(51, 150);
      ctx.lineTo(250, 150);
      ctx.stroke();

      requestAnimationFrame(move);

      // setTimeout(() => {
      //   ctx.clearRect(51, 145, 198, 20);
      //   mov();
      // }, 50);
    };
    move();
  }

  {
    let num = 20;

    const ctx = inputRef2.value?.getContext("2d")!;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.setLineDash([num]);
    ctx.rect(100, 100, 200, 200);
    ctx.stroke();

    const move = () => {
      ctx.clearRect(0, 0, 600, 600);
      ctx.beginPath();

      ctx.lineDashOffset += 1;
      ctx.rect(100, 100, 200, 200);
      ctx.stroke();

      requestAnimationFrame(move);
      // setTimeout(() => {
      //   move();
      // }, 500);
    };
    move();
  }
});
</script>

<template>
  <canvas ref="canvasRef1" width="600" height="600"></canvas>
  <canvas ref="canvasRef2" width="600" height="600"></canvas>
</template>

<style scoped>
canvas {
  border: 1px solid red;
}
</style>
