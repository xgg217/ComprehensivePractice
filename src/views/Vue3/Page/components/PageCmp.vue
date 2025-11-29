<script setup lang="ts">
import type { StyleValue } from "vue";

// import type { PageProps } from "./types";

import { computed, nextTick, onMounted, ref, useTemplateRef } from "vue";

// import { CSS_VARIABLE_LAYOUT_CONTENT_HEIGHT } from '@vben-core/shared/constants';
// import { cn } from '@vben-core/shared/utils';

defineOptions({
  name: "Page",
});

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
   * Custom height offset value (in pixels) to adjust content area sizing
   * when used with autoContentHeight
   * @default 0
   */
  heightOffset?: number;
};

const { autoContentHeight = false, heightOffset = 0 } = defineProps<PageProps>();

const headerHeight = ref(0);
const footerHeight = ref(0);
const shouldAutoHeight = ref(false);

const headerRef = useTemplateRef<HTMLDivElement>("headerRef");
const footerRef = useTemplateRef<HTMLDivElement>("footerRef");

const contentStyle = computed<StyleValue>(() => {
  if (autoContentHeight) {
    return {
      height: `calc(var(100vh) - ${headerHeight.value}px - ${typeof heightOffset === "number" ? `${heightOffset}px` : heightOffset})`,
      overflowY: shouldAutoHeight.value ? "auto" : "unset",
    };
  }
  return {};
});

async function calcContentHeight() {
  if (!autoContentHeight) {
    return;
  }
  await nextTick();
  headerHeight.value = headerRef.value?.offsetHeight || 0;
  footerHeight.value = footerRef.value?.offsetHeight || 0;
  setTimeout(() => {
    shouldAutoHeight.value = true;
  }, 30);
}

onMounted(() => {
  calcContentHeight();
});
</script>

<template>
  <div class="relative">
    <div
      v-if="description || $slots.description || title || $slots.title || $slots.extra"
      ref="headerRef"
      class="header"
      :class="headerClass"
    >
      <div class="flex-auto">
        <slot name="title">
          <div v-if="title" class="mb-2 flex text-lg font-semibold">
            {{ title }}
          </div>
        </slot>

        <slot name="description">
          <p v-if="description" class="text-muted-foreground">
            {{ description }}
          </p>
        </slot>
      </div>

      <div v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
    </div>

    <div class="content" :class="contentClass" :style="contentStyle">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="footer" ref="footerRef">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: relative;
  top: 0;
  left: 0;
}
.header {
  background-color: #1c1e23;
  border-color: #36363a;
  border-bottom-width: 1px;
  align-items: flex-end;
  display: flex;
  position: relative;
  padding: 4px 6px;

  .flex-auto {
    flex: 1 1 auto;

    .title {
      display: flex;
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.75rem;
      margin-bottom: 0.5rem;
    }

    .description {
      /* text-muted-foreground */
      color: #a1a1aa;
    }
  }
}

.content {
  padding: 1rem;
  height: 100%;
}

.footer {
  background-color: #1c1e23;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 4px 6px;
}
</style>
