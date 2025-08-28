<!-- 二级页面 -->

<script setup lang="ts">
import CardListCmp from "@/components/CardListCmp.vue";
import type { ICardItem } from "@/types/index";
import { getRoutes } from "@/utils/router";

const { whitePathlist = [], path } = defineProps<{
  whitePathlist?: string[];
  path: string;
}>();

const route = useRoute();
// console.log(route);

// 要显示的路由
const routeList = shallowRef<ICardItem[]>([]);

onMounted(() => {
  console.log(123);
  routeList.value = getRoutes(path, whitePathlist);
  // getRouter();
  // console.log(getRoutes([], ["/", "/404"]));
  // routeList.value = getAllRoutes(["/", "/404"]);
});
</script>

<template>
  <CardListCmp :list="routeList" key="Two"></CardListCmp>
</template>

<style scoped></style>
