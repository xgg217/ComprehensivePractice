<script setup lang="ts">
import CardListCmp from "@/components/CardListCmp.vue";
import type { ICardItem } from "@/types/index";
import { getAllRoutes } from "@/utils/router";

// 要显示的路由
const routeList = shallowRef<ICardItem[]>([]);

onMounted(() => {
  routeList.value = getAllRoutes();
});
</script>

<template>
  <div class="view">
    <CardListCmp :list="routeList" key="HomeView"></CardListCmp>

    <div class="todo">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>待完成任务</span>
          </div>
        </template>
        <ul>
          <li>Canvas</li>
          <li>国际化 i18</li>
          <li>GSAP 动画</li>
          <li>IndexedDB</li>
          <li>面包屑</li>
          <li>oauth2</li>
          <li>服务器部署</li>
          <li>设计模式</li>
          <li>算法</li>
          <li>ThreeJS</li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: flex;
}
.todo {
  width: 30%;
  border: 1px solid red;

  ul {
    padding-left: 60px;
  }
  li {
    list-style: disc;
  }
}
</style>
