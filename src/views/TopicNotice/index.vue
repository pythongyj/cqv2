<template>
  <!-- <div>我是话题页面</div> -->
  <div class="root_widht">
    <van-nav-bar
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :border="false"
    >
      <template #right>
        <van-icon
          name="fenxiang"
          class-prefix="cq"
          class="cqicon"
          size="18"
        /> </template
    ></van-nav-bar>
    <!-- 话题标题部分 -->
    <div class="flex p-y--10 page_padding">
      <van-image
        width="80"
        height="80"
        class="border-radius--12 overflow-hidden"
        :src="initTopicData.image"
      />
      <div class="flex flex-column justify-center p-l--10 w-pre-100">
        <span class="size_20">#{{ initTopicData.title }}</span>
        <span class="size_14 m-t--10 color-gray-1">{{ people }} 人参与</span>
      </div>
    </div>

    <!-- 具体内容部分 -->
    <div class="page_padding">
      <div class="flex space-between m-b--20">
        <div class="flex-center-center select-tab-item">
          <span
            v-for="e in tabData"
            :key="e.id"
            :class="{ active: e.isActive }"
            class="m-x--10"
            @click="onSelectTab(e)"
            >{{ e.name }}</span
          >
        </div>
        <div class="flex p-03 border-radius--12 bg-gray--400">
          <span
            @click="onSelectIsHot(true)"
            :class="isHot ? 'bg-fff' : ''"
            class="size_10 p-x--10 p-y--06 border-radius--08"
            >最热</span
          >
          <span
            @click="onSelectIsHot(false)"
            :class="!isHot ? 'bg-fff' : ''"
            class="size_10 p-x--10 p-y--06 border-radius--08"
            >最新</span
          >
        </div>
      </div>
      <user-card
        v-for="e in currentTopicList"
        :key="e.id"
        :itemData="e"
      ></user-card>
    </div>
  </div>
</template>

<script>
import UserCard from "@/components/user-card";
export default {
  data() {
    return {
      people: Math.floor(Math.random() * 10000),
      isActiveTab: 1,
      isHot: true,
      tabData: [
        {
          id: 0,
          name: "全部",
          isActive: true,
        },
        {
          id: 1,
          name: "精华",
          isActive: false,
        },
      ],
      initTopicData: {}, // 话题标题部分
      currentTopicList: [], //具体显示的列表的内容
      allTopicList: [
        {
          id: 0,
          name: "刘梅路",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
          huoyuedu: "今日活跃度，默契值68%",
          desc: "你总顾及别人，那谁来顾及你",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/chuanda.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/sheying.jpeg",
          ],
          targs: ["日常", "情感"],
          comments: 47,
          share: 23,
          live: 96,
          message: {
            pl: "来都来了，说点什么呗～",
            contnet: "",
          },
        },
      ], // 所有的话题内容的列表
      oftenTopicList: [
        {
          id: 0,
          name: "毛晓彤",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/sheying.jpeg",
          huoyuedu: "今日活跃度，默契值68%",
          desc: "你总顾及别人，那谁来顾及你",
          images: ["http://www.oss.qcwy.org.cn/cq/image/home/xiari.jpeg"],
          targs: ["日常", "情感"],
          comments: 7,
          share: 23,
          live: 96,
          message: {
            pl: "来都来了，说点什么呗～",
            contnet: "",
          },
        },
        {
          id: 1,
          name: "唐嫣",
          userIcon: "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
          huoyuedu: "今日活跃度，默契值68%",
          desc: "你总顾及别人，那谁来顾及你",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/chuanda.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/discover-1.jpeg",
          ],
          targs: ["日常", "情感"],
          comments: 47,
          share: 23,
          live: 69,
          message: {
            pl: "来都来了，说点什么呗～",
            contnet: "",
          },
        },
      ], // 精华话题内容的列表
    };
  },
  components: {
    UserCard,
  },
  created() {
    this.getInitTopicData();
    this.currentTopicList = this.allTopicList;
  },
  methods: {
    onSelectTab(e) {
      this.tabData.map((el) => (el.isActive = false));
      e.isActive = !e.isActive;
      this.isActiveTab = e.id;
      if (e.id === 0) {
        this.currentTopicList = this.allTopicList;
      } else {
        this.currentTopicList = this.oftenTopicList;
      }
    },
    getInitTopicData() {
      const initData = this.$route.params.initData;
      this.initTopicData = initData;
    },
    onClickRight() {
      this.$toast("分享");
    },
    onClickLeft() {
      this.$router.back();
    },
    onSelectIsHot(isTrue) {
      if (isTrue == this.isHot) {
        return false;
      }

      if (isTrue) {
        this.isHot = true;
        this.currentTopicList.sort((a, b) => {
          return a.comments > b.comments;
        });
        for (let i = 0; i < this.currentTopicList.length; i++) {
          let e = this.currentTopicList[i];
          for (let j = 0; j < this.currentTopicList.length; j++) {
            let el = this.currentTopicList[j];
            if (e.comments < el.comments) {
              const a = this.currentTopicList[i];
              this.currentTopicList[i] = this.currentTopicList[j];
              this.currentTopicList[j] = a;
            }
          }
        }
      } else {
        this.isHot = false;
        for (let i = 0; i < this.currentTopicList.length; i++) {
          let e = this.currentTopicList[i];
          for (let j = 0; j < this.currentTopicList.length; j++) {
            let el = this.currentTopicList[j];
            if (e.live < el.live) {
              const a = this.currentTopicList[i];
              this.currentTopicList[i] = this.currentTopicList[j];
              this.currentTopicList[j] = a;
            }
          }
        }
      }
    },
  },
};
</script>

<style></style>
