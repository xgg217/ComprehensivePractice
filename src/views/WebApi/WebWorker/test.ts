console.log("测试");

export const a = 10;

self.onmessage = e => {
  console.log(e.data);
};
