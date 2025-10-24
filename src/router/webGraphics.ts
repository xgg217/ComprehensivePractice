import type { RouteRecordRaw } from "vue-router";
import layout from "@/layout/index.vue";

const row: RouteRecordRaw = {
  path: "/WebGraphics",
  name: "WebGraphics",
  meta: {
    title: "web 图形技术",
    remark: "SVG、Canvas、webGL、Three.js",
    isCardList: true,
    pathName: "WebGraphicsList",
  },
  children: [
    {
      path: "",
      name: "WebGraphicsList",
      component: () => import("@/views/WebGraphics/list.vue"),
      meta: {
        title: "web Api",
        remark: "web Api 学习",
      },
    },

    // #region Canvas
    {
      path: "Canvas",
      name: "WebGraphicsCanvas",
      // component: aa,
      component: layout,
      meta: {
        title: "Canvas",
        imgSrc: "",
        remark: "画布",
      },
      redirect: { name: "WebGraphicsCanvasIndex" },

      children: [
        {
          path: "index",
          name: "WebGraphicsCanvasIndex",
          component: () => import("@/views/WebGraphics/Canvas/index.vue"),
          meta: {
            title: "画布 画笔",
            imgSrc: "",
          },
        },
        {
          path: "index2",
          name: "WebGraphicsCanvasIndex2",
          component: () => import("@/views/WebGraphics/Canvas/index2.vue"),
          meta: {
            title: "画布 创建方式",
            imgSrc: "",
          },
        },
        {
          path: "index3",
          name: "WebGraphicsCanvasIndex3",
          component: () => import("@/views/WebGraphics/Canvas/index3.vue"),
          meta: {
            title: "画布 创建方式",
            imgSrc: "",
          },
        },
        {
          path: "Rect",
          name: "WebGraphicsCanvasRect",
          component: () => import("@/views/WebGraphics/Canvas/Rect.vue"),
          meta: {
            title: "矩形",
            imgSrc: "",
          },
        },
        {
          path: "BeginPath",
          name: "WebGraphicsCanvasBeginPath",
          component: () => import("@/views/WebGraphics/Canvas/BeginPath.vue"),
          meta: {
            title: "路径分组BeginPath",
            imgSrc: "",
          },
        },
        {
          path: "Line",
          name: "WebGraphicsCanvasLine",
          component: () => import("@/views/WebGraphics/Canvas/Line.vue"),
          meta: {
            title: "直线 折线",
            imgSrc: "",
          },
        },
        {
          path: "clearRect",
          name: "WebGraphicsCanvasClearRect",
          component: () => import("@/views/WebGraphics/Canvas/ClearRect.vue"),
          meta: {
            title: "清除画布clearRect",
            imgSrc: "",
          },
        },
        {
          path: "Grid",
          name: "WebGraphicsCanvasGrid",
          component: () => import("@/views/WebGraphics/Canvas/Grid.vue"),
          meta: {
            title: "网格线",
            imgSrc: "",
          },
        },
        {
          path: "CoordinateSystem",
          name: "WebGraphicsCanvasCoordinateSystem",
          component: () =>
            import("@/views/WebGraphics/Canvas/CoordinateSystem.vue"),
          meta: {
            title: "坐标系",
            imgSrc: "",
          },
        },
        {
          path: "ClosePath",
          name: "WebGraphicsCanvasClosePath",
          component: () => import("@/views/WebGraphics/Canvas/ClosePath.vue"),
          meta: {
            title: "ClosePath 线条填充与闭合",
            imgSrc: "",
          },
        },
        {
          path: "Text",
          name: "WebGraphicsCanvasText",
          component: () => import("@/views/WebGraphics/Canvas/Text.vue"),
          meta: {
            title: "文本",
            imgSrc: "",
          },
        },
        {
          path: "Image",
          name: "WebGraphicsCanvasImage",
          component: () => import("@/views/WebGraphics/Canvas/Image.vue"),
          meta: {
            title: "图片",
            imgSrc: "",
          },
        },
        {
          path: "ImagesAndAnimations",
          name: "WebGraphicsCanvasImagesAndAnimations",
          component: () =>
            import("@/views/WebGraphics/Canvas/ImagesAndAnimations.vue"),
          meta: {
            title: "图像与动画",
            imgSrc: "ImagesAndAnimations.webp",
          },
        },
        {
          path: "CreatePattern",
          name: "WebGraphicsCanvasCreatePattern",
          component: () =>
            import("@/views/WebGraphics/Canvas/CreatePattern.vue"),
          meta: {
            title: "图像填充",
            imgSrc: "",
          },
        },
        {
          path: "Clip",
          name: "WebGraphicsCanvasClip",
          component: () => import("@/views/WebGraphics/Canvas/Clip.vue"),
          meta: {
            title: "裁剪",
            imgSrc: "",
          },
        },

        {
          path: "Translate",
          name: "WebGraphicsCanvasTranslate",
          component: () => import("@/views/WebGraphics/Canvas/Translate.vue"),
          meta: {
            title: "图像变换之移动",
            imgSrc: "",
          },
        },
        {
          path: "Scale",
          name: "WebGraphicsCanvasScale",
          component: () => import("@/views/WebGraphics/Canvas/Scale.vue"),
          meta: {
            title: "图像变换之缩放",
            imgSrc: "",
          },
        },
        {
          path: "SaveRestore",
          name: "WebGraphicsCanvasSaveRestore",
          component: () => import("@/views/WebGraphics/Canvas/SaveRestore.vue"),
          meta: {
            title: "保存、重置",
            imgSrc: "",
          },
        },
        {
          path: "AvatarCroppingAndUploading",
          name: "WebGraphicsCanvasAvatarCroppingAndUploading",
          component: () =>
            import("@/views/WebGraphics/Canvas/AvatarCroppingAndUploading.vue"),
          meta: {
            title: "头像裁剪上传",
            imgSrc: "",
          },
        },
        {
          path: "GlobalCompositeOperation",
          name: "WebGraphicsCanvasGlobalCompositeOperation",
          component: () =>
            import("@/views/WebGraphics/Canvas/GlobalCompositeOperation.vue"),
          meta: {
            title: "图形合成之路径合成",
            imgSrc: "",
          },
        },

        {
          path: "GlobalCompositeOperationColor",
          name: "WebGraphicsCanvasGlobalCompositeOperationColor",
          component: () =>
            import(
              "@/views/WebGraphics/Canvas/GlobalCompositeOperationColor.vue"
            ),
          meta: {
            title: "图形合成之颜色合成",
            imgSrc: "",
          },
        },
        {
          path: "GuaGuaLe",
          name: "WebGraphicsCanvasGuaGuaLe",
          component: () => import("@/views/WebGraphics/Canvas/GuaGuaLe.vue"),
          meta: {
            title: "刮刮乐",
            imgSrc: "GuaGuaLe.png",
          },
        },

        {
          path: "DynamicClock",
          name: "WebGraphicsCanvasDynamicClock",
          component: () =>
            import("@/views/WebGraphics/Canvas/DynamicClock/index.vue"),
          meta: {
            title: "动态时钟",
            imgSrc: "DynamicClock/DynamicClock.gif",
          },
        },
        {
          path: "Fireworks",
          name: "WebGraphicsCanvasFireworks",
          component: () =>
            import("@/views/WebGraphics/Canvas/Fireworks/index.vue"),
          meta: {
            title: "粒子烟花",
            imgSrc: "",
          },
        },
        {
          path: "DrawingBoard",
          name: "WebGraphicsCanvasDrawingBoard",
          component: () =>
            import("@/views/WebGraphics/Canvas/DrawingBoard/index.vue"),
          meta: {
            title: "画板",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region Three.js 自定义
    {
      path: "Examples",
      name: "WebGraphicsThreeJSExamples",
      // component: aa,
      component: layout,
      meta: {
        title: "ThreeJS 自定义",
        imgSrc: "",
        remark: "平时自己练习的示例",
      },
      redirect: { name: "WebGraphicsThreeJSExamplesIndex" },
      children: [
        {
          path: "index",
          name: "WebGraphicsThreeJSExamplesIndex",
          component: () =>
            import("@/views/WebGraphics/ThreeJSExamples/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
      ],
    },
    // #endregion

    // #region Three.js 官网例子
    {
      path: "ThreeJSCustoms",
      name: "WebGraphicsThreeJSCustoms",
      // component: aa,
      component: layout,
      meta: {
        title: "官方示例",
        imgSrc: "",
        remark: "官方+小册 学习",
      },
      redirect: { name: "WebGraphicsThreeJSCustomsIndex" },
      children: [
        {
          path: "index",
          name: "WebGraphicsThreeJSCustomsIndex",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/index.vue"),
          meta: {
            title: "占位图",
            imgSrc: "",
          },
        },
        {
          path: "CustomsSceneSolarSystem",
          name: "WebGraphicsThreeJSCustomsCustomsSceneSolarSystem",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/SceneSolarSystem/index.vue"
            ),
          meta: {
            title: "场景之太阳系、太阳、地球、月亮",
            imgSrc: "SceneSolarSystem/SceneSolarSystem.png",
          },
        },
        {
          path: "Camera1",
          name: "WebGraphicsThreeJSCustomsCamera1",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Camera1/index.vue"),
          meta: {
            title: "相机之相机属性",
            imgSrc: "Camera1/Camera1.jpg",
          },
        },

        {
          path: "Camera2",
          name: "WebGraphicsThreeJSCustomsCamera2",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Camera2/index.vue"),
          meta: {
            title: "相机之局部渲染",
            imgSrc: "Camera2/Camera2.png",
          },
        },

        {
          path: "Camera3",
          name: "WebGraphicsThreeJSCustomsCamera3",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Camera3/index.vue"),
          meta: {
            title: "待定 双屏渲染 StereoEffect ",
            imgSrc: "Camera3/Camera3.jpg",
          },
        },
        {
          path: "Camera4",
          name: "WebGraphicsThreeJSCustomsCamera4",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Camera4/index.vue"),
          meta: {
            title: "StereoCamera 立方相机",
            imgSrc: "Camera4/Camera4.jpg",
          },
        },
        {
          path: "Camera5",
          name: "WebGraphicsThreeJSCustomsCamera5",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Camera5/index.vue"),
          meta: {
            title: "StereoCamera 之 3D立体影像",
            imgSrc: "Camera5/Camera5.jpg",
          },
        },

        {
          path: "Camera6",
          name: "WebGraphicsThreeJSCustomsCamera6",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Camera6/index.vue"),
          meta: {
            title: "待定",
            imgSrc: "Camera6/Camera6.jpg",
          },
        },

        {
          path: "texture",
          name: "WebGraphicsThreeJSCustomsTexture",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Texture/index.vue"),
          meta: {
            title: "纹理+批量加载",
            imgSrc: "Texture/Texture.gif",
          },
        },
        {
          path: "CubeTextureLoader1",
          name: "WebGraphicsThreeJSCustomsCubeTextureLoader1",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/CubeTextureLoader1/index.vue"
            ),
          meta: {
            title: "环境贴图",
            imgSrc: "CubeTextureLoader1/CubeTextureLoader1.png",
          },
        },

        {
          path: "shadowMapsSimulatedShadow",
          name: "WebGraphicsThreeJSCustomsShadowMapsSimulatedShadow",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/ShadowMapsSimulatedShadow/index.vue"
            ),
          meta: {
            title: "阴影之假阴影",
            imgSrc: "ShadowMapsSimulatedShadow/ShadowMapsSimulatedShadow.png",
          },
        },

        {
          path: "shadowMapsPointLight",
          name: "WebGraphicsThreeJSCustomsShadowMapsPointLight",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/ShadowMapsPointLight/index.vue"
            ),
          meta: {
            title: "阴影之聚光灯",
            imgSrc: "ShadowMapsPointLight/ShadowMapsPointLight.png",
          },
        },
        {
          path: "fog",
          name: "WebGraphicsThreeJSCustomsFog",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Fog/index.vue"),
          meta: {
            title: "雾",
            imgSrc: "Fog/Fog.gif",
          },
        },
        {
          path: "GenerateMountainTerrain",
          name: "WebGraphicsThreeJSCustomsGenerateMountainTerrain",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/GenerateMountainTerrain/index.vue"
            ),
          meta: {
            title: "生成山脉地形",
            imgSrc: "GenerateMountainTerrain/生成山脉地形.gif",
          },
        },

        {
          path: "EdgesGeometry",
          name: "WebGraphicsThreeJSCustomsEdgesGeometry",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/EdgesGeometry/index.vue"
            ),
          meta: {
            title: "虚线线框几何体",
            imgSrc: "EdgesGeometry/EdgesGeometry.png",
          },
        },
        {
          path: "TunnelShuttle",
          name: "WebGraphicsThreeJSCustomsTunnelShuttle",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/TunnelShuttle/index.vue"
            ),
          meta: {
            title: "隧道穿梭",
            imgSrc: "TunnelShuttle/TunnelShuttle.png",
          },
        },
        {
          path: "Box3",
          name: "WebGraphicsThreeJSCustomsBox3",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Box3/index.vue"),
          meta: {
            title: "包围盒 Box3",
            imgSrc: "Box3/Box3.png",
          },
        },

        {
          path: "BufferGeometry1",
          name: "WebGraphicsThreeJSCustomsBufferGeometry1",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/BufferGeometry1/index.vue"
            ),
          meta: {
            title: "缓冲模型 BufferGeometry之三角形绘制",
            imgSrc: "BufferGeometry1/BufferGeometry1.png",
          },
        },
        {
          path: "BufferGeometry2",
          name: "WebGraphicsThreeJSCustomsBufferGeometry2",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/BufferGeometry2/index.vue"
            ),
          meta: {
            title: "缓冲模型 BufferGeometry之points点绘制",
            // imgSrc: "Box3/Box3.png",
          },
        },
        {
          path: "BufferGeometry3",
          name: "WebGraphicsThreeJSCustomsBufferGeometry3",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/BufferGeometry3/index.vue"
            ),
          meta: {
            title: "缓冲模型 BufferGeometry之自定义颜色",
            imgSrc: "BufferGeometry3/BufferGeometry3.png",
          },
        },
        {
          path: "BufferGeometry4",
          name: "WebGraphicsThreeJSCustomsBufferGeometry4",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/BufferGeometry4/index.vue"
            ),
          meta: {
            title: "缓冲模型 BufferGeometry之颜色渐变柱状图",
            imgSrc: "BufferGeometry4/BufferGeometry4.png",
          },
        },
        {
          path: "BufferGeometry5",
          name: "BufferGeometry5",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/BufferGeometry5/index.vue"
            ),
          meta: {
            title: "缓冲模型 BufferGeometry之索引",
            imgSrc: "BufferGeometry5/BufferGeometry5.jpg",
          },
        },
        {
          path: "BufferGeometry6",
          name: "WebGraphicsThreeJSCustomsBufferGeometry6",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/BufferGeometry6/index.vue"
            ),
          meta: {
            title: "缓冲模型 BufferGeometry之线",
            imgSrc: "BufferGeometry6/BufferGeometry6.jpg",
          },
        },
        {
          path: "Normal",
          name: "WebGraphicsThreeJSCustomsNormal",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Normal/index.vue"),
          meta: {
            title: "法向量",
            // imgSrc: "BufferGeometry4/BufferGeometry4.png",
          },
        },
        {
          path: "Ray",
          name: "WebGraphicsThreeJSCustomsRay",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/Ray/index.vue"),
          meta: {
            title: "射线 Ray",
            // imgSrc: "Box3/Box3.png",
          },
        },
        {
          path: "OrbitControls",
          name: "WebGraphicsThreeJSCustomsOrbitControls",
          component: () =>
            import(
              "@/views/WebGraphics/ThreeJSCustoms/OrbitControls/index.vue"
            ),
          meta: {
            title: "OrbitControls轨道控制器",
            imgSrc: "OrbitControls/OrbitControls.jpg",
          },
        },
        {
          path: "DRACOLoader",
          name: "WebGraphicsThreeJSCustomsDRACOLoader",
          component: () =>
            import("@/views/WebGraphics/ThreeJSCustoms/DRACOLoader/index.vue"),
          meta: {
            title: "加载器之解压加载器 DRACOLoader",
            imgSrc: "DRACOLoader/DRACOLoader.jpg",
          },
        },
      ],
    },
    // #endregion
  ],
};

export default row;
