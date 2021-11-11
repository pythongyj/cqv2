<template>
  <div class="">
    <van-swipe
      class="my-swipe"
      style="height: 60vh"
      indicator-color="white"
      :show-indicators="false"
    >
      <van-swipe-item v-for="e in initData" :key="e.id"
        ><van-image
          fit="cover"
          radius="1rem"
          style="height: 100%"
          width="100%"
          :src="e.images[0]"
      /></van-swipe-item>
    </van-swipe>

    <home-footer class="page_padding"></home-footer>
  </div>
</template>

<script>
import HomeFooter from "../components/footer";

export default {
  data() {
    return {
      initData: [
        {
          id: 0,
          images: ["http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg"],
          name: "唐嫣",
          distance: "9.8km",
          industry: "互联网",
          constellation: "射手座",
          voice: "6",
        },
        {
          id: 1,
          images: ["http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg"],
          name: "唐嫣",
          distance: "9.8km",
          industry: "互联网",
          constellation: "射手座",
          voice: "6",
        },
        {
          id: 2,
          images: ["http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg"],
          name: "唐嫣",
          distance: "9.8km",
          industry: "互联网",
          constellation: "射手座",
          voice: "6",
        },
      ],
    };
  },
  components: {
    HomeFooter,
  },
};
</script>

<style>
.my-swipe .van-swipe-item {
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
}
</style>
