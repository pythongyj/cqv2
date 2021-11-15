<template>
  <div
    :class="{ 'border-radius--12 overflow-hidden': borderRadius }"
    class="float-clear"
  >
    <van-image
      class="float-left"
      v-for="(ele, inx) in imageList"
      :key="inx"
      fit="cover"
      @click="onImagePreview(imageList, inx)"
      :width="calcWidth(imageList.length, inx)"
      :height="calcHeight(imageList.length, inx)"
      :src="ele"
    />
  </div>
</template>

<script>
import { ImagePreview } from "vant";
export default {
  props: {
    imageList: {
      type: [Object, Array],
      required: true,
    },
    borderRadius: {
      type: [Boolean],
      default: false,
    },
  },
  methods: {
    calcWidth(len, inx) {
      switch (len) {
        case 1:
          return "100%";
        case 2:
          return "50%";
        case 3:
          return inx == 0 ? "66.66%" : "33.333%";
        default:
          return inx == 0 ? "66.66%" : "33.333%";
      }
    },

    calcHeight(len, inx) {
      switch (len) {
        case 1:
          return "6rem";
        case 2:
          return "6rem";
        case 3:
          return inx == 0 ? "6rem" : "3rem";
        default:
          return inx == 0 ? "6rem" : "3rem";
      }
    },
    onImagePreview(images, startPosition) {
      console.log("images", images);
      ImagePreview({
        images,
        startPosition,
        onClose() {
          this.$toast("关闭");
        },
      });
    },
  },
};
</script>

<style></style>
