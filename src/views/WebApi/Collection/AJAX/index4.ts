import { chunk, cloneDeep } from "es-toolkit";
import axios from "axios";

export class Index4 {
  ids: number[];
  newIds: number[]; // 待完成的
  abortArr: AbortController[] = []; // 取消集合
  ind: number = 0; // 当前完成的数量
  len: number; // 总数量
  isStart: boolean = false; // 是否暂停

  constructor(ids: number[]) {
    this.ids = ids;
    this.newIds = cloneDeep(ids);
    this.len = ids.length;
    // this.abortArr = [];
  }

  async asyncAll() {
    const newIds = cloneDeep(this.newIds);
    const chunkList = chunk(newIds, 3);

    this.abortArr = [];
    // this.

    // i = 0;
    for (const arr of chunkList) {
      if (!this.isStart) {
        console.log("被暂停了");
        break;
      }

      const arrLen = arr.length;
      this.newIds = this.newIds.slice(0, arrLen);
      this.ind += arrLen;

      const pList = arr.map(item => this.asyncApi(item));

      try {
        await Promise.allSettled(pList);
      } catch (error) {
        console.error(error);
      }
    }

    if (this.ind >= this.len) {
      console.log("全部执行完成");
    }
  }

  // 发送请求
  asyncApi(id: number) {
    // const controller = new AbortController();
    console.log(id);

    // this.abortArr.push(controller);
    return axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }

  // 开始
  start() {
    this.isStart = true;
    this.asyncAll();
  }

  // 暂停
  stop() {
    this.isStart = false;
  }

  // 取消
}
