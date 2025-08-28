import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";
// import aa from "@/views/ThreeJS/Examples/aa.vue";

const vue3: RouteRecordRaw[] = [
  {
    path: "/ThreejsList",
    name: "ThreejsList",
    component: () => import("@/views/ThreeJS/list.vue"),
    meta: {
      title: "threejs 内容列表",
      remark: "threejs 内容列表",
      isCardList: true,
    },
  },
  {
    path: "/Threejs",
    name: "Threejs",
    component: () => import("@/views/ThreeJS/index.vue"),
    // component: layout,
    meta: {
      title: "threejs",
      remark: "threejs 练习",
    },
    // redirect: "/animejs/index",
    children: [
      {
        path: "Examples",
        name: "ThreejsExamples",
        // component: aa,
        component: layout,
        meta: {
          title: "自定义",
          imgSrc: "",
          remark: "平时自己练习的示例",
        },
        // redirect: "/threejs/Examples/index",

        children: [
          {
            path: "index",
            name: "ThreejsExamplesIndex",
            component: () => import("@/views/ThreeJS/Examples/index.vue"),
            meta: {
              title: "占位图",
              imgSrc: "",
            },
          },
          {
            path: "index2",
            name: "ThreejsExamplesIndex2",
            component: () => import("@/views/ThreeJS/Examples/index2.vue"),
            meta: {
              title: "占位图",
              imgSrc: "",
            },
          },
        ],
      },
      {
        path: "Customs",
        name: "ThreejsCustoms",
        component: layout,
        meta: {
          title: "官方示例",
          imgSrc: "",
          remark: "官方+小册 学习",
        },
        redirect: "/threejs/Customs/index",

        children: [
          {
            path: "index",
            name: "ThreejsCustomsIndex",
            component: () => import("@/views/ThreeJS/Customs/index.vue"),
            meta: {
              title: "占位图",
              imgSrc: "",
            },
          },
          {
            path: "CustomsSceneSolarSystem",
            name: "CustomsSceneSolarSystem",
            component: () => import("@/views/ThreeJS/Customs/SceneSolarSystem/index.vue"),
            meta: {
              title: "场景之太阳系、太阳、地球、月亮",
              imgSrc: "SceneSolarSystem/SceneSolarSystem.png",
            },
          },
        ],
      },
    ],
  },
];

export default vue3;
