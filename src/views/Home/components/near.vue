<template>
  <div class="absolute absolute-center-h h-80vh z-index--1">
    <van-image
      fit="cover"
      radius="1rem"
      style="height: 100%"
      width="100%"
      :src="image"
    />
    <div class="flex-center-center absolute home-near-load-more">
      <span>发现更多有趣的朋友</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "http://www.oss.qcwy.org.cn/cq/image/home/faxian.png",
    };
  },
};
</script>

<style>
.xxxx {
  transform: translateX(-50px);
}
.home-near-load-more {
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: #ccc;
}
</style>
