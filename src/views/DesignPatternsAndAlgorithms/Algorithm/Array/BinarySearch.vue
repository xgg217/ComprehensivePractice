<script setup lang="ts">
const binarySearch = function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 可以进行查找
    // 根据 left 和 right 计算出中间的下标
    const mid = Math.floor((left + right) / 2);

    console.log(`left:${left}, right:${right}, mid${mid}`);

    // 中间下标所对应的元素和目标值进行比较
    if (arr[mid] === target) {
      // 说明找到了
      return mid;
    } else if (arr[mid] < target) {
      // 目标值在右半部分区域，更新 left
      left = mid + 1;
    } else {
      // 目标值在左半部分区域，更新 right
      right = mid - 1;
    }
  }
  // 思考：什么时候退出 while
  // 当 left 大于 right 的时候，会退出 while
  // 说明没有找到
  return -1;
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

binarySearch(arr, 11);

// 3

// 0-9 mid4
// 0-3 1
// 2-3 2
// 3-3
</script>

<template>
  <div>Binary Search 二分查找</div>
</template>

<style scoped></style>
