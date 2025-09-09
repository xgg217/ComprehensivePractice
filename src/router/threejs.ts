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
          path: "texture",
          name: "Texture",
          component: () => import("@/views/ThreeJS/Customs/Texture/index.vue"),
          meta: {
            title: "纹理",
            imgSrc: "Texture/Texture.gif",
          },
        },
        // {
        //   path: "texture2",
        //   name: "Texture2",
        //   component: () => import("@/views/ThreeJS/Customs/Texture2/index.vue"),
        //   meta: {
        //     title: "纹理2",
        //     imgSrc: "Texture2/Texture.gif",
        //   },
        // },
        // {
        //   path: "texture3",
        //   name: "Texture3",
        //   component: () => import("@/views/ThreeJS/Customs/Texture3/index.vue"),
        //   meta: {
        //     title: "纹理之批量加载回调",
        //     imgSrc: "Texture3/Texture.gif",
        //   },
        // },
        {
          path: "cameraSetScissorTest",
          name: "CameraSetScissorTest",
          component: () => import("@/views/ThreeJS/Customs/CameraSetScissorTest/index.vue"),
          meta: {
            title: "相机之局部渲染",
            imgSrc: "CameraSetScissorTest/CameraSetScissorTest.png",
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
          path: "Ray",
          name: "Ray",
          component: () => import("@/views/ThreeJS/Customs/Ray/index.vue"),
          meta: {
            title: "射线 Ray",
            // imgSrc: "Box3/Box3.png",
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
          path: "Normal",
          name: "Normal",
          component: () => import("@/views/ThreeJS/Customs/Normal/index.vue"),
          meta: {
            title: "法向量",
            // imgSrc: "BufferGeometry4/BufferGeometry4.png",
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
      ],
    },
  ],
};

export default ROW;
