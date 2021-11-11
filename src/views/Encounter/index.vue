<template>
  <!-- <div>偶遇页面</div> -->
  <div class="page_padding h-80vh overflow-scroll">
    <user-card v-for="e in initListData" :key="e.id" :itemData="e"></user-card>
  </div>
</template>

<script>
import UserCard from "@/components/user-card";
export default {
  data() {
    return {
      initListData: [
        {
          id: 0,
          name: "刘梅路",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
          huoyuedu: "今日活跃度，默契值68%",
          desc: "你总顾及别人，那谁来顾及你",
          images: ["http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg"],
          targs: ["日常", "情感"],
          comments: 47,
          share: 23,
          live: 96,
          message: {
            pl: "来都来了，说点什么呗～",
            contnet: "",
          },
        },
        {
          id: 1,
          name: "长情",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
          huoyuedu: "今日活跃度，默契值68%",
          desc: "你总顾及别人，那谁来顾及你",
          images: ["http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg"],
          targs: ["日常", "情感"],
          comments: 47,
          share: 23,
          live: 96,
          message: {
            pl: "来都来了，说点什么呗～",
            contnet: "",
          },
        },
      ],
    };
  },
  components: {
    UserCard,
  },
};
</script>

<style lang="less" scoped>
.user-live-icon {
  display: flex;
  position: relative;
  width: 60px;
  height: 26px;
  margin-right: 5px;
  & li {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #fff;
    background-color: aqua;
    &:nth-child(1) {
      left: 0;
    }
    &:nth-child(2) {
      left: 18px;
    }
    &:nth-child(3) {
      left: 36px;
    }
  }
}
</style>
