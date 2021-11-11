<template>
  <div class="page_padding h-80vh overflow-scroll">
    <!-- address -->
    <div class="bg-blue border-radius--08">
      <div
        class="
          world-card-bg
          flex
          space-between
          align-center
          p-x--20
          opacity-09
          p-y--20
          color-fff
        "
      >
        <div class="flex-center-center">
          <van-icon name="address" class-prefix="cq" class="cqicon" />
          <div class="flex flex-column m-left--10">
            <span>天朗大兴郡 · 西安</span>
            <span>1689 条动态</span>
          </div>
        </div>
        <div class="flex-center-center">
          <van-icon name="address-left" class-prefix="cq" class="cqicon" />
          <span>附近</span>
          <van-icon name="address-right" class-prefix="cq" class="cqicon" />
        </div>
      </div>
    </div>

    <!-- 具体内容  瀑布流 -->
    <div class="m-top--20 world-pubuliu">
      <div v-for="e in initDataList" :key="e.id" class="relative">
        <van-image class="border-radius--08 overflow-hidden" :src="e.image" />
        <div
          class="absolute absolute-center color-fff flex-center-center-column"
        >
          <span class="size_16">{{ e.title }}</span>
          <span class="size_12"
            >新发布 {{ e.newNumber > 999 ? "999+" : e.newNumber }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initDataList: [
        {
          id: 0,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/sheying.jpeg",
          title: "摄影",
          newNumber: 10000,
        },
        {
          id: 1,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/chuanda.jpeg",
          title: "穿搭",
          newNumber: 10000,
        },
        {
          id: 2,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/mao.jpeg",
          title: "猫",
          newNumber: 10000,
        },

        {
          id: 5,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
          title: "可爱",
          newNumber: 10000,
        },
        {
          id: 4,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg",
          title: "夏日",
          newNumber: 10000,
        },

        {
          id: 6,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
          title: "糖糖",
          newNumber: 10000,
        },
        {
          id: 3,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          title: "风景",
          newNumber: 10000,
        },
        {
          id: 7,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
          title: "日常",
          newNumber: 10000,
        },
        {
          id: 8,
          image: "http://www.oss.qcwy.org.cn/cq/image/home/xiari2.jpeg",
          title: "夏日",
          newNumber: 10000,
        },
      ],
    };
  },
};
</script>

<style>
.world-card-bg {
  background: url("http://www.oss.qcwy.org.cn/cq/image/home/world-card-bg.png");
}
.world-pubuliu {
  columns: 2;
  column-gap: 10px;
}
</style>
