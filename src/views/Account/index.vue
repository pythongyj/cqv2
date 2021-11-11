<template>
  <div class="cq-account-page account-bg ">
    <div class="page_padding">
      <div class="flex justify-end p-y--20">
        <van-icon name="open" class-prefix="cq" class="cqicon" size="20" />
      </div>
      <!-- 头像 -->
      <div class="flex align-center space-between m-b--10">
        <van-image
          class="account-user-icon-border"
          round
          :src="userData.icon"
        />
        <div
          class="
            flex-center-center
            bg-gray--400
            p-10
            border-radius--12
            border-fff-3
          "
        >
          <van-image
            width="20"
            height="20"
            src="http://www.oss.qcwy.org.cn/cq/image/home/liwu.png"
          />
          <div class="flex flex-column m-x--10">
            <span class="size_14">完善资料70%</span>
            <span class="size_12 color-gray-1 m-t--06"
              >完成立即解锁神秘奖励</span
            >
          </div>
          <van-icon
            name="arrow-right"
            class-prefix="cq"
            class="cqicon color-gray-1"
            size="20"
          />
        </div>
      </div>
      <!-- userNick -->
      <div class="flex flex-column">
        <span class="size_20 text-justify" style="width: 70px">{{
          userData.userNick
        }}</span>
        <span class="size_14 color-222 m-t--10">{{ userData.desc }}</span>
        <div class="flex m-top--20">
          <span class="m-right--10 size_14"
            >{{ userData.focus }} <span class="size_12">关注</span></span
          >
          <span class="m-right--10 size_14"
            >{{ userData.focusForMe }} <span class="size_12">被关注</span></span
          >
          <span class="m-right--10 size_14"
            >{{ userData.look }} <span class="size_12">看过我</span></span
          >
        </div>
      </div>
    </div>

    <div style="height: 100px" class="bg-fff m-05 page_padding border-radius--12">
       <div class="flex select-tab-item p-b--10">
        <span
          v-for="e in tabData"
          :key="e.id"
          :class="{ active: e.isActive }"
          class="m-r--20 size_14"
          @click="onSelectTab(e)"
          >{{ e.name }}</span
        >
      </div>


      <account-card></account-card>
    </div>
  </div>
</template>

<script>
// http://www.oss.qcwy.org.cn/cq/image/home/liwu.png
import AccountCard from './components/card.vue'
export default {
  data() {
    return {
      userData: {
        icon: "http://www.oss.qcwy.org.cn/logo66.png",
        userNick: "长情",
        desc: "你相信什么，你就看到什么",
        look: 26,
        focus: 32,
        focusForMe: 16,
      },


      isActiveTab: 0,
      tabData: [
        {
          id: 0,
          name: "动态",
          isActive: true,
        },
        {
          id: 1,
          name: "赞过",
          isActive: false,
        },
      ],
    };
  },
  components:{
    AccountCard
  },
  methods:{
    onSelectTab(e) {
      console.log(e);
      this.tabData.map((el) => (el.isActive = false));
      e.isActive = !e.isActive;
      this.isActiveTab = e.id;
    },
  }
};
</script>

<style>
.account-bg {
  background-image: url("http://www.oss.qcwy.org.cn/cq/image/home/account-bg1.jpeg");
  background-size: 100%;
  opacity: 0.7;
}
.account-user-icon-border {
  border: 3px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}
</style>
