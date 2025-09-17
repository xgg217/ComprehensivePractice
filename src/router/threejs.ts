import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const ROW: RouteRecordRaw = {
  path: "/Threejs",
  name: "Threejs",
  meta: {
    title: "threejs",
    remark: "threejs 练习",
    isCardList: true,
    pathName: "ThreejsList",
  },

  children: [
    {
      path: "",
      name: "ThreejsList",
      component: () => import("@/views/ThreeJS/list.vue"),
      meta: {
        title: "threejs 内容列表",
        remark: "threejs 内容列表",
      },
    },

    {
      path: "Examples",
      name: "ThreejsExamples",
      component: layout,
      meta: {
        title: "自定义",
        imgSrc: "",
        remark: "平时自己练习的示例",
      },
      redirect: { name: "ThreejsExamplesIndex" },

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

        {
          path: "Camera1",
          name: "Camera1",
          component: () => import("@/views/ThreeJS/Customs/Camera1/index.vue"),
          meta: {
            title: "相机之相机属性",
            imgSrc: "Camera1/Camera1.jpg",
          },
        },

        {
          path: "Camera2",
          name: "Camera2",
          component: () => import("@/views/ThreeJS/Customs/Camera2/index.vue"),
          meta: {
            title: "相机之局部渲染",
            imgSrc: "Camera2/Camera2.png",
          },
        },

        {
          path: "Camera3",
          name: "Camera3",
          component: () => import("@/views/ThreeJS/Customs/Camera3/index.vue"),
          meta: {
            title: "双屏渲染 StereoEffect ",
            imgSrc: "Camera3/Camera3.jpg",
          },
        },
        {
          path: "Camera4",
          name: "Camera4",
          component: () => import("@/views/ThreeJS/Customs/Camera4/index.vue"),
          meta: {
            title: "立方相机",
            imgSrc: "Camera4/Camera4.jpg",
          },
        },

        {
          path: "texture",
          name: "Texture",
          component: () => import("@/views/ThreeJS/Customs/Texture/index.vue"),
          meta: {
            title: "纹理+批量加载",
            imgSrc: "Texture/Texture.gif",
          },
        },
        {
          path: "CubeTextureLoader1",
          name: "CubeTextureLoader1",
          component: () => import("@/views/ThreeJS/Customs/CubeTextureLoader1/index.vue"),
          meta: {
            title: "环境贴图",
            imgSrc: "CubeTextureLoader1/CubeTextureLoader1.png",
          },
        },

        {
          path: "shadowMapsSimulatedShadow",
          name: "ShadowMapsSimulatedShadow",
          component: () => import("@/views/ThreeJS/Customs/ShadowMapsSimulatedShadow/index.vue"),
          meta: {
            title: "阴影之假阴影",
            imgSrc: "ShadowMapsSimulatedShadow/ShadowMapsSimulatedShadow.png",
          },
        },

        {
          path: "shadowMapsPointLight",
          name: "ShadowMapsPointLight",
          component: () => import("@/views/ThreeJS/Customs/ShadowMapsPointLight/index.vue"),
          meta: {
            title: "阴影之聚光灯",
            imgSrc: "ShadowMapsPointLight/ShadowMapsPointLight.png",
          },
        },
        {
          path: "fog",
          name: "Fog",
          component: () => import("@/views/ThreeJS/Customs/Fog/index.vue"),
          meta: {
            title: "雾",
            imgSrc: "Fog/Fog.gif",
          },
        },
        {
          path: "GenerateMountainTerrain",
          name: "GenerateMountainTerrain",
          component: () => import("@/views/ThreeJS/Customs/GenerateMountainTerrain/index.vue"),
          meta: {
            title: "生成山脉地形",
            imgSrc: "GenerateMountainTerrain/生成山脉地形.gif",
          },
        },

        {
          path: "EdgesGeometry",
          name: "EdgesGeometry",
          component: () => import("@/views/ThreeJS/Customs/EdgesGeometry/index.vue"),
          meta: {
            title: "虚线线框几何体",
            imgSrc: "EdgesGeometry/EdgesGeometry.png",
          },
        },
        {
          path: "TunnelShuttle",
          name: "TunnelShuttle",
          component: () => import("@/views/ThreeJS/Customs/TunnelShuttle/index.vue"),
          meta: {
            title: "隧道穿梭",
            imgSrc: "TunnelShuttle/TunnelShuttle.png",
          },
        },
        {
          path: "Box3",
          name: "Box3",
          component: () => import("@/views/ThreeJS/Customs/Box3/index.vue"),
          meta: {
            title: "包围盒 Box3",
            imgSrc: "Box3/Box3.png",
          },
        },

        {
          path: "BufferGeometry1",
          name: "BufferGeometry1",
          component: () => import("@/views/ThreeJS/Customs/BufferGeometry1/index.vue"),
          meta: {
            title: "缓冲模型 BufferGeometry之三角形绘制",
            imgSrc: "BufferGeometry1/BufferGeometry1.png",
          },
        },
        {
          path: "BufferGeometry2",
          name: "BufferGeometry2",
          component: () => import("@/views/ThreeJS/Customs/BufferGeometry2/index.vue"),
          meta: {
            title: "缓冲模型 BufferGeometry之points点绘制",
            // imgSrc: "Box3/Box3.png",
          },
        },
        {
          path: "BufferGeometry3",
          name: "BufferGeometry3",
          component: () => import("@/views/ThreeJS/Customs/BufferGeometry3/index.vue"),
          meta: {
            title: "缓冲模型 BufferGeometry之自定义颜色",
            imgSrc: "BufferGeometry3/BufferGeometry3.png",
          },
        },
        {
          path: "BufferGeometry4",
          name: "BufferGeometry4",
          component: () => import("@/views/ThreeJS/Customs/BufferGeometry4/index.vue"),
          meta: {
            title: "缓冲模型 BufferGeometry之颜色渐变柱状图",
            imgSrc: "BufferGeometry4/BufferGeometry4.png",
          },
        },
        {
          path: "BufferGeometry5",
          name: "BufferGeometry5",
          component: () => import("@/views/ThreeJS/Customs/BufferGeometry5/index.vue"),
          meta: {
            title: "缓冲模型 BufferGeometry之索引",
            imgSrc: "BufferGeometry5/BufferGeometry5.jpg",
          },
        },
        {
          path: "BufferGeometry6",
          name: "BufferGeometry6",
          component: () => import("@/views/ThreeJS/Customs/BufferGeometry6/index.vue"),
          meta: {
            title: "缓冲模型 BufferGeometry之线",
            imgSrc: "BufferGeometry6/BufferGeometry6.jpg",
          },
        },
        {
          path: "Normal",
          name: "Normal",
          component: () => import("@/views/ThreeJS/Customs/Normal/index.vue"),
          meta: {
            title: "法向量",
            // imgSrc: "BufferGeometry4/BufferGeometry4.png",
          },
        },
        {
          path: "Ray",
          name: "Ray",
          component: () => import("@/views/ThreeJS/Customs/Ray/index.vue"),
          meta: {
            title: "射线 Ray",
            // imgSrc: "Box3/Box3.png",
          },
        },
      ],
    },
  ],
};

export default ROW;
