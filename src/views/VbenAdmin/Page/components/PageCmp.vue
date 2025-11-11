<script setup lang="ts">
type PageProps = {
  title?: string;
  description?: string;
  contentClass?: string;
  /**
   * 根据content可见高度自适应
   */
  autoContentHeight?: boolean;
  headerClass?: string;
  footerClass?: string;
  /**
   * 自定义高度偏移值（以像素为单位）以调整内容区域大小
   * 来调整内容区域的大小
   * @default 0
   */
  heightOffset?: number;
};

defineOptions({
  name: "Page",
});

const props = withDefaults(defineProps<PageProps>(), {
  autoContentHeight: false,
  heightOffset: 0,
});

const headerRef = useTemplateRef<HTMLDivElement>("headerRef");
const footerRef = useTemplateRef<HTMLDivElement>("footerRef");
</script>

<template>
  <div class="relative">
    <!-- 页面标题 -->
    <slot name="title"></slot>

    <!-- 页面描述 -->
    <slot name="description"></slot>

    <!-- 页面头部右侧 -->
    <slot name="extra"></slot>

    <!-- 页面底部 -->
    <div v-if="$slots.footer" ref="footerRef">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}
</style>
