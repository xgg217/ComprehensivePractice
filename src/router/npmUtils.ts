import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const row: RouteRecordRaw = {
  path: "/NpmUtils",
  name: "NpmUtils",
  meta: {
    title: "第三方插件",
    remark: "TweenJS、animejs、GSAP、ECharts、Zod、BPMN",
    isCardList: true,
    pathName: "NpmUtilsList",
  },
  children: [
    {
      path: "",
      name: "NpmUtilsList",
      component: () => import("@/views/NpmUtils/list.vue"),
      meta: {
        title: "第三方插件",
        remark: "第三方插件使用 学习",
      },
    },

    // #region TweenJS
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
      redirect: { name: "NpmUtilsTweenJSIndex" },

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
          component: () => import("@/views/NpmUtils/TweenJS/DynamicToInterpolationArray/index.vue"),
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
    // #endregion

    // #region Animejs
    {
      path: "Animejs",
      name: "NpmUtilsAnimejs",
      // component: aa,
      component: layout,
      meta: {
        title: "animejs动画",
        imgSrc: "",
        remark: "animejs动画",
      },
      redirect: { name: "AnimejsIndex" },
      children: [
        {
          path: "index",
          name: "AnimejsIndex",
          component: () => import("@/views/NpmUtils/Animejs/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "movingLetters",
          name: "MovingLetters",
          component: () => import("@/views/NpmUtils/Animejs/MovingLetters/index.vue"),
          meta: {
            title: "移动的字母",
            imgSrc: "MovingLetters/MovingLetters.gif",
          },
        },
        {
          path: "oneTargetAndAttribute",
          name: "OneTargetAndAttribute",
          component: () => import("@/views/NpmUtils/Animejs/OneTargetAndAttribute/index.vue"),
          meta: {
            title: "第一部分 目标与属性",
            imgSrc: "",
          },
        },
        {
          path: "oneAnimationAttribute",
          name: "oneAnimationAttribute",
          component: () => import("@/views/NpmUtils/Animejs/OneAnimationAttribute/index.vue"),
          meta: {
            title: "第一部分 动画属性",
            imgSrc: "",
          },
        },
        {
          path: "twoAttributeParameter",
          name: "twoAttributeParameter",
          component: () => import("@/views/NpmUtils/Animejs/TwoAttributeParameter/index.vue"),
          meta: {
            title: "第二部分 属性参数",
            imgSrc: "",
          },
        },
        {
          path: "twoParametersBasedOnFunctions",
          name: "TwoParametersBasedOnFunctions",
          component: () =>
            import("@/views/NpmUtils/Animejs/TwoParametersBasedOnFunctions/index.vue"),
          meta: {
            title: "第二部分 基于函数的参数",
            imgSrc: "",
          },
        },
        {
          path: "three",
          name: "Three",
          component: () => import("@/views/NpmUtils/Animejs/Three/index.vue"),
          meta: {
            title: "第三部分 值、时间轴和播放",
            imgSrc: "",
          },
        },
        {
          path: "custom",
          name: "Custom",
          component: () => import("@/views/NpmUtils/Animejs/Custom/index.vue"),
          meta: {
            title: "自定义",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region GSAP
    {
      path: "GSAP",
      name: "NpmUtilsGSAP",
      // component: aa,
      component: layout,
      // redirect: "/GSAP/index",
      meta: {
        title: "GSAP",
        imgSrc: "",
        remark: "GSAP",
      },
      redirect: { name: "GSAPIndex" },
      children: [
        {
          path: "index",
          name: "GSAPIndex",
          component: () => import("@/views/NpmUtils/GSAP/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "apiDemo",
          name: "GSAPApiDemo",
          component: () => import("@/views/NpmUtils/GSAP/ApiDemo/index.vue"),
          meta: {
            title: "api熟悉",
            imgSrc: "",
          },
        },
        {
          path: "timelineDemo",
          name: "GSAPTimelineDemo",
          component: () => import("@/views/NpmUtils/GSAP/Timeline/index.vue"),
          meta: {
            title: "时间线",
            imgSrc: "",
          },
        },
        {
          path: "StaggerDemo",
          name: "GSAPStaggerDemo",
          component: () => import("@/views/NpmUtils/GSAP/Stagger/index.vue"),
          meta: {
            title: "stagger 交错",
            imgSrc: "",
          },
        },
        {
          path: "GSDevTools",
          name: "GSDevTools",
          component: () => import("@/views/NpmUtils/GSAP/RegisterPlugin/GSDevTools.vue"),
          meta: {
            title: "插件之GSDevTools",
            imgSrc: "",
          },
        },
        {
          path: "ScrollTrigger",
          name: "ScrollTrigger",
          component: () => import("@/views/NpmUtils/GSAP/RegisterPlugin/ScrollTrigger.vue"),
          meta: {
            title: "插件之ScrollTrigger",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region ECharts
    {
      path: "ECharts",
      name: "NpmUtilsECharts",
      // component: aa,
      component: layout,
      meta: {
        title: "ECharts",
        imgSrc: "",
        remark: "图表",
      },
      redirect: { name: "EChartsIndex" },

      children: [
        {
          path: "index",
          name: "EChartsIndex",
          component: () => import("@/views/NpmUtils/ECharts/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "setOption",
          name: "EChartsSetOption",
          component: () => import("@/views/NpmUtils/ECharts/SetOption/index.vue"),
          meta: {
            title: "setOption 示例",
            imgSrc: "",
          },
        },
        {
          path: "setOptionAxis",
          name: "EChartsSetOptionAxis",
          component: () => import("@/views/NpmUtils/ECharts/SetOptionAxis/index.vue"),
          meta: {
            title: "setOption 轴体",
            imgSrc: "",
          },
        },
        {
          path: "setOptionDataZoom",
          name: "SetOptionDataZoom",
          component: () => import("@/views/NpmUtils/ECharts/SetOptionDataZoom/index.vue"),
          meta: {
            title: "DataZoom 区域缩放",
            imgSrc: "",
          },
        },
        {
          path: "setOptionTooltiop",
          name: "SetOptionTooltiop",
          component: () => import("@/views/NpmUtils/ECharts/SetOptionTooltiop/index.vue"),
          meta: {
            title: "tooltiop 提示框",
            imgSrc: "",
          },
        },
        {
          path: "dataset",
          name: "Dataset",
          component: () => import("@/views/NpmUtils/ECharts/Dataset/index.vue"),
          meta: {
            title: "dataset 数据集",
            imgSrc: "",
          },
        },
        {
          path: "visualMap",
          name: "visualMap",
          component: () => import("@/views/NpmUtils/ECharts/visualMap/index.vue"),
          meta: {
            title: "视觉映射组件",
            imgSrc: "",
          },
        },
        {
          path: "line",
          name: "line",
          component: () => import("@/views/NpmUtils/ECharts/line/index.vue"),
          meta: {
            title: "折线图",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region Zod
    {
      path: "Zod",
      name: "NpmUtilsZod",
      // component: aa,
      component: layout,
      // redirect: "/GSAP/index",
      meta: {
        title: "Zod",
        imgSrc: "",
        remark: "类型检验",
      },
      redirect: { name: "ZodIndex" },
      children: [
        {
          path: "index",
          name: "ZodIndex",
          component: () => import("@/views/NpmUtils/Zod/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "ZodForm",
          name: "GSAPApiDemo",
          component: () => import("@/views/NpmUtils/Zod/Form/index.vue"),
          meta: {
            title: "form表单",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region BPMN
    {
      path: "BPMN",
      name: "NpmUtilsBPMN",
      // component: aa,
      component: layout,
      // redirect: "/GSAP/index",
      meta: {
        title: "BPMN",
        imgSrc: "",
        remark: "流程引擎",
      },
      redirect: { name: "BPMNIndex" },
      children: [
        {
          path: "index",
          name: "BPMNIndex",
          component: () => import("@/views/NpmUtils/BPMN/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "index2",
          name: "BPMNIndex2",
          component: () => import("@/views/NpmUtils/BPMN/index2/index.vue"),
          meta: {
            title: "初始化之纯展示",
            imgSrc: "index2/展示.png",
          },
        },
        {
          path: "index3",
          name: "BPMNIndex3",
          component: () => import("@/views/NpmUtils/BPMN/index3/index.vue"),
          meta: {
            title: "初始化之编辑",
            imgSrc: "index3/编辑.png",
          },
        },
        {
          path: "index4",
          name: "BPMNIndex4",
          component: () => import("@/views/NpmUtils/BPMN/index4/index.vue"),
          meta: {
            title: "点击显示属性面板",
            imgSrc: "index4/控制面板.png",
          },
        },
        {
          path: "index5",
          name: "BPMNIndex5",
          component: () => import("@/views/NpmUtils/BPMN/index5/index.vue"),
          meta: {
            title: "新建、导入、导出",
            imgSrc: "index5/新建、导入、导出.png",
          },
        },
        {
          path: "ZH",
          name: "BPMNZH",
          component: () => import("@/views/NpmUtils/BPMN/ZH/index.vue"),
          meta: {
            title: "汉化",
            imgSrc: "",
          },
        },
        {
          path: "ElementEvent",
          name: "BPMNElementEvent",
          component: () => import("@/views/NpmUtils/BPMN/ElementEvent/index.vue"),
          meta: {
            title: "监听element并绑定事件",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion
  ],
};

export default row;
