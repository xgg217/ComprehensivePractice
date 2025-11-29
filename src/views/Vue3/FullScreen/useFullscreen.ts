export const useFullscreen = (el?: ShallowRef) => {
  // const elValue = el || document.documentElement;

  const targetRef = computed(() => el?.value || document?.documentElement);

  const isFullscreen = shallowRef(false);

  // 进入全屏
  const enter = () => {
    if (targetRef.value.requestFullscreen) {
      targetRef.value.requestFullscreen();
      isFullscreen.value = true;
    }
  };

  // 退出全屏
  const exit = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      isFullscreen.value = false;
    }
  };

  // 切换
  const toggle = () => {
    if (isFullscreen.value) {
      exit();
    } else {
      enter();
    }
  };

  return {
    isFullscreen,
    enter,
    exit,
    toggle,
  };
};
