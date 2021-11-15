<template>
  <div
    class="
      flex flex-column
      root_widht
      h-100vh
      safe-area-inset-top safe-area-inset-bottom
    "
  >
    <van-nav-bar
      class="root_widht absolute bg-transparent"
      left-arrow
      :border="false"
      @click-left="$router.back()"
      @click-right="onClickRight"
    >
      <template #left>
        <van-icon
          name="back"
          class-prefix="cq"
          class="cqicon"
          size="24"
          color="#fff"
        />
      </template>
      <template #right>
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="popoverData"
          @select="onSelect"
          placement="bottom-end"
        >
          <template #reference>
            <van-icon
              name="gengduo"
              class-prefix="cq"
              class="cqicon"
              size="24"
              color="#fff"
            />
          </template>
        </van-popover> </template
    ></van-nav-bar>
    <div class="w-10-rem h-10-rem relative">
      <van-image
        width="10rem"
        height="10rem"
        fit="cover"
        :src="userInfo.images[userImageIndex]"
      />
      <div class="flex absolute b-40 l-10">
        <van-image
          class="border-radius--12 overflow-hidden m-x--06 border-fff-3"
          v-for="(e, i) in userInfo.images"
          width="60"
          height="60"
          fit="cover"
          :key="i"
          :src="e"
          @click="onSelectUserImageItem(i)"
        />
      </div>
      <div
        style="transform: translateY(-30px)"
        class="border-radius--20 bg-fff h-10-rem page_padding flex flex-column"
      >
        <div class="flex space-between align-center p-t--10">
          <span>{{ userInfo.userNick }}</span>
          <van-image
            height="30px"
            src="http://www.oss.qcwy.org.cn/cq/image/home/yuyin.png"
          />
        </div>
        <span class="size_14 color-gray-1">陪伴是最长情的告白</span>
        <div class="flex p-y--10">
          <span
            class="size_12 border-radius--12 bg-eee p-06 p-x--10 m-right--10"
            >金牛</span
          >
          <span
            class="size_12 border-radius--12 bg-eee p-06 p-x--10 m-right--10"
            >夜猫子</span
          >
          <span
            class="size_12 border-radius--12 bg-eee p-06 p-x--10 m-right--10"
            >二逼</span
          >
          <span
            class="size_12 border-radius--12 bg-eee p-06 p-x--10 m-right--10"
            >没心没肺</span
          >
        </div>
        <div class="flex m-y--10">
          <van-button
            @click="isLove = !isLove"
            round
            block
            type="primary"
            class="m-right--10"
          >
            {{ isLove ? "喜欢" : "取消喜欢" }}
          </van-button>
          <van-button
            @click="onSiXin"
            style="width: 2.4rem"
            round
            color="#eee"
            type="primary"
          >
            <template #default>
              <span class="color-theme">私信</span>
            </template>
          </van-button>
        </div>

        <!-- 底部动态 赞过选项数据 -->
        <div class="bg-fff m-05 border-radius--12">
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

          <account-card
            v-show="isActiveTab == 0"
            v-for="e in dynamicListData"
            :key="e.id"
            :initData="e"
          ></account-card>

          <div v-show="isActiveTab == 1">
            <span class="size_14">设计图暂时没有，稍后参考其他app添加上</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountCard from "../../components/user-time-card.vue";
import { nanoid } from "nanoid";
export default {
  components: {
    AccountCard,
  },
  data() {
    return {
      dataList: [],
      userInfo: {},
      userImageIndex: 0,
      showPopover: false,
      isLove: false,
      popoverData: [
        {
          text: "我不知道",
          disabled: false,
        },
        {
          text: "暂时功能",
          disabled: false,
        },
        {
          text: "以后再修改",
          disabled: false,
        },
      ],

      isActiveTab: 0,
      tabData: [
        {
          id: 0,
          name: "动态",
          isActive: true,
        },
        {
          id: 1,
          name: "资料",
          isActive: false,
        },
      ],
      dynamicListData: [
        {
          id: nanoid(5),
          time: {
            month: 3,
            day: 28,
          },
          tags: ["日常", "热恋"],
          desc: "今日审美打卡，暖色系",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/1.jpeg",
          ],
        },
        {
          id: nanoid(5),
          time: {
            month: 3,
            day: 24,
          },
          tags: ["可爱", "优秀"],
          desc: "每天最开心的事就是码代码",
          images: [
            "http://www.oss.qcwy.org.cn/cq/image/home/richang.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/2.jpeg",
            "http://www.oss.qcwy.org.cn/cq/image/home/3.jpeg",
          ],
        },
      ],
    };
  },
  created() {
    this.userInfo = this.$route.params.userInfo;
  },
  methods: {
    onSelectUserImageItem(index) {
      this.userImageIndex = index;
    },
    onClickRight() {
      this.$toast("更多信息");
      this.showPopover = true;
    },
    onSelect(e) {
      this.$toast(e);
    },
    onSelectTab(e) {
      console.log(e);
      this.tabData.map((el) => (el.isActive = false));
      e.isActive = !e.isActive;
      this.isActiveTab = e.id;
    },
    onSiXin() {
      this.$router.push({
        name: "ChatPublic",
        params: { userData: this.userInfo },
      });
    },
  },
};
</script>

<style></style>
