<script setup lang="ts">
import CardListCmp from "@/components/CardListCmp.vue";
import type { ICardItem } from "@/types/index";

const router = useRouter();

// 获取所有路由信息
const { routeList, getRouter } = (() => {
  // 白名单
  const whitePathlist = ["/", "/404"];

  // 路由
  const routeList = shallowRef<ICardItem[]>([]);

  // 获取路由
  const getRouter = () => {
    // console.log(router);
    const list = router.getRoutes(); // 获取所有路由
    console.log(list);

    routeList.value = list
      .filter(item => {
        // 过滤白名单
        if (whitePathlist.includes(item.path)) {
          return false;
        }
        return true;
      })
      .map(item => {
        const { meta, name, path } = item;
        const obj: ICardItem = {
          title: (meta.title || "") as string,
          name: (name as string) || "",
          remark: (meta.remark || "") as string,
          path,
        };
        return obj;
      });
  };

  return { routeList, getRouter };
})();

onMounted(() => {
  getRouter();
});
</script>

<template>
  <div>
    <CardListCmp :list="routeList"></CardListCmp>
  </div>
</template>

<style scoped></style>
