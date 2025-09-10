import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { randomInt } from "es-toolkit";

export class Test1 {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  group: THREE.Group;

  constructor(private dom: HTMLElement) {
    // 获取宽高
    const width = this.dom.clientWidth;
    const height = this.dom.clientHeight;

    // 获取屏幕分辨率
    const widthVal = width * window.devicePixelRatio;
    const heightVal = height * window.devicePixelRatio;
    const ASPECT_RATIO = widthVal / heightVal;

    this.group = new THREE.Group();

    // 场景
    {
      const scene = new THREE.Scene();

      //辅助观察的坐标系
      const axesHelper = new THREE.AxesHelper(100);
      scene.add(axesHelper);
      this.scene = scene;
    }

    // 灯光
    {
      const ambient = new THREE.AmbientLight(0xffffff, 1000);
      this.scene.add(ambient);
    }

    // 创建相机
    {
      const camera = new THREE.PerspectiveCamera(60, ASPECT_RATIO, 1, 10000);
      // this.camera = camera;
      camera.position.set(3000, 3000, 3000);
      camera.lookAt(0, 0, 0);
      this.camera = camera;
    }

    // 渲染器
    {
      const renderer = new THREE.WebGLRenderer({
        antialias: true, // 抗锯齿
      });
      renderer.setSize(width, height);
      renderer.setAnimationLoop(() => this.animate());
      dom.appendChild(renderer.domElement);
      this.renderer = renderer;
    }

    // 轨道
    new OrbitControls(this.camera, this.renderer.domElement);

    // 物体
    const mesh = this.cereateMesh();
    this.group.add(mesh);

    // GUI
    {
      const gui = new GUI();
      dom.append(gui.domElement);

      const box = mesh.getObjectByName("box");
      console.log(box);

      if (box instanceof THREE.Mesh) {
        gui.add(box.material, "wireframe");
      }
    }

    this.scene.add(this.group);
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    const renderer = this.renderer;
    const scene = this.scene;
    const camera = this.camera;
    // 销毁动画
    renderer.setAnimationLoop(null);
    // 清除渲染器和画布
    renderer.dispose();
    this.dom.removeChild(renderer.domElement);
    // 删除场景中的所有对象
    scene.traverse(object => {
      // @ts-ignore
      if (object.isMesh) {
        // @ts-ignore
        object.geometry.dispose();
        // @ts-ignore
        object.material.dispose();
      }
    });
    // 重置相机和其他辅助对象
    camera.position.set(0, 0, 0);
    // 解除引用
    {
      // @ts-ignore
      this.scene = null;
      // @ts-ignore
      this.camera = null;
      // @ts-ignore
      this.renderer = null;
    }
  }

  cereateMesh() {
    const group = new THREE.Group();

    {
      const geometry = new THREE.BufferGeometry();
      const { positionArr, colorArr } = createBox();

      // 位置
      {
        const vertices = new Uint16Array(positionArr);
        const attribue = new THREE.BufferAttribute(vertices, 3);
        geometry.setAttribute("position", attribue);
      }

      // 颜色
      {
        const colors = new Float32Array(colorArr);
        const attribue2 = new THREE.BufferAttribute(colors, 3);
        geometry.setAttribute("color", attribue2);
      }

      const material = new THREE.LineBasicMaterial({
        // color: 0x00ff00,
        // side: THREE.DoubleSide,
        // wireframe: true,
        vertexColors: true,
      });

      const box = new THREE.Line(geometry, material);

      box.name = "box";

      group.add(box);
    }

    return group;
  }
}

// 创建
const createBox = () => {
  const positionArr: number[] = [];
  const colorArr: number[] = [];

  const D = 800 * 2; // 直径

  for (let j = 0; j < 10000; j++) {
    const x = randomInt(0, D);
    const y = randomInt(0, D);
    const z = randomInt(0, D);

    positionArr.push(x, y, z);

    const r1 = x / D;
    const g1 = y / D;
    const b1 = z / D;
    colorArr.push(r1, g1, b1);
  }

  return { positionArr, colorArr };
};
