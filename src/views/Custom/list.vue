<script setup lang="ts">
import CardListCmp from "@/components/CardListCmp.vue";
import type { ICardItem } from "@/types/index";
import custom from "@/router/custom";

// 要显示的路由
const routeList = shallowRef<ICardItem[]>([]);

const getRoutes = () => {
  if (!Array.isArray(custom.children)) {
    return [];
  }

  return custom.children
    .filter(item => {
      return item.path !== "";
    })
    .map(item => {
      const { meta, name, path } = item;
      const obj: ICardItem = {
        title: meta!.title,
        name: (name as string) || "",
        remark: (meta?.remark || "") as string,
        path,
      };
      return obj;
    });
};

onMounted(() => {
  routeList.value = getRoutes();
});
</script>

<template>
  <CardListCmp :list="routeList"></CardListCmp>
</template>

<style scoped></style>
