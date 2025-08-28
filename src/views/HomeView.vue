<script setup lang="ts">
import CardListCmp from "@/components/CardListCmp.vue";
import type { ICardItem } from "@/types/index";
import { getAllRoutes } from "@/utils/router";

// 要显示的路由
const routeList = shallowRef<ICardItem[]>([]);

onMounted(() => {
  // getRouter();

  // console.log(getRoutes([], ["/", "/404"]));
  routeList.value = getAllRoutes();
});
</script>

<template>
  <div class="view">
    <CardListCmp :list="routeList" key="HomeView"></CardListCmp>
  </div>
</template>

<style scoped></style>
