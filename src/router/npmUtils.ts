import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";
// import aa from "@/views/ThreeJS/Examples/aa.vue";

const list: RouteRecordRaw[] = [
  {
    path: "/NpmUtilsList",
    name: "NpmUtilsList",
    component: () => import("@/views/NpmUtils/list.vue"),
    meta: {
      title: "第三方插件",
      remark: "第三方插件使用 学习",
      isCardList: true,
    },
  },
  {
    path: "/NpmUtils",
    name: "NpmUtils",
    component: () => import("@/views/NpmUtils/index.vue"),
    // component: layout,
    meta: {
      title: "第三方插件",
      remark: "第三方插件 练习",
    },
    // redirect: "/animejs/index",
    children: [
      {
        path: "TweenJS",
        name: "NpmUtilsTweenJS",
        // component: aa,
        component: layout,
        meta: {
          title: "TweenJS",
          imgSrc: "",
          remark: "补间动画",
        },
        // redirect: "/threejs/Examples/index",

        children: [
          {
            path: "index",
            name: "NpmUtilsTweenJSIndex",
            component: () => import("@/views/NpmUtils/TweenJS/index.vue"),
            meta: {
              title: "占位图",
              imgSrc: "",
            },
          },
          {
            path: "TweenJSIndex",
            name: "TweenJSIndex",
            component: () => import("@/views/NpmUtils/TweenJS/HelloWorld/index.vue"),
            meta: {
              title: "HelloWorld",
              imgSrc: "HelloWorld/HelloWorld.png",
            },
          },
          {
            path: "BlackAndRed",
            name: "BlackAndRed",
            component: () => import("@/views/NpmUtils/TweenJS/BlackAndRed/index.vue"),
            meta: {
              title: "黑与红",
              imgSrc: "BlackAndRed/BlackAndRed.png",
            },
          },
          {
            path: "Bars",
            name: "Bars",
            component: () => import("@/views/NpmUtils/TweenJS/Bars/index.vue"),
            meta: {
              title: "线条来回移动",
              imgSrc: "Bars/Bars.png",
            },
          },
          {
            path: "Graphs",
            name: "Graphs",
            component: () => import("@/views/NpmUtils/TweenJS/Graphs/index.vue"),
            meta: {
              title: "运动轨迹",
              imgSrc: "Graphs/Graphs.png",
            },
          },
          {
            path: "Simplest",
            name: "Simplest",
            component: () => import("@/views/NpmUtils/TweenJS/Simplest/index.vue"),
            meta: {
              title: "补间动画",
              imgSrc: "Simplest/Simplest.png",
            },
          },
          {
            path: "VideoAndTime",
            name: "VideoAndTime",
            component: () => import("@/views/NpmUtils/TweenJS/VideoAndTime/index.vue"),
            meta: {
              title: "播放视频，同步渐变",
              imgSrc: "VideoAndTime/VideoAndTime.png",
            },
          },
          {
            path: "DynamicToObject",
            name: "DynamicToObject",
            component: () => import("@/views/NpmUtils/TweenJS/DynamicToObject/index.vue"),
            meta: {
              title: "Dynamic to, object",
              imgSrc: "DynamicToObject/DynamicToObject.png",
            },
          },

          {
            path: "DynamicToInterpolationArray",
            name: "DynamicToInterpolationArray",
            component: () =>
              import("@/views/NpmUtils/TweenJS/DynamicToInterpolationArray/index.vue"),
            meta: {
              title: "Dynamic to, interpolation array",
              imgSrc: "DynamicToInterpolationArray/DynamicToInterpolationArray.png",
            },
          },
          {
            path: "Repeat",
            name: "Repeat",
            component: () => import("@/views/NpmUtils/TweenJS/Repeat/index.vue"),
            meta: {
              title: "重复",
              imgSrc: "Repeat/Repeat.png",
            },
          },
          {
            path: "RelativeValues",
            name: "RelativeValues",
            component: () => import("@/views/NpmUtils/TweenJS/RelativeValues/index.vue"),
            meta: {
              title: "渐变到相对值，使用repeat",
              imgSrc: "RelativeValues/RelativeValues.png",
            },
          },
          {
            path: "Yoyo",
            name: "Yoyo",
            component: () => import("@/views/NpmUtils/TweenJS/Yoyo/index.vue"),
            meta: {
              title: "Yoyo",
              imgSrc: "Yoyo/Yoyo.png",
            },
          },
          {
            path: "StopAllChainedTweens",
            name: "StopAllChainedTweens",
            component: () => import("@/views/NpmUtils/TweenJS/StopAllChainedTweens/index.vue"),
            meta: {
              title: "StopAllChainedTweens",
              imgSrc: "StopAllChainedTweens/StopAllChainedTweens.png",
            },
          },

          {
            path: "PauseTween",
            name: "PauseTween",
            component: () => import("@/views/NpmUtils/TweenJS/PauseTween/index.vue"),
            meta: {
              title: "PauseTween",
              imgSrc: "PauseTween/PauseTween.png",
            },
          },
          {
            path: "ComplexProperties",
            name: "ComplexProperties",
            component: () => import("@/views/NpmUtils/TweenJS/ComplexProperties/index.vue"),
            meta: {
              title: "嵌套对象",
              imgSrc: "ComplexProperties/ComplexProperties.png",
            },
          },

          {
            path: "AnimateAnArrayOfValues",
            name: "AnimateAnArrayOfValues",
            component: () => import("@/views/NpmUtils/TweenJS/AnimateAnArrayOfValues/index.vue"),
            meta: {
              title: "翻转",
              imgSrc: "AnimateAnArrayOfValues/AnimateAnArrayOfValues.png",
            },
          },
        ],
      },
    ],
  },
];

export default list;
