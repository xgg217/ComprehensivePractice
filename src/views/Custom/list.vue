<script setup lang="ts">
// import TwoViewCmp from "@/components/TwoViewCmp.vue";
import CardListCmp from "@/components/CardListCmp.vue";
import type { ICardItem } from "@/types/index";
import custom from "@/router/custom";

// 要显示的路由
const routeList = shallowRef<ICardItem[]>([]);

const getRoutes = () => {
  return (routeList.value = custom
    .filter(item => {
      return item.path !== "/CustomList";
    })
    .map(item => {
      const { meta, name, path } = item;
      const obj: ICardItem = {
        title: (meta?.title || "") as string,
        name: (name as string) || "",
        remark: (meta?.remark || "") as string,
        path,
      };
      return obj;
    }));
};

onMounted(() => {
  // getRouter();
  // console.log(custom);
  routeList.value = getRoutes();

  // console.log(getRoutes([], ["/", "/404"]));
  // routeList.value = getAllRoutes(["/", "/404"]);
});
</script>

<template>
  <!-- <TwoViewCmp path="/Threejs"></TwoViewCmp> -->
  <CardListCmp :list="routeList"></CardListCmp>
</template>

<style scoped></style>
