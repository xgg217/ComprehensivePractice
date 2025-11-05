<script setup lang="ts">
const imgRef = useTemplateRef("imgRef");

const base64Url = ref("");

const imageLoad = (file: File): Promise<string> => {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.readAsDataURL(file);

    fr.onload = (e: ProgressEvent) => {
      // console.log(e);

      const url = (e!.target as FileReader).result as string;
      res(url);
    };

    fr.onerror = () => {
      rej("");
    };
  });
};

const fileChange = (e: Event) => {
  console.log(e);
  // @ts-ignore
  const file = (e!.target as HTMLInputElement)!.files[0] as File;
  console.log(file);

  // 预览图片

  {
    imageLoad(file)
      .then(res => {
        base64Url.value = res;

        imgRef.value!.onload = () => {
          // console.log(getComputedStyle(imgRef.value!).clientHeight);
          // console.log(imgRef.value?.offsetWidth, imgRef.value?.clientHeight);
          const canvas = document.createElement("canvas");
          const img = imgRef.value!;
          canvas.width = img.offsetWidth || 100;
          canvas.height = img.clientHeight || 100;
          const ctx = canvas.getContext("2d")!;

          // drawImage
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob(
            blob => {
              console.log(blob);
              // 文件上传
              const form = new FormData();
              // form.append("File", blob);
              // axios.post('xxx', from);
            },
            "image/jpeg",
            0.6,
          );
        };
      })
      .catch(err => {
        console.error(err);
      });
    //   console.log(e);
    //   base64Url.value = e!.target!.result as string;
    //   // drawImage
    //   {
    //     const canvas = document.createElement("canvas");
    //     console.log(imgRef.value?.offsetWidth, imgRef.value?.clientHeight);
    //     console.log(getComputedStyle(imgRef.value!).height);
    //     const ctx = canvas.getContext("2d")!;
    //     ctx.drawImage;
    //   }
    // };
  }
};
</script>

<template>
  <div class="box">
    <input type="file" @change="fileChange" />
    <img :src="base64Url" width="400" ref="imgRef" />
  </div>
</template>

<style scoped></style>
