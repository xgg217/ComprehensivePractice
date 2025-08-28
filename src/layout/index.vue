<script setup lang="ts">
import { getRoutes } from "@/utils/router";
import type { ICardItem } from "@/types/index";
import placeholderURl from "@/assets/占位图.svg";
import NavItemCmp from "./NavItemCmp.vue";
import type { RouteLocationMatched } from "vue-router";

const route = useRoute();
const router = useRouter();

// 左侧导航栏
const { title, routeList, avcRouteName, getRouterArr, onPage } = (() => {
  const title = ref("");
  const routeList = shallowRef<ICardItem[]>([]);
  const avcRouteName = ref(""); // 当前被激活的路由名称

  // 获取二级路由信息
  const getTwoRoute = () => {
    const matchedArr = route.matched;

    if (matchedArr.length === 2) {
      return route;
    }

    if (matchedArr.length === 3) {
      return matchedArr[1];
    }

    console.error("当前路由不存在");
  };

  // 获取所有路由
  const getRouterArr = () => {
    const list = router.options.routes; // 获取所有路由
    console.log(list);
    // 父级路由
    const { path } = route.matched[0];
    // let path = "";

    // // 当前显示了三级
    // if (route.matched.length > 2) {
    //   path = route.matched[0].path;
    // }
    console.log(path);

    // console.log(getRoutes(path, []));
    console.log(route);
    console.log(list);

    const row1 = list.find(item => {
      return item.path === path;
    });

    // 一级路由
    if (!row1 || !row1.children) {
      return [];
    }

    // const matchedArr = route.matched;
    const twoRoute = getTwoRoute();
    console.log(twoRoute);

    // 二级路由
    const row2 = row1.children.find(item => {
      return item.name === twoRoute!.name;
      // if (matchedArr.length === 2) {
      //   return item.name === route.name;
      // }

      // // 直接加入了三级
      // if (matchedArr.length === 3) {
      //   return item.name === matchedArr[1].name;
      // }

      // console.error("当前路由不存在");
    });

    if (!row2 || !row2.children) {
      return [];
    }

    console.log(row2);
    title.value = (row2.meta?.title || "") as string;

    return row2.children.map(item => {
      const { meta, name, path } = item;

      let imgSrc = placeholderURl;

      if (meta && meta.imgSrc) {
        const src = `/src/views${twoRoute!.path}/${meta.imgSrc}`;
        // console.log(src);

        imgSrc = new URL(src, import.meta.url).href;
        // console.log(imgSrc);
      }

      const obj: ICardItem = {
        title: (meta?.title || "") as string,
        name: (name as string) || "",
        remark: (meta?.remark || "") as string,
        imgSrc,
        path,
      };
      return obj;
    });
  };

  // 页面跳转
  const onPage = (name: ICardItem["name"]) => {
    if (!name) {
      return;
    }

    const isBool = router.hasRoute(name);

    if (isBool) {
      router.push({ name });
      return;
    }
    console.error("当前路由不存在");
    router.push("/404");
  };

  return {
    title,
    routeList,
    avcRouteName,
    getRouterArr,
    onPage,
  };
})();

onMounted(() => {
  console.log(route);

  // console.log(getRouterArr());

  routeList.value = getRouterArr();
});
</script>

<template>
  <main class="layout">
    <!-- 左侧导航栏 -->
    <nav>
      <h2>{{ title }}</h2>
      <ul>
        <li v-for="item of routeList" :key="item.path">
          <NavItemCmp :row="item" @click="onPage" :is-avc="avcRouteName === item.name" />
        </li>
      </ul>
    </nav>
    <!-- 内容区 -->
    <aside>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </aside>
  </main>
</template>

<style scoped>
main.layout {
  display: flex;
  /* align-items: stretch; */
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

nav {
  /* flex: 1; */
  width: var(--nav);
  height: var(--view-height);
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
  /* border: 1px solid red; */
  border-right: 1px solid #999;
}

nav li {
  box-sizing: border-box;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

aside {
  flex: 1;
  height: 100vh;
  height: var(--view-height);
  box-sizing: border-box;
  margin-left: 10px;
  overflow-y: scroll;
}
</style>
