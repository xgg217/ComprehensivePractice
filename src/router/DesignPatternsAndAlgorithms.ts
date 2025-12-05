import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const row: RouteRecordRaw = {
  path: "/DesignPatternsAndAlgorithms",
  name: "DesignPatternsAndAlgorithms",
  meta: {
    title: "设计模式、算法、数据结构",
    remark: "设计模式、算法、数据结构",
    isCardList: true,
    pathName: "DesignPatternsAndAlgorithmsList",
  },
  children: [
    {
      path: "",
      name: "DesignPatternsAndAlgorithmsList",
      component: () => import("@/views/DesignPatternsAndAlgorithms/list.vue"),
      meta: {
        title: "设计模式与算法",
        remark: "设计模式与算法",
      },
    },

    // #region 设计模式
    {
      path: "DesignPattern",
      name: "DesignPattern",
      // component: aa,
      component: layout,
      meta: {
        title: "设计模式",
        imgSrc: "",
        remark: "设计模式",
      },
      redirect: { name: "DesignPatternIndex" },

      children: [
        {
          path: "index",
          name: "DesignPatternIndex",
          component: () => import("@/views/DesignPatternsAndAlgorithms/DesignPattern/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "PublishSubscribe",
          name: "PublishSubscribe",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/DesignPattern/PublishSubscribe/index.vue"),
          meta: {
            title: "发布订阅模式",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region 算法
    {
      path: "Algorithm",
      name: "Algorithm",
      // component: aa,
      component: layout,
      meta: {
        title: "算法、数据结构",
        imgSrc: "",
        remark: "算法、数据结构",
      },
      redirect: { name: "AlgorithmIndex" },

      children: [
        {
          path: "index",
          name: "AlgorithmIndex",
          component: () => import("@/views/DesignPatternsAndAlgorithms/Algorithm/index.vue"),
          meta: {
            title: "概述",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayBinarySearch",
          name: "AlgorithmArrayBinarySearch",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/BinarySearch.vue"),
          meta: {
            title: "数组之二分查找",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayInterpolationSearch",
          name: "AlgorithmArrayInterpolationSearch",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/InterpolationSearch.vue"),
          meta: {
            title: "数组之插值查找",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayBubbleSort",
          name: "AlgorithmArrayBubbleSort",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/BubbleSort.vue"),
          meta: {
            title: "数组之冒泡排序",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArraySelectionSort",
          name: "AlgorithmArraySelectionSort",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/SelectionSort.vue"),
          meta: {
            title: "数组之选择排序",
            imgSrc: "",
          },
        },
        {
          path: "AlgorithmArrayInsertionSort",
          name: "AlgorithmArrayInsertionSort",
          component: () =>
            import("@/views/DesignPatternsAndAlgorithms/Algorithm/Array/InsertionSort.vue"),
          meta: {
            title: "数组之插入排序",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion
  ],
};

export default row;
