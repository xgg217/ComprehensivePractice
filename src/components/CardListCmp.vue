<script setup lang="ts">
import type { ICardItem } from "@/types/index";
import { ElMessage } from "element-plus";

const props = defineProps<{
  list: ICardItem[];
}>();

const route = useRoute();
const router = useRouter();

// 路由跳转
const onPage = (name: ICardItem["name"]) => {
  // 是否为空
  if (!name) {
    ElMessage({
      message: "路由 name 为空",
      type: "warning",
    });
    return;
  }

  // 路由是否存在
  {
    const isBool = router.hasRoute(name);

    if (!isBool) {
      ElMessage({
        message: `名称为 ${name} 的路由不存在`,
        type: "warning",
      });
      return;
    }
  }

  router.push({ name });

  // console.error("当前路由不存在");
  // router.push("/404");
};
</script>

<template>
  <div>
    <template v-for="item of props.list" :key="item.path">
      <el-card class="card">
        <template #header>
          <div class="card-header">
            <span>{{ item.name }}</span>

            <el-button type="primary" @click="() => onPage(item.name)">查看</el-button>
          </div>
        </template>
        {{ item.remark }}
      </el-card>
    </template>
  </div>
</template>

<style scoped>
.card {
  width: 400px;
  height: 300px;
  cursor: pointer;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
