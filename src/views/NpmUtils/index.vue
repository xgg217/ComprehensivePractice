<template>
  <RouterView v-slot="{ Component }">
    <Transition name="el-zoom-in-center" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts"></script>

<style scoped></style>
