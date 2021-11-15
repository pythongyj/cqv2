<template>
  <div class="root_widht">
    <van-nav-bar
      title="有趣的人"
      class="root_widht root_width_aux"
      left-arrow
      fixed
      safe-area-inset-top
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon class-prefix="cq" class="cqicon" size="26" name="shaixuan" />
      </template>
    </van-nav-bar>
    <van-tabs
    class="root_widht"
      v-model="activeTabId"
      animated
      swipeable
      sticky
      offset-top="63px"
      line-width="0px"
      swipe-threshold="10"
    >
      <van-tab
        v-for="e in initTabData"
        :key="e.id"
        :title="e.title"
        title-class="van-cq-tab-class"
        class="page_padding m-t--20"
      >
        <div
          class="border-radius--12 overflow-hidden m-y--10 bg-gray--400"
          v-for="(el, i) in e.list"
          :key="i"
        >
          <image-card :imageList="el.images"></image-card>
          <div class="flex space-between align-center p-x--20">
            <div class="flex flex-column p-y--20">
              <span class="p-b--10">{{ el.name }}</span>
              <span class="p-b--10 color-gray-1"
                >{{ el.distance }}·{{ el.industry }}·{{
                  el.constellation
                }}</span
              >
            </div>
            <van-icon
              class-prefix="cq"
              class="
                cqicon
                p-10
                bg-FE4D47
                color-fff
                border-radius--50pr
                size_20
              "
              name="like-fill"
            />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ImageCard from "../../components/image-card.vue";
export default {
  data() {
    return {
      activeTabId: 0,
      initTabData: [
        {
          id: 0,
          title: "推荐",
          list: [
            {
              images: [
                "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
              ],
              name: "唐嫣",
              distance: "9.8km",
              industry: "互联网",
              constellation: "射手座",
              voice: "6",
            },
            {
              images: ["http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg"],
              name: "唐嫣",
              distance: "9.8km",
              industry: "互联网",
              constellation: "射手座",
              voice: "6",
            },
            {
              images: [
                "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
              ],
              name: "唐嫣",
              distance: "9.8km",
              industry: "互联网",
              constellation: "射手座",
              voice: "6",
            },
          ],
        },
        {
          id: 1,
          title: "旅行",
          list: [
            {
              images: [
                "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
              ],
              name: "唐嫣",
              distance: "9.8km",
              industry: "互联网",
              constellation: "射手座",
              voice: "6",
            },
          ],
        },
        {
          id: 2,
          title: "音乐",
          list: [
            {
              images: [
                "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
              ],
              name: "唐嫣",
              distance: "9.8km",
              industry: "互联网",
              constellation: "射手座",
              voice: "6",
            },
          ],
        },
        {
          id: 3,
          title: "摄影",
          list: [
            {
              images: [
                "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
                "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
              ],
              name: "唐嫣",
              distance: "9.8km",
              industry: "互联网",
              constellation: "射手座",
              voice: "6",
            },
          ],
        },
      ],
    };
  },
  components: {
    ImageCard,
  },
  methods: {
    onClickLeft() {
      this.$toast("返回");
      this.$router.back();
    },
    onClickRight() {
      this.$toast("右侧");
    },
    calcWidth(el, inx) {
      switch (el.images.length) {
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

    calcHeight(el, inx) {
      switch (el.images.length) {
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
  },
};
</script>
<style>
.van-sticky--fixed{
  width: 10rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>
